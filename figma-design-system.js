// ============================================================
// Decision Engine — Design System
// Figma Plugin Script  v3
//
// REACT COMPONENT MAP:
//   ui/Logo          → components/ui/Logo.tsx
//   ui/Badge         → components/ui/Badge.tsx
//   ui/Button        → components/ui/Button.tsx
//   ui/Card          → components/ui/Card.tsx
//   ui/SectionHeader → components/ui/SectionHeader.tsx
//
// Design token source of truth: lib/tokens.ts
//
// HOW TO RUN:
//   In Figma: Plugins → Development → Open console (or
//   use the Quick Actions bar: Cmd/Ctrl+/ → "Plugin console")
//   Paste this entire file and press Enter/Run.
//
//   Safe to run multiple times — clears and rebuilds the page.
// ============================================================

(async () => {

// ─── 0. FONT LOADING & FALLBACK ──────────────────────────────────────────────
//
// Figma's Inter uses "Semi Bold" (space), not "SemiBold".
// We discover what's actually available before using anything.

const FAMILY = 'Inter';

// Preferred logical weight → ordered list of Figma style names to try
const WEIGHT_MAP = {
  regular:   ['Regular'],
  medium:    ['Medium', 'Regular'],
  semibold:  ['Semi Bold', 'SemiBold', 'Medium', 'Regular'],
};

// Will be populated after discovery
const loadedStyles = new Set();
const fontFor = (weight) => {
  for (const style of (WEIGHT_MAP[weight] || ['Regular'])) {
    if (loadedStyles.has(style)) return { family: FAMILY, style };
  }
  return { family: FAMILY, style: 'Regular' }; // last-resort
};

async function loadAllFonts() {
  let allFonts;
  try {
    allFonts = await figma.listAvailableFontsAsync();
  } catch {
    allFonts = [];
  }

  const interStyles = allFonts
    .filter(f => f.fontName.family === FAMILY)
    .map(f => f.fontName.style);

  const candidates = interStyles.length > 0
    ? interStyles
    : ['Thin','Extra Light','Light','Regular','Medium','Semi Bold','SemiBold','Bold','Extra Bold','Black'];

  for (const style of candidates) {
    try {
      await figma.loadFontAsync({ family: FAMILY, style });
      loadedStyles.add(style);
    } catch {
      // not available — skip
    }
  }

  if (loadedStyles.size === 0) {
    throw new Error(`Could not load any style of "${FAMILY}". Check that Inter is available in this Figma file.`);
  }
  console.log(`Loaded ${loadedStyles.size} Inter styles:`, [...loadedStyles].join(', '));
}

// ─── 1. HELPERS ───────────────────────────────────────────────────────────────

function rgb(hex) {
  const h = hex.replace('#', '');
  return {
    r: parseInt(h.slice(0, 2), 16) / 255,
    g: parseInt(h.slice(2, 4), 16) / 255,
    b: parseInt(h.slice(4, 6), 16) / 255,
  };
}

function solid(hex, opacity = 1) {
  return [{ type: 'SOLID', color: rgb(hex), opacity }];
}

function gradientLinear(angleDeg, stops) {
  // stops: [[position 0-1, '#hexcolor'], ...]
  // Figma gradient transform is a 2×3 affine matrix
  const rad = (angleDeg * Math.PI) / 180;
  const cos = Math.cos(rad);
  const sin = Math.sin(rad);
  return [{
    type: 'GRADIENT_LINEAR',
    gradientTransform: [[cos, sin, 0], [-sin, cos, 0]],
    gradientStops: stops.map(([pos, hex]) => ({
      position: pos,
      color: { ...rgb(hex), a: 1 },
    })),
  }];
}

function autoFrame(name, direction = 'VERTICAL', spacing = 0) {
  const f = figma.createFrame();
  f.name = name;
  f.layoutMode = direction;
  f.primaryAxisSizingMode = 'AUTO';
  f.counterAxisSizingMode = 'AUTO';
  f.itemSpacing = spacing;
  f.fills = [];
  return f;
}

function txt(characters, size, weight, colorHex, opts = {}) {
  const t = figma.createText();
  t.fontName = fontFor(weight);
  t.characters = characters;
  t.fontSize = size;
  t.fills = solid(colorHex);
  if (opts.lineHeight)    t.lineHeight    = { value: opts.lineHeight,    unit: 'PIXELS' };
  if (opts.letterSpacing) t.letterSpacing = { value: opts.letterSpacing, unit: 'PIXELS' };
  if (opts.textCase)      t.textCase      = opts.textCase;
  if (opts.textAlign)     t.textAlignHorizontal = opts.textAlign;
  return t;
}

function sectionTitle(text) {
  return txt(text, 11, 'semibold', '#90A1B9', {
    letterSpacing: 1.5,
    textCase: 'UPPER',
  });
}

function hairline(width = 900) {
  const r = figma.createRectangle();
  r.name = '_Divider';
  r.resize(width, 1);
  r.fills = solid('#1E2740');
  return r;
}

// ─── 2. PAGE SETUP ────────────────────────────────────────────────────────────

async function setupPage() {
  let page = figma.root.children.find(p => p.name === '🎨 Design System');

  if (page) {
    // Clear existing generated content so we can rebuild cleanly
    const toRemove = [...page.children];
    for (const node of toRemove) {
      try { node.remove(); } catch {}
    }
    console.log('Cleared existing Design System page — rebuilding…');
  } else {
    page = figma.createPage();
    page.name = '🎨 Design System';
    figma.root.insertChild(0, page);
    console.log('Created new Design System page');
  }

  await figma.setCurrentPageAsync(page);
  return page;
}

// ─── 3. DESIGN TOKENS ─────────────────────────────────────────────────────────
// Source of truth: lib/tokens.ts
// Note: Border/Dark is shown as opaque #1E2740 here;
//       the actual token is rgba(255,255,255,0.08) (alpha-based, dark-bg dependent).

const COLORS = {
  'Brand/Primary':        '#0066FF',
  'Brand/Primary Dark':   '#0052CC',
  'Brand/Cyan':           '#00D4FF',
  'Brand/Cyan Light':     '#3D8AFF',
  'Brand/Gradient Start': '#2B7FFF',
  'Brand/Gradient End':   '#00B8DB',
  'Background/Deep':      '#0A0F1E',
  'Background/Navy':      '#0A0E27',
  'Background/Surface':   '#0F1629',
  'Background/Card':      '#131D35',
  'Text/Primary':         '#FFFFFF',
  'Text/Secondary':       '#90A1B9',
  'Text/Slate':           '#4A5565',
  'Text/Dark':            '#111827',
  'Status/Success':       '#00C950',
  'Status/Warning':       '#F0B100',
  'Status/Error':         '#FB2C36',
  'Status/Orange':        '#FF6900',
  'Border/Dark':          '#1E2740',
  'Border/Light':         '#E5E7EB',
};

const TYPE_SCALE = [
  { token: 'Display/60',  size: 60, weight: 'medium',   lh: 66,  desc: 'Hero headings'         },
  { token: 'Heading/48',  size: 48, weight: 'medium',   lh: 56,  desc: 'Section headings'      },
  { token: 'Heading/36',  size: 36, weight: 'medium',   lh: 44,  desc: 'Sub-section headings'  },
  { token: 'Heading/24',  size: 24, weight: 'medium',   lh: 32,  desc: 'Card headings'         },
  { token: 'Body/20',     size: 20, weight: 'regular',  lh: 32,  desc: 'Large body text'       },
  { token: 'Body/18',     size: 18, weight: 'medium',   lh: 28,  desc: 'Feature card title'    },
  { token: 'Body/16',     size: 16, weight: 'regular',  lh: 26,  desc: 'Default body'          },
  { token: 'Body/14',     size: 14, weight: 'regular',  lh: 22,  desc: 'Label / badge / small' },
  { token: 'Caption/12',  size: 12, weight: 'regular',  lh: 18,  desc: 'Caption / metadata'    },
];

const SPACING = [4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96];

// ─── 4. SECTION BUILDERS ──────────────────────────────────────────────────────

function buildColorSection(page, x, y) {
  const section = autoFrame('Colors', 'VERTICAL', 32);
  section.x = x;
  section.y = y;
  section.appendChild(sectionTitle('Color Tokens · lib/tokens.ts'));

  const groups = {};
  for (const [name, hex] of Object.entries(COLORS)) {
    const [group] = name.split('/');
    (groups[group] = groups[group] || []).push({ name, hex });
  }

  for (const [group, tokens] of Object.entries(groups)) {
    const groupBlock = autoFrame(`Group/${group}`, 'VERTICAL', 12);
    groupBlock.appendChild(txt(group, 13, 'semibold', '#FFFFFF'));

    const swatchRow = autoFrame(`Swatches/${group}`, 'HORIZONTAL', 12);
    swatchRow.counterAxisAlignItems = 'MIN';

    for (const { name, hex } of tokens) {
      const col = autoFrame(`Token/${name}`, 'VERTICAL', 6);

      const chip = figma.createRectangle();
      chip.name = 'Chip';
      chip.resize(72, 48);
      chip.cornerRadius = 8;
      chip.fills = solid(hex);
      chip.strokes = solid('#1E2740');
      chip.strokeWeight = 1;
      col.appendChild(chip);

      col.appendChild(txt(name.split('/')[1], 11, 'regular', '#90A1B9'));
      col.appendChild(txt(hex, 11, 'medium',  '#FFFFFF'));
      swatchRow.appendChild(col);
    }

    groupBlock.appendChild(swatchRow);
    section.appendChild(groupBlock);
  }

  page.appendChild(section);
  return section;
}

function buildTypeSection(page, x, y) {
  const section = autoFrame('Typography', 'VERTICAL', 0);
  section.x = x;
  section.y = y;
  section.appendChild(sectionTitle('Typography Scale · Inter'));

  for (let i = 0; i < TYPE_SCALE.length; i++) {
    const step = TYPE_SCALE[i];

    const row = autoFrame(`Type/${step.token}`, 'HORIZONTAL', 32);
    row.counterAxisAlignItems = 'CENTER';
    row.paddingTop = 16;
    row.paddingBottom = 16;

    const meta = figma.createFrame();
    meta.name = 'Meta';
    meta.layoutMode = 'VERTICAL';
    meta.primaryAxisSizingMode = 'AUTO';
    meta.counterAxisSizingMode = 'FIXED';
    meta.resize(200, 10);
    meta.itemSpacing = 3;
    meta.fills = [];

    meta.appendChild(txt(step.token, 11, 'medium',  '#0066FF'));
    meta.appendChild(txt(step.desc,  11, 'regular', '#90A1B9'));
    meta.appendChild(
      txt(`${step.size}/${step.lh}px · ${fontFor(step.weight).style}`, 11, 'regular', '#4A5565')
    );

    const sample = txt('Decision Engine', step.size, step.weight, '#FFFFFF', {
      lineHeight: step.lh,
    });
    sample.name = 'Sample';

    row.appendChild(meta);
    row.appendChild(sample);
    section.appendChild(row);

    if (i < TYPE_SCALE.length - 1) {
      section.appendChild(hairline(960));
    }
  }

  page.appendChild(section);
  return section;
}

function buildSpacingSection(page, x, y) {
  const section = autoFrame('Spacing', 'VERTICAL', 20);
  section.x = x;
  section.y = y;
  section.appendChild(sectionTitle('Spacing Scale · 4px base grid'));

  const row = autoFrame('Tokens', 'HORIZONTAL', 20);
  row.counterAxisAlignItems = 'BASELINE';

  for (const val of SPACING) {
    const col = autoFrame(`Spacing/${val}`, 'VERTICAL', 6);
    col.counterAxisAlignItems = 'CENTER';

    const bar = figma.createRectangle();
    bar.name = 'Bar';
    bar.resize(Math.max(val, 12), val);
    bar.cornerRadius = Math.min(4, val / 4);
    bar.fills = solid('#0066FF', 0.4);
    bar.strokes = solid('#0066FF');
    bar.strokeWeight = 1;

    col.appendChild(bar);
    col.appendChild(txt(`${val}`, 11, 'medium',  '#FFFFFF'));
    col.appendChild(txt('px',     11, 'regular', '#90A1B9'));
    row.appendChild(col);
  }

  section.appendChild(row);
  page.appendChild(section);
  return section;
}

// ─── ui/Logo ──────────────────────────────────────────────────────────────────
// React: components/ui/Logo.tsx  (Figma source: node 1:548)
// Props: size (default 32), className
// Usage: <Logo size={32} className="flex-shrink-0" />
//
// SVG notes:
//   - Two layered diagonal gradients (#0066FF→#00D4FF and #155DFC→#2B7FFF)
//   - Gradient IDs are instance-scoped (de-logo-${size}-a/b) to prevent
//     SVG <defs> collisions when multiple Logo instances render on the same page
//   - SVG has aria-hidden="true" — wrap with aria-label on the parent <a>
// ─────────────────────────────────────────────────────────────────────────────

function buildLogoSection(page, x, y) {
  const section = autoFrame('ui/Logo', 'VERTICAL', 28);
  section.x = x;
  section.y = y;
  section.appendChild(sectionTitle('ui/Logo — Brand Mark · components/ui/Logo.tsx'));

  const note = txt(
    'Source: Figma node 1:548 · Dual diagonal gradients (#0066FF→#00D4FF). ' +
    'Gradient IDs are instance-scoped to prevent SVG <defs> collisions.',
    12, 'regular', '#4A5565'
  );
  section.appendChild(note);

  const sizesRow = autoFrame('Logo/Sizes', 'HORIZONTAL', 40);
  sizesRow.counterAxisAlignItems = 'FLEX_END';

  // SVG import with solid primary blue background (gradient applied below)
  // The icon path is the exact path from components/ui/Logo.tsx
  const LOGO_SVG_ICON_PATH = 'M13.5 7.667C14.881 7.667 16 8.786 16 10.167V13.5C16 14.881 14.881 16 13.5 16H12.666V18.5C12.666 18.721 12.754 18.934 12.91 19.09C13.066 19.246 13.279 19.334 13.5 19.334H16V18.5C16 17.12 17.12 16 18.5 16H21.833C23.214 16 24.333 17.119 24.333 18.5V21.833C24.333 23.214 23.214 24.333 21.833 24.333H18.5C17.119 24.333 16 23.214 16 21.833V21H13.5C12.837 21 12.2 20.737 11.731 20.269C11.263 19.8 11 19.163 11 18.5V16H10.167C8.786 16 7.667 14.881 7.667 13.5V10.167C7.667 8.786 8.786 7.667 10.167 7.667H13.5ZM18.5 17.666C18.04 17.666 17.666 18.04 17.666 18.5V21.833C17.666 22.293 18.04 22.666 18.5 22.666H21.833C22.293 22.666 22.666 22.293 22.666 21.833V18.5C22.666 18.04 22.293 17.666 21.833 17.666H18.5ZM10.167 9.333C9.707 9.333 9.333 9.707 9.333 10.167V13.5C9.333 13.96 9.707 14.333 10.167 14.333H13.5C13.96 14.333 14.333 13.96 14.333 13.5V10.167C14.333 9.707 13.96 9.333 13.5 9.333H10.167Z';
  const LOGO_BG_PATH = 'M0 10C0 4.47715 4.47715 0 10 0H22C27.5228 0 32 4.47715 32 10V22C32 27.5228 27.5228 32 22 32H10C4.47715 32 0 27.5228 0 22V10Z';

  for (const logoSize of [24, 32, 48, 64]) {
    const col = autoFrame(`Logo/Size${logoSize}`, 'VERTICAL', 8);
    col.counterAxisAlignItems = 'CENTER';

    // Import SVG with solid background (gradient applied afterward)
    const svgStr = [
      '<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">',
      '<path d="' + LOGO_BG_PATH + '" fill="#0066FF"/>',
      '<path d="' + LOGO_SVG_ICON_PATH + '" fill="white"/>',
      '</svg>',
    ].join('');

    let logoNode;
    try {
      logoNode = figma.createNodeFromSvg(svgStr);
      logoNode.name = `Logo/${logoSize}px`;
      logoNode.resize(logoSize, logoSize);

      // Upgrade background vector fill to gradient
      if (logoNode.children && logoNode.children.length > 0) {
        const bgVec = logoNode.children[0];
        if (bgVec && 'fills' in bgVec) {
          bgVec.fills = gradientLinear(135, [[0, '#0066FF'], [1, '#00D4FF']]);
        }
      }
    } catch (err) {
      // Fallback: manual rectangle approximation if SVG import fails
      console.log('SVG import failed, using rectangle fallback:', err.message);
      logoNode = figma.createFrame();
      logoNode.name = `Logo/${logoSize}px`;
      logoNode.resize(logoSize, logoSize);
      logoNode.cornerRadius = Math.round(logoSize * (10 / 32));
      logoNode.fills = gradientLinear(135, [[0, '#0066FF'], [1, '#00D4FF']]);
    }

    const comp = figma.createComponentFromNode(logoNode);
    comp.name = `Logo/${logoSize}px`;
    col.appendChild(comp);
    col.appendChild(txt(`${logoSize}px`, 11, 'medium', '#FFFFFF'));
    sizesRow.appendChild(col);
  }

  section.appendChild(sizesRow);

  // Lockup example: Logo + Wordmark (as used in Navigation and Footer)
  const lockupLabel = txt('Lockup: Logo + Wordmark (used in Navigation, Footer)', 12, 'regular', '#4A5565');
  section.appendChild(lockupLabel);

  const lockup = figma.createFrame();
  lockup.name = 'Logo/Lockup';
  lockup.layoutMode = 'HORIZONTAL';
  lockup.primaryAxisSizingMode = 'AUTO';
  lockup.counterAxisSizingMode = 'AUTO';
  lockup.itemSpacing = 10;
  lockup.counterAxisAlignItems = 'CENTER';
  lockup.fills = [];

  const lockupSvg = [
    '<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">',
    '<path d="' + LOGO_BG_PATH + '" fill="#0066FF"/>',
    '<path d="' + LOGO_SVG_ICON_PATH + '" fill="white"/>',
    '</svg>',
  ].join('');

  try {
    const lockupIcon = figma.createNodeFromSvg(lockupSvg);
    lockupIcon.name = 'Logo/Icon';
    lockupIcon.resize(32, 32);
    if (lockupIcon.children && lockupIcon.children.length > 0) {
      const bg = lockupIcon.children[0];
      if (bg && 'fills' in bg) {
        bg.fills = gradientLinear(135, [[0, '#0066FF'], [1, '#00D4FF']]);
      }
    }
    lockup.appendChild(lockupIcon);
  } catch {
    const lockupRect = figma.createRectangle();
    lockupRect.name = 'Logo/Icon';
    lockupRect.resize(32, 32);
    lockupRect.cornerRadius = 10;
    lockupRect.fills = gradientLinear(135, [[0, '#0066FF'], [1, '#00D4FF']]);
    lockup.appendChild(lockupRect);
  }

  const wordmark = txt('Decision Engine', 16, 'semibold', '#FFFFFF');
  wordmark.name = 'Wordmark';
  lockup.appendChild(wordmark);

  section.appendChild(lockup);
  page.appendChild(section);
  return section;
}

// ─── ui/Button ────────────────────────────────────────────────────────────────
// React: components/ui/Button.tsx
// Props: variant (primary|gradient|ghost|outline), size (sm|md|lg), href?, className?
// Renders as <a> when href is provided, otherwise <button>
//
// Padding reference (matches Tailwind classes):
//   SM: px-3  py-1.5  → 12/6px   · font-size 14px · radius 8px
//   MD: px-6  py-3    → 24/12px  · font-size 16px · radius 10px
//   LG: px-8  py-4    → 32/16px  · font-size 16px · radius 10px
// ─────────────────────────────────────────────────────────────────────────────

function buildButtonSection(page, x, y) {
  const section = autoFrame('ui/Button', 'VERTICAL', 28);
  section.x = x;
  section.y = y;
  section.appendChild(sectionTitle('ui/Button — Variants & Sizes · components/ui/Button.tsx'));

  const variants = [
    { name: 'primary',  bg: solid('#0066FF'),                                          textColor: '#FFFFFF', border: null                  },
    { name: 'gradient', bg: gradientLinear(90, [[0, '#2B7FFF'], [1, '#00B8DB']]),
                                                                                        textColor: '#FFFFFF', border: null                  },
    { name: 'ghost',    bg: solid('#FFFFFF', 0.05),                                    textColor: '#FFFFFF', border: solid('#FFFFFF', 0.2) },
    { name: 'outline',  bg: solid('#FFFFFF', 0),                                       textColor: '#374151', border: solid('#E5E7EB')      },
  ];

  // Exact Tailwind values: sm=px-3/py-1.5, md=px-6/py-3, lg=px-8/py-4
  const sizes = [
    { name: 'sm', pH: 12, pV: 6,  fs: 14, radius: 8  },
    { name: 'md', pH: 24, pV: 12, fs: 16, radius: 10 },
    { name: 'lg', pH: 32, pV: 16, fs: 16, radius: 10 },
  ];

  const variantRow = autoFrame('Variants', 'HORIZONTAL', 32);

  for (const v of variants) {
    const col = autoFrame(`Variant/${v.name}`, 'VERTICAL', 16);
    col.counterAxisAlignItems = 'CENTER';
    col.appendChild(txt(v.name, 12, 'semibold', '#90A1B9'));

    for (const s of sizes) {
      const btnFrame = autoFrame(`Button/${v.name}/${s.name}`, 'HORIZONTAL', 8);
      btnFrame.paddingLeft   = s.pH;
      btnFrame.paddingRight  = s.pH;
      btnFrame.paddingTop    = s.pV;
      btnFrame.paddingBottom = s.pV;
      btnFrame.cornerRadius  = s.radius;
      btnFrame.primaryAxisAlignItems = 'CENTER';
      btnFrame.counterAxisAlignItems = 'CENTER';
      btnFrame.fills = v.bg;

      if (v.border) {
        btnFrame.strokes = v.border;
        btnFrame.strokeWeight = 1;
        btnFrame.strokeAlign = 'INSIDE';
      }

      const label = txt(
        s.name === 'sm' ? 'Label' : 'Get Started Free',
        s.fs, 'medium', v.textColor
      );
      btnFrame.appendChild(label);

      const comp = figma.createComponentFromNode(btnFrame);
      comp.name = `Button/${v.name}/${s.name}`;
      col.appendChild(comp);
    }

    variantRow.appendChild(col);
  }

  section.appendChild(variantRow);
  page.appendChild(section);
  return section;
}

// ─── ui/Badge ─────────────────────────────────────────────────────────────────
// React: components/ui/Badge.tsx
// Props: variant (primary|success|muted|gradient), dot?, className?
// Base: px-3 py-1.5 rounded-full text-[14px] font-normal inline-flex gap-2
// dot: w-1.5 h-1.5 (6×6px) rounded-full, color = currentColor
// ─────────────────────────────────────────────────────────────────────────────

function buildBadgeSection(page, x, y) {
  const section = autoFrame('ui/Badge', 'VERTICAL', 28);
  section.x = x;
  section.y = y;
  section.appendChild(sectionTitle('ui/Badge — Variants · components/ui/Badge.tsx'));

  // Maps to Badge.tsx variantStyles
  const variants = [
    {
      name:      'primary',
      bg:        solid('#0066FF', 0.2),   // rgba(0,102,255,0.2)
      textColor: '#00D4FF',               // text-[#00d4ff]
      dotColor:  '#00D4FF',
    },
    {
      name:      'success',
      bg:        solid('#00C950', 0.15),  // rgba(0,201,80,0.15)
      textColor: '#00C950',
      dotColor:  '#00C950',
    },
    {
      name:      'muted',
      bg:        solid('#FFFFFF', 0.08),  // rgba(255,255,255,0.08)
      textColor: '#90A1B9',
      dotColor:  '#90A1B9',
    },
    {
      name:      'gradient',
      bg:        gradientLinear(135, [[0, '#0066FF'], [1, '#00D4FF']]),
      textColor: '#FFFFFF',
      dotColor:  '#FFFFFF',
    },
  ];

  // Base badge geometry: px-3=12px, py-1.5=6px, rounded-full
  const pH = 12;
  const pV = 6;
  const RADIUS = 9999;

  // Row 1: without dot
  const noDotRow = autoFrame('Badge/NoDot', 'HORIZONTAL', 16);
  noDotRow.counterAxisAlignItems = 'CENTER';

  // Row 2: with dot
  const dotRow = autoFrame('Badge/WithDot', 'HORIZONTAL', 16);
  dotRow.counterAxisAlignItems = 'CENTER';

  for (const v of variants) {
    // --- Without dot ---
    const badge = autoFrame(`Badge/${v.name}`, 'HORIZONTAL', 8);
    badge.paddingLeft   = pH;
    badge.paddingRight  = pH;
    badge.paddingTop    = pV;
    badge.paddingBottom = pV;
    badge.cornerRadius  = RADIUS;
    badge.primaryAxisAlignItems = 'CENTER';
    badge.counterAxisAlignItems = 'CENTER';
    badge.fills = v.bg;

    badge.appendChild(txt('Badge', 14, 'regular', v.textColor));

    const comp = figma.createComponentFromNode(badge);
    comp.name = `Badge/${v.name}`;
    noDotRow.appendChild(comp);

    // --- With dot ---
    const badgeDot = autoFrame(`Badge/${v.name}/dot`, 'HORIZONTAL', 8);
    badgeDot.paddingLeft   = pH;
    badgeDot.paddingRight  = pH;
    badgeDot.paddingTop    = pV;
    badgeDot.paddingBottom = pV;
    badgeDot.cornerRadius  = RADIUS;
    badgeDot.primaryAxisAlignItems = 'CENTER';
    badgeDot.counterAxisAlignItems = 'CENTER';
    badgeDot.fills = v.bg;

    const dot = figma.createEllipse();
    dot.name = 'Dot';
    dot.resize(6, 6);
    dot.fills = solid(v.dotColor);
    badgeDot.appendChild(dot);
    badgeDot.appendChild(txt('Badge', 14, 'regular', v.textColor));

    const compDot = figma.createComponentFromNode(badgeDot);
    compDot.name = `Badge/${v.name}/dot`;
    dotRow.appendChild(compDot);
  }

  const rowLabel1 = txt('Without dot', 12, 'regular', '#4A5565');
  const rowLabel2 = txt('With dot prop', 12, 'regular', '#4A5565');

  section.appendChild(rowLabel1);
  section.appendChild(noDotRow);
  section.appendChild(rowLabel2);
  section.appendChild(dotRow);
  page.appendChild(section);
  return section;
}

// ─── ui/Card ──────────────────────────────────────────────────────────────────
// React: components/ui/Card.tsx
// Props: variant (dark|light|feature), className?, style?
//
// Variants (match Card.tsx variantStyles exactly):
//   dark:    bg #0f1629, border rgba(255,255,255,0.08), rounded-2xl p-6
//   light:   bg #ffffff, border #f3f4f6, shadow-sm, rounded-2xl p-6
//   feature: bg #ffffff, border #e5e7eb, rounded-2xl p-6
// ─────────────────────────────────────────────────────────────────────────────

function buildCardSection(page, x, y) {
  const section = autoFrame('ui/Card', 'VERTICAL', 28);
  section.x = x;
  section.y = y;
  section.appendChild(sectionTitle('ui/Card — Variants · components/ui/Card.tsx'));

  const variants = [
    {
      compName:   'Card/dark',
      bg:         solid('#0F1629'),
      border:     solid('#FFFFFF', 0.08),
      titleColor: '#FFFFFF',
      bodyColor:  '#90A1B9',
      accentBg:   solid('#0066FF', 0.08),
      accentFg:   '#0066FF',
    },
    {
      compName:   'Card/light',
      bg:         solid('#FFFFFF'),
      border:     solid('#F3F4F6'),
      titleColor: '#111827',
      bodyColor:  '#4A5565',
      accentBg:   solid('#0066FF', 0.08),
      accentFg:   '#0066FF',
    },
    {
      compName:   'Card/feature',
      bg:         solid('#FFFFFF'),
      border:     solid('#E5E7EB'),
      titleColor: '#111827',
      bodyColor:  '#4A5565',
      accentBg:   solid('#0066FF', 0.08),
      accentFg:   '#0066FF',
    },
  ];

  const cardsRow = autoFrame('Cards Row', 'HORIZONTAL', 24);

  for (const v of variants) {
    const cardFrame = autoFrame(`Card/${v.compName.split('/')[1]}`, 'VERTICAL', 16);
    cardFrame.paddingLeft   = 24;  // p-6 = 24px
    cardFrame.paddingRight  = 24;
    cardFrame.paddingTop    = 24;
    cardFrame.paddingBottom = 24;
    cardFrame.cornerRadius  = 16;  // rounded-2xl = 16px
    cardFrame.fills         = v.bg;
    cardFrame.strokes       = v.border;
    cardFrame.strokeWeight  = 1;
    cardFrame.strokeAlign   = 'INSIDE';

    // Icon box (accent)
    const iconBox = figma.createFrame();
    iconBox.name = 'Icon Box';
    iconBox.layoutMode = 'HORIZONTAL';
    iconBox.primaryAxisSizingMode = 'FIXED';
    iconBox.counterAxisSizingMode = 'FIXED';
    iconBox.resize(44, 44);
    iconBox.primaryAxisAlignItems = 'CENTER';
    iconBox.counterAxisAlignItems = 'CENTER';
    iconBox.cornerRadius = 12;
    iconBox.fills = v.accentBg;

    const iconDot = figma.createEllipse();
    iconDot.name = 'Icon';
    iconDot.resize(16, 16);
    iconDot.fills = solid(v.accentFg);
    iconBox.appendChild(iconDot);
    cardFrame.appendChild(iconBox);

    cardFrame.appendChild(txt('Card Title', 18, 'medium', v.titleColor));

    const body = figma.createText();
    body.name = 'Description';
    body.fontName = fontFor('regular');
    body.characters = 'Short description explaining what this card is about.';
    body.fontSize = 16;
    body.lineHeight = { value: 26, unit: 'PIXELS' };
    body.fills = solid(v.bodyColor);
    cardFrame.appendChild(body);

    const comp = figma.createComponentFromNode(cardFrame);
    comp.name = v.compName;
    comp.resize(288, comp.height);
    cardsRow.appendChild(comp);
  }

  section.appendChild(cardsRow);
  page.appendChild(section);
  return section;
}

// ─── ui/SectionHeader ─────────────────────────────────────────────────────────
// React: components/ui/SectionHeader.tsx
// Props: label?, heading, description?, align ('left'|'center'), dark?, labelColor?, className?
// Note: Figma align='MIN' corresponds to React prop align='left'
//       Figma align='CENTER' corresponds to React prop align='center'
// ─────────────────────────────────────────────────────────────────────────────

function buildSectionHeaderSection(page, x, y) {
  const section = autoFrame('ui/SectionHeader', 'VERTICAL', 28);
  section.x = x;
  section.y = y;
  section.appendChild(sectionTitle('ui/SectionHeader — Variants · components/ui/SectionHeader.tsx'));

  const variants = [
    {
      compName:     'SectionHeader/light/center',
      bg:           solid('#F9FAFB'),
      labelColor:   '#0066FF',
      headingColor: '#111827',
      bodyColor:    '#4A5565',
      align:        'CENTER',
      reactProps:   'dark={false} align="center"',
    },
    {
      compName:     'SectionHeader/dark/center',
      bg:           solid('#0A0F1E'),
      labelColor:   '#90A1B9',
      headingColor: '#FFFFFF',
      bodyColor:    '#90A1B9',
      align:        'CENTER',
      reactProps:   'dark={true} align="center"',
    },
    {
      compName:     'SectionHeader/dark/left',
      bg:           solid('#0A0F1E'),
      labelColor:   '#90A1B9',
      headingColor: '#FFFFFF',
      bodyColor:    '#90A1B9',
      align:        'MIN',
      reactProps:   'dark={true} align="left"',
    },
  ];

  const headersRow = autoFrame('Headers Row', 'HORIZONTAL', 24);

  for (const v of variants) {
    const headerFrame = autoFrame(`SectionHeader/${v.compName.split('/').slice(1).join('/')}`, 'VERTICAL', 16);
    headerFrame.paddingLeft   = 40;
    headerFrame.paddingRight  = 40;
    headerFrame.paddingTop    = 40;
    headerFrame.paddingBottom = 40;
    headerFrame.cornerRadius  = 12;
    headerFrame.fills         = v.bg;
    headerFrame.primaryAxisAlignItems  = v.align;
    headerFrame.counterAxisAlignItems  = v.align;

    const lbl = txt('SECTION LABEL', 12, 'semibold', v.labelColor, {
      letterSpacing: 1.5,
      textCase: 'UPPER',
      textAlign: v.align === 'CENTER' ? 'CENTER' : 'LEFT',
    });
    lbl.name = 'Label';
    headerFrame.appendChild(lbl);

    const heading = txt('Section Heading', 36, 'medium', v.headingColor, {
      lineHeight: 44,
      textAlign: v.align === 'CENTER' ? 'CENTER' : 'LEFT',
    });
    heading.name = 'Heading';
    headerFrame.appendChild(heading);

    const desc = txt(
      'Optional supporting description that provides more context about this section.',
      18, 'regular', v.bodyColor, {
        lineHeight: 28,
        textAlign: v.align === 'CENTER' ? 'CENTER' : 'LEFT',
      }
    );
    desc.name = 'Description';
    headerFrame.appendChild(desc);

    // React props annotation
    const annotation = txt(`React: <SectionHeader ${v.reactProps} />`, 11, 'regular', '#4A5565');
    annotation.name = 'Annotation';
    headerFrame.appendChild(annotation);

    const comp = figma.createComponentFromNode(headerFrame);
    comp.name = v.compName;
    comp.resize(360, comp.height);
    headersRow.appendChild(comp);
  }

  section.appendChild(headersRow);
  page.appendChild(section);
  return section;
}

// ─── 5. MAIN ──────────────────────────────────────────────────────────────────

await loadAllFonts();

const page = await setupPage();

const GAP  = 80;
const LEFT = 80;
let y = 80;

const s1 = buildColorSection(page, LEFT, y);
y += s1.height + GAP;

const s2 = buildTypeSection(page, LEFT, y);
y += s2.height + GAP;

const s3 = buildSpacingSection(page, LEFT, y);
y += s3.height + GAP;

const s4 = buildLogoSection(page, LEFT, y);
y += s4.height + GAP;

const s5 = buildBadgeSection(page, LEFT, y);
y += s5.height + GAP;

const s6 = buildButtonSection(page, LEFT, y);
y += s6.height + GAP;

const s7 = buildCardSection(page, LEFT, y);
y += s7.height + GAP;

buildSectionHeaderSection(page, LEFT, y);

figma.viewport.scrollAndZoomIntoView(page.children);

return `✅ Design System v3 built — ${page.children.length} sections on "🎨 Design System"`;

})();
