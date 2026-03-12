"use client";

import { clsx } from "clsx";
import type { SpinnerProps } from "./spinner.types";

const sizeClass = {
  sm: "h-4 w-4 border-2",
  md: "h-6 w-6 border-2",
  lg: "h-8 w-8 border-[3px]",
};

export function Spinner({
  size = "md",
  className,
  "aria-label": ariaLabel = "Loading",
}: SpinnerProps) {
  return (
    <span
      className={clsx(
        "inline-block animate-spin rounded-full border-current border-t-transparent text-[var(--color-apple-primary)]",
        sizeClass[size],
        className
      )}
      role="status"
      aria-label={ariaLabel}
    />
  );
}
