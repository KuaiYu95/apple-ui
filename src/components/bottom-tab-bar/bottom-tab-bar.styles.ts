import { cva } from "class-variance-authority";

export const tabBarStyles = cva(
  "fixed bottom-0 left-0 right-0 z-40 flex min-h-[56px] items-center justify-around border-t border-[var(--color-apple-text-tertiary)]/20 bg-[var(--color-apple-bg)] safe-area-inset-bottom"
);

export const tabItemStyles = cva(
  "flex min-h-[44px] min-w-[44px] flex-col items-center justify-center gap-0.5 rounded-[var(--radius-apple-sm)] px-3 py-2 text-[10px] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-apple-primary)]",
  {
    variants: {
      active: {
        true: "text-[var(--color-apple-primary)]",
        false: "text-[var(--color-apple-text-tertiary)]",
      },
    },
    defaultVariants: { active: false },
  }
);
