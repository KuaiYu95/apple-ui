export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label?: string;
  error?: string;
  status?: "default" | "error" | "success";
  className?: string;
};
