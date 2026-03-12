export type TabsSize = "sm" | "md" | "lg";

export type TabsVariant = "underlined" | "segmented";

export interface TabItem {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface TabsProps {
  items: TabItem[];
  value: string;
  onChange: (value: string) => void;
  size?: TabsSize;
  variant?: TabsVariant;
  ariaLabel?: string;
  className?: string;
}

