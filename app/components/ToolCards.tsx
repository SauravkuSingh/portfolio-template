"use client";

import { useState } from "react";
import { motion } from "framer-motion";

type Tool = {
  slug: string;
  label: string;
  pos: string;
  rotate: number;
  delay: number;
};

const tools: Tool[] = [
  { slug: "figma", label: "Figma", pos: "left-6 top-44", rotate: -8, delay: 0 },
  { slug: "sketch", label: "Sketch", pos: "left-24 top-[46%]", rotate: 7, delay: 0.5 },
  { slug: "framer", label: "Framer", pos: "left-8 bottom-40", rotate: -6, delay: 1 },
  { slug: "adobexd", label: "Adobe XD", pos: "right-8 top-48", rotate: 8, delay: 0.3 },
  { slug: "adobephotoshop", label: "Photoshop", pos: "right-24 top-[48%]", rotate: -7, delay: 0.8 },
  { slug: "adobeillustrator", label: "Illustrator", pos: "right-6 bottom-44", rotate: 6, delay: 1.3 },
];

function ToolCard({ tool }: { tool: Tool }) {
  const [showLogo, setShowLogo] = useState(true);

  return (
    <motion.div
      style={{ rotate: tool.rotate }}
      animate={{ y: [0, -12, 0] }}
      transition={{ duration: 5, ease: "easeInOut", repeat: Infinity, delay: tool.delay }}
      className={`absolute ${tool.pos} flex h-24 w-24 flex-col items-center justify-center gap-2 rounded-2xl border-2 border-white bg-neutral-900/70 shadow-[0_12px_40px_rgba(0,0,0,0.55)] backdrop-blur-sm`}
    >
      {showLogo && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={`https://cdn.simpleicons.org/${tool.slug}/white`}
          alt={tool.label}
          onError={() => setShowLogo(false)}
          className="h-8 w-8"
        />
      )}
      <span className="text-[9px] font-mono uppercase tracking-[0.15em] text-neutral-300">
        {tool.label}
      </span>
    </motion.div>
  );
}

/**
 * Decorative floating tool cards for the empty side gutters of the WhyMe
 * section. Hidden on smaller screens where there is no spare width.
 */
export default function ToolCards() {
  return (
    <div className="pointer-events-none absolute inset-0 hidden lg:block" aria-hidden>
      {tools.map((tool) => (
        <ToolCard key={tool.slug} tool={tool} />
      ))}
    </div>
  );
}
