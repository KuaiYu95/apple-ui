"use client";

import { clsx } from "clsx";
import { listStyles, listGroupStyles, listItemStyles } from "./list.styles";
import type { ListProps, ListGroupProps, ListItemProps } from "./list.types";

export function List({ children, className }: ListProps) {
  return (
    <div className={clsx(listStyles(), className)} role="list">
      {children}
    </div>
  );
}

export function ListGroup({ title, children, className }: ListGroupProps) {
  return (
    <section className={clsx(listGroupStyles(), className)} aria-label={title}>
      {title && (
        <div className="px-4 py-2 text-[13px] font-medium text-[var(--color-apple-text-tertiary)]">
          {title}
        </div>
      )}
      {children}
    </section>
  );
}

export function ListItem({
  children,
  icon,
  trailing,
  description,
  href,
  onClick,
  className,
}: ListItemProps) {
  const content = (
    <>
      {icon && <span className="shrink-0 text-[var(--color-apple-text-tertiary)]">{icon}</span>}
      <span className="min-w-0 flex-1">
        <span className="block truncate">{children}</span>
        {description && (
          <span className="block truncate text-[13px] text-[var(--color-apple-text-tertiary)]">
            {description}
          </span>
        )}
      </span>
      {trailing && <span className="shrink-0">{trailing}</span>}
    </>
  );
  const props = {
    className: clsx(listItemStyles(), "w-full", className),
  };
  if (href) {
    return (
      <a href={href} {...props}>
        {content}
      </a>
    );
  }
  if (onClick) {
    return (
      <button type="button" onClick={onClick} {...props}>
        {content}
      </button>
    );
  }
  return (
    <div role="listitem" {...props}>
      {content}
    </div>
  );
}
