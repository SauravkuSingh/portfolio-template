"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";

interface TransitionContextType {
  navigateTo: (href: string) => void;
  status: "idle" | "exiting" | "entering";
}

const TransitionContext = createContext<TransitionContextType | undefined>(undefined);

export const useTransition = () => {
  const context = useContext(TransitionContext);
  if (!context) {
    throw new Error("useTransition must be used within a TransitionProvider");
  }
  return context;
};

export default function TransitionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const [status, setStatus] = useState<"idle" | "exiting" | "entering">("entering");
  const [pendingHref, setPendingHref] = useState<string | null>(null);

  // Trigger entrance animation on initial mount
  useEffect(() => {
    if (status === "entering") {
      const timer = setTimeout(() => {
        setStatus("idle");
      }, 620); // 340ms duration + (5 * 40ms) stagger + buffer
      return () => clearTimeout(timer);
    }
  }, [status]);

  // Reveal only once navigation has actually landed on the new route — at that
  // point the screen is fully covered. Hold briefly so the new page can render
  // behind the panels, then reveal it, so content appears AFTER the animation.
  useEffect(() => {
    if (status === "exiting" && pendingHref && pathname === pendingHref) {
      const timer = setTimeout(() => {
        setStatus("entering");
        setPendingHref(null);
      }, 300); // hold the fully-covered screen so the cover clearly completes first
      return () => clearTimeout(timer);
    }
  }, [pathname, status, pendingHref]);

  const navigateTo = (href: string) => {
    if (href === pathname) return;
    setStatus("exiting");
    setPendingHref(href);

    // Push only after the panels have fully covered the screen, so the page
    // swap happens completely hidden behind them.
    setTimeout(() => {
      router.push(href);
    }, 560); // 340ms duration + (5 * 40ms) stagger + small buffer
  };

  // 6 vertical columns for the ladder animation
  const columns = Array.from({ length: 6 });
  const columnWidth = `${100 / 6}vw`;

  // Columns visual states
  const getVariants = (index: number) => {
    return {
      hidden: {
        y: "-100%",
        // Instant reset so the panels don't visibly sweep back up across the
        // screen when the transition finishes and status returns to "idle".
        transition: { duration: 0 },
      },
      covered: {
        y: "0%",
        transition: {
          duration: 0.34,
          delay: index * 0.04,
          ease: [0.65, 0, 0.35, 1] as const,
        },
      },
      revealed: {
        y: "100%",
        transition: {
          duration: 0.34,
          delay: index * 0.04,
          ease: [0.65, 0, 0.35, 1] as const,
        },
      },
    };
  };

  return (
    <TransitionContext.Provider value={{ navigateTo, status }}>
      {/* Page Content */}
      <div className={`flex flex-col min-h-screen ${status !== "idle" ? "pointer-events-none" : ""}`}>
        {children}
      </div>

      {/* Ladder Animation Panels */}
      <div className="fixed inset-0 pointer-events-none z-[9999] flex w-screen h-screen overflow-hidden">
        {columns.map((_, i) => {
          let animateState = "hidden";
          if (status === "exiting") {
            animateState = "covered";
          } else if (status === "entering") {
            animateState = "revealed";
          }

          return (
            <motion.div
              key={i}
              className="h-full bg-white border-x border-neutral-200"
              style={{
                width: columnWidth,
                left: `${i * (100 / 6)}vw`,
                position: "absolute",
              }}
              initial="hidden"
              animate={animateState}
              exit="hidden"
              variants={getVariants(i)}
            />
          );
        })}
      </div>
    </TransitionContext.Provider>
  );
}
