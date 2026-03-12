import { cva } from "class-variance-authority";

export const navBarStyles = cva(
  "flex min-h-[44px] items-center justify-between px-4 safe-area-inset-top bg-[var(--color-apple-bg)] dark:bg-[var(--color-apple-bg)] border-b border-[var(--color-apple-text-tertiary)]/20",
  {
    variants: {
      transparent: {
        true: "bg-transparent border-transparent",
        false: "",
      },
      size: {
        compact: "py-2 min-h-[44px]",
        normal: "py-3 min-h-[52px]",
      },
    },
    defaultVariants: { transparent: false, size: "normal" },
  }
);
