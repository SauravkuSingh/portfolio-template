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
      }, 750); // 400ms duration + (5 * 50ms) stagger + buffer
      return () => clearTimeout(timer);
    }
  }, [status]);

  // Handle pathname change (after navigation completes)
  useEffect(() => {
    if (status === "exiting" && pendingHref === pathname) {
      setStatus("entering");
      setPendingHref(null);
    } else if (status === "exiting" && pendingHref) {
      // Fallback: if the path changes but doesn't match exactly (due to queries/hashes)
      setStatus("entering");
      setPendingHref(null);
    }
  }, [pathname, status, pendingHref]);

  const navigateTo = (href: string) => {
    if (href === pathname) return;
    setStatus("exiting");
    setPendingHref(href);

    // After exit animation covers the screen, push the new route
    setTimeout(() => {
      router.push(href);
    }, 620); // 400ms duration + (5 * 50ms) stagger, minus a small overlap
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
          duration: 0.4,
          delay: index * 0.05,
          ease: [0.76, 0, 0.24, 1] as const,
        },
      },
      revealed: {
        y: "100%",
        transition: {
          duration: 0.4,
          delay: index * 0.05,
          ease: [0.76, 0, 0.24, 1] as const,
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
