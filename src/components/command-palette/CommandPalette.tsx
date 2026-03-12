"use client";

import { useState, useEffect, useMemo, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search } from "lucide-react";
import { clsx } from "clsx";
import { GlassPanel } from "@/components/glass-panel/GlassPanel";
import { modalVariants } from "@/lib/motion";
import type { CommandPaletteProps } from "./command-palette.types";
import { focusTrap } from "@/utils/focus-trap";

export function CommandPalette({
  open,
  onClose,
  items,
  searchPlaceholder = "Search...",
  className,
}: CommandPaletteProps) {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const panelRef = useRef<HTMLDivElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  const filtered = useMemo(() => {
    const q = query.toLowerCase();
    if (!q) return items;
    return items.filter(
      (i) =>
        i.label.toLowerCase().includes(q) ||
        i.keywords?.some((k) => k.toLowerCase().includes(q))
    );
  }, [items, query]);

  useEffect(() => {
    if (!open) return;
    previousFocusRef.current = document.activeElement as HTMLElement | null;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowDown" && filtered.length > 0) {
        e.preventDefault();
        setSelectedIndex((i) => (i + 1) % filtered.length);
      }
      if (e.key === "ArrowUp" && filtered.length > 0) {
        e.preventDefault();
        setSelectedIndex((i) => (i - 1 + filtered.length) % filtered.length);
      }
      if (e.key === "Enter" && filtered[selectedIndex]) {
        e.preventDefault();
        filtered[selectedIndex].onSelect();
        onClose();
      }
    };
    const releaseFocusTrap = focusTrap(panelRef.current);
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      releaseFocusTrap();
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
      previousFocusRef.current?.focus();
    };
  }, [open, onClose, filtered, selectedIndex]);

  if (!open) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-start justify-center bg-black/30 pt-[15vh] px-4"
        onClick={onClose}
      >
        <motion.div
          ref={panelRef}
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{ duration: 0.2 }}
          onClick={(e) => e.stopPropagation()}
          className={clsx("w-full max-w-xl", className)}
          role="dialog"
          aria-modal="true"
          aria-label="Command palette"
        >
          <GlassPanel className="overflow-hidden">
            <div className="flex items-center gap-2 border-b border-[var(--color-apple-text-tertiary)]/15 px-3 py-2">
              <Search className="h-5 w-5 shrink-0 text-[var(--color-apple-text-tertiary)]" />
              <input
                type="search"
                placeholder={searchPlaceholder}
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setSelectedIndex(0);
                }}
                className="min-h-[44px] flex-1 bg-transparent text-[15px] text-[var(--color-apple-text)] placeholder:text-[var(--color-apple-text-tertiary)] focus:outline-none"
                autoFocus
                aria-label="Search commands"
              />
            </div>
            <ul
              className="max-h-[60vh] overflow-auto py-1"
              role="listbox"
              aria-activedescendant={filtered[selectedIndex]?.id ? `cmd-${filtered[selectedIndex].id}` : undefined}
            >
              {filtered.map((item, i) => (
                <li key={item.id} id={`cmd-${item.id}`} role="option" aria-selected={i === selectedIndex}>
                  <button
                    type="button"
                    className={clsx(
                      "flex w-full min-h-[44px] items-center gap-3 px-4 py-2.5 text-left text-[15px] text-[var(--color-apple-text)] focus:outline-none",
                      i === selectedIndex
                        ? "bg-[var(--color-apple-primary)]/15"
                        : "hover:bg-black/5 dark:hover:bg-white/10"
                    )}
                    onClick={() => {
                      item.onSelect();
                      onClose();
                    }}
                  >
                    {item.icon && <span className="shrink-0">{item.icon}</span>}
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </GlassPanel>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
