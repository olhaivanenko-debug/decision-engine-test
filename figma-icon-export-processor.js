// ============================================================
// Decision Engine — Icon Export Processor
// Figma Console Script  v1
//
// PURPOSE:
//   Prepares icon vectors for clean SVG / code export by:
//     1. Converting stroke-painted vectors to filled outlines
//     2. Flattening nested pure-vector groups into single paths
//     3. Preserving visual appearance, layer names, and Auto Layout
//
// HOW TO RUN:
//   1. Select one or more frames / components containing icons
//   2. Open Figma console: Plugins → Development → Open console
//      (or Cmd/Ctrl+/ → "Plugin console")
//   3. Paste this entire file and press Enter / Run
//
// SAFETY:
//   - Set DRY_RUN = true to preview changes without touching anything
//   - Skips: Text layers, locked nodes, hidden nodes, Instances
//   - Respects Auto Layout — never flattens into an AL container
//   - Snapshots child lists before iterating (mutation-safe)
//   - All original layer names are preserved on output nodes
//   - MAX_DEPTH prevents stack overflow on deeply nested files
//
// RELATED FILES:
//   figma-design-system.js   — Design system page builder
//   components/ui/           — React component source
// ============================================================

(async () => {

// ─── 0. CONFIG ────────────────────────────────────────────────────────────────

// DRY_RUN:       true  → log what would happen, make zero changes.
// FLATTEN_GROUPS: true  → collapse groups of pure vectors into one path after
//                         stroke outlining. Set false to skip this pass.
// MAX_DEPTH:     recursion guard (increase if your icon nesting is very deep).

const DRY_RUN        = false;
const FLATTEN_GROUPS = true;
const MAX_DEPTH      = 20;

// ─── 1. STATE ─────────────────────────────────────────────────────────────────

const stats = {
  scanned:          0,
  strokesOutlined:  0,
  flattened:        0,
  skippedText:      0,
  skippedLocked:    0,
  skippedInstance:  0,
  errors:           0,
};

/** @type {{ node: string, reason: string }[]} */
const errorLog = [];

// ─── 2. TYPE GUARDS & PREDICATES ──────────────────────────────────────────────

// Node types treated as vector leaves (no children, hold geometry).
const VECTOR_TYPES = new Set([
  'VECTOR', 'STAR', 'POLYGON', 'ELLIPSE',
  'RECTANGLE', 'LINE', 'REGULAR_POLYGON', 'BOOLEAN_OPERATION',
]);

// Node types that may own children we need to recurse into.
const CONTAINER_TYPES = new Set([
  'FRAME', 'GROUP', 'COMPONENT', 'COMPONENT_SET',
]);

function isVectorLike(n)   { return VECTOR_TYPES.has(n.type); }
function isContainer(n)    { return CONTAINER_TYPES.has(n.type); }
function isText(n)         { return n.type === 'TEXT'; }
function isInstance(n)     { return n.type === 'INSTANCE'; }
function isComponent(n)    { return n.type === 'COMPONENT' || n.type === 'COMPONENT_SET'; }
function hasAutoLayout(n)  { return 'layoutMode' in n && n.layoutMode !== 'NONE'; }
function isLockedOrHidden(n) { return n.locked || !n.visible; }

function hasStrokes(n) {
  return 'strokes' in n
    && Array.isArray(n.strokes)
    && n.strokes.length > 0;
}

function hasFills(n) {
  return 'fills' in n
    && Array.isArray(n.fills)
    && n.fills.length > 0;
}

function canOutlineStrokes(n) {
  return isVectorLike(n) && hasStrokes(n) && typeof n.outlineStroke === 'function';
}

// ─── 3. STROKE → OUTLINE CONVERSION ──────────────────────────────────────────
//
// Figma's outlineStroke() converts a vector's stroke paint into a filled
// VectorNode placed in the same parent.  We then either:
//   a) flatten [strokeOutline + fillNode]  when the original also had fills
//   b) simply use strokeOutline alone       when the original was stroke-only
//
// In both cases the original layer name is restored on the output node.

async function outlineStrokes(node) {
  if (!canOutlineStrokes(node)) return null;

  const name   = node.name;
  const parent = node.parent;
  if (!parent) return null;

  // Index of this node in its parent's child list (for re-insertion)
  const idx = Array.from(parent.children).indexOf(node);

  // ── DRY RUN path ────────────────────────────────────────────────────────
  if (DRY_RUN) {
    const mode = hasFills(node) ? 'fill+stroke → flatten' : 'stroke-only → outline';
    console.log(`  [DRY RUN] stroke→outline  "${name}"  (${node.type}, ${mode})`);
    stats.strokesOutlined++;
    return null;
  }

  // ── Live path ────────────────────────────────────────────────────────────
  try {
    const strokeVec = node.outlineStroke();
    if (!strokeVec) return null; // nothing to do (no stroke geometry)

    // Ensure strokeVec lands in the right parent at the adjacent slot
    if (strokeVec.parent !== parent) {
      parent.insertChild(Math.min(idx + 1, parent.children.length), strokeVec);
    }

    let result;

    if (hasFills(node)) {
      // Strip strokes from original so flatten merges fill + outline cleanly
      node.strokes = [];
      result = figma.flatten([node, strokeVec], parent);
    } else {
      // Stroke-only node: the outline IS the full shape; discard original
      node.remove();
      // Re-seat strokeVec at the original position (it may have shifted)
      if (strokeVec.parent !== parent) {
        parent.insertChild(Math.min(idx, parent.children.length), strokeVec);
      }
      result = strokeVec;
    }

    result.name = name;
    stats.strokesOutlined++;
    return result;

  } catch (err) {
    errorLog.push({ node: name, reason: `stroke outline — ${err.message}` });
    stats.errors++;
    return null;
  }
}

// ─── 4. VECTOR-GROUP FLATTEN ──────────────────────────────────────────────────
//
// After stroke outlining, a frame/group may contain only pure VectorNodes.
// Flattening collapses them into one path for cleaner SVG export.
//
// Auto Layout safety rules:
//   • If the NODE itself has Auto Layout → skip (it's a layout container, not an icon).
//   • If the PARENT has Auto Layout      → flatten children WITHIN the node
//     so the node stays as a fixed Auto-Layout child (no size/position disruption).
//   • Otherwise                          → flatten into the parent and remove
//     the now-empty wrapper frame/group.
//
// Components are always kept alive (never removed) regardless of parent layout.

function flattenVectorGroup(node) {
  if (!FLATTEN_GROUPS) return null;
  if (!isContainer(node) || isInstance(node)) return null;
  if (hasAutoLayout(node)) return null; // node is itself a layout container

  const kids = node.children;
  if (!kids || kids.length < 2) return null;

  // Only flatten when every direct child is a simple vector leaf
  const allVec = Array.from(kids).every(c => isVectorLike(c));
  if (!allVec) return null;

  const name   = node.name;
  const parent = node.parent;
  if (!parent) return null;

  // Where does the flattened result land?
  const parentIsAL    = hasAutoLayout(parent);
  const nodeIsComp    = isComponent(node);
  const keepWrapper   = nodeIsComp || parentIsAL; // preserve AL child slot / component
  const flatTarget    = keepWrapper ? node : parent;

  // ── DRY RUN path ────────────────────────────────────────────────────────
  if (DRY_RUN) {
    const note = keepWrapper ? '(in-place, keep wrapper)' : '(replace wrapper)';
    console.log(`  [DRY RUN] flatten  "${name}"  ${note}  ·  ${kids.length} vectors`);
    stats.flattened++;
    return null;
  }

  // ── Live path ────────────────────────────────────────────────────────────
  try {
    const result = figma.flatten(Array.from(kids), flatTarget);
    result.name = name;

    // Remove the now-empty wrapper only when it's safe to do so
    if (!keepWrapper && node.parent) {
      node.remove();
    }

    stats.flattened++;
    return result;

  } catch (err) {
    errorLog.push({ node: name, reason: `flatten — ${err.message}` });
    stats.errors++;
    return null;
  }
}

// ─── 5. RECURSIVE SCAN ────────────────────────────────────────────────────────
//
// Walk the tree bottom-up:
//   1. Skip guard conditions immediately.
//   2. Vector leaf  → outline strokes (if any).
//   3. Container    → recurse into children, then attempt flatten post-pass.
//
// Using a snapshot of node.children before the loop guards against mutations
// mid-iteration (outlineStrokes / flatten can remove/add sibling nodes).

async function processNode(node, depth) {
  if (depth > MAX_DEPTH) return;
  stats.scanned++;

  // ── Guard rails ─────────────────────────────────────────────────────────
  if (isLockedOrHidden(node)) { stats.skippedLocked++;   return; }
  if (isText(node))           { stats.skippedText++;     return; }
  if (isInstance(node))       { stats.skippedInstance++; return; } // can't edit instances

  // ── Vector leaf ─────────────────────────────────────────────────────────
  if (isVectorLike(node)) {
    if (hasStrokes(node)) {
      await outlineStrokes(node);
      // node reference may be stale after this; fine for leaves (no children)
    }
    return;
  }

  // ── Container: recurse first (bottom-up), then flatten post-pass ─────────
  if ('children' in node) {
    // Snapshot before mutations
    const snapshot = Array.from(node.children);

    for (const child of snapshot) {
      // Re-check parent: a sibling operation may have moved/removed this child
      if (child.parent === node) {
        await processNode(child, depth + 1);
      }
    }

    // Post-pass: try to collapse if children are now all pure vectors
    if (isContainer(node) && node.parent) {
      flattenVectorGroup(node);
    }
  }
}

// ─── 6. MAIN ──────────────────────────────────────────────────────────────────

const selection = figma.currentPage.selection;

if (selection.length === 0) {
  console.warn(
    '⚠  Nothing selected.\n' +
    '   Select one or more frames or components containing icons, then re-run.'
  );
  return;
}

const modeTag = DRY_RUN ? '  [DRY RUN — zero changes will be made]' : '';
console.log(`\n🔍  Icon Export Processor — scanning ${selection.length} root node(s)${modeTag}\n`);

for (let i = 0; i < selection.length; i++) {
  const root = selection[i];
  console.log(`  (${i + 1}/${selection.length})  "${root.name}"  [${root.type}]`);
  await processNode(root, 0);
}

// ─── 7. SUMMARY ───────────────────────────────────────────────────────────────

const HR = '─'.repeat(56);

console.log(`\n${HR}`);
console.log('  Icon Export Processor  ·  Results');
console.log(HR);
console.log(`  Nodes scanned          ${String(stats.scanned).padStart(5)}`);
console.log(`  Strokes → outlines     ${String(stats.strokesOutlined).padStart(5)}`);
console.log(`  Groups flattened       ${String(stats.flattened).padStart(5)}`);
console.log(`  Skipped  text          ${String(stats.skippedText).padStart(5)}`);
console.log(`  Skipped  locked/hidden ${String(stats.skippedLocked).padStart(5)}`);
console.log(`  Skipped  instances     ${String(stats.skippedInstance).padStart(5)}`);
console.log(`  Errors                 ${String(stats.errors).padStart(5)}`);

if (errorLog.length > 0) {
  console.log('');
  console.log('  Error details:');
  for (const e of errorLog) {
    console.log(`    ✗  "${e.node}"  —  ${e.reason}`);
  }
}

console.log(HR);

const status = stats.errors === 0
  ? '✅  All icons processed — export-ready.'
  : `⚠   Finished with ${stats.errors} error(s) — see details above.`;

const changeCount = stats.strokesOutlined + stats.flattened;
const changeNote  = DRY_RUN
  ? '   (DRY RUN — re-run with DRY_RUN = false to apply changes)'
  : changeCount === 0
    ? '   No changes needed — icons were already export-ready.'
    : `   ${changeCount} change(s) applied.`;

console.log(`\n  ${status}`);
console.log(changeNote);
console.log('');

})();
