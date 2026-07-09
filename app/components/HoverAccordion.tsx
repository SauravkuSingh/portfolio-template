"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

type Row = {
  title: string;
  meta: string;
  images: string[];
};

const rows: Row[] = [
  {
    title: "Branding",
    meta: "Identity · Art Direction",
    images: ["brand-1", "brand-2", "brand-3", "brand-4"],
  },
  {
    title: "Web Design",
    meta: "UI · UX · Systems",
    images: ["web-1", "web-2", "web-3", "web-4"],
  },
  {
    title: "Motion",
    meta: "Animation · Interaction",
    images: ["motion-1", "motion-2", "motion-3", "motion-4"],
  },
  {
    title: "Development",
    meta: "React · Next · Webflow",
    images: ["dev-1", "dev-2", "dev-3", "dev-4"],
  },
];

export default function HoverAccordion() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="bg-black py-24 md:py-32">
      <div className="mx-auto max-w-[1700px] px-8">
        <p className="text-xs font-mono uppercase tracking-[0.5em] text-neutral-500">
          Selected work
        </p>
      </div>

      <div className="mt-12 w-full border-t border-white/10">
        {rows.map((row, i) => (
          <div
            key={row.title}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            className="group w-full border-b border-white/10 transition-colors duration-300 hover:bg-white/[0.03]"
          >
            <div className="mx-auto flex max-w-[1700px] items-center justify-between gap-6 px-8 py-8 md:py-10">
              <div className="flex items-baseline gap-6">
                <span className="font-mono text-xs text-neutral-600">
                  0{i + 1}
                </span>
                <h3 className="font-serif text-4xl font-light italic text-neutral-400 transition-colors duration-300 group-hover:text-white md:text-7xl">
                  {row.title}
                </h3>
              </div>
              <div className="flex items-center gap-6">
                <span className="hidden text-xs font-mono uppercase tracking-[0.2em] text-neutral-500 sm:block">
                  {row.meta}
                </span>
                <ArrowUpRight
                  className="text-neutral-500 transition-all duration-300 group-hover:rotate-0 group-hover:text-white"
                  size={28}
                />
              </div>
            </div>

            {/* Reveal strip of small image cards on hover */}
            <AnimatePresence initial={false}>
              {hovered === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <div className="mx-auto flex max-w-[1700px] gap-4 overflow-x-auto px-8 pb-10">
                    {row.images.map((seed, j) => (
                      <motion.div
                        key={seed}
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.05 * j, duration: 0.4 }}
                        className="relative h-40 w-64 shrink-0 overflow-hidden rounded-xl border border-white/10 md:h-48 md:w-72"
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={`https://picsum.photos/seed/${seed}/600/400`}
                          alt={`${row.title} ${j + 1}`}
                          className="h-full w-full object-cover grayscale transition-all duration-500 hover:scale-105 hover:grayscale-0"
                        />
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
