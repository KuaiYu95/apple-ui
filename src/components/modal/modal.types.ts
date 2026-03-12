export type ModalProps = {
  open: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
  /** Prevent close on overlay click */
  closeOnOverlayClick?: boolean;
};
