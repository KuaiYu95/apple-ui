"use client";

import { useState, useRef, useEffect, useId } from "react";
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
  const [activeIndex, setActiveIndex] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const optionRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const labelId = useId();
  const errorId = useId();
  const listboxId = useId();

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  const selected = options.find((o) => o.value === value);
  const display = selected?.label ?? placeholder;
  const selectedIndex = options.findIndex((o) => o.value === value);

  useEffect(() => {
    if (!open) return;
    optionRefs.current[activeIndex]?.focus();
  }, [activeIndex, open]);

  const selectOption = (nextValue: string) => {
    onChange?.(nextValue);
    setOpen(false);
  };

  const moveActive = (direction: 1 | -1) => {
    if (options.length === 0) return;
    setActiveIndex((current) => (current + direction + options.length) % options.length);
  };

  return (
    <div className={clsx("flex flex-col gap-1", className)} ref={ref}>
      {label && (
        <label id={labelId} className="text-[13px] font-medium text-[var(--color-apple-text-secondary)]">
          {label}
        </label>
      )}
      <div className="relative">
        <button
          type="button"
          aria-label={ariaLabel ?? label}
          aria-haspopup="listbox"
          aria-expanded={open}
          aria-labelledby={label ? labelId : undefined}
          aria-controls={open ? listboxId : undefined}
          aria-describedby={error ? errorId : undefined}
          disabled={disabled}
          className={selectTriggerStyles({ error: !!error })}
          onClick={() => {
            setActiveIndex(selectedIndex >= 0 ? selectedIndex : 0);
            setOpen((current) => !current);
          }}
          onKeyDown={(e) => {
            if (e.key === "ArrowDown") {
              e.preventDefault();
              if (!open) {
                setActiveIndex(selectedIndex >= 0 ? selectedIndex : 0);
                setOpen(true);
              } else moveActive(1);
            }
            if (e.key === "ArrowUp") {
              e.preventDefault();
              if (!open) {
                setActiveIndex(selectedIndex >= 0 ? selectedIndex : 0);
                setOpen(true);
              } else moveActive(-1);
            }
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              if (!open) setActiveIndex(selectedIndex >= 0 ? selectedIndex : 0);
              setOpen((current) => !current);
            }
            if (e.key === "Escape") {
              setOpen(false);
            }
          }}
        >
          <span className={value ? "text-[var(--color-apple-text)]" : "text-[var(--color-apple-text-tertiary)]"}>
            {display}
          </span>
          <ChevronDown className="h-4 w-4 shrink-0 opacity-60" />
        </button>
        {open && (
          <ul
            id={listboxId}
            className={clsx(selectDropdownStyles(), "absolute top-full left-0 right-0 mt-1")}
            role="listbox"
            aria-activedescendant={options[activeIndex] ? `option-${options[activeIndex].value}` : undefined}
          >
            {options.map((opt, index) => {
              const isSelected = value === opt.value;
              const isActive = index === activeIndex;
              return (
                <li key={opt.value} role="presentation">
                  <button
                    ref={(node) => {
                      optionRefs.current[index] = node;
                    }}
                    id={`option-${opt.value}`}
                    type="button"
                    role="option"
                    aria-selected={isSelected}
                    tabIndex={isActive ? 0 : -1}
                    className={selectOptionStyles({ selected: isSelected })}
                    onClick={() => selectOption(opt.value)}
                    onFocus={() => setActiveIndex(index)}
                    onKeyDown={(e) => {
                      if (e.key === "ArrowDown") {
                        e.preventDefault();
                        moveActive(1);
                      }
                      if (e.key === "ArrowUp") {
                        e.preventDefault();
                        moveActive(-1);
                      }
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        selectOption(opt.value);
                      }
                      if (e.key === "Escape") {
                        e.preventDefault();
                        setOpen(false);
                      }
                    }}
                  >
                    {opt.label}
                  </button>
                </li>
              );
            })}
          </ul>
        )}
      </div>
      {error && (
        <p id={errorId} className="text-[13px] text-[var(--color-apple-danger)]" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
