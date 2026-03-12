import { cva } from "class-variance-authority";

export const textareaStyles = cva(
  "min-h-[88px] w-full rounded-[var(--radius-apple-sm)] border bg-[var(--color-apple-bg)] px-3 py-2.5 text-[15px] text-[var(--color-apple-text)] placeholder:text-[var(--color-apple-text-tertiary)] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-apple-primary)] focus-visible:ring-offset-2 disabled:opacity-50 resize-y",
  {
    variants: {
      status: {
        default:
          "border-[var(--color-apple-text-tertiary)]/30 hover:border-[var(--color-apple-text-tertiary)]/50",
        error: "border-[var(--color-apple-danger)]",
        success: "border-[var(--color-apple-success)]",
      },
    },
    defaultVariants: { status: "default" },
  }
);
