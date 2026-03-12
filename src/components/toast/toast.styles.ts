import { cva } from "class-variance-authority";

export const toastItemStyles = cva(
  "rounded-[var(--radius-apple-md)] bg-[var(--color-apple-bg)] px-4 py-3 text-[15px] text-[var(--color-apple-text)] shadow-[var(--shadow-apple-md)] border border-[var(--color-apple-text-tertiary)]/15",
  {
    variants: {
      type: {
        default: "",
        success: "border-[var(--color-apple-success)]/50",
        error: "border-[var(--color-apple-danger)]/50",
        warning: "border-[var(--color-apple-warning)]/50",
        info: "border-[var(--color-apple-primary)]/50",
      },
    },
    defaultVariants: { type: "default" },
  }
);
