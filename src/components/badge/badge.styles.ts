import { cva } from "class-variance-authority";

export const badgeStyles = cva(
  "inline-flex min-h-[20px] items-center rounded-full px-2.5 py-0.5 text-[12px] font-medium",
  {
    variants: {
      variant: {
        default:
          "bg-[var(--color-apple-bg-secondary)] text-[var(--color-apple-text-secondary)]",
        primary: "bg-[var(--color-apple-primary)]/15 text-[var(--color-apple-primary)]",
        success: "bg-[var(--color-apple-success)]/15 text-[var(--color-apple-success)]",
        warning: "bg-[var(--color-apple-warning)]/15 text-[var(--color-apple-warning)]",
        danger: "bg-[var(--color-apple-danger)]/15 text-[var(--color-apple-danger)]",
      },
    },
    defaultVariants: { variant: "default" },
  }
);
