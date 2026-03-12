export type DrawerPlacement = "bottom" | "left" | "right";

export type DrawerProps = {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  placement?: DrawerPlacement;
  className?: string;
};
