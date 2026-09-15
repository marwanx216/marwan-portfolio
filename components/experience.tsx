"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="section relative">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.7 }}
        className="mb-20"
      >
        <p className="mono mb-3 text-blue-400">EXPERIENCE</p>

        <h2 className="section-title">Career Journey</h2>

        <p className="section-subtitle">
          A combination of AI engineering, data science, marketing, and business
          leadership that shaped how I approach real-world problems.
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical timeline line */}
        <div className="absolute left-[7px] top-3 bottom-3 w-px bg-gradient-to-b from-blue-500/70 via-zinc-700 to-transparent md:left-[190px]" />

        <div className="space-y-8">
          {experience.map((item, index) => (
            <motion.div
              key={`${item.company}-${item.period}`}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              className="relative grid gap-5 pl-10 md:grid-cols-[160px_1fr] md:gap-10 md:pl-0"
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 top-5 md:left-[183px]">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.08 + 0.15,
                    type: "spring",
                    stiffness: 300,
                  }}
                  className="relative flex h-[15px] w-[15px] items-center justify-center rounded-full border-2 border-blue-400 bg-[#09090B] shadow-[0_0_18px_rgba(59,130,246,0.55)]"
                >
                  <div className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                </motion.div>
              </div>

              {/* Date */}
              <div className="pt-3 md:pr-4 md:text-right">
                <span className="mono text-sm font-medium text-blue-400">
                  {item.period}
                </span>
              </div>

              {/* Experience Card */}
              <motion.div
                whileHover={{
                  y: -4,
                }}
                transition={{
                  type: "spring",
                  stiffness: 250,
                  damping: 20,
                }}
                className="group rounded-2xl border border-zinc-800 bg-zinc-950/70 p-6 transition-all duration-300 hover:border-blue-500/30 hover:bg-zinc-900/70 hover:shadow-[0_15px_45px_rgba(0,0,0,0.25)] md:p-7"
              >
                <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <div className="mb-2 flex items-center gap-3">
                      <div className="rounded-lg border border-zinc-800 bg-zinc-900 p-2 transition-colors group-hover:border-blue-500/30 group-hover:bg-blue-500/10">
                        <Briefcase size={17} className="text-blue-400" />
                      </div>

                      <h3 className="text-xl font-semibold tracking-tight md:text-2xl">
                        {item.role}
                      </h3>
                    </div>

                    <p className="ml-1 text-base text-zinc-400">
                      {item.company}
                    </p>
                  </div>

                  <span className="w-fit rounded-full border border-blue-500/20 bg-blue-500/5 px-3 py-1 text-xs font-medium text-blue-400">
                    {item.role.includes("Marketing")
                      ? "Marketing"
                      : item.role.includes("Data Scientist")
                        ? "Data Science"
                        : item.role.includes("Data Engineer")
                          ? "Data Engineering"
                          : "AI Engineering"}
                  </span>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
