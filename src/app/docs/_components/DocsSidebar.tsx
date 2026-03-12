"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";
import { categoryLabels, getGroupedComponentDocs } from "../_data/component-docs";

export function DocsSidebar() {
  const pathname = usePathname();
  const groups = getGroupedComponentDocs();

  const topItems = [
    { href: "/", label: "总览" },
    { href: "/components", label: "组件" },
    { href: "/systems", label: "系统示例" },
  ];

  return (
    <div
      className="h-full overflow-auto rounded-[24px] border border-[var(--color-apple-text-tertiary)]/15 bg-[var(--color-apple-bg-secondary)]/70 p-3 backdrop-blur-md"
      style={{ scrollbarGutter: "stable" }}
    >
      <div className="mb-4 px-2">
        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--color-apple-text-tertiary)]">
          Apple UI 文档
        </p>
      </div>

      <nav className="space-y-1">
        {topItems.map((item) => {
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={clsx(
                "flex min-h-[40px] items-center rounded-2xl px-3 text-sm transition-colors",
                active
                  ? "bg-[var(--color-apple-primary)]/12 font-medium text-[var(--color-apple-primary)]"
                  : "text-[var(--color-apple-text-secondary)] hover:bg-black/5 hover:text-[var(--color-apple-text)] dark:hover:bg-white/10"
              )}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="mt-6 space-y-5">
        {groups.map((group) => (
          <section key={group.category}>
            <div className="mb-2 px-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--color-apple-text-tertiary)]">
              {categoryLabels[group.category]}
            </div>
            <div className="space-y-1">
              {group.items.map((item) => {
                const href = `/components/${item.slug}`;
                const active = pathname === href;
                return (
                  <Link
                    key={item.slug}
                    href={href}
                    className={clsx(
                      "flex min-h-[36px] items-center rounded-xl px-3 text-sm transition-colors",
                      active
                        ? "bg-[var(--color-apple-primary)]/12 font-medium text-[var(--color-apple-primary)]"
                        : "text-[var(--color-apple-text-secondary)] hover:bg-black/5 hover:text-[var(--color-apple-text)] dark:hover:bg-white/10"
                    )}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
