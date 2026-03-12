"use client";

import { clsx } from "clsx";
import { alertStyles } from "./alert.styles";
import type { AlertProps } from "./alert.types";

export function Alert({
  title,
  description,
  variant = "info",
  className,
  role = "alert",
}: AlertProps) {
  return (
    <div className={clsx(alertStyles({ variant }), className)} role={role}>
      {title && (
        <p className="font-semibold text-[var(--color-apple-text)]">{title}</p>
      )}
      {description && (
        <p className={title ? "mt-1" : ""}>{description}</p>
      )}
    </div>
  );
}
