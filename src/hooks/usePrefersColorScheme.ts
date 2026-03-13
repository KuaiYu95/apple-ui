"use client";

import { useEffect, useState } from "react";

export type ColorScheme = "light" | "dark";

function getPreferredScheme(): ColorScheme {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export function usePrefersColorScheme(): ColorScheme {
  // 让 SSR 与客户端首帧渲染保持一致：初始一律为 "light"
  const [scheme, setScheme] = useState<ColorScheme>("light");

  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = (event: MediaQueryListEvent) => {
      setScheme(event.matches ? "dark" : "light");
    };
    mq.addEventListener("change", handler);
    // 首次挂载时根据实际系统配色方案更新一次
    setScheme(mq.matches ? "dark" : "light");

    return () => mq.removeEventListener("change", handler);
  }, []);

  return scheme;
}
