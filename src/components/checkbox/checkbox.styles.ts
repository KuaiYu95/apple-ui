import { cva } from "class-variance-authority";

export const checkboxWrapperStyles = cva(
  "inline-flex min-h-[44px] min-w-[44px] cursor-pointer touch-manipulation items-center gap-3"
);

export const checkboxInputStyles = cva(
  "peer sr-only"
);
