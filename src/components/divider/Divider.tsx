"use client";

import { clsx } from "clsx";
import type { DividerProps } from "./divider.types";

export function Divider({
  className,
  label,
  orientation = "horizontal",
}: DividerProps) {
  const lineClass =
    "bg-[var(--color-apple-text-tertiary)]/20 shrink-0";
  const isHorizontal = orientation === "horizontal";

  if (label) {
    return (
      <div
        className={clsx(
          "flex items-center gap-3",
          isHorizontal ? "w-full" : "h-full flex-col",
          className
        )}
        role="separator"
        aria-orientation={orientation}
      >
        <span className={clsx("h-px flex-1", lineClass, isHorizontal ? "w-full" : "h-full w-px")} />
        <span className="text-[13px] text-[var(--color-apple-text-tertiary)]">
          {label}
        </span>
        <span className={clsx("h-px flex-1", lineClass, isHorizontal ? "w-full" : "h-full w-px")} />
      </div>
    );
  }

  return (
    <hr
      className={clsx(
        lineClass,
        isHorizontal ? "my-2 h-px w-full border-0" : "mx-2 w-px flex-1 border-0 self-stretch",
        className
      )}
      role="separator"
      aria-orientation={orientation}
    />
  );
}
