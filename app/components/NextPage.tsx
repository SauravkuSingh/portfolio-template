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
    className="group relative block w-full overflow-hidden border-t border-white/10"
  >
    {/* Background Image */}
    <div
      className="absolute inset-0 bg-[url('/images/image1.jpg')] bg-cover bg-center
                 transition-transform duration-700 ease-in-out
                 group-hover:scale-110"
    />

    {/* Dark Overlay */}
    <div className="absolute inset-0 bg-black/45 transition-opacity duration-800" />

    {/* Content */}
    <div className="relative z-10 mx-auto flex max-w-[1700px] flex-col items-center justify-center gap-3 px-8 py-20 text-center md:py-28">
      <span className="text-xs font-mono uppercase tracking-[0.5em] text-neutral-200">
        Next page
      </span>

      <span className="flex items-center gap-5 font-serif text-6xl font-light italic text-white md:text-8xl">
        {label}

        <ArrowRight
          size={86}
          className="transition-all duration-500 group-hover:translate-x-4 group-hover:-rotate-6"
        />
      </span>
    </div>
  </TransitionLink>
);
}
