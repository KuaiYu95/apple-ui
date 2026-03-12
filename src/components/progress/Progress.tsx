"use client";

import { motion } from "framer-motion";
import { clsx } from "clsx";
import { defaultTransition } from "@/lib/motion";
import type { ProgressProps } from "./progress.types";

export function Progress({
  value,
  max = 100,
  className,
  "aria-label": ariaLabel = "Progress",
}: ProgressProps) {
  const pct = Math.min(100, Math.max(0, (value / max) * 100));

  return (
    <div
      className={clsx(
        "h-2 w-full overflow-hidden rounded-full bg-[var(--color-apple-bg-secondary)]",
        className
      )}
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={max}
      aria-label={ariaLabel}
    >
      <motion.div
        className="h-full rounded-full bg-[var(--color-apple-primary)]"
        initial={false}
        animate={{ width: `${pct}%` }}
        transition={defaultTransition}
      />
    </div>
  );
}
