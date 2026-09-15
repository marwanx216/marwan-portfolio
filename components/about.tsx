"use client";

import { motion } from "framer-motion";
import { Brain, Database, Briefcase } from "lucide-react";

const cards = [
  {
    icon: Brain,
    title: "AI Systems",
    description:
      "I design and build intelligent applications across machine learning, deep learning, LLMs, NLP, and computer vision — from models and prototypes to usable AI products.",
    points: [
      "Machine Learning & Deep Learning",
      "LLMs & RAG",
      "Computer Vision & NLP",
    ],
  },
  {
    icon: Database,
    title: "Data Intelligence",
    description:
      "I turn complex and unstructured data into models, analytical systems, and insights that help answer real questions and support better decisions.",
    points: [
      "Data Analysis & Modeling",
      "Predictive Analytics",
      "Data Pipelines & APIs",
    ],
  },
  {
    icon: Briefcase,
    title: "Business Strategy",
    description:
      "I combine technical problem-solving with business understanding to build technology around actual objectives, users, and measurable outcomes.",
    points: [
      "Problem & Product Thinking",
      "Business Intelligence",
      "Strategy & Execution",
    ],
  },
];

export default function About() {
  return (
    <section id="about" className="section relative overflow-hidden pt-28">
      <div className="blur-bg left-[-250px] top-20 opacity-20" />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mb-14"
      >
        <p className="mono mb-3 text-blue-400">ABOUT</p>

        <h2 className="section-title">
          AI Engineering that solves
          <br />
          real-world problems.
        </h2>

        <p className="section-subtitle mb-0">
          My work combines AI engineering, data science, and business
          understanding to turn complex problems into practical, intelligent
          software.
        </p>
      </motion.div>

      {/* Cards */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {cards.map((card, index) => {
          const Icon = card.icon;

          return (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                delay: index * 0.12,
                duration: 0.6,
              }}
              whileHover={{ y: -6 }}
              className="card group relative flex min-h-[390px] flex-col items-center justify-center overflow-hidden px-10 py-12 text-center"
            >
              {/* Icon */}
              <motion.div
                whileHover={{
                  rotate: 8,
                  scale: 1.08,
                }}
                transition={{
                  type: "spring",
                  stiffness: 250,
                }}
                className="mb-6 rounded-2xl border border-zinc-800 bg-zinc-900/70 p-4 transition-all duration-300 group-hover:border-blue-500/40 group-hover:bg-blue-500/10"
              >
                <Icon size={30} className="text-blue-400" />
              </motion.div>

              {/* Number */}
              <p className="mono mb-2 text-xs tracking-widest text-blue-400">
                0{index + 1}
              </p>

              {/* Title */}
              <h3 className="text-2xl font-bold tracking-tight">
                {card.title}
              </h3>

              {/* Divider */}
              <div className="my-6 h-px w-16 bg-gradient-to-r from-transparent via-blue-500 to-transparent transition-all duration-500 group-hover:w-28" />

              {/* Description */}
              <p className="max-w-sm text-[15px] leading-7 text-zinc-400">
                {card.description}
              </p>

              {/* Capabilities */}
              <div className="mt-7 space-y-3">
                {card.points.map((point, pointIndex) => (
                  <motion.div
                    key={point}
                    initial={{
                      opacity: 0,
                      y: 8,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      delay: 0.25 + index * 0.12 + pointIndex * 0.06,
                    }}
                    className="flex items-center justify-center gap-2 text-sm text-zinc-500"
                  >
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />
                    <span>{point}</span>
                  </motion.div>
                ))}
              </div>

              {/* Bottom Accent */}
              <div className="absolute bottom-0 left-1/2 h-px w-0 -translate-x-1/2 bg-blue-500 transition-all duration-500 group-hover:w-1/2" />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
