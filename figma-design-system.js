// ============================================================
// Decision Engine — AI Generated Design System
// Figma Plugin Script  v2
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
  // Discover every available style for this family
  let allFonts;
  try {
    allFonts = await figma.listAvailableFontsAsync();
  } catch {
    // listAvailableFontsAsync may not be available in all contexts;
    // fall back to trying a known list
    allFonts = [];
  }

  const interStyles = allFonts
    .filter(f => f.fontName.family === FAMILY)
    .map(f => f.fontName.style);

  // Candidates we care about
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
  section.appendChild(sectionTitle('Color Tokens'));

  // Group tokens by prefix
  const groups = {};
  for (const [name, hex] of Object.entries(COLORS)) {
    const [group] = name.split('/');
    (groups[group] = groups[group] || []).push({ name, hex });
  }

  for (const [group, tokens] of Object.entries(groups)) {
    const groupBlock = autoFrame(`Group/${group}`, 'VERTICAL', 12);

    groupBlock.appendChild(
      txt(group, 13, 'semibold', '#FFFFFF')
    );

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
  section.appendChild(sectionTitle('Typography Scale'));

  for (let i = 0; i < TYPE_SCALE.length; i++) {
    const step = TYPE_SCALE[i];

    const row = autoFrame(`Type/${step.token}`, 'HORIZONTAL', 32);
    row.counterAxisAlignItems = 'CENTER';
    row.paddingTop = 16;
    row.paddingBottom = 16;

    // Left meta column (fixed width)
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

    // Sample text
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
  section.appendChild(sectionTitle('Spacing Scale'));

  const row = autoFrame('Tokens', 'HORIZONTAL', 20);
  row.counterAxisAlignItems = 'BASELINE';

  for (const val of SPACING) {
    const col = autoFrame(`Spacing/${val}`, 'VERTICAL', 6);
    col.counterAxisAlignItems = 'CENTER';

    const bar = figma.createRectangle();
    bar.name = 'Bar';
    bar.resize(Math.max(val, 12), val); // min width 12 so tiny values are visible
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

function buildButtonSection(page, x, y) {
  const section = autoFrame('Buttons', 'VERTICAL', 28);
  section.x = x;
  section.y = y;
  section.appendChild(sectionTitle('Button — Variants & Sizes'));

  const variants = [
    { name: 'Primary',  bg: solid('#0066FF'),          textColor: '#FFFFFF', border: null                  },
    { name: 'Gradient', bg: gradientLinear(90, [[0, '#2B7FFF'], [1, '#00B8DB']]),
                                                        textColor: '#FFFFFF', border: null                  },
    { name: 'Ghost',    bg: solid('#FFFFFF', 0.05),    textColor: '#FFFFFF', border: solid('#FFFFFF', 0.2) },
    { name: 'Outline',  bg: solid('#FFFFFF', 0),       textColor: '#374151', border: solid('#E5E7EB')      },
  ];

  const sizes = [
    { name: 'SM', pH: 12, pV: 6,  fs: 14, radius: 8  },
    { name: 'MD', pH: 24, pV: 10, fs: 16, radius: 10 },
    { name: 'LG', pH: 32, pV: 14, fs: 16, radius: 10 },
  ];

  const variantRow = autoFrame('Variants', 'HORIZONTAL', 32);

  for (const v of variants) {
    const col = autoFrame(`Variant/${v.name}`, 'VERTICAL', 16);
    col.counterAxisAlignItems = 'CENTER';
    col.appendChild(txt(v.name, 12, 'semibold', '#90A1B9'));

    for (const s of sizes) {
      // Build button frame
      const btn = autoFrame(`_btn`, 'HORIZONTAL', 8);
      btn.paddingLeft  = s.pH;
      btn.paddingRight = s.pH;
      btn.paddingTop   = s.pV;
      btn.paddingBottom = s.pV;
      btn.cornerRadius = s.radius;
      btn.primaryAxisAlignItems = 'CENTER';
      btn.counterAxisAlignItems = 'CENTER';
      btn.fills = v.bg;

      if (v.border) {
        btn.strokes = v.border;
        btn.strokeWeight = 1;
        btn.strokeAlign = 'INSIDE';
      }

      const label = txt(s.name === 'SM' ? 'Label' : 'Start Building Free', s.fs, 'medium', v.textColor);
      btn.appendChild(label);

      // Wrap in a Figma component
      const comp = figma.createComponentFromNode(btn);
      comp.name = `Button/${v.name}/${s.name}`;

      col.appendChild(comp);
    }

    variantRow.appendChild(col);
  }

  section.appendChild(variantRow);
  page.appendChild(section);
  return section;
}

function buildCardSection(page, x, y) {
  const section = autoFrame('Cards', 'VERTICAL', 28);
  section.x = x;
  section.y = y;
  section.appendChild(sectionTitle('Card — Variants'));

  const variants = [
    {
      compName:   'Card/Feature/Light',
      bg:         solid('#FFFFFF'),
      border:     solid('#E5E7EB'),
      titleColor: '#111827',
      bodyColor:  '#4A5565',
      accentType: 'icon',
      accentBg:   solid('#0066FF', 0.08),
      accentFg:   '#0066FF',
    },
    {
      compName:   'Card/Problem/Dark',
      bg:         solid('#FFFFFF', 0.03),
      border:     solid('#FFFFFF', 0.08),
      titleColor: '#FFFFFF',
      bodyColor:  '#90A1B9',
      accentType: 'icon',
      accentBg:   solid('#FB2C36', 0.15),
      accentFg:   '#FB2C36',
    },
    {
      compName:   'Card/UseCase/Light',
      bg:         solid('#F9FAFB'),
      border:     solid('#E5E7EB'),
      titleColor: '#111827',
      bodyColor:  '#4A5565',
      accentType: 'dot',
      accentFg:   '#0066FF',
    },
  ];

  const cardsRow = autoFrame('Cards Row', 'HORIZONTAL', 24);

  for (const v of variants) {
    const card = autoFrame('_card', 'VERTICAL', 16);
    card.paddingLeft   = 32;
    card.paddingRight  = 32;
    card.paddingTop    = 32;
    card.paddingBottom = 32;
    card.cornerRadius  = 16;
    card.fills         = v.bg;
    card.strokes       = v.border;
    card.strokeWeight  = 1;
    card.strokeAlign   = 'INSIDE';

    if (v.accentType === 'icon') {
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

      const dot = figma.createEllipse();
      dot.name = '_icon';
      dot.resize(16, 16);
      dot.fills = solid(v.accentFg);
      iconBox.appendChild(dot);
      card.appendChild(iconBox);
    } else {
      const dot = figma.createEllipse();
      dot.name = 'Accent Dot';
      dot.resize(12, 12);
      dot.fills = solid(v.accentFg);
      card.appendChild(dot);
    }

    card.appendChild(txt('Card Title', 18, 'medium', v.titleColor));

    const body = figma.createText();
    body.name = 'Description';
    body.fontName = fontFor('regular');
    body.characters = 'Short description explaining what this card is about and why it matters.';
    body.fontSize = 16;
    body.lineHeight = { value: 26, unit: 'PIXELS' };
    body.fills = solid(v.bodyColor);
    card.appendChild(body);

    const comp = figma.createComponentFromNode(card);
    comp.name = v.compName;
    comp.resize(288, comp.height);
    cardsRow.appendChild(comp);
  }

  section.appendChild(cardsRow);
  page.appendChild(section);
  return section;
}

function buildSectionHeaderSection(page, x, y) {
  const section = autoFrame('SectionHeaders', 'VERTICAL', 28);
  section.x = x;
  section.y = y;
  section.appendChild(sectionTitle('SectionHeader — Variants'));

  const variants = [
    {
      compName:     'SectionHeader/Light/Center',
      bg:           solid('#F9FAFB'),
      labelColor:   '#0066FF',
      headingColor: '#111827',
      bodyColor:    '#4A5565',
      align:        'CENTER',
    },
    {
      compName:     'SectionHeader/Dark/Center',
      bg:           solid('#0A0F1E'),
      labelColor:   '#90A1B9',
      headingColor: '#FFFFFF',
      bodyColor:    '#90A1B9',
      align:        'CENTER',
    },
    {
      compName:     'SectionHeader/Dark/Left',
      bg:           solid('#0A0F1E'),
      labelColor:   '#90A1B9',
      headingColor: '#FFFFFF',
      bodyColor:    '#90A1B9',
      align:        'MIN',
    },
  ];

  const headersRow = autoFrame('Headers Row', 'HORIZONTAL', 24);

  for (const v of variants) {
    const header = autoFrame('_header', 'VERTICAL', 16);
    header.paddingLeft   = 40;
    header.paddingRight  = 40;
    header.paddingTop    = 40;
    header.paddingBottom = 40;
    header.cornerRadius  = 12;
    header.fills         = v.bg;
    header.primaryAxisAlignItems  = v.align;
    header.counterAxisAlignItems  = v.align;

    const lbl = txt('SECTION LABEL', 12, 'semibold', v.labelColor, {
      letterSpacing: 1.5,
      textCase: 'UPPER',
      textAlign: v.align === 'CENTER' ? 'CENTER' : 'LEFT',
    });
    lbl.name = 'Label';
    header.appendChild(lbl);

    const heading = txt('Section Heading', 36, 'medium', v.headingColor, {
      lineHeight: 44,
      textAlign: v.align === 'CENTER' ? 'CENTER' : 'LEFT',
    });
    heading.name = 'Heading';
    header.appendChild(heading);

    const desc = txt(
      'Optional supporting description that provides more context about this section.',
      18, 'regular', v.bodyColor, {
        lineHeight: 28,
        textAlign: v.align === 'CENTER' ? 'CENTER' : 'LEFT',
      }
    );
    desc.name = 'Description';
    header.appendChild(desc);

    const comp = figma.createComponentFromNode(header);
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

const s4 = buildButtonSection(page, LEFT, y);
y += s4.height + GAP;

const s5 = buildCardSection(page, LEFT, y);
y += s5.height + GAP;

buildSectionHeaderSection(page, LEFT, y);

figma.viewport.scrollAndZoomIntoView(page.children);

return `✅ Design System built — ${page.children.length} sections on page "🎨 Design System"`;

})();
