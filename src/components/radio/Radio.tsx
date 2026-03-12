"use client";

import { clsx } from "clsx";
import { radioGroupStyles, radioOptionStyles } from "./radio.styles";
import type { RadioProps } from "./radio.types";

export function Radio({
  name,
  value,
  options,
  onChange,
  className,
  disabled,
}: RadioProps) {
  return (
    <div
      className={clsx(radioGroupStyles(), className)}
      role="radiogroup"
      aria-label={name}
    >
      {options.map((opt) => {
        const id = `radio-${name}-${opt.value}`;
        const isChecked = value === opt.value;
        return (
          <label
            key={opt.value}
            htmlFor={id}
            className={clsx(radioOptionStyles())}
          >
            <input
              id={id}
              type="radio"
              name={name}
              value={opt.value}
              checked={isChecked}
              onChange={() => onChange?.(opt.value)}
              disabled={disabled}
              className="h-5 w-5 accent-[var(--color-apple-primary)] focus:ring-0"
              aria-checked={isChecked}
            />
            <span className="text-[15px] text-[var(--color-apple-text)]">
              {opt.label}
            </span>
          </label>
        );
      })}
    </div>
  );
}
