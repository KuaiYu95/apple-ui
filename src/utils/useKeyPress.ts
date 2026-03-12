"use client";

import { useEffect } from "react";

export function useKeyPress(
  key: string,
  handler: (e: KeyboardEvent) => void,
  options?: { metaKey?: boolean; ctrlKey?: boolean; target?: Document | HTMLElement | null }
) {
  useEffect(() => {
    const target: Document | HTMLElement =
      (options?.target as Document | HTMLElement | undefined) ?? document;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key !== key) return;
      if (options?.metaKey && !e.metaKey) return;
      if (options?.ctrlKey && !e.ctrlKey) return;
      if (options?.metaKey === false && e.metaKey) return;
      e.preventDefault();
      handler(e);
    };
    target.addEventListener("keydown", handleKeyDown as unknown as EventListener);
    return () =>
      target.removeEventListener("keydown", handleKeyDown as unknown as EventListener);
  }, [key, handler, options?.metaKey, options?.ctrlKey, options?.target]);
}
