export type SpotlightResult = {
  id: string;
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
  onSelect: () => void;
};

export type SpotlightSearchProps = {
  open: boolean;
  onClose: () => void;
  results: SpotlightResult[];
  onSearch?: (query: string) => void;
  searchPlaceholder?: string;
  className?: string;
};
