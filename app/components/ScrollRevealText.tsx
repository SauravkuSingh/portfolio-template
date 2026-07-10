"use client";

import { Fragment, useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

type Mark = "hl" | "underline" | "wavy" | "circle" | "box";
export type Segment = { text: string; mark?: Mark };

// hl = highlighter fill · underline = marker underline · wavy = squiggle
// circle = ellipse around · box = rectangle around
const defaultSegments: Segment[] = [
  { text: "I design and build" },
  { text: "digital products", mark: "circle" },
  { text: "end to end — from the first rough idea to the" },
  { text: "last line of production code", mark: "underline" },
  { text: ". I sweat the" },
  { text: "details", mark: "hl" },
  { text: "most people never notice: the weight of a" },
  { text: "typeface", mark: "wavy" },
  { text: ", the easing of a transition, the rhythm of a grid. The best work should feel" },
  { text: "effortless", mark: "box" },
  { text: "even when it hides a thousand" },
  { text: "deliberate decisions", mark: "underline" },
  { text: "." },
];

// Reveal units: marked phrases stay whole (so annotations are continuous),
// unmarked text is split into words for a word-by-word reveal.
function toUnits(segments: Segment[]) {
  const units: Segment[] = [];
  for (const s of segments) {
    if (s.mark) units.push(s);
    else s.text.split(" ").forEach((w) => units.push({ text: w }));
  }
  return units;
}

function markClass(mark?: Mark) {
  switch (mark) {
    case "hl":
      // White highlighter swipe with inverted (black) text so it stays legible.
      return "box-decoration-clone rounded-[3px] bg-white px-1 text-black";
    case "underline":
      return "underline decoration-white decoration-2 underline-offset-[6px]";
    case "wavy":
      return "underline decoration-wavy decoration-white decoration-2 underline-offset-[6px]";
    case "circle":
      return "inline-block rounded-[50%] border-2 border-white px-3 py-0.5 leading-none";
    case "box":
      return "inline-block rounded-md border-2 border-white px-2 py-0.5 leading-none";
    default:
      return "";
  }
}

export default function ScrollRevealText({
  segments = defaultSegments,
  className = "max-w-5xl font-sans text-3xl font-light leading-[1.6] tracking-tight text-white md:text-5xl md:leading-[1.5]",
  animateOnEnter = false,
}: {
  segments?: Segment[];
  className?: string;
  animateOnEnter?: boolean;
}) {
  const units = toUnits(segments);
  return animateOnEnter ? (
    <EnterReveal units={units} className={className} />
  ) : (
    <ScrollReveal units={units} className={className} />
  );
}

/* -------- Scroll-scrubbed reveal (reverses on scroll up) -------- */

function ScrollReveal({ units, className }: { units: Segment[]; className: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "end 0.45"],
  });

  return (
    <p ref={ref} className={className}>
      {units.map((u, i) => (
        <Fragment key={i}>
          <ScrollUnit
            text={u.text}
            mark={u.mark}
            index={i}
            total={units.length}
            progress={scrollYProgress}
          />{" "}
        </Fragment>
      ))}
    </p>
  );
}

function ScrollUnit({
  text,
  mark,
  index,
  total,
  progress,
}: {
  text: string;
  mark?: Mark;
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const start = index / total;
  const end = start + 1 / total;
  const opacity = useTransform(progress, [start, end], [0.12, 1]);

  return (
    <motion.span style={{ opacity }} className={markClass(mark)}>
      {text}
    </motion.span>
  );
}

/* -------- Enter reveal (plays once when it comes into view) -------- */

function EnterReveal({ units, className }: { units: Segment[]; className: string }) {
  return (
    <motion.p
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={{ show: { transition: { staggerChildren: 0.035 } } }}
    >
      {units.map((u, i) => (
        <Fragment key={i}>
          <motion.span
            variants={{
              hidden: { opacity: 0, y: 18 },
              show: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }}
            className={`inline-block ${markClass(u.mark)}`}
          >
            {u.text}
          </motion.span>{" "}
        </Fragment>
      ))}
    </motion.p>
  );
}
