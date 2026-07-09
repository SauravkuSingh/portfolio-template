"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

type Card = {
  n: string;
  title: string;
  text: string;
  accent: string;
  image: string;
};

const cards: Card[] = [
  {
    n: "01",
    title: "Discovery",
    text: "We dig into your goals, users and market to frame the real problem before touching a pixel.",
    accent: "#ff4d17",
    image: "https://picsum.photos/seed/discovery-09/1600/1000",
  },
  {
    n: "02",
    title: "Strategy",
    text: "Positioning, structure and a clear plan — turning research into a direction everyone believes in.",
    accent: "#6ee7b7",
    image: "https://picsum.photos/seed/strategy-14/1600/1000",
  },
  {
    n: "03",
    title: "Design",
    text: "Interfaces with intent — considered type, motion and detail that make products feel premium.",
    accent: "#a78bfa",
    image: "https://picsum.photos/seed/design-27/1600/1000",
  },
  {
    n: "04",
    title: "Development",
    text: "Pixel-faithful, fast and accessible builds in modern React — animation baked in, not bolted on.",
    accent: "#60a5fa",
    image: "https://picsum.photos/seed/development-31/1600/1000",
  },
  {
    n: "05",
    title: "Launch",
    text: "We ship, measure and refine — so the work keeps paying off long after it goes live.",
    accent: "#fbbf24",
    image: "https://picsum.photos/seed/launch-42/1600/1000",
  },
];

export default function StackCards() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  return (
    <section
      ref={ref}
      className="relative bg-black"
      style={{ height: `${cards.length * 100}vh` }}
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Section label */}
        <div className="pointer-events-none absolute left-0 right-0 top-24 z-50 text-center">
          <p className="text-xs font-mono uppercase tracking-[0.5em] text-neutral-500">
            How I work
          </p>
        </div>

        {cards.map((card, i) => (
          <StackCard
            key={card.n}
            i={i}
            total={cards.length}
            progress={scrollYProgress}
            card={card}
          />
        ))}
      </div>
    </section>
  );
}

function StackCard({
  i,
  total,
  progress,
  card,
}: {
  i: number;
  total: number;
  progress: MotionValue<number>;
  card: Card;
}) {
  const isFirst = i === 0;
  const segment = 1 / (total - 1);
  const start = isFirst ? 0 : (i - 1) * segment;
  const end = isFirst ? segment : i * segment;

  // First card is already in place; the rest rise from the bottom, small → full.
  // No opacity fade — each card stays fully visible so it reads as a stacked layer.
  const y = useTransform(progress, [start, end], isFirst ? ["0%", "0%"] : ["100%", "0%"]);
  const scale = useTransform(progress, [start, end], isFirst ? [1, 1] : [0.55, 1]);
  const radius = useTransform(progress, [start, end], isFirst ? ["0px", "0px"] : ["56px", "0px"]);

  // Scroll parallax on the background image, symmetric around the centre card:
  // the outer cards (1 & 5) drift most, the middle card (3) the least/smoothest.
  // Tied to scroll, so it naturally reverses when scrolling back up.
  const center = (total - 1) / 2;
  const mag = 4 * Math.abs(i - center) + 2; // percent of the (over-scaled) image
  const imageY = useTransform(progress, [0, 1], [`${-mag}%`, `${mag}%`]);

  return (
    <motion.div
      style={{ y, scale, borderRadius: radius, zIndex: i }}
      className="absolute inset-0 overflow-hidden border-[3px] border-white bg-black"
    >
      {/* Full-bleed background image with scroll parallax */}
      <motion.img
        src={card.image}
        alt={card.title}
        style={{ y: imageY, scale: 1.3 }}
        className="absolute inset-0 h-full w-full object-cover"
      />
      {/* Legibility overlay */}
      <div className="absolute inset-0 bg-black/55" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/20" />

      <div className="relative mx-auto flex h-full max-w-[1700px] flex-col justify-center px-8 md:px-16">
        <span
          className="font-mono text-sm font-semibold uppercase tracking-[0.3em]"
          style={{ color: card.accent }}
        >
          {card.n} — {card.title}
        </span>
        <h3 className="mt-6 max-w-4xl font-serif text-5xl font-light italic leading-[1.05] text-white md:text-8xl">
          {card.title}
        </h3>
        <p className="mt-8 max-w-xl text-lg leading-8 text-neutral-400">
          {card.text}
        </p>

        {/* Big ghost index in the corner */}
        <span
          className="pointer-events-none absolute -bottom-10 right-4 select-none font-serif text-[28vw] font-light italic leading-none text-white/25 md:text-[20vw]"
        >
          {card.n}
        </span>
      </div>
    </motion.div>
  );
}
