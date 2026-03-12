import { cva } from "class-variance-authority";

export const checkboxWrapperStyles = cva(
  "inline-flex min-h-[44px] min-w-[44px] cursor-pointer touch-manipulation items-center gap-3"
);

export const checkboxInputStyles = cva(
  "h-5 w-5 min-h-[44px] min-w-[44px] rounded-[6px] border-2 border-[var(--color-apple-text-tertiary)]/50 accent-[var(--color-apple-primary)] focus:ring-2 focus:ring-[var(--color-apple-primary)] focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
);
