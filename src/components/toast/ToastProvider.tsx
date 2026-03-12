"use client";

import { useEffect, useState } from "react";
import { Toast } from "./Toast";
import { subscribe, getToasts, toast } from "./toast-store";
import type { ToastItem } from "./toast.types";

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<ToastItem[]>(getToasts);

  useEffect(() => {
    const unsub = subscribe(setToasts);
    return () => {
      unsub();
    };
  }, []);

  return (
    <>
      {children}
      <Toast toasts={toasts} remove={toast.remove} />
    </>
  );
}
