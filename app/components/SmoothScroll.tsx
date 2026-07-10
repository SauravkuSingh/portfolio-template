"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

/**
 * Site-wide smooth scrolling via Lenis.
 *
 * Renders nothing and sets Lenis up imperatively in an effect, so it's fully
 * SSR-safe and doesn't wrap the app tree. Lenis attaches to the window and
 * drives the real scroll position, so sticky sections and Framer Motion's
 * useScroll (stack cards, parallax) keep working normally.
 */
export default function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      duration: 1.2,
      smoothWheel: true,
    });

    let rafId = requestAnimationFrame(function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    });

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return null;
}
