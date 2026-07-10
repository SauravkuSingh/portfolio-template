"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import TransitionLink from "./TransitionLink";
import RollingText from "./RollingText";

const links = [
  {
    title: "HOME",
    href: "/",
  },
  {
    title: "ABOUT",
    href: "/about",
  },
  {
    title: "PROJECTS",
    href: "/projects",
  },
  {
    title: "CONTACT",
    href: "/contact",
  },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* ================= NAVBAR ================= */}

      <header className="fixed top-0 left-0 z-50 w-full">
        <div className="w-full">
          <div className="flex h-20 items-center justify-between border-b border-white/45 px-8 backdrop-blur-md">

            {/* LOGO */}

           <TransitionLink href="/">
            <RollingText
              className="font-serif italic text-[40px] font-light"
            >
              Anne
            </RollingText>
          </TransitionLink>

            {/* MENU BUTTON */}

            <button
              onClick={() => setOpen(!open)}
              className="relative z-50 flex h-15 w-15 cursor-pointer items-center justify-center"
            >
              <AnimatePresence mode="wait">
                {open ? (
                  <motion.div
                    key="x"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{
                      duration: .35,
                    }}
                  >
                    <X size={26} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{
                      duration: .35,
                    }}
                  >
                    <Menu size={26} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>

          </div>
        </div>
      </header>

      {/* ================= FULLSCREEN MENU ================= */}

      <AnimatePresence>

        {open && (

          <motion.div
            initial={{
              y: "-100%",
            }}
            animate={{
              y: 0,
            }}
            exit={{
              y: "-100%",
            }}
            transition={{
              duration: .8,
              ease: [0.83,0,0.17,1],
            }}
            className="fixed inset-0 z-40 bg-[#000000e3] backdrop-blur-sm"
          >

            {/* Top Border */}

            <div className="absolute top-24 left-0 h-px w-full bg-white/10" />

            {/* Grid */}

            <div className="grid h-full grid-cols-12">

              {/* LEFT */}

              <div className="col-span-3 border-r border-white/10 p-30">

                <div className="mt-32">

                  <p className="text-sm uppercase tracking-[0.4em] text-neutral-400">
                    Navigation
                  </p>

                  <div className="mt-8 space-y-6 text-neutral-300">

                    <p>Available for freelance</p>

                    <p>UI / UX</p>

                    <p>Brand Identity</p>

                    <p>Frontend Development</p>

                  </div>

                </div>

              </div>

              {/* CENTER */}

              <div className="col-span-6 flex items-center justify-center">

                <div className="space-y-8 text-9xl">

                  {links.map((item, index) => (

                    <motion.div
                      key={item.title}
                      initial={{
                        y:80,
                        opacity:0
                      }}
                      animate={{
                        y:0,
                        opacity:1
                      }}
                      exit={{
                        y:80,
                        opacity:0
                      }}
                      transition={{
                        delay:index*.08,
                        duration:.6,
                        ease:[0.22,1,0.36,1]
                      }}
                    >
                      <TransitionLink
                        href={item.href}
                        onClick={() => setOpen(false)}
                      >
                        <RollingText>
                          {item.title}
                        </RollingText>
                      </TransitionLink>
                    </motion.div>

                  ))}

                </div>

              </div>

              {/* RIGHT */}

              <div className="col-span-3 border-l border-white/10 p-10">

                <div className="mt-32 space-y-8">

                  <div>

                    <p className="text-xs uppercase tracking-[0.4em] text-neutral-400">
                      Email
                    </p>

                    <p className="mt-3 text-lg">
                      hello@anne.com
                    </p>

                  </div>

                  <div>

                    <p className="text-xs uppercase tracking-[0.4em] text-neutral-400">
                      Social
                    </p>

                    <div className="mt-3 space-y-3">

                      <p>Instagram</p>

                      <p>Dribbble</p>

                      <p>Behance</p>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </motion.div>

        )}

      </AnimatePresence>

    </>
  );
}