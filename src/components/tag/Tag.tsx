"use client";

import { clsx } from "clsx";
import { X } from "lucide-react";
import type { TagProps } from "./tag.types";

export function Tag({ children, onRemove, className }: TagProps) {
  return (
    <span
      className={clsx(
        "inline-flex min-h-[28px] items-center gap-1 rounded-[var(--radius-apple-sm)] bg-[var(--color-apple-bg-secondary)] pl-2.5 pr-1.5 text-[13px] text-[var(--color-apple-text)]",
        className
      )}
    >
      {children}
      {onRemove && (
        <button
          type="button"
          onClick={onRemove}
          className="flex min-h-[24px] min-w-[24px] items-center justify-center rounded-full hover:bg-black/10 dark:hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--color-apple-primary)]"
          aria-label="Remove tag"
        >
          <X className="h-3.5 w-3.5" />
        </button>
      )}
    </span>
  );
}
