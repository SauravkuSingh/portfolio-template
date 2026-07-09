"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Globe2, SendHorizontal, Briefcase, Mail, MapPin } from "lucide-react";
import TransitionLink from "./TransitionLink";

export default function Footer() {
  const pathname = usePathname();

  // The footer's "Get in touch" block only belongs on the home page.
  if (pathname !== "/") return null;

  return (
    <footer className="bg-black border-t border-neutral-900 text-white relative overflow-hidden">
      {/* Decorative background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f0f0f_1px,transparent_1px),linear-gradient(to_bottom,#0f0f0f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 py-20 md:py-28 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column (Content) */}
          <div className="lg:col-span-7 flex flex-col justify-between h-full space-y-12">
            <div>
              <span className="text-xs font-mono tracking-[0.2em] text-neutral-500 uppercase block mb-4">
                GET IN TOUCH
              </span>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter leading-none mb-6">
                LET'S CREATE <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-200 to-neutral-500">
                  SOMETHING AMAZING
                </span>
              </h2>
              <p className="text-neutral-400 text-sm md:text-base max-w-md leading-relaxed">
                Whether you need a high-performance web application, a sleek design system, or technical leadership, my inbox is always open.
              </p>
            </div>

            {/* Quick Contact Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-6 border-t border-neutral-900">
              <div>
                <span className="text-xs font-mono text-neutral-500 block mb-2 uppercase tracking-widest">
                  Drop an email
                </span>
                <a
                  href="mailto:anne@example.com"
                  className="group flex items-center gap-1.5 text-white font-mono hover:text-neutral-300 transition-colors duration-300 text-sm"
                >
                  anne@example.com
                  <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                </a>
              </div>
              <div>
                <span className="text-xs font-mono text-neutral-500 block mb-2 uppercase tracking-widest">
                  Location
                </span>
                <div className="flex items-center gap-2 text-neutral-300 font-mono text-sm">
                  <MapPin size={14} className="text-neutral-500" />
                  Mumbai, India
                </div>
              </div>
            </div>

            {/* Socials & Copyright */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-12 border-t border-neutral-900">
              <div className="flex items-center gap-6">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-neutral-400 hover:text-white transition-colors duration-300"
                  aria-label="GitHub"
                >
                  <Globe2 size={18} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-neutral-400 hover:text-white transition-colors duration-300"
                  aria-label="LinkedIn"
                >
                  <Briefcase size={18} />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-neutral-400 hover:text-white transition-colors duration-300"
                  aria-label="Twitter"
                >
                  <SendHorizontal size={18} />
                </a>
                <a
                  href="mailto:anne@example.com"
                  className="text-neutral-400 hover:text-white transition-colors duration-300"
                  aria-label="Email"
                >
                  <Mail size={18} />
                </a>
              </div>
              <p className="text-xs font-mono text-neutral-600">
                &copy; {new Date().getFullYear()} ANNE. ALL RIGHTS RESERVED.
              </p>
            </div>
          </div>

          {/* Right Column (Big User Image) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative group w-full max-w-[380px] aspect-[4/5] bg-neutral-950 border border-neutral-900 p-3 transition-transform duration-500 hover:scale-[1.02]">
              {/* Outer double border styling */}
              <div className="absolute inset-0 border border-neutral-800 m-1 pointer-events-none" />
              
              {/* High Contrast Black and White Stylized Avatar / User Portrait Placeholder */}
              <div className="w-full h-full relative overflow-hidden bg-neutral-900 flex flex-col justify-between p-6">
                {/* Tech HUD overlay lines */}
                <div className="absolute top-2 left-2 text-[8px] font-mono text-neutral-700 select-none">
                  PR_FILE_09.RAW
                </div>
                <div className="absolute bottom-2 right-2 text-[8px] font-mono text-neutral-700 select-none">
                  SYS_ACTIVE_99%
                </div>

                {/* Stylized geometric background illustration */}
                <div className="absolute inset-0 flex items-center justify-center opacity-30 select-none pointer-events-none">
                  <div className="w-[180px] h-[180px] rounded-full border border-neutral-800 animate-spin-slow" />
                  <div className="absolute w-[240px] h-[240px] border border-neutral-800/40" />
                  <div className="absolute w-[100px] h-[100px] border-x border-neutral-800 rotate-45" />
                </div>

                {/* User Portrait - black and white girl image */}
                <div className="relative z-10 w-full h-full flex items-center justify-center overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80"
                    alt="Black and white portrait"
                    className="w-full h-full object-cover object-center transition duration-500 grayscale group-hover:grayscale-0 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-black/15" />
                </div>

                {/* Name Label */}
                <div className="relative z-10 border-t border-neutral-800 pt-3">
                  <div className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">
                    LEAD ENGINEER / DESIGNER
                  </div>
                  <div className="text-sm font-mono font-bold text-white tracking-widest mt-0.5">
                    ANNE FRANK
                  </div>
                </div>
              </div>

              {/* Decorative Corner accents */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-neutral-700 transition-colors duration-300 group-hover:border-white -translate-x-[2px] -translate-y-[2px]" />
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-neutral-700 transition-colors duration-300 group-hover:border-white translate-x-[2px] -translate-y-[2px]" />
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-neutral-700 transition-colors duration-300 group-hover:border-white -translate-x-[2px] translate-y-[2px]" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-neutral-700 transition-colors duration-300 group-hover:border-white translate-x-[2px] translate-y-[2px]" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
