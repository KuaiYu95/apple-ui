import { cva } from "class-variance-authority";

export const overlayStyles = "fixed inset-0 z-50 bg-black/40";

export const panelPlacementStyles = cva(
  "fixed z-50 flex flex-col bg-[var(--color-apple-bg)] shadow-[var(--shadow-apple-lg)]",
  {
    variants: {
      placement: {
        bottom: "bottom-0 left-0 right-0 max-h-[85vh] rounded-t-[var(--radius-apple-lg)]",
        left: "top-0 bottom-0 left-0 w-full max-w-sm rounded-r-[var(--radius-apple-lg)]",
        right: "top-0 bottom-0 right-0 w-full max-w-sm rounded-l-[var(--radius-apple-lg)]",
      },
    },
    defaultVariants: { placement: "bottom" },
  }
);
