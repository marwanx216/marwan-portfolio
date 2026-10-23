"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Download, Menu, X } from "lucide-react";
import { personal } from "@/lib/data";

const links = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Certifications", href: "#certifications" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);

    onScroll();
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed left-0 top-0 z-50 w-full"
    >
      <nav className="container mt-3 px-4 md:mt-5">
        <div
          className={`flex items-center justify-between rounded-full px-5 py-3 md:px-6 md:py-4 transition-all duration-300 ${
            scrolled
              ? "border border-white/10 bg-black/70 shadow-2xl backdrop-blur-2xl"
              : "border border-white/5 bg-black/40 backdrop-blur-xl"
          }`}
        >
          <a
            href="#"
            onClick={() => setMobileMenuOpen(false)}
            className="text-lg font-bold tracking-wider transition hover:text-blue-400"
          >
            MARWAN.
          </a>

          {/* Desktop navigation */}
          <div className="hidden items-center gap-8 md:flex">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative text-sm text-zinc-400 transition hover:text-white after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-blue-400 after:transition-all hover:after:w-full"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop resume button */}
          <a
            href={personal.resume}
            download
            className="button-secondary hidden items-center gap-2 md:flex"
          >
            <Download size={18} />
            Resume
          </a>

          {/* Mobile menu toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((open) => !open)}
            className="flex items-center justify-center rounded-full p-2 text-zinc-300 transition hover:bg-white/10 hover:text-white md:hidden"
            aria-label={
              mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile dropdown */}
        {mobileMenuOpen && (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="mt-3 rounded-2xl border border-white/10 bg-black/90 p-3 shadow-2xl backdrop-blur-2xl md:hidden"
          >
            <div className="flex flex-col gap-1">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm text-zinc-300 transition hover:bg-white/10 hover:text-white"
                >
                  {link.name}
                </a>
              ))}

              <a
                href={personal.resume}
                download
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 flex items-center justify-center gap-2 rounded-xl border border-white/10 px-4 py-3 text-sm text-white transition hover:bg-white/10"
              >
                <Download size={16} />
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
}
