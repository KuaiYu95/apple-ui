"use client";

import { motion } from "framer-motion";
import { clsx } from "clsx";
import { defaultTransition } from "@/lib/motion";
import type { TabsProps } from "./tabs.types";
import { tabActiveBackground, tabItem, tabsRoot } from "./tabs.styles";

export function Tabs({
  items,
  value,
  onChange,
  size = "md",
  variant = "segmented",
  ariaLabel,
  className,
}: TabsProps) {
  return (
    <div
      role="tablist"
      aria-label={ariaLabel}
      className={clsx(
        tabsRoot({ size, variant }),
        className,
      )}
      data-variant={variant}
    >
      {items.map((item) => {
        const active = item.value === value;

        return (
          <button
            key={item.value}
            type="button"
            role="tab"
            aria-selected={active}
            disabled={item.disabled}
            className={tabItem({
              size,
              active,
              variant,
              disabled: item.disabled,
            })}
            data-active={active ? "true" : "false"}
            onClick={() => {
              if (!item.disabled && item.value !== value) {
                onChange(item.value);
              }
            }}
          >
            {active && variant === "segmented" && (
              <motion.span
                layoutId="apple-tabs-active"
                className={tabActiveBackground}
                data-variant={variant}
                transition={defaultTransition}
              />
            )}
            <span className="relative z-[1]">{item.label}</span>
          </button>
        );
      })}
    </div>
  );
}

