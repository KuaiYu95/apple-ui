"use client";

import { clsx } from "clsx";
import { textareaStyles } from "./textarea.styles";
import type { TextareaProps } from "./textarea.types";

export function Textarea({
  label,
  error,
  status = "default",
  className,
  id: idProp,
  ...rest
}: TextareaProps) {
  const id = idProp ?? `textarea-${Math.random().toString(36).slice(2, 9)}`;
  const resolvedStatus = error ? "error" : status;

  return (
    <div className={clsx("flex flex-col gap-1", className)}>
      {label && (
        <label
          htmlFor={id}
          className="text-[13px] font-medium text-[var(--color-apple-text-secondary)]"
        >
          {label}
        </label>
      )}
      <textarea
        id={id}
        className={textareaStyles({ status: resolvedStatus })}
        aria-invalid={resolvedStatus === "error"}
        aria-describedby={error ? `${id}-error` : undefined}
        {...rest}
      />
      {error && (
        <p id={`${id}-error`} className="text-[13px] text-[var(--color-apple-danger)]" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
