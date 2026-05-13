export const colors = {
  primary: "#0066ff",
  primaryDark: "#0052cc",
  cyan: "#00d4ff",
  cyanLight: "#3d8aff",
  gradientBlue: "#2b7fff",
  gradientCyan: "#00b8db",

  dark: {
    deep: "#0a0f1e",
    navy: "#0a0e27",
    surface: "#0f1629",
    card: "#131d35",
  },

  text: {
    primary: "#ffffff",
    secondary: "#90a1b9",
    slate: "#4a5565",
    dark: "#111827",
    gray900: "#111827",
    gray700: "#374151",
  },

  status: {
    success: "#00c950",
    warning: "#f0b100",
    error: "#fb2c36",
    orange: "#ff6900",
  },

  border: {
    dark: "rgba(255,255,255,0.08)",
    darkMedium: "rgba(255,255,255,0.2)",
    light: "#e5e7eb",
    gray200: "#e5e7eb",
  },

  surface: {
    primaryAlpha: "rgba(0,102,255,0.08)",
    primaryAlphaMedium: "rgba(0,102,255,0.15)",
    primaryAlphaStrong: "rgba(0,102,255,0.2)",
    whiteAlpha5: "rgba(255,255,255,0.05)",
    whiteAlpha12: "rgba(255,255,255,0.12)",
    whiteAlpha50: "rgba(0,0,0,0.5)",
  },
} as const;

export const gradients = {
  primary: "linear-gradient(90deg, #0066ff 0%, #00d4ff 100%)",
  primaryButton: "linear-gradient(90deg, #2b7fff 0%, #00b8db 100%)",
  primaryBadge: "linear-gradient(135deg, #0066ff 0%, #00d4ff 100%)",
  heroSection: "linear-gradient(180deg, #0a0f1e 0%, #1a1f35 100%)",
  darkSection: "linear-gradient(135deg, #0a0f1e 0%, #0f1629 100%)",
  darkSectionReverse: "linear-gradient(160deg, #0a0f1e 0%, #0f1629 50%, #0a0f1e 100%)",
  lightSection: "linear-gradient(180deg, #ffffff 0%, #f9fafb 100%)",
  workflowNode: "linear-gradient(135deg, rgba(0,102,255,0.15) 0%, rgba(0,102,255,0.05) 100%)",
} as const;

export const typography = {
  sizes: {
    xs: "12px",
    sm: "14px",
    base: "16px",
    lg: "18px",
    xl: "20px",
    "2xl": "24px",
    "3xl": "36px",
    "4xl": "48px",
    "5xl": "60px",
  },
  weights: {
    normal: 400,
    medium: 500,
    semibold: 600,
  },
  leading: {
    tight: "1.1",
    snug: "1.15",
    normal: "1.4",
    relaxed: "1.6",
    loose: "1.7",
  },
  tracking: {
    tight: "-0.02em",
    widest: "0.1em",
  },
} as const;

export const spacing = {
  section: {
    sm: "py-16",
    md: "py-20",
    lg: "py-24",
    xl: "py-32",
  },
  container: "max-w-[1280px] mx-auto px-8",
  gap: {
    xs: "gap-2",
    sm: "gap-4",
    md: "gap-6",
    lg: "gap-8",
    xl: "gap-10",
    "2xl": "gap-12",
    "3xl": "gap-16",
  },
} as const;

export const radii = {
  sm: "8px",
  md: "12px",
  lg: "16px",
  xl: "24px",
  full: "9999px",
} as const;

export const breakpoints = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
} as const;
