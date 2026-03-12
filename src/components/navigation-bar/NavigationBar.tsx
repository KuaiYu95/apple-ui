"use client";

import { clsx } from "clsx";
import { useAppleBreakpoint } from "@/hooks/useAppleBreakpoint";
import { navBarStyles } from "./navigation-bar.styles";
import type { NavigationBarProps } from "./navigation-bar.types";

export function NavigationBar({
  title,
  subtitle,
  left,
  right,
  className,
  transparent = false,
}: NavigationBarProps) {
  const platform = useAppleBreakpoint();
  const compact = platform === "ios";

  return (
    <header
      className={clsx(
        navBarStyles({ transparent, size: compact ? "compact" : "normal" }),
        className
      )}
      role="banner"
    >
      <div className="flex min-w-0 flex-1 items-center justify-start gap-2">
        {left}
      </div>
      <div className="flex min-w-0 flex-shrink-0 flex-col items-center justify-center px-2 text-center">
        {title && (
          <h1 className="truncate text-[17px] font-semibold text-[var(--color-apple-text)]">
            {title}
          </h1>
        )}
        {subtitle && (
          <p className="truncate text-[11px] text-[var(--color-apple-text-tertiary)]">
            {subtitle}
          </p>
        )}
      </div>
      <div className="flex min-w-0 flex-1 items-center justify-end gap-2">
        {right}
      </div>
    </header>
  );
}
