"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { clsx } from "clsx";
import { selectTriggerStyles, selectDropdownStyles, selectOptionStyles } from "./select.styles";
import type { SelectProps } from "./select.types";

export function Select({
  value,
  options,
  onChange,
  placeholder = "Select...",
  label,
  error,
  disabled,
  className,
  "aria-label": ariaLabel,
}: SelectProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  const selected = options.find((o) => o.value === value);
  const display = selected?.label ?? placeholder;

  return (
    <div className={clsx("flex flex-col gap-1", className)} ref={ref}>
      {label && (
        <label className="text-[13px] font-medium text-[var(--color-apple-text-secondary)]">
          {label}
        </label>
      )}
      <div className="relative">
        <button
          type="button"
          aria-label={ariaLabel ?? label}
          aria-haspopup="listbox"
          aria-expanded={open}
          aria-labelledby={undefined}
          disabled={disabled}
          className={selectTriggerStyles({ error: !!error })}
          onClick={() => setOpen((o) => !o)}
        >
          <span className={value ? "text-[var(--color-apple-text)]" : "text-[var(--color-apple-text-tertiary)]"}>
            {display}
          </span>
          <ChevronDown className="h-4 w-4 shrink-0 opacity-60" />
        </button>
        {open && (
          <ul
            className={clsx(selectDropdownStyles(), "absolute top-full left-0 right-0 mt-1")}
            role="listbox"
            aria-activedescendant={value ? `option-${value}` : undefined}
          >
            {options.map((opt) => {
              const isSelected = value === opt.value;
              return (
                <li
                  key={opt.value}
                  id={`option-${opt.value}`}
                  role="option"
                  aria-selected={isSelected}
                  className={selectOptionStyles({ selected: isSelected })}
                  onClick={() => {
                    onChange?.(opt.value);
                    setOpen(false);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      onChange?.(opt.value);
                      setOpen(false);
                    }
                    if (e.key === "Escape") setOpen(false);
                  }}
                >
                  {opt.label}
                </li>
              );
            })}
          </ul>
        )}
      </div>
      {error && (
        <p className="text-[13px] text-[var(--color-apple-danger)]" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
