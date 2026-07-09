"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import ScrollImageRow from "./ScrollImageRow";
import ToolCards from "./ToolCards";

const skills = [
  "Design",
  "User Experience",
  "Web Design",
  "React JS",
  "Motion Graphic",
  "Animation",
  "E-Commerce",
  "WordPress",
  "Webflow",
  "Prototyping",
  "Technology",
  "Startups",
  "Branding",
  "UI / UX",
  "Frontend",
  "Creativity",
  "Ideas",
  "Inspiration",
];

/**
 * A pill that magnetically drifts toward the cursor while hovered
 * and springs back to its resting place on leave.
 */
function MagneticPill({ label }: { label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const x = useSpring(mx, { stiffness: 200, damping: 15, mass: 0.4 });
  const y = useSpring(my, { stiffness: 200, damping: 15, mass: 0.4 });

  const handleMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    mx.set(relX * 0.5);
    my.set(relY * 0.5);
  };

  const reset = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{ x, y }}
      whileHover={{ scale: 1.1 }}
      className="cursor-default select-none rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium uppercase tracking-[0.15em] text-neutral-200 backdrop-blur-sm transition-colors duration-300 hover:border-white hover:bg-white hover:text-black"
    >
      {label}
    </motion.div>
  );
}

export default function WhyMe() {
  return (
    <section className="relative bg-[#050505] py-24 md:py-32">
      {/* Decorative floating tool cards in the side gutters */}
      <ToolCards />

      {/* Heading */}
      <div className="relative mx-auto max-w-[1700px] px-8 text-center">
        <p className="text-xs font-mono uppercase tracking-[0.5em] text-neutral-500">
          What I do
        </p>
        <h2 className="mx-auto mt-6 max-w-4xl font-serif text-4xl font-light italic leading-tight text-white md:text-6xl">
          Everything your product needs to feel considered.
        </h2>
      </div>

      {/* Magnetic pills */}
      <div className="mx-auto mt-16 flex max-w-5xl flex-wrap items-center justify-center gap-4 px-8">
        {skills.map((skill) => (
          <MagneticPill key={skill} label={skill} />
        ))}
      </div>

      {/* Scroll-animated row of 5 images */}
      <div className="mt-28 md:mt-36">
        <ScrollImageRow />
      </div>

      {/* Marquee banner */}
      <div className="mt-24 overflow-hidden border-y border-white/10 bg-white py-4">
        <motion.div
          className="flex w-max whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 20, ease: "linear", repeat: Infinity }}
        >
          {Array.from({ length: 2 }).map((_, copy) => (
            <div key={copy} className="flex shrink-0">
              {Array.from({ length: 8 }).map((_, i) => (
                <span
                  key={i}
                  className="mx-6 text-4xl font-black uppercase tracking-tight text-black md:text-6xl"
                >
                  Why me
                  <span className="mx-6 align-middle text-2xl md:text-4xl">✦</span>
                </span>
              ))}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
