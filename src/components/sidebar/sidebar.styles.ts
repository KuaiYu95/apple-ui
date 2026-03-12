import { cva } from "class-variance-authority";

export const sidebarStyles = cva(
  "flex flex-col bg-[var(--color-apple-bg-secondary)] dark:bg-[var(--color-apple-bg-secondary)] border-r border-[var(--color-apple-text-tertiary)]/15 shadow-[var(--shadow-apple-sm)] w-64 shrink-0",
  {
    variants: {
      collapsed: {
        true: "w-16",
        false: "",
      },
    },
    defaultVariants: { collapsed: false },
  }
);

export const sidebarItemStyles = cva(
  "flex min-h-[44px] min-w-[44px] cursor-pointer items-center gap-3 rounded-[var(--radius-apple-sm)] px-3 py-2.5 text-[15px] text-[var(--color-apple-text)] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-apple-primary)]",
  {
    variants: {
      active: {
        true: "bg-[var(--color-apple-primary)]/15 text-[var(--color-apple-primary)] font-500",
        false: "hover:bg-black/5 dark:hover:bg-white/10",
      },
    },
    defaultVariants: { active: false },
  }
);
