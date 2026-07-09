"use client";

import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";
import {
  Plus,
  X,
  ArrowUpRight,
  SendHorizontal,
  Globe2,
  Briefcase,
  Mail,
} from "lucide-react";

const EMAIL = "anne@example.com";

const socials = [
  { label: "Website", icon: Globe2, href: "https://example.com" },
  { label: "LinkedIn", icon: Briefcase, href: "https://linkedin.com" },
  { label: "Twitter", icon: SendHorizontal, href: "https://twitter.com" },
  { label: "Email", icon: Mail, href: `mailto:${EMAIL}` },
];

const locations = [
  { city: "Mumbai", lines: ["Bandra West,", "Mumbai 400050,", "India"], phone: "+91 98 1234 5678" },
  { city: "Remote", lines: ["Available", "worldwide,", "GMT +5:30"], phone: "hello@anne.com" },
];

export default function ContactPage() {
  const [open, setOpen] = useState(false);

  // Cursor-following bubble — only visible over empty background.
  const [overContent, setOverContent] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 260, damping: 28, mass: 0.6 });
  const springY = useSpring(y, { stiffness: 260, damping: 28, mass: 0.6 });

  useEffect(() => {
    // Rest position (bottom-right) — also the anchor for touch devices.
    // jump() places it there instantly instead of sliding from the corner.
    const restX = window.innerWidth - 80;
    const restY = window.innerHeight - 96;
    x.set(restX);
    y.set(restY);
    springX.jump(restX);
    springY.jump(restY);

    const fine = window.matchMedia("(pointer: fine)").matches;
    if (!fine) return;

    let last = false;
    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      // Hide the bubble whenever the cursor is over real content.
      const target = e.target as HTMLElement | null;
      const hit = !!target?.closest("[data-hover-hide]");
      if (hit !== last) {
        last = hit;
        setOverContent(hit);
      }
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y, springX, springY]);

  // Close the form on Escape + lock scroll while it is open.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <section className="relative flex min-h-screen flex-col overflow-hidden bg-black text-white">
      {/* Decorative grid */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#0f0f0f_1px,transparent_1px),linear-gradient(to_bottom,#0f0f0f_1px,transparent_1px)] bg-[size:5rem_5rem] opacity-40" />

      {/* ================= TOP ================= */}
      <div className="relative z-10 mx-auto grid w-full max-w-[1700px] flex-1 grid-cols-1 content-start gap-12 px-8 pt-32 md:grid-cols-2 md:pt-40">
        {/* LEFT — stay up to date */}
        <div data-hover-hide className="self-start">
          <p className="text-xs font-mono uppercase tracking-[0.3em] text-neutral-400">
            Stay up to date
          </p>
          <div className="mt-5 flex items-center gap-3">
            {socials.map(({ label, icon: Icon, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                aria-label={label}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-neutral-300 transition-colors duration-300 hover:border-white hover:bg-white hover:text-black"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* RIGHT — write to + locations */}
        <div data-hover-hide className="self-start md:pl-8">
          <p className="text-xs font-mono uppercase tracking-[0.3em] text-neutral-400">
            Write to
          </p>
          <a
            href={`mailto:${EMAIL}`}
            className="group mt-4 inline-flex items-center gap-2 font-serif text-3xl italic text-white transition-colors hover:text-neutral-400 sm:text-4xl"
          >
            {EMAIL}
            <ArrowUpRight
              size={22}
              className="translate-y-1 transition-transform group-hover:-translate-y-0 group-hover:translate-x-1"
            />
          </a>

          <div className="mt-14 grid grid-cols-2 gap-8">
            {locations.map(({ city, lines, phone }) => (
              <div key={city}>
                <p className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-white">
                  {city}
                </p>
                <address className="mt-4 space-y-0.5 not-italic text-sm leading-6 text-neutral-400">
                  {lines.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </address>
                <p className="mt-4 text-sm text-neutral-300 underline underline-offset-4">
                  {phone}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ================= BIG DISPLAY ================= */}
      <div className="relative z-10 mx-auto w-full max-w-[1700px] px-6">
        <motion.h1
          data-hover-hide
          initial={{ y: 120, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="inline-block w-full select-none whitespace-nowrap text-center font-serif text-[21vw] font-light italic leading-[0.78] tracking-tighter md:text-[17vw]"
        >
          let&apos;s <span className="font-mono not-italic font-normal">talk</span>
        </motion.h1>
      </div>

      {/* ================= BOTTOM BAR ================= */}
      <div className="relative z-10 mx-auto w-full max-w-[1700px] border-t border-white/10 px-8 py-6 text-xs font-mono uppercase tracking-[0.2em] text-neutral-500">
        <p data-hover-hide className="inline-block">
          © {new Date().getFullYear()} Anne Frank. All rights reserved.
        </p>
      </div>

      {/* ================= CURSOR-FOLLOWING BUBBLE ================= */}
      <motion.div
        style={{ x: springX, y: springY }}
        initial={{ opacity: 0 }}
        animate={{
          opacity: open || overContent ? 0 : 1,
          scale: open || overContent ? 0.4 : 1,
        }}
        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-none fixed left-0 top-0 z-30"
        aria-hidden={open || overContent}
      >
        <div className="-translate-x-1/2 -translate-y-1/2">
          <motion.button
            onClick={() => setOpen(true)}
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.92 }}
            aria-label="Open contact form"
            className="pointer-events-auto flex h-12 w-12 items-center justify-center rounded-full bg-white text-black"
          >
            <Plus size={18} strokeWidth={2} />
          </motion.button>
        </div>
      </motion.div>

      {/* ================= CONTACT FORM MODAL ================= */}
      <AnimatePresence>
        {open && <ContactModal onClose={() => setOpen(false)} />}
      </AnimatePresence>
    </section>
  );
}

/* --------------------------------------------------------------------- */

function ContactModal({ onClose }: { onClose: () => void }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);
  const nameRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    nameRef.current?.focus();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // No backend in this template — swap this for your API / email service.
    setSent(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      onClick={onClose}
      className="fixed inset-0 z-[70] flex items-center justify-center bg-black/70 p-6 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label="Contact form"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 24 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 16 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-md border border-white/15 bg-neutral-950 p-8 sm:p-10"
      >
        <button
          onClick={onClose}
          aria-label="Close contact form"
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-neutral-400 transition-colors hover:border-white hover:text-white"
        >
          <X size={16} />
        </button>

        <AnimatePresence mode="wait">
          {sent ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="py-8 text-center"
            >
              <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-white text-black">
                <SendHorizontal size={22} />
              </div>
              <h2 className="font-serif text-3xl italic text-white">Thank you</h2>
              <p className="mt-3 text-sm leading-6 text-neutral-400">
                Your message is on its way. I&apos;ll get back to you shortly.
              </p>
              <button
                onClick={onClose}
                className="mt-8 w-full border border-white/20 py-3 text-xs font-mono uppercase tracking-[0.25em] text-white transition-colors hover:bg-white hover:text-black"
              >
                Close
              </button>
            </motion.div>
          ) : (
            <motion.div
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <p className="text-xs font-mono uppercase tracking-[0.3em] text-neutral-500">
                Say hello
              </p>
              <h2 className="mt-3 font-serif text-4xl italic text-white">
                Let&apos;s talk.
              </h2>

              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <Field label="Name">
                  <input
                    ref={nameRef}
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    className="w-full border-b border-white/15 bg-transparent py-2 text-white placeholder:text-neutral-600 focus:border-white focus:outline-none"
                  />
                </Field>

                <Field label="Email">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@email.com"
                    className="w-full border-b border-white/15 bg-transparent py-2 text-white placeholder:text-neutral-600 focus:border-white focus:outline-none"
                  />
                </Field>

                <Field label="Message">
                  <textarea
                    required
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell me about your project…"
                    className="w-full resize-none border-b border-white/15 bg-transparent py-2 text-white placeholder:text-neutral-600 focus:border-white focus:outline-none"
                  />
                </Field>

                <button
                  type="submit"
                  className="group mt-2 flex w-full items-center justify-center gap-2 bg-white py-3.5 text-xs font-mono uppercase tracking-[0.25em] text-black transition-colors hover:bg-neutral-200"
                >
                  Send message
                  <SendHorizontal
                    size={15}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-neutral-500">
        {label}
      </span>
      <div className="mt-1">{children}</div>
    </label>
  );
}
