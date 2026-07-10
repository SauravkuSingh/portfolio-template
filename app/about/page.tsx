"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import NextPage from "../components/NextPage";
import ScrollRevealText, { type Segment } from "../components/ScrollRevealText";

const introSegments: Segment[] = [
  { text: "I sit at the intersection of" },
  { text: "product thinking", mark: "circle" },
  { text: ", visual design and code. For the last" },
  { text: "eight years", mark: "hl" },
  { text: "I've helped ambitious startups and studios ship interfaces that feel" },
  { text: "considered", mark: "wavy" },
  { text: "— simple to use," },
  { text: "memorable", mark: "underline" },
  { text: "to interact with, and" },
  { text: "fast everywhere", mark: "box" },
  { text: "." },
];

const stats = [
  { value: "8+", label: "Years experience" },
  { value: "60+", label: "Projects shipped" },
  { value: "12", label: "Design awards" },
  { value: "30+", label: "Happy clients" },
];

const awards = [
  { year: "2026", name: "Site of the Day", org: "Awwwards" },
  { year: "2025", name: "Site of the Month", org: "CSS Design Awards" },
  { year: "2025", name: "Developer Award", org: "Awwwards" },
  { year: "2024", name: "Site of the Day", org: "FWA" },
  { year: "2024", name: "Best UI — Nominee", org: "The Webby Awards" },
  { year: "2023", name: "Honorable Mention", org: "CSS Design Awards" },
];

const reveal = {
  initial: { y: 40, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
};

export default function AboutPage() {
  return (
    <div className="bg-black text-white">
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden pt-40 pb-20 md:pt-30">
        {/* Top background image */}
        <div className="pointer-events-none absolute inset-0">
          <Image
            src="/images/image1.jpg"
            alt=""
            fill
            priority
            className="object-cover object-center opacity-80"
          />
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black" />
        </div>

        <div className="relative mx-auto max-w-[1700px] px-8">
        <motion.p {...reveal} className="text-xs font-mono uppercase tracking-[0.5em] text-neutral-500">
          About — Anne Frank
        </motion.p>
        <motion.h1
          {...reveal}
          transition={{ ...reveal.transition, delay: 0.05 }}
          className="mt-8 max-w-5xl font-serif text-5xl font-light italic leading-[1.05] md:text-8xl"
        >
          Designer &amp; developer crafting memorable digital work.
        </motion.h1>

        <div className="mt-16 grid gap-12 border-t border-white/10 pt-12 md:grid-cols-[1.2fr_1fr]">
          <ScrollRevealText
            segments={introSegments}
            animateOnEnter
            className="max-w-4xl font-sans text-3xl font-light leading-[1.6] text-white md:text-5xl md:leading-[1.5]"
          />
          <motion.div {...reveal} className="relative aspect-4/5 w-full max-w-sm overflow-hidden justify-self-end border border-white/10">
            <Image
              src="/images/Anime.jpg"
              alt="Anne Frank"
              fill
              className="object-cover object-center grayscale transition-all duration-700 hover:grayscale-0"
            />
          </motion.div>
        </div>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="border-y border-white/10">
        <div className="mx-auto grid max-w-[1700px] grid-cols-2 md:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              {...reveal}
              transition={{ ...reveal.transition, delay: i * 0.08 }}
              className="border-r border-white/10 px-8 py-12 last:border-r-0 md:py-16"
            >
              <p className="font-serif text-5xl font-light italic md:text-7xl">{s.value}</p>
              <p className="mt-3 text-xs font-mono uppercase tracking-[0.2em] text-neutral-500">
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= RECOGNITION (awards list) ================= */}
      <section className="w-full py-24 md:py-32">
        <motion.div {...reveal} className="flex items-end justify-between px-8 md:px-16">
          <h2 className="font-serif text-4xl font-light italic md:text-6xl">Recognition</h2>
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-neutral-500">
            Awards &amp; features
          </span>
        </motion.div>

        <div className="mt-12 border-t border-white/10">
          {awards.map((a, i) => (
            <motion.div
              key={`${a.org}-${i}`}
              {...reveal}
              transition={{ ...reveal.transition, delay: i * 0.04 }}
              className="group relative flex items-center justify-between gap-6 border-b border-white/10 px-8 py-6 transition-colors duration-300 hover:bg-white/80 hover:text-black md:px-16 md:py-8"
            >
              {/* Hover preview image, centered on top of the row */}
              <div className="pointer-events-none absolute left-1/2 top-1/2 z-30 -translate-x-1/2 -translate-y-1/2 scale-90 opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`/images/image${(i % 5) + 1}.jpg`}
                  alt=""
                  className="h-48 w-72 rounded-lg border-2 border-white object-cover shadow-2xl md:h-64 md:w-[26rem]"
                />
              </div>
              <span className="w-16 shrink-0 font-mono text-sm text-neutral-500 group-hover:text-black/60 md:text-base">
                {a.year}
              </span>
              <span className="flex-1 font-serif text-2xl font-light italic md:text-4xl">
                {a.name}
              </span>
              <span className="hidden text-right text-xs font-mono uppercase tracking-[0.2em] text-neutral-500 group-hover:text-black/60 sm:block md:text-sm">
                {a.org}
              </span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= PHILOSOPHY (scroll-reveal paragraph) ================= */}
      <section className="mx-auto max-w-[1700px] px-8 py-24 text-center md:py-32">
        <motion.p {...reveal} className="text-xs font-mono uppercase tracking-[0.5em] text-neutral-500">
          The craft
        </motion.p>
        <div className="mt-12">
          <ScrollRevealText className="mx-auto max-w-5xl text-center font-sans text-3xl font-light leading-[1.6] tracking-tight text-white md:text-5xl md:leading-[1.5]" />
        </div>
      </section>

      {/* ================= NEXT PAGE ================= */}
      <NextPage label="Projects" href="/projects" />
    </div>
  );
}
