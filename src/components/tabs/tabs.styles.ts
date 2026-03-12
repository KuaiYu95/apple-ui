import { cva } from "class-variance-authority";

export const tabsRoot = cva(
  "inline-flex items-center rounded-[999px] bg-[var(--color-apple-bg-secondary)] p-[2px] gap-[2px]",
  {
    variants: {
      size: {
        sm: "h-8 text-[13px]",
        md: "h-9 text-[14px]",
        lg: "h-10 text-[15px]",
      },
      variant: {
        underlined: "rounded-none bg-transparent p-0 gap-0 border-b border-[var(--color-apple-border-soft)]",
        segmented: "",
      },
    },
    defaultVariants: {
      size: "md",
      variant: "segmented",
    },
  },
);

export const tabItem = cva(
  "relative inline-flex items-center justify-center select-none rounded-[999px] px-3 font-medium text-[var(--color-apple-text-secondary)] transition-colors duration-200",
  {
    variants: {
      size: {
        sm: "h-7 px-3",
        md: "h-8 px-3.5",
        lg: "h-9 px-4",
      },
      active: {
        false: "",
        true: "text-[var(--color-apple-text)]",
      },
      variant: {
        segmented: "",
        underlined: "rounded-none px-2 data-[active=true]:text-[var(--color-apple-text)]",
      },
      disabled: {
        false: "cursor-pointer",
        true: "cursor-not-allowed opacity-40",
      },
    },
    defaultVariants: {
      size: "md",
      active: false,
      variant: "segmented",
      disabled: false,
    },
  },
);

export const tabActiveBackground =
  "absolute inset-[2px] rounded-[999px] bg-[var(--color-apple-bg)] shadow-[0_1px_3px_rgba(0,0,0,0.16)] data-[variant=underlined]:hidden";

