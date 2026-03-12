export type AvatarProps = {
  src?: string | null;
  alt?: string;
  fallback?: string; // e.g. initials "JD"
  size?: "sm" | "md" | "lg";
  className?: string;
};
