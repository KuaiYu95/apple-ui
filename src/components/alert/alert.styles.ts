import { cva } from "class-variance-authority";

export const alertStyles = cva(
  "rounded-[var(--radius-apple-md)] border px-4 py-3 text-[15px]",
  {
    variants: {
      variant: {
        info: "border-[var(--color-apple-primary)]/40 bg-[var(--color-apple-primary)]/10 text-[var(--color-apple-text)]",
        success: "border-[var(--color-apple-success)]/40 bg-[var(--color-apple-success)]/10 text-[var(--color-apple-text)]",
        warning: "border-[var(--color-apple-warning)]/40 bg-[var(--color-apple-warning)]/10 text-[var(--color-apple-text)]",
        error: "border-[var(--color-apple-danger)]/40 bg-[var(--color-apple-danger)]/10 text-[var(--color-apple-text)]",
      },
    },
    defaultVariants: { variant: "info" },
  }
);
