"use client";

import { motion } from "framer-motion";
// import clsx from "clsx";

interface RollingTextProps {
  children: string;
  className?: string;
}

const ease = [0.22, 1, 0.36, 1];

export default function RollingText({
  children,
  className,
}: RollingTextProps) {
  const letters = children.split("");

  return (
    <motion.div
      initial="initial"
      whileHover="hover"
      animate="initial"
        className={`relative inline-flex overflow-hidden whitespace-nowrap cursor-pointer ${className ?? ""}`}
    >
      {/* Top */}
      <div className="flex">
        {letters.map((letter, i) => (
          <span key={i} className="relative overflow-hidden">
            <motion.span
              variants={{
                initial: { y: "0%" },
                hover: { y: "-105%" },
              }}
              transition={{
                duration: 0.40,
                delay: i * 0.085,
              }}
              className="block"
            >
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          </span>
        ))}
      </div>

      {/* Bottom */}
      <div className="absolute inset-0 flex">
        {letters.map((letter, i) => (
          <span key={i} className="relative overflow-hidden">
            <motion.span
              variants={{
                initial: { y: "105%" },
                hover: { y: "0%" },
              }}
              transition={{
                duration: 0.40,
                delay: i * 0.085,
              }}
              className="block"
            >
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          </span>
        ))}
      </div>
    </motion.div>
  );
}