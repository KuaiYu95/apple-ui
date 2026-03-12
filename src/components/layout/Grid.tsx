"use client";

import { clsx } from "clsx";

export type GridProps = {
  children: React.ReactNode;
  className?: string;
  cols?: 1 | 2 | 3 | 4 | 6 | 12;
  gap?: "sm" | "md" | "lg";
  /** Responsive: iPad 2 cols, macOS 3 cols by default when cols not set */
  responsive?: boolean;
};

const colsClass = {
  1: "grid-cols-1",
  2: "grid-cols-2",
  3: "grid-cols-3",
  4: "grid-cols-4",
  6: "grid-cols-6",
  12: "grid-cols-12",
};

const gapClass = { sm: "gap-3", md: "gap-4", lg: "gap-6" };

export function Grid({
  children,
  className,
  cols = 1,
  gap = "md",
  responsive = false,
}: GridProps) {
  return (
    <div
      className={clsx(
        "grid",
        responsive
          ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          : colsClass[cols],
        gapClass[gap],
        className
      )}
    >
      {children}
    </div>
  );
}
