"use client";

import { clsx } from "clsx";
import { badgeStyles } from "./badge.styles";
import type { BadgeProps } from "./badge.types";

export function Badge({
  children,
  variant = "default",
  className,
}: BadgeProps) {
  return (
    <span className={clsx(badgeStyles({ variant }), className)}>
      {children}
    </span>
  );
}
