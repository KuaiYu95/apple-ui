"use client";

import { useEffect, useState } from "react";

export type ColorScheme = "light" | "dark";

function getPreferredScheme(): ColorScheme {
  if (typeof window === "undefined") return "light";
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function usePrefersColorScheme(): ColorScheme {
  const [scheme, setScheme] = useState<ColorScheme>(getPreferredScheme);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = (event: MediaQueryListEvent) => {
      setScheme(event.matches ? "dark" : "light");
    };
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return scheme;
}
