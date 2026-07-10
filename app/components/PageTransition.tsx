"use client";

import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

/**
 * Gives every page's content the same "reveal after the ladder" entrance.
 * Keyed by pathname so it replays on each navigation, delayed so it fades in
 * as the ladder uncovers the screen. Opacity-only (no transform) so it doesn't
 * break sticky sections like the home-page stack cards.
 */
export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <motion.div
      key={pathname}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
    >
      {children}
    </motion.div>
  );
}
