import { cva } from "class-variance-authority";

export const listStyles = cva(
  "rounded-[var(--radius-apple-md)] bg-[var(--color-apple-bg)] shadow-[var(--shadow-apple-sm)] overflow-hidden"
);

export const listGroupStyles = cva("");

export const listItemStyles = cva(
  "flex min-h-[44px] min-w-[44px] cursor-pointer items-center gap-3 px-4 py-3 text-[15px] text-[var(--color-apple-text)] transition-colors hover:bg-black/5 dark:hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[var(--color-apple-primary)]"
);
