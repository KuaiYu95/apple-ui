"use client";

import { useId } from "react";
import { Check } from "lucide-react";
import { clsx } from "clsx";
import { checkboxInputStyles, checkboxWrapperStyles } from "./checkbox.styles";
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
  const reactId = useId();
  const id = idProp ?? reactId;

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
        className={checkboxInputStyles()}
        aria-checked={checked}
        {...rest}
      />
      <span
        className={clsx(
          "flex h-5 w-5 shrink-0 items-center justify-center rounded-[7px] border border-[var(--color-apple-text-tertiary)]/30 bg-[var(--color-apple-bg-secondary)] shadow-[inset_0_1px_0_rgba(255,255,255,0.5)] transition-all peer-focus-visible:ring-2 peer-focus-visible:ring-[var(--color-apple-primary)] peer-focus-visible:ring-offset-2 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]",
          checked && "border-[var(--color-apple-primary)] bg-[var(--color-apple-primary)] text-white shadow-[0_6px_14px_rgba(0,122,255,0.22)]",
          disabled && "opacity-50"
        )}
        aria-hidden="true"
      >
        <Check className={clsx("h-3.5 w-3.5 transition-opacity", checked ? "opacity-100" : "opacity-0")} strokeWidth={3} />
      </span>
      {label && (
        <span className="text-[15px] text-[var(--color-apple-text)]">
          {label}
        </span>
      )}
    </label>
  );
}
