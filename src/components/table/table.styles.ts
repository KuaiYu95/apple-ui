import { cva } from "class-variance-authority";

export const tableStyles = cva(
  "w-full border-collapse rounded-[var(--radius-apple-md)] overflow-hidden bg-[var(--color-apple-bg)] shadow-[var(--shadow-apple-sm)]"
);

export const tableRowStyles = cva(
  "border-b border-[var(--color-apple-text-tertiary)]/15 transition-colors last:border-b-0",
  {
    variants: {
      interactive: {
        true: "cursor-pointer hover:bg-black/5 dark:hover:bg-white/10",
        false: "",
      },
    },
    defaultVariants: { interactive: false },
  }
);

export const tableCellStyles = cva(
  "px-4 py-3 text-left text-[15px] text-[var(--color-apple-text)]",
  {
    variants: {
      header: {
        true: "font-medium text-[var(--color-apple-text-secondary)] bg-[var(--color-apple-bg-secondary)]",
        false: "",
      },
    },
    defaultVariants: { header: false },
  }
);
