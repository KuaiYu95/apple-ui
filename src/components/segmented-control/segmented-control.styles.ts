import { cva } from "class-variance-authority";

export const segmentGroupStyles = cva(
  "inline-flex rounded-[var(--radius-apple-sm)] bg-[var(--color-apple-bg-secondary)] p-0.5"
);

export const segmentOptionStyles = cva(
  "min-h-[44px] min-w-[44px] rounded-[8px] px-4 py-2 text-[15px] font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-apple-primary)]",
  {
    variants: {
      selected: {
        true: "bg-[var(--color-apple-bg)] text-[var(--color-apple-text)] shadow-[var(--shadow-apple-sm)]",
        false: "text-[var(--color-apple-text-secondary)] hover:text-[var(--color-apple-text)]",
      },
    },
    defaultVariants: { selected: false },
  }
);
