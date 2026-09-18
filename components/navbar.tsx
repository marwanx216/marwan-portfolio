"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
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
      <nav className="container mt-3 md:mt-5">
        <div
          className={`flex items-center justify-between rounded-full px-6 py-4 transition-all duration-300 ${
            scrolled
              ? "border border-white/10 bg-black/70 shadow-2xl backdrop-blur-2xl"
              : "border border-white/5 bg-black/40 backdrop-blur-xl"
          }`}
        >
          <a
            href="#"
            className="text-lg font-bold tracking-wider transition hover:text-blue-400"
          >
            MARWAN.
          </a>

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

          <a
            href={personal.resume}
            download
            className="button-secondary hidden items-center gap-2 md:flex"
          >
            <Download size={18} />
            Resume
          </a>
        </div>
      </nav>
    </motion.header>
  );
}
