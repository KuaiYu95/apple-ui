export type AlertVariant = "info" | "success" | "warning" | "error";

export type AlertProps = {
  title?: string;
  description?: React.ReactNode;
  variant?: AlertVariant;
  className?: string;
  role?: "alert" | "status";
};
