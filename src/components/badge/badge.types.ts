export type BadgeVariant = "default" | "primary" | "success" | "warning" | "danger";

export type BadgeProps = {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
};
