import { Mail, MapPin, ArrowUpRight } from "lucide-react";

export default function ContactPage() {
  return (
    <section className="mx-auto flex max-w-7xl flex-col gap-10 px-6 py-16 md:px-10 lg:px-12 lg:py-24">
      <div className="max-w-3xl space-y-5">
        <p className="text-xs font-mono uppercase tracking-[0.3em] text-neutral-500">Contact</p>
        <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          Let&apos;s build something memorable together.
        </h1>
        <p className="text-lg leading-8 text-neutral-400">
          If you have a product idea, a redesign, or a launch coming up, I’d love to hear about it.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_0.8fr]">
        <div className="rounded-none border border-neutral-800 bg-neutral-900/70 p-8">
          <div className="flex items-center gap-3 text-white">
            <Mail size={18} />
            <a href="mailto:anne@example.com" className="text-lg transition hover:text-neutral-400">
              anne@example.com
            </a>
          </div>
          <div className="mt-6 flex items-center gap-3 text-neutral-300">
            <MapPin size={18} />
            <span>Mumbai, India</span>
          </div>
        </div>

        <div className="rounded-none border border-neutral-800 bg-black/60 p-8">
          <p className="text-xs font-mono uppercase tracking-[0.3em] text-neutral-500">Availability</p>
          <h2 className="mt-3 text-2xl font-semibold text-white">Open for freelance and full-time opportunities.</h2>
          <a href="mailto:anne@example.com" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:text-neutral-400">
            Email me
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
