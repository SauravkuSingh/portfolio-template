"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

const images = [
  "https://i.pinimg.com/736x/fe/32/91/fe3291b74566789583cdbd7d1852067c.jpg",
  "https://i.pinimg.com/1200x/3f/b4/70/3fb470223d4c1006a88e4f4430f8ba67.jpg",
  "https://i.pinimg.com/1200x/2a/bd/27/2abd277c6f481f14e21ff024001c6f9d.jpg",
  "https://i.pinimg.com/736x/2b/23/22/2b2322346e2d80314a6c340a81e0b249.jpg",
  "https://i.pinimg.com/1200x/3c/6c/23/3c6c23d8f1c4b8c4468050d56514ac54.jpg",
  "https://i.pinimg.com/736x/66/c3/53/66c353d8f7bb2b59734edecdc535c70f.jpg"
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
      className="mx-auto grid max-w-[1800px] grid-cols-6 gap-3 px-8 md:gap-4"
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
        className="h-full w-full object-cover object-top grayscale transition-all duration-700 hover:grayscale-0 cursor-pointer border-2 border-white rounded-2xl hover:scale-110"
      />
    </motion.div>
  );
}
