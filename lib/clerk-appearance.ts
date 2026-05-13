import type { ComponentProps } from "react";
import type { SignIn } from "@clerk/nextjs";

type ClerkAppearance = NonNullable<ComponentProps<typeof SignIn>["appearance"]>;

/**
 * Shared Clerk appearance config — applied to both SignIn and SignUp.
 *
 * Strategy:
 *  - `variables`  → design tokens (most reliable; Clerk uses them internally)
 *  - `elements`   → CSS property objects for structural overrides (inline styles,
 *                   so no pseudo-classes here — hover/focus live in globals.css)
 *
 * Global CSS (.cl-* selectors) handles: hover, focus rings, dev-mode banner.
 */
export const clerkAppearance: ClerkAppearance = {
  variables: {
    // Brand
    colorPrimary: "#0066ff",
    colorTextOnPrimaryBackground: "#ffffff",

    // Surfaces
    colorBackground: "#0d1525",

    // Typography
    colorText: "#ffffff",
    colorTextSecondary: "#90a1b9",

    // Inputs
    colorInputBackground: "rgba(255, 255, 255, 0.05)",
    colorInputText: "#ffffff",

    // Neutral / shades
    colorNeutral: "#90a1b9",
    colorAlphaShade: "#ffffff",

    // Status
    colorDanger: "#fb2c36",
    colorSuccess: "#00c950",

    // Font — mirrors the project's Inter setup
    fontFamily:
      "var(--font-inter), Inter, ui-sans-serif, system-ui, -apple-system, sans-serif",
    fontSize: "15px",
    fontWeight: {
      normal: 400,
      medium: 500,
      bold: 600,
    },

    // Shape
    borderRadius: "8px",
    spacingUnit: "1rem",
  },

  elements: {
    // ── Outer wrappers ───────────────────────────────────────────
    rootBox: {
      width: "100%",
      maxWidth: "400px",
    },

    cardBox: {
      width: "100%",
      boxShadow: "none",
    },

    card: {
      width: "100%",
      backgroundColor: "rgba(13, 21, 37, 0.96)",
      border: "1px solid rgba(255, 255, 255, 0.08)",
      borderRadius: "16px",
      boxShadow:
        "0 0 0 1px rgba(255,255,255,0.03) inset, 0 24px 56px rgba(0,0,0,0.45)",
      padding: "0",
    },

    // ── Header ───────────────────────────────────────────────────
    header: {
      padding: "32px 32px 0",
      gap: "6px",
    },

    headerTitle: {
      color: "#ffffff",
      fontSize: "22px",
      fontWeight: 600,
      letterSpacing: "-0.02em",
      lineHeight: "1.25",
    },

    headerSubtitle: {
      color: "#90a1b9",
      fontSize: "14px",
      lineHeight: "1.5",
    },

    // ── Main body ─────────────────────────────────────────────────
    main: {
      padding: "24px 32px 0",
      gap: "20px",
    },

    // ── Social buttons (Google) ───────────────────────────────────
    socialButtons: {
      gap: "8px",
    },

    socialButtonsBlockButton: {
      backgroundColor: "rgba(255, 255, 255, 0.04)",
      border: "1px solid rgba(255, 255, 255, 0.1)",
      borderRadius: "8px",
      color: "#ffffff",
      fontSize: "14px",
      fontWeight: 500,
      padding: "10px 16px",
      height: "40px",
      // hover handled in globals.css (.cl-socialButtonsBlockButton:hover)
    },

    socialButtonsBlockButtonText: {
      color: "#ffffff",
      fontSize: "14px",
      fontWeight: 500,
    },

    // ── Divider ───────────────────────────────────────────────────
    dividerRow: {
      margin: "4px 0",
    },

    dividerLine: {
      backgroundColor: "rgba(255, 255, 255, 0.08)",
    },

    dividerText: {
      color: "#90a1b9",
      fontSize: "12px",
      fontWeight: 400,
    },

    // ── Form fields ───────────────────────────────────────────────
    formFields: {
      gap: "16px",
    },

    formField: {
      gap: "6px",
    },

    formFieldLabelRow: {
      marginBottom: "0",
    },

    formFieldLabel: {
      color: "#90a1b9",
      fontSize: "12px",
      fontWeight: 500,
      letterSpacing: "0.01em",
    },

    formFieldInput: {
      backgroundColor: "rgba(255, 255, 255, 0.05)",
      border: "1px solid rgba(255, 255, 255, 0.1)",
      borderRadius: "8px",
      color: "#ffffff",
      fontSize: "14px",
      height: "40px",
      padding: "0 12px",
      // focus + hover handled in globals.css
    },

    formFieldInputShowPasswordButton: {
      color: "#90a1b9",
    },

    formFieldHintText: {
      color: "#4a5565",
      fontSize: "12px",
    },

    formFieldError: {
      color: "#fb2c36",
      fontSize: "12px",
    },

    formFieldAction: {
      color: "#0066ff",
      fontSize: "12px",
    },

    // ── Primary action button ─────────────────────────────────────
    formButtonPrimary: {
      background: "linear-gradient(90deg, #0066ff 0%, #0080ff 100%)",
      borderRadius: "8px",
      color: "#ffffff",
      fontSize: "14px",
      fontWeight: 500,
      height: "40px",
      letterSpacing: "-0.01em",
      boxShadow: "0 1px 2px rgba(0,0,0,0.3), 0 0 0 1px rgba(0,102,255,0.4) inset",
      // hover handled in globals.css
    },

    // ── Footer / links ────────────────────────────────────────────
    footer: {
      padding: "20px 32px 28px",
      borderTop: "1px solid rgba(255, 255, 255, 0.06)",
      marginTop: "8px",
      background: "transparent",
    },

    footerAction: {
      justifyContent: "center",
    },

    footerActionText: {
      color: "#90a1b9",
      fontSize: "13px",
    },

    footerActionLink: {
      color: "#0066ff",
      fontSize: "13px",
      fontWeight: 500,
      // hover handled in globals.css
    },

    // ── Identity preview (email step) ─────────────────────────────
    identityPreview: {
      backgroundColor: "rgba(255, 255, 255, 0.04)",
      border: "1px solid rgba(255, 255, 255, 0.08)",
      borderRadius: "8px",
    },

    identityPreviewText: {
      color: "#ffffff",
      fontSize: "14px",
    },

    identityPreviewEditButton: {
      color: "#0066ff",
    },

    // ── Alert messages ────────────────────────────────────────────
    alert: {
      backgroundColor: "rgba(251, 44, 54, 0.08)",
      border: "1px solid rgba(251, 44, 54, 0.2)",
      borderRadius: "8px",
    },

    alertText: {
      color: "#fb2c36",
      fontSize: "13px",
    },
  },
};
