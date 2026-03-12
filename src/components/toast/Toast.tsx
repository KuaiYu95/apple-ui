"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { clsx } from "clsx";
import { toastItemStyles } from "./toast.styles";
import { toastVariants } from "@/lib/motion";
import type { ToastProps } from "./toast.types";

export function Toast({ toasts, remove }: ToastProps) {
  return (
    <div
      className="fixed bottom-6 left-1/2 z-[100] flex w-full max-w-sm -translate-x-1/2 flex-col gap-2 px-4"
      role="region"
      aria-label="Notifications"
    >
      <AnimatePresence mode="popLayout">
        {toasts.map((t) => (
          <ToastItem key={t.id} item={t} onRemove={() => remove(t.id)} />
        ))}
      </AnimatePresence>
    </div>
  );
}

function ToastItem({
  item,
  onRemove,
}: {
  item: ToastProps["toasts"][0];
  onRemove: () => void;
}) {
  const duration = item.duration ?? 3000;

  useEffect(() => {
    const t = setTimeout(onRemove, duration);
    return () => clearTimeout(t);
  }, [duration, onRemove]);

  return (
    <motion.div
      layout
      variants={toastVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
      className={toastItemStyles({ type: item.type ?? "default" })}
      role="status"
      aria-live="polite"
    >
      {item.message}
    </motion.div>
  );
}
