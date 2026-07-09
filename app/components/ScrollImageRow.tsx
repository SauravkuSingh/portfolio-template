"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

const images = [
  "https://picsum.photos/seed/row-a1/600/800",
  "https://picsum.photos/seed/row-b2/600/800",
  "https://picsum.photos/seed/row-c3/600/800",
  "https://picsum.photos/seed/row-d4/600/800",
  "https://picsum.photos/seed/row-e5/600/800",
];

export default function ScrollImageRow() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  return (
    <div
      ref={ref}
      className="mx-auto grid max-w-[1700px] grid-cols-5 gap-3 px-8 md:gap-6"
    >
      {images.map((src, i) => (
        <ParallaxImage
          key={src}
          src={src}
          i={i}
          total={images.length}
          progress={scrollYProgress}
        />
      ))}
    </div>
  );
}

function ParallaxImage({
  src,
  i,
  total,
  progress,
}: {
  src: string;
  i: number;
  total: number;
  progress: MotionValue<number>;
}) {
  // Staggered, symmetric parallax: outer images (1 & 5) travel most, the
  // middle image (3) the least/smoothest. Scroll-linked, so it reverses
  // automatically when scrolling back up.
  const center = (total - 1) / 2;
  const factor = Math.abs(i - center); // 0, 1, 2
  const travel = 30 + factor * 55; // px
  const y = useTransform(progress, [0, 1], [-travel, travel]);

  return (
    <motion.div
      style={{ y }}
      className="aspect-3/4 overflow-hidden rounded-2xl border border-white/10"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt=""
        className="h-full w-full object-cover grayscale transition-all duration-700 hover:grayscale-0"
      />
    </motion.div>
  );
}
