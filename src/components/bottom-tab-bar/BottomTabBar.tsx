"use client";

import { motion } from "framer-motion";
import { clsx } from "clsx";
import { tabBarStyles, tabItemStyles } from "./bottom-tab-bar.styles";
import { defaultTransition, buttonTap } from "@/lib/motion";
import type { BottomTabBarProps } from "./bottom-tab-bar.types";

export function BottomTabBar({
  items,
  activeId,
  onSelect,
  className,
}: BottomTabBarProps) {
  return (
    <nav
      className={clsx(tabBarStyles(), className)}
      aria-label="Bottom tab bar"
      role="navigation"
    >
      {items.map((item) => {
        const active = activeId === item.id;
        const content = (
          <>
            <span className="flex shrink-0">
              {active && item.iconActive ? item.iconActive : item.icon}
            </span>
            <span className="truncate">{item.label}</span>
          </>
        );
        const common = {
          className: tabItemStyles({ active }),
          onClick: () => {
            onSelect?.(item.id);
            item.onClick?.();
          },
          whileTap: buttonTap,
          transition: defaultTransition,
        };
        if (item.href) {
          return (
            <motion.a
              key={item.id}
              href={item.href}
              {...common}
              aria-current={active ? ("page" as const) : undefined}
            >
              {content}
            </motion.a>
          );
        }
        return (
          <motion.button
            key={item.id}
            type="button"
            {...common}
            aria-current={active ? ("page" as const) : undefined}
          >
            {content}
          </motion.button>
        );
      })}
    </nav>
  );
}
