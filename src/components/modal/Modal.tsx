"use client";

import { useEffect, useId, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { clsx } from "clsx";
import { overlayStyles, panelStyles } from "./modal.styles";
import { modalVariants } from "@/lib/motion";
import type { ModalProps } from "./modal.types";
import { focusTrap } from "@/utils/focus-trap";

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
  const titleId = useId();
  const descriptionId = useId();
  const previousFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!open) return;
    previousFocusRef.current = document.activeElement as HTMLElement | null;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
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
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <div
          className={clsx(overlayStyles, "flex items-center justify-center p-4")}
          onClick={closeOnOverlayClick ? onClose : undefined}
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
            role="dialog"
            aria-modal="true"
            aria-labelledby={title ? titleId : undefined}
            aria-describedby={description ? descriptionId : undefined}
          >
            {title && (
              <h2 id={titleId} className="text-[20px] font-semibold text-[var(--color-apple-text)]">
                {title}
              </h2>
            )}
            {description && (
              <p id={descriptionId} className="mt-1 text-[15px] text-[var(--color-apple-text-tertiary)]">
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
