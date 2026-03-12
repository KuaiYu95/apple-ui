import { cva } from "class-variance-authority";

export const tooltipContentStyles = cva(
  "z-50 max-w-xs rounded-[var(--radius-apple-sm)] bg-[var(--color-apple-text)] px-3 py-2 text-[13px] text-white shadow-[var(--shadow-apple-md)]"
);
