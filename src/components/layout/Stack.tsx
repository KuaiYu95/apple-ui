"use client";

import { clsx } from "clsx";

export type StackProps = {
  children: React.ReactNode;
  className?: string;
  direction?: "row" | "column";
  gap?: "xs" | "sm" | "md" | "lg" | "xl";
  align?: "start" | "center" | "end" | "stretch";
  justify?: "start" | "center" | "end" | "between" | "around";
  wrap?: boolean;
};

const gapClass = { xs: "gap-1", sm: "gap-2", md: "gap-4", lg: "gap-6", xl: "gap-8" };
const alignClass = {
  start: "items-start",
  center: "items-center",
  end: "items-end",
  stretch: "items-stretch",
};
const justifyClass = {
  start: "justify-start",
  center: "justify-center",
  end: "justify-end",
  between: "justify-between",
  around: "justify-around",
};

export function Stack({
  children,
  className,
  direction = "column",
  gap = "md",
  align = "stretch",
  justify = "start",
  wrap = false,
}: StackProps) {
  return (
    <div
      className={clsx(
        "flex",
        direction === "column" ? "flex-col" : "flex-row",
        gapClass[gap],
        alignClass[align],
        justifyClass[justify],
        wrap && "flex-wrap",
        className
      )}
    >
      {children}
    </div>
  );
}
