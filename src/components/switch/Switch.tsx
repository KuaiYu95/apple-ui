"use client";

import { motion } from "framer-motion";
import { clsx } from "clsx";
import { switchStyles, switchThumbStyles } from "./switch.styles";
import { defaultTransition } from "@/lib/motion";
import type { SwitchProps } from "./switch.types";

export function Switch({
  checked,
  onChange,
  disabled,
  className,
  "aria-label": ariaLabel,
  ...rest
}: SwitchProps) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={ariaLabel}
      disabled={disabled}
      className={clsx(switchStyles({ checked }), "touch-manipulation", className)}
      onClick={() => onChange?.(!checked)}
      {...rest}
    >
      <motion.span
        className={switchThumbStyles({ checked })}
        layout
        transition={defaultTransition}
      />
    </button>
  );
}
