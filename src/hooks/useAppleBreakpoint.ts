"use client";

import { useEffect, useState } from "react";
import { breakpoints } from "@/theme/tokens";

export type ApplePlatform = "ios" | "ipad" | "macos";

function getPlatform(): ApplePlatform {
  const width = window.innerWidth;
  if (width <= breakpoints.ios) return "ios";
  if (width < breakpoints.macos) return "ipad";
  return "macos";
}

export function useAppleBreakpoint(): ApplePlatform {
  // 让 SSR 与客户端首帧渲染保持一致：初始一律为 "macos"
  const [platform, setPlatform] = useState<ApplePlatform>("macos");

  useEffect(() => {
    const update = () => setPlatform(getPlatform());

    // 首次挂载时根据实际 viewport 宽度更新一次
    update();

    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return platform;
}
