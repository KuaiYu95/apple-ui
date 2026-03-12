"use client";

import { motion } from "framer-motion";
import { clsx } from "clsx";
import { buttonStyles } from "./button.styles";
import { defaultTransition, buttonTap } from "@/lib/motion";
import type { ButtonProps } from "./button.types";

export function Button({
  variant = "primary",
  size = "md",
  loading = false,
  leftIcon,
  rightIcon,
  children,
  className,
  disabled,
  ...rest
}: ButtonProps) {
  return (
    <motion.span
      whileTap={buttonTap}
      transition={defaultTransition}
      className="inline-block"
    >
      <button
        type="button"
        className={clsx(buttonStyles({ variant, size }), className)}
        disabled={disabled || loading}
        aria-busy={loading}
        {...rest}
      >
        {loading ? (
          <span
            className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"
            aria-hidden
          />
        ) : (
          <>
            {leftIcon && <span className="shrink-0">{leftIcon}</span>}
            {children}
            {rightIcon && <span className="shrink-0">{rightIcon}</span>}
          </>
        )}
      </button>
    </motion.span>
  );
}
