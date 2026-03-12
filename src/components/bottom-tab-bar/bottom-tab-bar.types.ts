export type BottomTabItem = {
  id: string;
  label: string;
  icon: React.ReactNode;
  iconActive?: React.ReactNode;
  href?: string;
  onClick?: () => void;
};

export type BottomTabBarProps = {
  items: BottomTabItem[];
  activeId: string;
  onSelect?: (id: string) => void;
  className?: string;
};
