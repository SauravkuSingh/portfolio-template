"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import TransitionLink from "../components/TransitionLink";
import NextPage from "../components/NextPage";

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

const projects = [
  { n: "01", title: "Northstar Studio", cat: "Agency · Motion", year: "2026" },
  { n: "02", title: "Aurelia Finance", cat: "Fintech · Dashboard", year: "2025" },
  { n: "03", title: "Lumen Commerce", cat: "E-commerce · Headless", year: "2025" },
  { n: "04", title: "Nova AI Engine", cat: "AI · WebGL", year: "2026" },
  { n: "05", title: "Aether Workspace", cat: "Product · SaaS", year: "2026" },
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
      <section className="mx-auto max-w-[1700px] px-8 pt-40 pb-20 md:pt-48">
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
          <motion.p {...reveal} className="max-w-2xl text-lg leading-8 text-neutral-400 md:text-xl">
            I sit at the intersection of product thinking, visual design and code. For the last
            eight years I&apos;ve helped ambitious startups and studios ship interfaces that feel
            considered — simple to use, memorable to interact with, and fast everywhere.
          </motion.p>
          <motion.div {...reveal} className="relative aspect-4/5 w-full max-w-sm overflow-hidden justify-self-end border border-white/10">
            <Image
              src="/images/Anime.jpg"
              alt="Anne Frank"
              fill
              className="object-cover object-center grayscale transition-all duration-700 hover:grayscale-0"
            />
          </motion.div>
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
      <section className="mx-auto max-w-[1700px] px-8 py-24 md:py-32">
        <motion.div {...reveal} className="flex items-end justify-between">
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
              className="group flex items-center justify-between gap-6 border-b border-white/10 py-6 transition-colors duration-300 hover:bg-white hover:text-black md:py-8"
            >
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

      {/* ================= SELECTED PROJECTS ================= */}
      <section className="mx-auto max-w-[1700px] px-8 pb-24 md:pb-32">
        <motion.div {...reveal} className="flex items-end justify-between">
          <h2 className="font-serif text-4xl font-light italic md:text-6xl">Selected projects</h2>
          <TransitionLink
            href="/projects"
            className="group flex items-center gap-2 text-xs font-mono uppercase tracking-[0.3em] text-neutral-400 transition-colors hover:text-white"
          >
            View all
            <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </TransitionLink>
        </motion.div>

        <div className="mt-12 border-t border-white/10">
          {projects.map((p, i) => (
            <motion.div
              key={p.n}
              {...reveal}
              transition={{ ...reveal.transition, delay: i * 0.04 }}
            >
              <TransitionLink
                href="/projects"
                className="group flex items-center gap-6 border-b border-white/10 py-8 transition-colors duration-300 hover:bg-white/[0.03] md:py-10"
              >
                <span className="font-mono text-xs text-neutral-600">{p.n}</span>
                <span className="flex-1 font-serif text-3xl font-light italic text-neutral-400 transition-colors duration-300 group-hover:text-white md:text-6xl">
                  {p.title}
                </span>
                <span className="hidden text-xs font-mono uppercase tracking-[0.2em] text-neutral-500 md:block">
                  {p.cat}
                </span>
                <span className="w-16 text-right font-mono text-sm text-neutral-500">{p.year}</span>
                <ArrowUpRight
                  size={26}
                  className="text-neutral-600 transition-colors duration-300 group-hover:text-white"
                />
              </TransitionLink>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= NEXT PAGE ================= */}
      <NextPage label="Projects" href="/projects" />
    </div>
  );
}
