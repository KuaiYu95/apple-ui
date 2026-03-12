import { cva } from "class-variance-authority";

export const cardStyles = cva(
  "rounded-[var(--radius-apple-md)] bg-[var(--color-apple-bg)] shadow-[var(--shadow-apple-sm)] transition-shadow",
  {
    variants: {
      padding: {
        none: "",
        sm: "p-3",
        md: "p-4",
        lg: "p-6",
      },
      hover: {
        true: "hover:shadow-[var(--shadow-apple-md)]",
        false: "",
      },
    },
    defaultVariants: { padding: "md", hover: false },
  }
);
