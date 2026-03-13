"use client";

import { useEffect, useState } from "react";
import { breakpoints } from "@/theme/tokens";

export type ApplePlatform = "ios" | "ipad" | "macos";

function getPlatform(): ApplePlatform {
  if (typeof window === "undefined") return "macos";

  const width = window.innerWidth;
  if (width <= breakpoints.ios) return "ios";
  if (width < breakpoints.macos) return "ipad";
  return "macos";
}

export function useAppleBreakpoint(): ApplePlatform {
  const [platform, setPlatform] = useState<ApplePlatform>(getPlatform);

  useEffect(() => {
    const update = () => setPlatform(getPlatform());
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return platform;
}
