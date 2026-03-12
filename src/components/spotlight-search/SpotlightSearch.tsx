"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search } from "lucide-react";
import { clsx } from "clsx";
import { GlassPanel } from "@/components/glass-panel/GlassPanel";
import type { SpotlightSearchProps } from "./spotlight-search.types";
import { focusTrap } from "@/utils/focus-trap";

const overlayVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};

const panelVariants = {
  hidden: { y: 10, scale: 0.985 },
  visible: { y: 0, scale: 1 },
  exit: { y: 8, scale: 0.99 },
};

export function SpotlightSearch({
  open,
  onClose,
  results,
  onSearch,
  searchPlaceholder = "Search",
  className,
}: SpotlightSearchProps) {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const panelRef = useRef<HTMLDivElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    onSearch?.(query);
  }, [query, onSearch]);

  useEffect(() => {
    if (!open) return;
    previousFocusRef.current = document.activeElement as HTMLElement | null;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowDown" && results.length > 0) {
        e.preventDefault();
        setSelectedIndex((i) => Math.min(i + 1, results.length - 1));
      }
      if (e.key === "ArrowUp" && results.length > 0) {
        e.preventDefault();
        setSelectedIndex((i) => Math.max(i - 1, 0));
      }
      if (e.key === "Enter" && results[selectedIndex]) {
        e.preventDefault();
        results[selectedIndex].onSelect();
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
  }, [open, onClose, results, selectedIndex]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-start bg-black/35 px-4 pt-[20vh] backdrop-blur-[8px]"
          onClick={onClose}
        >
          <motion.div
            ref={panelRef}
            variants={panelVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className={clsx("w-full max-w-2xl", className)}
            role="dialog"
            aria-modal="true"
            aria-label="Spotlight search"
          >
            <GlassPanel blur="lg" className="overflow-hidden">
              <div className="flex items-center gap-3 px-4 py-3">
                <Search className="h-6 w-6 shrink-0 text-[var(--color-apple-text-tertiary)]" />
                <input
                  type="search"
                  placeholder={searchPlaceholder}
                  value={query}
                  onChange={(e) => {
                    setQuery(e.target.value);
                    setSelectedIndex(0);
                  }}
                  className="min-h-[48px] flex-1 bg-transparent text-[18px] text-[var(--color-apple-text)] placeholder:text-[var(--color-apple-text-tertiary)] focus:outline-none"
                  autoFocus
                  aria-label="Search"
                />
              </div>
              <ul className="max-h-[50vh] overflow-auto border-t border-[var(--color-apple-text-tertiary)]/15 py-2" role="listbox">
                {results.map((item, i) => (
                  <li key={item.id}>
                    <button
                      type="button"
                      className={clsx(
                        "flex w-full min-h-[52px] items-center gap-4 px-4 py-3 text-left text-[var(--color-apple-text)] focus:outline-none",
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
                      <span className="min-w-0 flex-1">
                        <span className="block truncate text-[15px] font-medium">{item.title}</span>
                        {item.subtitle && (
                          <span className="block truncate text-[13px] text-[var(--color-apple-text-tertiary)]">
                            {item.subtitle}
                          </span>
                        )}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </GlassPanel>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
