import { cva } from "class-variance-authority";

export const radioGroupStyles = cva("flex flex-col gap-2");

export const radioOptionStyles = cva(
  "flex min-h-[44px] min-w-[44px] cursor-pointer touch-manipulation items-center gap-3 rounded-[var(--radius-apple-sm)] px-2 py-2 focus-within:ring-2 focus-within:ring-[var(--color-apple-primary)] focus-within:ring-offset-2 disabled:opacity-50"
);
