export type ContextMenuItem = {
  id: string;
  label: string;
  icon?: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
  divider?: boolean;
};

export type ContextMenuProps = {
  items: ContextMenuItem[];
  children: React.ReactNode;
  className?: string;
};
