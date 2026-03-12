"use client";

import { clsx } from "clsx";
import { sidebarStyles, sidebarItemStyles } from "./sidebar.styles";
import type { SidebarProps } from "./sidebar.types";

export function Sidebar({
  items,
  activeId,
  onSelect,
  collapsed = false,
  onCollapse,
  className,
  header,
}: SidebarProps) {
  return (
    <aside
      className={clsx(sidebarStyles({ collapsed }), className)}
      aria-label="Sidebar navigation"
    >
      {header && (
        <div className="border-b border-[var(--color-apple-text-tertiary)]/15 p-3">
          {header}
        </div>
      )}
      <nav className="flex flex-1 flex-col gap-0.5 overflow-auto p-2">
        {items.map((item) => {
          const active = activeId === item.id;
          const content = (
            <>
              {item.icon && <span className="shrink-0">{item.icon}</span>}
              {!collapsed && <span className="truncate">{item.label}</span>}
            </>
          );
          const onClick = () => {
            onSelect?.(item.id);
            item.onClick?.();
          };
          const ariaCurrent = active ? ("page" as const) : undefined;
          if (item.href) {
            return (
              <a
                key={item.id}
                href={item.href}
                className={sidebarItemStyles({ active })}
                aria-current={ariaCurrent}
                onClick={onClick}
              >
                {content}
              </a>
            );
          }
          return (
            <button
              key={item.id}
              type="button"
              className={sidebarItemStyles({ active })}
              aria-current={ariaCurrent}
              onClick={onClick}
            >
              {content}
            </button>
          );
        })}
      </nav>
      {onCollapse && (
        <button
          type="button"
          onClick={onCollapse}
          className="min-h-[44px] px-3 text-[var(--color-apple-text-tertiary)] hover:bg-black/5 dark:hover:bg-white/10"
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {collapsed ? "→" : "←"}
        </button>
      )}
    </aside>
  );
}
