export type ToastType = "success" | "error" | "warning" | "info" | "default";

export type ToastItem = {
  id: string;
  message: string;
  type?: ToastType;
  duration?: number;
};

export type ToastProps = {
  toasts: ToastItem[];
  remove: (id: string) => void;
};

export type ToastOptions = {
  duration?: number;
};
