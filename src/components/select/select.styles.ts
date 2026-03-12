import { cva } from "class-variance-authority";

export const selectTriggerStyles = cva(
  "flex min-h-[44px] w-full cursor-pointer items-center justify-between rounded-[var(--radius-apple-sm)] border bg-[var(--color-apple-bg)] px-3 py-2.5 text-[15px] text-[var(--color-apple-text)] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-apple-primary)] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      error: {
        true: "border-[var(--color-apple-danger)]",
        false: "border-[var(--color-apple-text-tertiary)]/30",
      },
    },
    defaultVariants: { error: false },
  }
);

export const selectDropdownStyles = cva(
  "z-50 min-w-full max-h-60 overflow-auto rounded-[var(--radius-apple-md)] bg-[var(--color-apple-bg)] py-1 shadow-[var(--shadow-apple-md)]"
);

export const selectOptionStyles = cva(
  "flex min-h-[44px] w-full cursor-pointer items-center px-4 py-2.5 text-left text-[15px] text-[var(--color-apple-text)] hover:bg-black/5 focus:bg-black/5 focus:outline-none dark:hover:bg-white/10 dark:focus:bg-white/10",
  {
    variants: {
      selected: {
        true: "bg-[var(--color-apple-primary)]/15 text-[var(--color-apple-primary)]",
        false: "",
      },
    },
    defaultVariants: { selected: false },
  }
);
