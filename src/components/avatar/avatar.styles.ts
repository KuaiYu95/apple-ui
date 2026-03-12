import { cva } from "class-variance-authority";

export const avatarStyles = cva(
  "inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full bg-[var(--color-apple-bg-secondary)] text-[var(--color-apple-text)] font-medium",
  {
    variants: {
      size: {
        sm: "h-8 w-8 text-xs",
        md: "h-10 w-10 text-sm",
        lg: "h-12 w-12 text-base",
      },
    },
    defaultVariants: { size: "md" },
  }
);
