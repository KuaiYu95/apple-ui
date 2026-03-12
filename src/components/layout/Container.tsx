"use client";

import { clsx } from "clsx";

export type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  maxWidth?: "sm" | "md" | "lg" | "full";
  padding?: "none" | "sm" | "md" | "lg";
  as?: "div" | "main" | "section";
};

const maxWidthClass = {
  sm: "max-w-[640px]",
  md: "max-w-[768px]",
  lg: "max-w-[1200px]",
  full: "max-w-full",
};

const paddingClass = {
  none: "",
  sm: "px-4 py-3",
  md: "px-6 py-5",
  lg: "px-8 py-6",
};

export function Container({
  children,
  className,
  maxWidth = "lg",
  padding = "md",
  as: Component = "div",
}: ContainerProps) {
  return (
    <Component
      className={clsx(
        "mx-auto w-full",
        maxWidthClass[maxWidth],
        paddingClass[padding],
        className
      )}
    >
      {children}
    </Component>
  );
}
