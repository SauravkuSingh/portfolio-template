"use client";

import { ArrowRight } from "lucide-react";
import TransitionLink from "./TransitionLink";

/**
 * Full-width "next page" band used at the bottom of pages to move the
 * visitor through the site (Home → About → Projects …).
 */
export default function NextPage({
  label,
  href,
}: {
  label: string;
  href: string;
}) {
  return (
    <TransitionLink
      href={href}
      className="group block w-full border-t border-white/10 bg-black transition-colors duration-500 hover:bg-white"
    >
      <div className="mx-auto flex max-w-[1700px] flex-col items-center justify-center gap-3 px-8 py-20 text-center md:py-28">
        <span className="text-xs font-mono uppercase tracking-[0.5em] text-neutral-500 transition-colors duration-500 group-hover:text-black/60">
          Next page
        </span>
        <span className="flex items-center gap-5 font-serif text-6xl font-light italic text-white transition-colors duration-500 group-hover:text-black md:text-8xl">
          {label}
          <ArrowRight
            className="transition-transform duration-500 group-hover:translate-x-4"
            size={56}
          />
        </span>
      </div>
    </TransitionLink>
  );
}
