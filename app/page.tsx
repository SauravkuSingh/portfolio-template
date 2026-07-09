"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import TransitionLink from "./components/TransitionLink";
import WhyMe from "./components/WhyMe";
import StackCards from "./components/StackCards";
import HoverAccordion from "./components/HoverAccordion";
import NextPage from "./components/NextPage";

export default function Home() {
  return (
    <>
    <section className="relative min-h-screen overflow-hidden bg-[#000000] text-white">

      {/* Background Image */}
    
      <motion.div
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2 }}
        className="absolute inset-0"
      >
        <Image
          src="/images/hero.jpg"
          alt="Anne"
          fill
          priority
          className="object-cover object-center"
        />
      </motion.div>

      {/* Dark Overlay */}

      <div className="absolute inset-0 bg-black/35" />

      {/* Gradient */}

      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-[#111111]" />

    

      {/* Hero */}

      <section className="relative z-10 flex min-h-screen flex-col justify-between">

        {/* TOP */}

        <div className="mx-auto flex w-full max-w-[1700px] flex-1 items-center px-10 mt-35">

          <div className="max-w-4xl">

            <motion.p
              initial={{
                opacity: 0,
                y: 40,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: .1,
                duration: .5,
              }}
              className="mb-5 text-sm uppercase tracking-[0.5em] text-white"
            >
              Passionate UI / UX Designer
            </motion.p>

            <motion.h1
              initial={{
                opacity: 0,
                y: 80,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="leading-none"
            >

              <span className="block font-serif text-6xl font-light ml-20">
                Hi,  I am
              </span>

              <span className="block italic font-serif text-[160px] leading-none mt-5">
                Anne Frank
              </span>

            </motion.h1>

            <motion.div
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: .2,
                duration: 0.7,
              }}
              className="mt-12 max-w-xl"
            >

              <p className="text-2xl leading-9 text-white">

                Crafting engaging, user-centered digital
                experiences with timeless aesthetics,
                meaningful storytelling and premium
                interactions.

              </p>

            </motion.div>

            <motion.div
              initial={{
                opacity: 0,
                y: 40,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.3,
                duration: .7,
              }}
              className="mt-12 flex gap-5"
            >

              <TransitionLink
                href="/projects"
                className="group flex items-center gap-3 border border-white px-8 py-5 uppercase tracking-[0.3em] transition hover:bg-white hover:text-black"
              >
                View Work

                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-2"
                />

              </TransitionLink>

              <TransitionLink
                href="/contact"
                className="border border-white/20 px-8 py-5 uppercase tracking-[0.3em] transition hover:border-white"
              >
                Contact
              </TransitionLink>

            </motion.div>

          </div>

        </div>

        {/* BOTTOM */}

        <motion.div
          initial={{
            y: 120,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            delay: 0.4,
            duration: 0.8,
          }}
          className="border-t border-white/40 backdrop-blur-md mt-10"
        >

          <div className="mx-auto grid max-w-[1700px] grid-cols-12">

            {/* LEFT */}

            <div className="col-span-3 border-r border-white/50 p-10">

              <p className="text-xs uppercase tracking-[0.5em] text-neutral-300">
                Expertise
              </p>

              <h3 className="mt-8 text-4xl font-light leading-snug">

                Digital

                <br />

                Product

                <br />

                Designer

              </h3>

            </div>

            {/* CENTER */}

            <div className="col-span-6 border-r border-white/50 p-10">

              <p className="text-xs uppercase tracking-[0.5em] text-neutral-300">
                About
              </p>

              <p className="mt-8 max-w-2xl text-lg leading-9 text-white">

                I help ambitious startups and brands build
                memorable digital experiences that combine
                elegant visuals, usability and motion to create
                products people genuinely love using.

              </p>

            </div>

            {/* RIGHT */}

            <div className="col-span-3 p-5">

              <div className="overflow-hidden">

                <Image
                  src="/images/hero.jpg"
                  alt="Anne"
                  width={520}
                  height={620}
                  className="transition duration-700 hover:scale-110 cursor-pointer"
                />

              </div>

            </div>

          </div>

        </motion.div>

      </section>

    </section>

    {/* Below-hero sections */}
    <WhyMe />
    <StackCards />
    <HoverAccordion />
    <NextPage label="About" href="/about" />
    </>
  );
}