"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { personal } from "@/lib/data";

const skills = ["LLMs", "Computer Vision", "FastAPI", "PyTorch", "Docker"];

const terminal = [
  "$ python marwan.py",
  "Initializing portfolio...",
  "✓ Machine Learning",
  "✓ Computer Vision",
  "✓ LLMs",
  "✓ NLP",
  "✓ FastAPI",
  "✓ Docker",
  "Ready.",
];

export default function Hero() {
  return (
    <section
      className="relative flex min-h-screen items-center overflow-hidden md:pt-0"
      style={{ paddingTop: "clamp(7rem, 18vh, 11rem)" }}
    >
      {" "}
      {/* Background */}
      <div className="blur-bg left-[-150px] top-[-120px]" />
      <div className="blur-bg bottom-[-150px] right-[-120px]" />
      <div className="container grid items-center gap-24 lg:grid-cols-2">
        {" "}
        {/* LEFT */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mono mb-5 text-blue-400"
          >
            AI ENGINEER • DATA SCIENTIST
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="mb-8 text-6xl font-bold leading-tight lg:text-7xl"
          >
            Building
            <br />
            <span className="gradient-text">Intelligent Systems</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25 }}
            className="max-w-xl text-lg leading-9 text-zinc-400"
          >
            {personal.description}
          </motion.p>

          {/* Floating Skills */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-10 flex flex-wrap gap-3"
          >
            {skills.map((skill) => (
              <motion.div
                key={skill}
                whileHover={{
                  y: -4,
                  scale: 1.05,
                }}
                className="rounded-full border border-zinc-800 bg-zinc-900 px-4 py-2 text-sm text-zinc-300"
              >
                {skill}
              </motion.div>
            ))}
          </motion.div>

          {/* Buttons */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
            className="mt-12 flex flex-wrap gap-4"
          >
            <a href="#projects" className="button-primary">
              View Projects
              <ArrowRight size={18} className="ml-2" />
            </a>

            <a href={personal.resume} download className="button-secondary">
              <Download size={18} className="mr-2" />
              Resume
            </a>
          </motion.div>
        </div>
        {/* TERMINAL */}
        <motion.div
          initial={{
            opacity: 0,
            x: 60,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            delay: 0.35,
            duration: 0.8,
          }}
          whileHover={{
            y: -6,
          }}
          className="overflow-hidden rounded-3xl border border-zinc-800 bg-[#09090B] shadow-2xl"
        >
          <div className="flex items-center gap-2 border-b border-zinc-800 px-6 py-4">
            <div className="h-3 w-3 rounded-full bg-red-500" />
            <div className="h-3 w-3 rounded-full bg-yellow-500" />
            <div className="h-3 w-3 rounded-full bg-green-500" />
          </div>

          <div className="mono space-y-4 p-8 text-sm">
            {terminal.map((line, index) => (
              <motion.p
                key={line}
                initial={{
                  opacity: 0,
                  x: -15,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  delay: 0.6 + index * 0.15,
                }}
                className={
                  line.startsWith("✓")
                    ? "text-green-400"
                    : line === "Ready."
                      ? "text-blue-400"
                      : line.startsWith("Initializing")
                        ? "text-zinc-500"
                        : ""
                }
              >
                {line}
              </motion.p>
            ))}

            <motion.span
              animate={{
                opacity: [1, 0, 1],
              }}
              transition={{
                repeat: Infinity,
                duration: 1,
              }}
            >
              █
            </motion.span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
