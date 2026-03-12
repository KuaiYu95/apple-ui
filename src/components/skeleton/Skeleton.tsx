"use client";

import { clsx } from "clsx";
import type { SkeletonProps } from "./skeleton.types";

export function Skeleton({
  className,
  width,
  height,
}: SkeletonProps) {
  const style: React.CSSProperties = {};
  if (width != null) style.width = typeof width === "number" ? `${width}px` : width;
  if (height != null) style.height = typeof height === "number" ? `${height}px` : height;

  return (
    <span
      className={clsx(
        "block animate-pulse rounded-[var(--radius-apple-sm)] bg-[var(--color-apple-text-tertiary)]/20",
        className
      )}
      style={style}
      aria-hidden
    />
  );
}
