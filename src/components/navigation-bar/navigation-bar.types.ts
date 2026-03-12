export type NavigationBarProps = {
  title?: string;
  subtitle?: string;
  left?: React.ReactNode;
  right?: React.ReactNode;
  className?: string;
  /** Compact on iOS, toolbar style on macOS */
  transparent?: boolean;
};
