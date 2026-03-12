"use client";

import { clsx } from "clsx";
import type { FloatingToolbarProps } from "./floating-toolbar.types";

const positionClass = {
  "bottom-center": "bottom-6 left-1/2 -translate-x-1/2",
  "bottom-right": "bottom-6 right-6",
  "top-center": "top-6 left-1/2 -translate-x-1/2",
};

export function FloatingToolbar({
  children,
  position = "bottom-center",
  className,
}: FloatingToolbarProps) {
  return (
    <div
      className={clsx(
        "fixed z-40 flex items-center gap-2 rounded-[var(--radius-apple-lg)] bg-[var(--color-apple-bg)]/90 px-3 py-2 shadow-[var(--shadow-apple-lg)] backdrop-blur-md border border-[var(--color-apple-text-tertiary)]/15",
        positionClass[position],
        className
      )}
      role="toolbar"
    >
      {children}
    </div>
  );
}
