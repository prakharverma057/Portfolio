import { Variants } from "framer-motion";

export const fadeInUp = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8 },
};

export const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const cardHover = {
  whileHover: { y: -5, scale: 1.05 },
  whileTap: { scale: 0.95 },
};
