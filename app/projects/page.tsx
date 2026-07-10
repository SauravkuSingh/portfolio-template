"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ArrowLeft, Calendar, Briefcase, Code, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import NextPage from "../components/NextPage";

interface Project {
  id: string;
  title: string;
  description: string;
  role: string;
  year: string;
  image: string;
  imageDetail: string;
  slogan: string;
  fullDescription: string;
  stack: string[];
  features: string[];
  outcome: string;
}

const projects: Project[] = [
  {
    id: "northstar",
    title: "Northstar Studio",
    description: "A premium agency website with immersive storytelling and elegant motion design.",
    role: "Design + Lead Development",
    year: "2026",
    image: "/images/image1.jpg",
    imageDetail: "/images/image2.jpg",
    slogan: "Reimagining digital presence for global creative leaders.",
    fullDescription: "Northstar Studio is a premium digital agency crafting bespoke web experiences for design-led brands. We designed and engineered a fully fluid, immersive storytelling experience that leverages smooth momentum scrolling, custom GLSL shaders, and rich multi-layered typography animations. The result is an award-winning portal that transforms passive visitors into highly engaged collaborators, raising brand value and establishing a new digital benchmark.",
    stack: ["Next.js", "Framer Motion", "Three.js", "Tailwind CSS", "GLSL Shaders"],
    features: [
      "Custom momentum scrolling implementation",
      "WebGL fluid background simulations",
      "Fully responsive fluid layouts",
      "Dynamic route transition engine"
    ],
    outcome: "+145% average user session duration, CSS Design Awards 'Site of the Month', 100% lighthouse performance score"
  },
  {
    id: "aurelia",
    title: "Aurelia Finance",
    description: "A modern analytics platform for financial teams with clear dashboards and fast workflows.",
    role: "Frontend Architecture",
    year: "2025",
    image: "/images/image2.jpg",
    imageDetail: "/images/image3.jpg",
    slogan: "Next-generation asset visualization and real-time ledger intelligence.",
    fullDescription: "Aurelia Finance provides complex asset managers with an intuitive, near-zero latency dashboard to visualize multi-chain portfolios and ledger entries. By architecting a customized state management solution and leveraging hardware-accelerated canvas-based charting, we reduced visualization computation time by 60% and enabled beautiful, interactive real-time data streaming.",
    stack: ["React", "TypeScript", "Canvas API", "Tailwind CSS", "Zustand", "Recharts"],
    features: [
      "High-frequency live data streaming charts",
      "Sub-millisecond interactive data filters",
      "Custom SVG and Canvas dashboard graphics",
      "Enterprise-grade multi-factor security layouts"
    ],
    outcome: "$4.2B+ assets visualized daily, 60% reduction in dashboard loading latency, adopted by 18 institutional funds"
  },
  {
    id: "lumen",
    title: "Lumen Commerce",
    description: "A conversion-focused storefront experience for a fast-growing retail brand.",
    role: "Product Design + Dev",
    year: "2025",
    image: "/images/image3.jpg",
    imageDetail: "/images/image4.jpg",
    slogan: "Tailoring headless commerce for the modern minimalist brand.",
    fullDescription: "Lumen is a high-end apparel atelier demanding a storefront that is as elegant as their physical garments. We designed and engineered a headless commerce solution using Shopify API, combining instant search, fluid bag-to-checkout flows, and cinematic product zoom animations. The checkout experience is optimized for mobile-first buyers, drastically lowering cart abandonment.",
    stack: ["Next.js", "Shopify API", "Framer Motion", "Tailwind CSS", "Radix UI"],
    features: [
      "Headless checkout API integration",
      "Instant fuzzy-search product index",
      "High-fidelity hover magnification zoom",
      "Ultra-low-latency cart slide-outs"
    ],
    outcome: "+28% conversion rate lift, 340ms average page load time (FCP), 95% decrease in cart abandonment"
  },
  {
    id: "nova",
    title: "Nova AI Engine",
    description: "Interactive playground mapping large-language model neural pathways in real-time.",
    role: "Creative Technologist",
    year: "2026",
    image: "/images/image4.jpg",
    imageDetail: "/images/image5.jpg",
    slogan: "Interactive playground mapping large-language model neural pathways.",
    fullDescription: "Nova AI Engine maps structural neural attention layers during multi-modal inference. Designed for researchers and AI enthusiasts, the playground makes complex mathematical weights visible by rendering live multi-layered node diagrams using high-performance 3D force-directed graphs. It turns abstract tensors into tangible, stunningly beautiful visual landscapes.",
    stack: ["Next.js", "Three.js", "React Three Fiber", "WebWorkers API", "Tailwind CSS"],
    features: [
      "3D force-directed neural graph visualization",
      "Interactive weight-space exploration sliders",
      "WebWorker-offloaded physics simulation",
      "Live token-generation attention heatmaps"
    ],
    outcome: "120k+ active playground developers, viral open-source release on GitHub, featured in leading AI newsletters"
  },
  {
    id: "aether",
    title: "Aether Workspace",
    description: "Bespoke spatial productivity workspace featuring drag-and-drop window frames and canvas mappings.",
    role: "Full Stack Product",
    year: "2026",
    image: "/images/image5.jpg",
    imageDetail: "/images/image1.jpg",
    slogan: "Bespoke spatial productivity workspace on the web.",
    fullDescription: "Aether is a spatial productivity desktop in the browser, built to organize files, documents, calendar feeds, and chats in a dynamic, drag-and-drop workspace. We engineered a highly stable, performance-tuned multi-window layout with canvas-based connectivity maps, dynamic grid-snapping, and persistent state saving across client sessions.",
    stack: ["Next.js", "Framer Motion", "Tailwind CSS", "IndexedDB", "WebRTC"],
    features: [
      "Infinite canvas workspace with panning",
      "Dynamic drag-and-drop windows with snapping",
      "Local-first data persistence using IndexedDB",
      "Peer-to-peer real-time file sharing"
    ],
    outcome: "45,000 active beta users, 4.9/5 average rating, 100% local-first data privacy compliant"
  }
];

