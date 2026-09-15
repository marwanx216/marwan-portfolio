"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/data";
import ProjectCard from "./project-card";

export default function Projects() {
  return (
    <section id="projects" className="section relative overflow-hidden pt-28">
      {/* Background Glow */}

      <div className="blur-bg left-1/2 top-20 -translate-x-1/2 opacity-40" />

      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{
          once: true,
          amount: 0.25,
        }}
        transition={{
          duration: 0.7,
        }}
        className="mb-20"
      >
        <p className="mono mb-3 text-blue-400">FEATURED WORK</p>

        <h2 className="section-title">
          Projects that solve
          <br />
          real problems.
        </h2>

        <p className="section-subtitle">
          Every project here was built with one objective: creating AI systems
          that move beyond experimentation into practical, production-ready
          software.
        </p>
      </motion.div>

      <div className="space-y-40">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.title}
            project={project}
            reverse={index % 2 === 1}
          />
        ))}
      </div>
    </section>
  );
}
