import { cva } from "class-variance-authority";

export const buttonStyles = cva(
  "inline-flex min-h-[44px] min-w-[44px] cursor-pointer items-center justify-center gap-2 rounded-[var(--radius-apple-sm)] font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-apple-primary)] disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-[var(--color-apple-primary)] text-white hover:opacity-90 active:opacity-95 disabled:hover:opacity-100",
        secondary:
          "bg-[var(--color-apple-bg-secondary)] text-[var(--color-apple-text)] hover:bg-black/10 dark:hover:bg-white/15 active:bg-black/15 dark:active:bg-white/20",
        text: "bg-transparent text-[var(--color-apple-primary)] hover:bg-[var(--color-apple-primary)]/10 active:bg-[var(--color-apple-primary)]/20",
        danger:
          "bg-[var(--color-apple-danger)] text-white hover:opacity-90 active:opacity-95",
      },
      size: {
        sm: "min-h-[36px] min-w-[36px] px-3 text-sm",
        md: "px-4 text-[15px]",
        lg: "min-h-[48px] px-6 text-[17px]",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  }
);
