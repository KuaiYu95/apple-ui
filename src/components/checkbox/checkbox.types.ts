export type CheckboxProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "type" | "onChange"
> & {
  checked: boolean;
  onChange?: (checked: boolean) => void;
  label?: React.ReactNode;
  className?: string;
};
