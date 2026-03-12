import { tokens } from "@/theme/tokens";

export const defaultTransition = {
  duration: tokens.motion.duration,
  ease: tokens.motion.ease,
};

export const modalVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.95 },
};

export const toastVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 },
};

export const buttonTap = { scale: 0.96 };
