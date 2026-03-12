"use client";

import { clsx } from "clsx";
import { checkboxWrapperStyles } from "./checkbox.styles";
import type { CheckboxProps } from "./checkbox.types";

export function Checkbox({
  checked,
  onChange,
  label,
  className,
  id: idProp,
  disabled,
  ...rest
}: CheckboxProps) {
  const id = idProp ?? `checkbox-${Math.random().toString(36).slice(2, 9)}`;

  return (
    <label
      htmlFor={id}
      className={clsx(checkboxWrapperStyles(), className)}
    >
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange?.(e.target.checked)}
        disabled={disabled}
        className="h-5 w-5 rounded-[6px] border-2 border-[var(--color-apple-text-tertiary)]/50 accent-[var(--color-apple-primary)] focus:ring-2 focus:ring-[var(--color-apple-primary)] focus:ring-offset-2 disabled:opacity-50"
        aria-checked={checked}
        {...rest}
      />
      {label && (
        <span className="text-[15px] text-[var(--color-apple-text)]">
          {label}
        </span>
      )}
    </label>
  );
}
