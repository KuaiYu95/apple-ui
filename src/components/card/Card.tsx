"use client";

import { clsx } from "clsx";
import { cardStyles } from "./card.styles";
import type { CardProps } from "./card.types";

export function Card({
  children,
  className,
  padding = "md",
  hover = false,
  as: Component = "div",
}: CardProps) {
  return (
    <Component className={clsx(cardStyles({ padding, hover }), className)}>
      {children}
    </Component>
  );
}
