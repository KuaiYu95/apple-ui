"use client";

import { create } from "zustand";
import type { ToastItem, ToastOptions } from "./toast.types";

type ToastState = {
  toasts: ToastItem[];
  add: (message: string, type: ToastItem["type"], options?: ToastOptions) => string;
  remove: (id: string) => void;
};

const useToastStore = create<ToastState>((set) => ({
  toasts: [],
  add: (message, type, options) => {
    const id = `toast-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
    const next: ToastItem = {
      id,
      message,
      type,
      duration: options?.duration ?? 3000,
    };
    set((state) => ({ toasts: [...state.toasts, next] }));
    return id;
  },
  remove: (id) => {
    set((state) => ({ toasts: state.toasts.filter((t) => t.id !== id) }));
  },
}));

export function subscribe(listener: (toasts: ToastItem[]) => void) {
  return useToastStore.subscribe((state) => {
    listener([...state.toasts]);
  });
}

export function getToasts() {
  return [...useToastStore.getState().toasts];
}

export const toast = {
  success: (message: string, options?: ToastOptions) =>
    useToastStore.getState().add(message, "success", options),
  error: (message: string, options?: ToastOptions) =>
    useToastStore.getState().add(message, "error", options),
  warning: (message: string, options?: ToastOptions) =>
    useToastStore.getState().add(message, "warning", options),
  info: (message: string, options?: ToastOptions) =>
    useToastStore.getState().add(message, "info", options),
  message: (message: string, options?: ToastOptions) =>
    useToastStore.getState().add(message, "default", options),
  remove: (id: string) => useToastStore.getState().remove(id),
};
