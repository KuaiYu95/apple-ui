export type ListItemProps = {
  children: React.ReactNode;
  icon?: React.ReactNode;
  trailing?: React.ReactNode;
  description?: string;
  href?: string;
  onClick?: () => void;
  className?: string;
};

export type ListGroupProps = {
  title?: string;
  children: React.ReactNode;
  className?: string;
};

export type ListProps = {
  children: React.ReactNode;
  className?: string;
};
