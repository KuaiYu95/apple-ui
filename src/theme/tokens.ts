/**
 * Apple-style design tokens (JS/TS usage, e.g. Framer Motion).
 * CSS equivalents are in globals.css @theme for Tailwind.
 */
export const tokens = {
  color: {
    primary: "#007AFF",
    success: "#34C759",
    warning: "#FF9F0A",
    danger: "#FF3B30",
    background: "#FFFFFF",
    backgroundSecondary: "#F2F2F7",
    text: "#000000",
    textSecondary: "#3C3C43",
    textTertiary: "#8E8E93",
    // dark
    dark: {
      background: "#000000",
      surface: "#1C1C1E",
      text: "#FFFFFF",
    },
  },
  radius: {
    sm: "10px",
    md: "16px",
    lg: "20px",
  },
  shadow: {
    small: "0 2px 8px rgba(0,0,0,0.08)",
    medium: "0 6px 20px rgba(0,0,0,0.12)",
    large: "0 20px 40px rgba(0,0,0,0.16)",
  },
  motion: {
    duration: 0.25,
    ease: [0.4, 0, 0.2, 1] as [number, number, number, number],
    easeString: "cubic-bezier(0.4, 0, 0.2, 1)",
  },
} as const;

export const breakpoints = {
  ios: 767,
  ipad: 768,
  macos: 1200,
} as const;
