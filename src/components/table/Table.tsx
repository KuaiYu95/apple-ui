"use client";

import { clsx } from "clsx";
import { tableStyles, tableRowStyles, tableCellStyles } from "./table.styles";
import type {
  TableProps,
  TableHeadProps,
  TableBodyProps,
  TableRowProps,
  TableCellProps,
} from "./table.types";

export function Table({ children, className }: TableProps) {
  return (
    <div className="overflow-x-auto rounded-[var(--radius-apple-md)] bg-[var(--color-apple-bg)] shadow-[var(--shadow-apple-sm)]">
      <table className={clsx(tableStyles(), className)}>{children}</table>
    </div>
  );
}

export function TableHead({ children, className }: TableHeadProps) {
  return <thead className={clsx(className)}>{children}</thead>;
}

export function TableBody({ children, className }: TableBodyProps) {
  return <tbody className={clsx(className)}>{children}</tbody>;
}

export function TableRow({
  children,
  className,
  onClick,
  onKeyDown,
  ...rest
}: TableRowProps) {
  return (
    <tr
      className={clsx(tableRowStyles({ interactive: !!onClick }), className)}
      onClick={onClick}
      onKeyDown={onKeyDown}
      {...rest}
    >
      {children}
    </tr>
  );
}

export function TableCell({
  children,
  className,
  header = false,
}: TableCellProps) {
  const Component = header ? "th" : "td";
  return (
    <Component className={clsx(tableCellStyles({ header }), className)}>
      {children}
    </Component>
  );
}
