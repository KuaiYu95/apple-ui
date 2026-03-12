export type CardPadding = "none" | "sm" | "md" | "lg";

export type CardProps = React.HTMLAttributes<HTMLElement> & {
  children: React.ReactNode;
  padding?: CardPadding;
  hover?: boolean;
  as?: "div" | "article" | "section";
};
