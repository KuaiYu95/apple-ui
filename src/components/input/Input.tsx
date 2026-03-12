"use client";

import { useId } from "react";
import { clsx } from "clsx";
import { inputWrapperStyles, inputStyles } from "./input.styles";
import type { InputProps } from "./input.types";

export function Input({
  label,
  error,
  status = "default",
  leftIcon,
  rightIcon,
  className,
  inputClassName,
  id: idProp,
  ...rest
}: InputProps) {
  const reactId = useId();
  const id = idProp ?? reactId;
  const resolvedStatus = error ? "error" : status;

  return (
    <div className={clsx(inputWrapperStyles(), className)}>
      {label && (
        <label
          htmlFor={id}
          className="text-[13px] font-medium text-[var(--color-apple-text-secondary)]"
        >
          {label}
        </label>
      )}
      <div className="relative">
        {leftIcon && (
          <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-apple-text-tertiary)]">
            {leftIcon}
          </span>
        )}
        <input
          id={id}
          className={clsx(
            inputStyles({
              status: resolvedStatus,
              hasLeftIcon: !!leftIcon,
              hasRightIcon: !!rightIcon,
            }),
            inputClassName
          )}
          aria-invalid={resolvedStatus === "error"}
          aria-describedby={error ? `${id}-error` : undefined}
          {...rest}
        />
        {rightIcon && (
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--color-apple-text-tertiary)]">
            {rightIcon}
          </span>
        )}
      </div>
      {error && (
        <p
          id={`${id}-error`}
          className="text-[13px] text-[var(--color-apple-danger)]"
          role="alert"
        >
          {error}
        </p>
      )}
    </div>
  );
}
