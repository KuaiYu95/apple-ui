"use client";

import { clsx } from "clsx";
import { avatarStyles } from "./avatar.styles";
import type { AvatarProps } from "./avatar.types";

export function Avatar({
  src,
  alt,
  fallback,
  size = "md",
  className,
}: AvatarProps) {
  const initials = fallback ?? (alt ? alt.slice(0, 2).toUpperCase() : "?");

  return (
    <span
      className={clsx(avatarStyles({ size }), className)}
      role="img"
      aria-label={alt ?? undefined}
    >
      {src ? (
        <img src={src} alt={alt ?? ""} className="h-full w-full object-cover" />
      ) : (
        initials
      )}
    </span>
  );
}