interface BentoCardProps {
  project: Project;
  className?: string;
  onClick: (e: React.MouseEvent) => void;
  children: React.ReactNode;
}

function BentoCard({ project, className, onClick, children }: BentoCardProps) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        "group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/20 bg-neutral-900/40 backdrop-blur-sm p-6 transition-all duration-500 cursor-none select-none hover:border-white hover:shadow-[0_0_40px_rgba(255,255,255,0.12)]",
        className
      )}
    >
      {children}

      {/* Custom Hover Follow Cursor */}
      <motion.div
        className="pointer-events-none absolute z-30 hidden md:flex items-center justify-center rounded-full bg-white/10 text-white shadow-lg backdrop-blur-md border border-white"
        style={{
          width: 56,
          height: 56,
          left: 0,
          top: 0,
          x: mousePos.x - 28,
          y: mousePos.y - 28,
          position: "absolute",
        }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: isHovered ? 1 : 0, opacity: isHovered ? 1 : 0 }}
        transition={{ type: "spring", stiffness: 450, damping: 28 }}
      >
        <ArrowUpRight className="w-6 h-6 text-white" strokeWidth={2.5} />
      </motion.div>
    </div>
  );
}

export default function ProjectsPage() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [clickOrigin, setClickOrigin] = useState({ x: 0, y: 0 });

  // Prevent background scrolling when details modal is open
  useEffect(() => {
    if (activeProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeProject]);

  const handleCardClick = (project: Project, e: React.MouseEvent) => {
    setClickOrigin({ x: e.clientX, y: e.clientY });
    setActiveProject(project);
  };

  return (
    <div className="bg-black text-white">
    <section className="mx-auto flex max-w-7xl flex-col gap-10 px-6 py-16 md:px-10 lg:px-12 lg:py-24">
      <div className="max-w-3xl space-y-5">
        <p className="text-xs font-mono uppercase tracking-[0.3em] text-neutral-500">Selected Works</p>
        <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl">
          Crafting digital experiences with precision.
        </h1>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        
        {/* Card 1: Northstar Studio (Spans 2 columns, Row 1) */}
        <BentoCard
          project={projects[0]}
          onClick={(e) => handleCardClick(projects[0], e)}
          className="md:col-span-2 h-[480px] flex flex-col md:flex-row gap-6"
        >
          {/* Card Image Container */}
          <div className="relative w-full md:w-[55%] h-[240px] md:h-full overflow-hidden rounded-xl bg-neutral-950 border border-white/5">
            <img
              src={projects[0].image}
              alt={projects[0].title}
              className="w-full h-full object-cover opacity-85 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700 ease-out"
            />
          </div>
          {/* Metadata Section (Below on mobile, side on desktop) */}
          <div className="flex-1 flex flex-col justify-between py-2">
            <div>
              <span className="text-xs font-mono tracking-widest text-neutral-400 uppercase">{projects[0].role}</span>
              <h3 className="mt-2 text-2xl md:text-3xl font-semibold text-white tracking-tight">{projects[0].title}</h3>
            </div>
            <p className="mt-4 text-sm text-neutral-400 leading-relaxed font-sans line-clamp-4 group-hover:text-neutral-300 transition-colors duration-300">
              {projects[0].description}
            </p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {projects[0].stack.slice(0, 3).map((tech) => (
                <span key={tech} className="text-[10px] font-mono rounded-md bg-white/5 border border-white/10 px-2 py-0.5 text-neutral-300">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </BentoCard>

        {/* Card 2: Aurelia Finance (Spans 1 column, Rows 1 & 2) */}
        <BentoCard
          project={projects[1]}
          onClick={(e) => handleCardClick(projects[1], e)}
          className="md:col-span-1 md:row-span-2 h-full min-h-[480px] md:h-[992px] flex flex-col"
        >
          {/* Card Image Container */}
          <div className="relative w-full h-[60%] md:h-[75%] overflow-hidden rounded-xl bg-neutral-950 border border-white/5">
            <img
              src={projects[1].image}
              alt={projects[1].title}
              className="w-full h-full object-cover opacity-85 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700 ease-out"
            />
          </div>
          {/* Metadata Section */}
          <div className="mt-6 flex-1 flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono tracking-widest text-neutral-400 uppercase">{projects[1].role}</span>
              <h3 className="mt-2 text-2xl font-semibold text-white tracking-tight">{projects[1].title}</h3>
            </div>
            <p className="mt-3 text-sm text-neutral-400 leading-relaxed font-sans line-clamp-3 group-hover:text-neutral-300 transition-colors duration-300">
              {projects[1].description}
            </p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {projects[1].stack.slice(0, 3).map((tech) => (
                <span key={tech} className="text-[10px] font-mono rounded-md bg-white/5 border border-white/10 px-2 py-0.5 text-neutral-300">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </BentoCard>

        {/* Card 3: Lumen Commerce (Spans 1 column, Row 2) */}
        <BentoCard
          project={projects[2]}
          onClick={(e) => handleCardClick(projects[2], e)}
          className="md:col-span-1 h-[480px] flex flex-col"
        >
          {/* Card Image Container */}
          <div className="relative w-full h-[55%] overflow-hidden rounded-xl bg-neutral-950 border border-white/5">
            <img
              src={projects[2].image}
              alt={projects[2].title}
              className="w-full h-full object-cover opacity-85 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700 ease-out"
            />
          </div>
          {/* Metadata Section */}
          <div className="mt-6 flex-1 flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono tracking-widest text-neutral-400 uppercase">{projects[2].role}</span>
              <h3 className="mt-2 text-2xl font-semibold text-white tracking-tight">{projects[2].title}</h3>
            </div>
            <p className="mt-3 text-sm text-neutral-400 leading-relaxed font-sans line-clamp-2 group-hover:text-neutral-300 transition-colors duration-300">
              {projects[2].description}
            </p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {projects[2].stack.slice(0, 3).map((tech) => (
                <span key={tech} className="text-[10px] font-mono rounded-md bg-white/5 border border-white/10 px-2 py-0.5 text-neutral-300">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </BentoCard>

        {/* Card 4: Nova AI Engine (Spans 1 column, Row 2) */}
        <BentoCard
          project={projects[3]}
          onClick={(e) => handleCardClick(projects[3], e)}
          className="md:col-span-1 h-[480px] flex flex-col"
        >
          {/* Card Image Container */}
          <div className="relative w-full h-[55%] overflow-hidden rounded-xl bg-neutral-950 border border-white/5">
            <img
              src={projects[3].image}
              alt={projects[3].title}
              className="w-full h-full object-cover opacity-85 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700 ease-out"
            />
          </div>
          {/* Metadata Section */}
          <div className="mt-6 flex-1 flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono tracking-widest text-neutral-400 uppercase">{projects[3].role}</span>
              <h3 className="mt-2 text-2xl font-semibold text-white tracking-tight">{projects[3].title}</h3>
            </div>
            <p className="mt-3 text-sm text-neutral-400 leading-relaxed font-sans line-clamp-2 group-hover:text-neutral-300 transition-colors duration-300">
              {projects[3].description}
            </p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {projects[3].stack.slice(0, 3).map((tech) => (
                <span key={tech} className="text-[10px] font-mono rounded-md bg-white/5 border border-white/10 px-2 py-0.5 text-neutral-300">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </BentoCard>

        {/* Card 5: Aether Workspace (Spans 3 columns, Row 3) */}
        <BentoCard
          project={projects[4]}
          onClick={(e) => handleCardClick(projects[4], e)}
          className="md:col-span-3 h-[520px] flex flex-col md:flex-row gap-6"
        >
          {/* Card Image Container */}
          <div className="relative w-full md:w-[60%] h-[240px] md:h-full overflow-hidden rounded-xl bg-neutral-950 border border-white/5">
            <img
              src={projects[4].image}
              alt={projects[4].title}
              className="w-full h-full object-cover opacity-85 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700 ease-out"
            />
          </div>
          {/* Metadata Section */}
          <div className="flex-1 flex flex-col justify-between py-2">
            <div>
              <span className="text-xs font-mono tracking-widest text-neutral-400 uppercase">{projects[4].role}</span>
              <h3 className="mt-2 text-2xl md:text-3xl font-semibold text-white tracking-tight">{projects[4].title}</h3>
            </div>
            <p className="mt-4 text-sm text-neutral-400 leading-relaxed font-sans line-clamp-4 group-hover:text-neutral-300 transition-colors duration-300">
              {projects[4].description}
            </p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {projects[4].stack.slice(0, 3).map((tech) => (
                <span key={tech} className="text-[10px] font-mono rounded-md bg-white/5 border border-white/10 px-2 py-0.5 text-neutral-300">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </BentoCard>

      </div>
      </section>

      {/* Next page → Contact */}
      <NextPage label="Contact" href="/contact" />

      {/* Circle Expanding Details Page Overlay */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            data-lenis-prevent
            className="fixed inset-0 z-50 overflow-y-auto bg-neutral-950 text-white"
            initial={{
              clipPath: `circle(0% at ${clickOrigin.x}px ${clickOrigin.y}px)`,
            }}
            animate={{
              clipPath: `circle(150% at ${clickOrigin.x}px ${clickOrigin.y}px)`,
            }}
            exit={{
              clipPath: `circle(0% at ${clickOrigin.x}px ${clickOrigin.y}px)`,
            }}
            transition={{
              duration: 0.95,
              ease: [0.76, 0, 0.24, 1], // Smooth premium ease-in-out curve
            }}
          >
            <div className="relative min-h-screen pb-24 bg-neutral-950">
              {/* Fixed Back Button - styled in top-left */}
              <div className="fixed top-8 left-8 z-[60]">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveProject(null);
                  }}
                  className="flex items-center gap-2 rounded-full border border-white/20 bg-neutral-900/60 px-5 py-2.5 text-sm font-medium text-white backdrop-blur-md hover:border-white hover:bg-white hover:text-black hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back to Projects</span>
                </button>
              </div>

              {/* Hero Banner Section */}
              <div className="relative h-[65vh] w-full overflow-hidden bg-neutral-900 border-b border-neutral-800">
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent z-10" />
                <img
                  src={activeProject.image}
                  alt={activeProject.title}
                  className="h-full w-full object-cover opacity-60 scale-105"
                />
                <div className="absolute bottom-12 left-6 right-6 mx-auto max-w-5xl z-20">
                  <span className="text-xs font-mono uppercase tracking-[0.3em] text-neutral-400 bg-white/10 px-3 py-1 rounded-full border border-white/10 backdrop-blur-md">
                    {activeProject.role}
                  </span>
                  <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl font-sans">
                    {activeProject.title}
                  </h1>
                  <p className="mt-4 text-lg md:text-xl text-neutral-300 max-w-2xl font-mono">
                    {activeProject.slogan}
                  </p>
                </div>
              </div>

              {/* Detail Content Grid */}
              <div className="mx-auto max-w-5xl px-6 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-3 gap-12">
                
                {/* Main Body */}
                <div className="lg:col-span-2 space-y-12">
                  <div className="space-y-6">
                    <h2 className="text-2xl font-semibold text-white tracking-tight border-b border-white/10 pb-3 font-sans">
                      Project Overview
                    </h2>
                    <p className="text-base md:text-lg leading-relaxed text-neutral-300 font-sans">
                      {activeProject.fullDescription}
                    </p>
                  </div>

                  <div className="space-y-6">
                    <h2 className="text-2xl font-semibold text-white tracking-tight border-b border-white/10 pb-3 font-sans">
                      Key Solutions & Features
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {activeProject.features.map((feature, i) => (
                        <div key={i} className="flex gap-3 items-start border border-white/10 p-4 rounded-xl bg-neutral-900/40">
                          <CheckCircle className="w-5 h-5 text-neutral-100 shrink-0 mt-0.5" />
                          <p className="text-sm text-neutral-300 font-sans">{feature}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* High Quality Detailed Image */}
                  <div className="overflow-hidden rounded-2xl border border-white/10 bg-neutral-900 h-[350px] md:h-[450px]">
                    <img
                      src={activeProject.imageDetail}
                      alt={`${activeProject.title} Detail`}
                      className="w-full h-full object-cover opacity-85"
                    />
                  </div>
                </div>

                {/* Sidebar Details Panel */}
                <div className="space-y-8">
                  {/* Project Info Table */}
                  <div className="border border-white/20 rounded-2xl bg-neutral-900/50 p-6 space-y-6 shadow-[0_0_20px_rgba(255,255,255,0.03)]">
                    <h3 className="text-xs font-bold tracking-widest text-neutral-400 uppercase font-mono border-b border-white/15 pb-2">
                      Project Details
                    </h3>

                    <div className="space-y-4">
                      <div className="flex items-center gap-3 text-sm">
                        <Briefcase className="w-4 h-4 text-neutral-400" />
                        <div>
                          <p className="text-[10px] text-neutral-500 font-mono tracking-wider uppercase">Role</p>
                          <p className="font-semibold text-neutral-200">{activeProject.role}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 text-sm">
                        <Calendar className="w-4 h-4 text-neutral-400" />
                        <div>
                          <p className="text-[10px] text-neutral-500 font-mono tracking-wider uppercase">Release Year</p>
                          <p className="font-semibold text-neutral-200">{activeProject.year}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 text-sm">
                        <Code className="w-4 h-4 text-neutral-400" />
                        <div>
                          <p className="text-[10px] text-neutral-500 font-mono tracking-wider uppercase">Categories</p>
                          <p className="font-semibold text-neutral-200">Creative Dev, Motion UI</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Full Tech Stack Box */}
                  <div className="border border-white/10 rounded-2xl bg-neutral-900/20 p-6 space-y-4">
                    <h3 className="text-sm font-semibold text-white uppercase font-mono tracking-wider">Tech Stack</h3>
                    <div className="flex flex-wrap gap-2">
                      {activeProject.stack.map((tech) => (
                        <span key={tech} className="rounded-lg bg-neutral-900 border border-white/10 px-3 py-1.5 text-xs font-mono text-neutral-300">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Impact & Outcome */}
                  <div className="border border-white/10 rounded-2xl bg-neutral-900/20 p-6 space-y-4">
                    <h3 className="text-sm font-semibold text-white uppercase font-mono tracking-wider">Project Impact</h3>
                    <p className="text-sm text-neutral-300 leading-relaxed font-mono">
                      {activeProject.outcome}
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
