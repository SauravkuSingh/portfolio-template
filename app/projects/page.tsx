const projects = [
  {
    title: "Northstar Studio",
    description: "A premium agency website with immersive storytelling and elegant motion design.",
    role: "Design + Development",
  },
  {
    title: "Aurelia Finance",
    description: "A modern analytics platform for financial teams with clear dashboards and fast workflows.",
    role: "Frontend Engineering",
  },
  {
    title: "Lumen Commerce",
    description: "A conversion-focused storefront experience for a fast-growing retail brand.",
    role: "Product Design",
  },
];

export default function ProjectsPage() {
  return (
    <section className="mx-auto flex max-w-7xl flex-col gap-10 px-6 py-16 md:px-10 lg:px-12 lg:py-24">
      <div className="max-w-3xl space-y-5">
        <p className="text-xs font-mono uppercase tracking-[0.3em] text-neutral-500">Projects</p>
        <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          Selected work that balances form, function, and impact.
        </h1>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <article key={project.title} className="rounded-none border border-neutral-800 bg-neutral-900/70 p-8">
            <p className="text-xs font-mono uppercase tracking-[0.3em] text-neutral-500">{project.role}</p>
            <h2 className="mt-4 text-2xl font-semibold text-white">{project.title}</h2>
            <p className="mt-3 text-sm leading-7 text-neutral-400">{project.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
