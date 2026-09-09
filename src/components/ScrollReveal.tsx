import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right" | "down" | "scale";
  duration?: number;
}

const ScrollReveal = ({ children, className = "", delay = 0, direction = "up", duration = 0.7 }: ScrollRevealProps) => {
  const directionMap = {
    up: { y: 40, x: 0, scale: 1 },
    down: { y: -40, x: 0, scale: 1 },
    left: { x: -50, y: 0, scale: 1 },
    right: { x: 50, y: 0, scale: 1 },
    scale: { x: 0, y: 0, scale: 0.85 },
  };

  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(6px)", ...directionMap[direction] }}
      whileInView={{ opacity: 1, filter: "blur(0px)", x: 0, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
