"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { clsx } from "clsx";
import type { ContextMenuProps } from "./context-menu.types";

export function ContextMenu({ items, children, className }: ContextMenuProps) {
  const [open, setOpen] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const ref = useRef<HTMLDivElement>(null);
  const buttonRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const longPressTimerRef = useRef<number | null>(null);
  const interactiveItems = items.filter((item) => !item.divider && !item.disabled);

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

  useEffect(() => {
    if (!open || selectedIndex < 0) return;
    buttonRefs.current[selectedIndex]?.focus();
  }, [open, selectedIndex]);

  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    setPos({ x: e.clientX, y: e.clientY });
    setSelectedIndex(interactiveItems.length > 0 ? 0 : -1);
    setOpen(true);
  };

  const openAtElement = () => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setPos({ x: rect.left + rect.width / 2, y: rect.bottom });
    setSelectedIndex(interactiveItems.length > 0 ? 0 : -1);
    setOpen(true);
  };

  const startLongPress = () => {
    window.clearTimeout(longPressTimerRef.current ?? undefined);
    longPressTimerRef.current = window.setTimeout(() => {
      openAtElement();
    }, 500);
  };

  const clearLongPress = () => {
    window.clearTimeout(longPressTimerRef.current ?? undefined);
    longPressTimerRef.current = null;
  };

  const moveSelection = (direction: 1 | -1) => {
    if (interactiveItems.length === 0) return;
    setSelectedIndex((current) => {
      if (current < 0) return 0;
      return (current + direction + interactiveItems.length) % interactiveItems.length;
    });
  };

  return (
    <div
      ref={ref}
      className={clsx("inline-block", className)}
      onContextMenu={handleContextMenu}
      onTouchStart={startLongPress}
      onTouchEnd={clearLongPress}
      onTouchCancel={clearLongPress}
      onTouchMove={clearLongPress}
      onKeyDown={(e) => {
        if (e.key === "ContextMenu" || (e.shiftKey && e.key === "F10")) {
          e.preventDefault();
          openAtElement();
        }
      }}
    >
      {children}
      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed z-[60] min-w-[180px] rounded-[var(--radius-apple-md)] border border-[var(--color-apple-text-tertiary)]/15 bg-[var(--color-apple-bg)] py-1 shadow-[var(--shadow-apple-lg)]"
            style={{ left: pos.x, top: pos.y }}
            role="menu"
            onKeyDown={(e) => {
              if (e.key === "Escape") {
                e.preventDefault();
                setOpen(false);
              }
              if (e.key === "ArrowDown") {
                e.preventDefault();
                moveSelection(1);
              }
              if (e.key === "ArrowUp") {
                e.preventDefault();
                moveSelection(-1);
              }
              if (e.key === "Home") {
                e.preventDefault();
                setSelectedIndex(0);
              }
              if (e.key === "End") {
                e.preventDefault();
                setSelectedIndex(Math.max(interactiveItems.length - 1, 0));
              }
            }}
          >
            {items.map((item) =>
              item.divider ? (
                <li key={item.id} role="separator" className="my-1 h-px bg-[var(--color-apple-text-tertiary)]/20" />
              ) : (
                <li key={item.id} role="none">
                  <button
                    ref={(node) => {
                      const index = interactiveItems.findIndex((interactiveItem) => interactiveItem.id === item.id);
                      if (index >= 0) buttonRefs.current[index] = node;
                    }}
                    type="button"
                    role="menuitem"
                    disabled={item.disabled}
                    tabIndex={
                      interactiveItems.findIndex((interactiveItem) => interactiveItem.id === item.id) === selectedIndex
                        ? 0
                        : -1
                    }
                    className="flex w-full min-h-[44px] items-center gap-3 px-4 py-2.5 text-left text-[15px] text-[var(--color-apple-text)] hover:bg-black/5 focus:bg-black/5 focus:outline-none disabled:opacity-50 dark:hover:bg-white/10 dark:focus:bg-white/10"
                    onClick={() => {
                      item.onClick?.();
                      setOpen(false);
                    }}
                    onFocus={() => {
                      const index = interactiveItems.findIndex((interactiveItem) => interactiveItem.id === item.id);
                      if (index >= 0) setSelectedIndex(index);
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
