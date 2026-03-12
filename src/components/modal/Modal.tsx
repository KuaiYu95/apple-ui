"use client";

import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { clsx } from "clsx";
import { overlayStyles, panelStyles } from "./modal.styles";
import { modalVariants } from "@/lib/motion";
import type { ModalProps } from "./modal.types";

export function Modal({
  open,
  onClose,
  title,
  description,
  children,
  className,
  closeOnOverlayClick = true,
}: ModalProps) {
  const panelRef = useRef<HTMLDivElement>(null);

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

  return (
    <AnimatePresence>
      {open && (
        <div
          className={clsx(overlayStyles, "flex items-center justify-center p-4")}
          onClick={closeOnOverlayClick ? onClose : undefined}
          role="dialog"
          aria-modal="true"
          aria-labelledby={title ? "modal-title" : undefined}
          aria-describedby={description ? "modal-desc" : undefined}
        >
          <motion.div
            ref={panelRef}
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
            className={clsx(panelStyles, className)}
            onClick={(e) => e.stopPropagation()}
          >
            {title && (
              <h2 id="modal-title" className="text-[20px] font-semibold text-[var(--color-apple-text)]">
                {title}
              </h2>
            )}
            {description && (
              <p id="modal-desc" className="mt-1 text-[15px] text-[var(--color-apple-text-tertiary)]">
                {description}
              </p>
            )}
            {(title || description) && <div className="mt-4">{children}</div>}
            {!title && !description && children}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
