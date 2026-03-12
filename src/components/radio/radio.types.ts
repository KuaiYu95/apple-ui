export type RadioOption = {
  value: string;
  label: React.ReactNode;
};

export type RadioProps = {
  name: string;
  value: string;
  options: RadioOption[];
  onChange?: (value: string) => void;
  className?: string;
  disabled?: boolean;
};
