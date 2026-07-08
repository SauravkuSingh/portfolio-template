import TransitionLink from "./components/TransitionLink";

const highlights = [
  { label: "Years building", value: "5+" },
  { label: "Projects shipped", value: "24" },
  { label: "Clients helped", value: "12" },
];

const featuredProjects = [
  {
    title: "SaaS Dashboard",
    description: "A multi-tenant analytics product with lightning-fast interactions.",
    stack: ["Next.js", "TypeScript", "Motion"],
  },
  {
    title: "Brand Studio",
    description: "A polished marketing site with cinematic transitions and strong storytelling.",
    stack: ["React", "Tailwind", "Framer Motion"],
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),_transparent_45%)]">
      <section className="mx-auto flex max-w-7xl flex-col gap-16 px-6 py-16 md:px-10 lg:px-12 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="max-w-3xl space-y-8">
            <span className="inline-flex items-center rounded-full border border-neutral-800 bg-neutral-900/70 px-4 py-2 text-xs font-mono uppercase tracking-[0.3em] text-neutral-400">
              Full-stack designer & developer
            </span>
            <div className="space-y-5">
              <h1 className="text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-7xl">
                I build thoughtful digital experiences that feel sharp, fast, and memorable.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-neutral-400">
                This template is ready for your portfolio, with polished sections for your story, projects, and contact details.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <TransitionLink
                href="/projects"
                className="rounded-none border border-white bg-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-black transition hover:bg-transparent hover:text-white"
              >
                View Projects
              </TransitionLink>
              <TransitionLink
                href="/contact"
                className="rounded-none border border-neutral-700 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-neutral-200 transition hover:border-white hover:text-white"
              >
                Let&apos;s Talk
              </TransitionLink>
            </div>
          </div>

          <div className="rounded-none border border-neutral-800 bg-neutral-900/70 p-8 shadow-2xl shadow-black/30">
            <div className="space-y-6">
              <div>
                <p className="text-xs font-mono uppercase tracking-[0.3em] text-neutral-500">About</p>
                <h2 className="mt-2 text-2xl font-semibold text-white">Crafting modern products with clarity and motion.</h2>
              </div>
              <p className="text-neutral-400 leading-7">
                From landing pages to full products, I blend strategy, visuals, and engineering to create experiences that feel effortless.
              </p>
              <div className="grid gap-4 sm:grid-cols-3">
                {highlights.map((item) => (
                  <div key={item.label} className="rounded-none border border-neutral-800 bg-black/60 p-4">
                    <div className="text-xl font-semibold text-white">{item.value}</div>
                    <div className="mt-1 text-xs uppercase tracking-[0.2em] text-neutral-500">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-none border border-neutral-800 bg-neutral-900/50 p-8">
            <p className="text-xs font-mono uppercase tracking-[0.3em] text-neutral-500">Selected work</p>
            <div className="mt-6 space-y-4">
              {featuredProjects.map((project) => (
                <div key={project.title} className="border-b border-neutral-800 pb-4 last:border-b-0 last:pb-0">
                  <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-neutral-400">{project.description}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <span key={item} className="text-xs uppercase tracking-[0.2em] text-neutral-500">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-none border border-neutral-800 bg-black/60 p-8">
            <p className="text-xs font-mono uppercase tracking-[0.3em] text-neutral-500">Ready to build</p>
            <h2 className="mt-3 text-3xl font-semibold text-white">A portfolio template that feels premium out of the box.</h2>
            <p className="mt-4 text-neutral-400 leading-7">
              Replace the copy, swap in your work, and this site is ready to become your own personal brand.
            </p>
            <TransitionLink
              href="/about"
              className="mt-8 inline-flex items-center text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:text-neutral-400"
            >
              Learn more about me →
            </TransitionLink>
          </div>
        </div>
      </section>
    </div>
  );
}
