"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { clsx } from "clsx";
import type { ContextMenuProps } from "./context-menu.types";

export function ContextMenu({ items, children, className }: ContextMenuProps) {
  const [open, setOpen] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const close = () => setOpen(false);
    document.addEventListener("click", close);
    document.addEventListener("scroll", close, true);
    return () => {
      document.removeEventListener("click", close);
      document.removeEventListener("scroll", close, true);
    };
  }, [open]);

  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    setPos({ x: e.clientX, y: e.clientY });
    setOpen(true);
  };

  const handleLongPress = () => {
    if (ref.current) {
      const r = ref.current.getBoundingClientRect();
      setPos({ x: r.left + r.width / 2, y: r.bottom });
      setOpen(true);
    }
  };

  return (
    <div
      ref={ref}
      className={clsx("inline-block", className)}
      onContextMenu={handleContextMenu}
    >
      {children}
      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed z-[60] min-w-[180px] rounded-[var(--radius-apple-md)] bg-[var(--color-apple-bg)] py-1 shadow-[var(--shadow-apple-lg)] border border-[var(--color-apple-text-tertiary)]/15"
            style={{ left: pos.x, top: pos.y }}
            role="menu"
          >
            {items.map((item) =>
              item.divider ? (
                <li key={item.id} role="separator" className="my-1 h-px bg-[var(--color-apple-text-tertiary)]/20" />
              ) : (
                <li key={item.id} role="none">
                  <button
                    type="button"
                    role="menuitem"
                    disabled={item.disabled}
                    className="flex w-full min-h-[44px] items-center gap-3 px-4 py-2.5 text-left text-[15px] text-[var(--color-apple-text)] hover:bg-black/5 dark:hover:bg-white/10 disabled:opacity-50 focus:outline-none focus:bg-black/5 dark:focus:bg-white/10"
                    onClick={() => {
                      item.onClick?.();
                      setOpen(false);
                    }}
                  >
                    {item.icon && <span className="shrink-0">{item.icon}</span>}
                    {item.label}
                  </button>
                </li>
              )
            )}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
