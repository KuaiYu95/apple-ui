"use client";

import { clsx } from "clsx";
import { segmentGroupStyles, segmentOptionStyles } from "./segmented-control.styles";
import type { SegmentedControlProps } from "./segmented-control.types";

export function SegmentedControl({
  options,
  value,
  onChange,
  className,
  "aria-label": ariaLabel,
}: SegmentedControlProps) {
  return (
    <div
      className={clsx(segmentGroupStyles(), className)}
      role="tablist"
      aria-label={ariaLabel}
    >
      {options.map((opt) => {
        const selected = value === opt.value;
        return (
          <button
            key={opt.value}
            type="button"
            role="tab"
            aria-selected={selected}
            tabIndex={selected ? 0 : -1}
            className={segmentOptionStyles({ selected })}
            onClick={() => onChange(opt.value)}
            onKeyDown={(e) => {
              const idx = options.findIndex((o) => o.value === opt.value);
              if (e.key === "ArrowLeft" && idx > 0) {
                e.preventDefault();
                onChange(options[idx - 1].value);
              }
              if (e.key === "ArrowRight" && idx < options.length - 1) {
                e.preventDefault();
                onChange(options[idx + 1].value);
              }
            }}
          >
            {opt.label}
          </button>
        );
      })}
    </div>
  );
}
