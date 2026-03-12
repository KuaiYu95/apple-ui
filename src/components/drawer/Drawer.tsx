"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { clsx } from "clsx";
import { overlayStyles, panelPlacementStyles } from "./drawer.styles";
import type { DrawerProps } from "./drawer.types";

const slideVariants = {
  bottom: { hidden: { y: "100%" }, visible: { y: 0 }, exit: { y: "100%" } },
  left: { hidden: { x: "-100%" }, visible: { x: 0 }, exit: { x: "-100%" } },
  right: { hidden: { x: "100%" }, visible: { x: 0 }, exit: { x: "100%" } },
};

export function Drawer({
  open,
  onClose,
  title,
  children,
  placement = "bottom",
  className,
}: DrawerProps) {
  useEffect(() => {
    if (!open) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  const v = slideVariants[placement];

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className={overlayStyles}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            aria-hidden
          />
          <motion.div
            className={clsx(panelPlacementStyles({ placement }), className)}
            variants={v}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
            role="dialog"
            aria-modal="true"
            aria-labelledby={title ? "drawer-title" : undefined}
          >
            {title && (
              <h2 id="drawer-title" className="border-b border-[var(--color-apple-text-tertiary)]/15 px-4 py-3 text-[17px] font-semibold text-[var(--color-apple-text)]">
                {title}
              </h2>
            )}
            <div className="flex-1 overflow-auto p-4">{children}</div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
