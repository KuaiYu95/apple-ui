export type CardPadding = "none" | "sm" | "md" | "lg";

export type CardProps = {
  children: React.ReactNode;
  className?: string;
  padding?: CardPadding;
  hover?: boolean;
  as?: "div" | "article" | "section";
};
