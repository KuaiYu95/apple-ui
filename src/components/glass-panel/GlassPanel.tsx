"use client";

import { clsx } from "clsx";
import type { GlassPanelProps } from "./glass-panel.types";

const blurClass = {
  sm: "backdrop-blur-sm",
  md: "backdrop-blur-md",
  lg: "backdrop-blur-xl",
};

export function GlassPanel({
  children,
  className,
  blur = "md",
}: GlassPanelProps) {
  return (
    <div
      className={clsx(
        "rounded-[var(--radius-apple-lg)] bg-[var(--color-apple-bg)]/70 shadow-[var(--shadow-apple-md)]",
        blurClass[blur],
        "dark:bg-[var(--color-apple-bg)]/50",
        className
      )}
    >
      {children}
    </div>
  );
}
