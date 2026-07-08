import TransitionLink from "../components/TransitionLink";

const skills = ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Design Systems"];

export default function AboutPage() {
  return (
    <section className="mx-auto flex max-w-7xl flex-col gap-10 px-6 py-16 md:px-10 lg:px-12 lg:py-24">
      <div className="max-w-3xl space-y-6">
        <p className="text-xs font-mono uppercase tracking-[0.3em] text-neutral-500">About</p>
        <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          I help brands and startups turn ideas into sharp digital products.
        </h1>
        <p className="text-lg leading-8 text-neutral-400">
          My work sits at the intersection of product thinking, visual design, and code. I focus on creating experiences that are simple to use and memorable to interact with.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-none border border-neutral-800 bg-neutral-900/70 p-8">
          <p className="text-xs font-mono uppercase tracking-[0.3em] text-neutral-500">Approach</p>
          <p className="mt-4 text-neutral-400 leading-7">
            I believe excellent interfaces come from careful structure, deliberate motion, and a strong sense of rhythm. Every screen is designed to guide users naturally while supporting the product goals behind it.
          </p>
        </div>
        <div className="rounded-none border border-neutral-800 bg-black/60 p-8">
          <p className="text-xs font-mono uppercase tracking-[0.3em] text-neutral-500">Skills</p>
          <div className="mt-6 flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span key={skill} className="rounded-full border border-neutral-800 px-4 py-2 text-sm text-neutral-300">
                {skill}
              </span>
            ))}
          </div>
          <TransitionLink href="/contact" className="mt-8 inline-flex text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:text-neutral-400">
            Start a project →
          </TransitionLink>
        </div>
      </div>
    </section>
  );
}
