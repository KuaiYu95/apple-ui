"use client";

import { useEffect, useState } from "react";
import { breakpoints } from "@/theme/tokens";

export type ApplePlatform = "ios" | "ipad" | "macos";

export function useAppleBreakpoint(): ApplePlatform {
  const [platform, setPlatform] = useState<ApplePlatform>("macos");

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w <= breakpoints.ios) setPlatform("ios");
      else if (w < breakpoints.macos) setPlatform("ipad");
      else setPlatform("macos");
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return platform;
}
