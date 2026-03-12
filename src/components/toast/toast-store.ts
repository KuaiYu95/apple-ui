"use client";

import type { ToastItem, ToastOptions } from "./toast.types";

type Listener = (toasts: ToastItem[]) => void;

let toasts: ToastItem[] = [];
const listeners = new Set<Listener>();

function notify() {
  listeners.forEach((l) => l([...toasts]));
}

function add(message: string, type: ToastItem["type"] = "default", options?: ToastOptions): string {
  const id = `toast-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
  toasts = [...toasts, { id, message, type, duration: options?.duration ?? 3000 }];
  notify();
  return id;
}

function remove(id: string) {
  toasts = toasts.filter((t) => t.id !== id);
  notify();
}

export function subscribe(listener: Listener) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function getToasts() {
  return [...toasts];
}

export const toast = {
  success: (message: string, options?: ToastOptions) => add(message, "success", options),
  error: (message: string, options?: ToastOptions) => add(message, "error", options),
  warning: (message: string, options?: ToastOptions) => add(message, "warning", options),
  info: (message: string, options?: ToastOptions) => add(message, "info", options),
  message: (message: string, options?: ToastOptions) => add(message, "default", options),
  remove,
};
