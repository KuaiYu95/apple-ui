import { cva } from "class-variance-authority";

export const switchStyles = cva(
  "relative inline-flex h-8 w-14 min-w-[32px] min-h-[32px] items-center px-1 shrink-0 cursor-pointer rounded-full border-0 p-0 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-apple-primary)] disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      checked: {
        true: "justify-end bg-[var(--color-apple-primary)]",
        false: "justify-start bg-[var(--color-apple-text-tertiary)]/30 dark:bg-white/20",
      },
    },
    defaultVariants: { checked: false },
  }
);

export const switchThumbStyles = cva(
  "pointer-events-none inline-block h-6 w-6 rounded-full bg-white shadow-[var(--shadow-apple-sm)] transition-transform",
  {
    variants: {
      checked: {
        true: "",
        false: "",
      },
    },
    defaultVariants: { checked: false },
  }
);
