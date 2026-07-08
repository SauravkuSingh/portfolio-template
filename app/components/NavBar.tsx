"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";
import TransitionLink from "./TransitionLink";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "HOME", href: "/" },
  { name: "ABOUT", href: "/about" },
  { name: "PROJECTS", href: "/projects" },
  { name: "CONTACT", href: "/contact" },
];

export default function NavBar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-md border-b border-neutral-900">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <TransitionLink
          href="/"
          className="text-white font-mono tracking-widest text-lg font-bold flex items-center gap-1 group"
        >
          <span>ANNE</span>
          <span className="w-1.5 h-1.5 bg-white rounded-full group-hover:scale-150 transition-transform duration-300" />
        </TransitionLink>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <TransitionLink
                key={link.name}
                href={link.href}
                className={`relative text-xs font-mono tracking-widest transition-colors duration-300 py-2 ${
                  isActive ? "text-white" : "text-neutral-400 hover:text-white"
                }`}
              >
                {link.name}
                {isActive && (
                  <motion.span
                    layoutId="activeDot"
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-white rounded-full"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </TransitionLink>
            );
          })}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center">
          <TransitionLink
            href="/contact"
            className="flex items-center gap-2 bg-white text-black font-mono tracking-widest text-xs font-bold px-6 py-3 rounded-none border border-white hover:bg-transparent hover:text-white transition-all duration-300"
          >
            LET'S TALK
            <ArrowUpRight size={14} />
          </TransitionLink>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden text-neutral-400 hover:text-white focus:outline-none z-50"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-0 left-0 w-screen h-screen bg-black flex flex-col justify-center px-8 z-40 md:hidden"
          >
            <div className="flex flex-col gap-8">
              {navLinks.map((link, i) => {
                const isActive = pathname === link.href;
                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <TransitionLink
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`text-3xl font-mono tracking-widest block font-bold ${
                        isActive ? "text-white" : "text-neutral-500 hover:text-white"
                      }`}
                    >
                      {link.name}
                    </TransitionLink>
                  </motion.div>
                );
              })}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.1 }}
                className="mt-8 pt-8 border-t border-neutral-900"
              >
                <TransitionLink
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="inline-flex items-center gap-2 bg-white text-black font-mono tracking-widest text-sm font-bold px-8 py-4 rounded-none hover:bg-transparent hover:text-white border border-white transition-all duration-300 w-full justify-center"
                >
                  LET'S TALK
                  <ArrowUpRight size={16} />
                </TransitionLink>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
