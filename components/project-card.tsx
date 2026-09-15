"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

type Props = {
  project: {
    title: string;
    subtitle: string;
    description: string;
    image?: string;
    video?: string;
    technologies: string[];
    highlight: string;
    github: string;
    demo: string;
  };
  reverse?: boolean;
};

export default function ProjectCard({ project, reverse = false }: Props) {
  return (
    <motion.article
      initial={{
        opacity: 0,
        x: reverse ? 80 : -80,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: true,
        amount: 0.3,
      }}
      transition={{
        duration: 0.8,
      }}
      className={`grid items-center gap-16 lg:grid-cols-2 ${
        reverse ? "lg:[&>*:first-child]:order-2" : ""
      }`}
    >
      {/* Mock Window */}

      <motion.div
        whileHover={{
          y: -8,
          rotateX: 2,
          rotateY: -2,
          scale: 1.01,
        }}
        transition={{
          type: "spring",
          stiffness: 200,
        }}
        className="overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950 shadow-2xl"
      >
        <div className="flex items-center gap-2 border-b border-zinc-800 px-5 py-4">
          <div className="h-3 w-3 rounded-full bg-red-500" />

          <div className="h-3 w-3 rounded-full bg-yellow-500" />

          <div className="h-3 w-3 rounded-full bg-green-500" />
        </div>

        {project.video ? (
          <video
            src={project.video}
            autoPlay
            muted
            loop
            playsInline
            className="h-[360px] w-full object-cover"
          />
        ) : (
          <Image
            src={project.image!}
            alt={project.title}
            width={900}
            height={550}
            className="h-[360px] w-full object-cover transition duration-700 hover:scale-105"
          />
        )}
      </motion.div>

      {/* Content */}

      <div>
        <p className="mono mb-3 text-blue-400">{project.subtitle}</p>

        <h3 className="mb-5 text-5xl font-bold">{project.title}</h3>

        <p className="mb-8 text-lg leading-8 text-zinc-400">
          {project.description}
        </p>

        <div className="mb-8 flex flex-wrap gap-3">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-zinc-800 bg-zinc-900 px-4 py-2 text-sm transition hover:border-blue-500/40 hover:bg-blue-500/10"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mb-10 inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-5 py-3 font-semibold text-blue-400">
          🚀 {project.highlight}
        </div>

        <div className="flex flex-wrap gap-4">
          <a href={project.github} target="_blank" className="button-secondary">
            <FaGithub className="mr-2 text-lg" />
            GitHub
          </a>

          <a href={project.demo} target="_blank" className="button-primary">
            Live Demo
            <ArrowUpRight size={18} className="ml-2" />
          </a>
        </div>
      </div>
    </motion.article>
  );
}
