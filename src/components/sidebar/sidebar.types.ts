export type SidebarItem = {
  id: string;
  label: string;
  icon?: React.ReactNode;
  href?: string;
  onClick?: () => void;
};

export type SidebarProps = {
  items: SidebarItem[];
  activeId?: string;
  onSelect?: (id: string) => void;
  collapsed?: boolean;
  onCollapse?: () => void;
  className?: string;
  /** Header slot above items */
  header?: React.ReactNode;
};
