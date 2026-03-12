export type CommandItem = {
  id: string;
  label: string;
  keywords?: string[];
  icon?: React.ReactNode;
  onSelect: () => void;
};

export type CommandPaletteProps = {
  open: boolean;
  onClose: () => void;
  items: CommandItem[];
  searchPlaceholder?: string;
  className?: string;
};
