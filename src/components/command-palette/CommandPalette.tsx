"use client";

import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search } from "lucide-react";
import { clsx } from "clsx";
import { GlassPanel } from "@/components/glass-panel/GlassPanel";
import { modalVariants } from "@/lib/motion";
import type { CommandPaletteProps } from "./command-palette.types";

export function CommandPalette({
  open,
  onClose,
  items,
  searchPlaceholder = "Search...",
  className,
}: CommandPaletteProps) {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);

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
    setSelectedIndex(0);
  }, [query]);

  useEffect(() => {
    if (!open) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((i) => (i + 1) % filtered.length);
      }
      if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((i) => (i - 1 + filtered.length) % filtered.length);
      }
      if (e.key === "Enter" && filtered[selectedIndex]) {
        e.preventDefault();
        filtered[selectedIndex].onSelect();
        onClose();
      }
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
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
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{ duration: 0.2 }}
          onClick={(e) => e.stopPropagation()}
          className={clsx("w-full max-w-xl", className)}
        >
          <GlassPanel className="overflow-hidden">
            <div className="flex items-center gap-2 border-b border-[var(--color-apple-text-tertiary)]/15 px-3 py-2">
              <Search className="h-5 w-5 shrink-0 text-[var(--color-apple-text-tertiary)]" />
              <input
                type="search"
                placeholder={searchPlaceholder}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
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
