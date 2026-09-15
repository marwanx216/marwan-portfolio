"use client";

import { motion } from "framer-motion";
import {
  Brain,
  Code2,
  Database,
  Layers3,
  Server,
  BarChart3,
} from "lucide-react";

const skillGroups = [
  {
    icon: Brain,
    title: "AI & Machine Learning",
    skills: [
      "Machine Learning",
      "Deep Learning",
      "PyTorch",
      "Scikit-Learn",
      "Computer Vision",
      "NLP",
    ],
  },
  {
    icon: Layers3,
    title: "Generative AI",
    skills: ["LLMs", "Transformers", "RAG", "SBERT", "Hugging Face", "OpenAI"],
  },
  {
    icon: Server,
    title: "AI Engineering",
    skills: [
      "FastAPI",
      "Docker",
      "REST APIs",
      "Model Deployment",
      "Streamlit",
      "Git",
    ],
  },
  {
    icon: Database,
    title: "Data",
    skills: [
      "Python",
      "SQL",
      "Pandas",
      "NumPy",
      "Data Analysis",
      "Data Pipelines",
    ],
  },
  {
    icon: Code2,
    title: "Programming",
    skills: ["Python", "C++", "R", "Scala", "TypeScript", "React"],
  },
  {
    icon: BarChart3,
    title: "Analytics",
    skills: [
      "Power BI",
      "Data Visualization",
      "Predictive Analytics",
      "KPI Analysis",
      "Forecasting",
      "Business Intelligence",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section relative overflow-hidden">
      <div className="blur-bg right-[-200px] top-20 opacity-30" />

      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.7 }}
        className="mb-20"
      >
        <p className="mono mb-3 text-blue-400">TECHNICAL STACK</p>

        <h2 className="section-title">
          Tools for building
          <br />
          intelligent systems.
        </h2>

        <p className="section-subtitle">
          A practical stack covering machine learning, generative AI, backend
          engineering, data science, and analytics.
        </p>
      </motion.div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, index) => {
          const Icon = group.icon;

          return (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                delay: index * 0.08,
                duration: 0.6,
              }}
              whileHover={{ y: -6 }}
              className="card group relative flex min-h-[300px] flex-col items-center justify-center overflow-hidden px-8 py-10 text-center"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.04] via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative flex w-full flex-col items-center">
                <motion.div
                  whileHover={{
                    rotate: 8,
                    scale: 1.08,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 250,
                  }}
                  className="mb-5 rounded-2xl border border-zinc-800 bg-zinc-900/70 p-4 transition-all duration-300 group-hover:border-blue-500/40 group-hover:bg-blue-500/10"
                >
                  <Icon size={28} className="text-blue-400" />
                </motion.div>

                <p className="mono mb-2 text-xs tracking-widest text-blue-400">
                  0{index + 1}
                </p>

                <h3 className="text-xl font-semibold tracking-tight">
                  {group.title}
                </h3>

                <div className="my-5 h-px w-14 bg-gradient-to-r from-transparent via-blue-500 to-transparent transition-all duration-500 group-hover:w-24" />

                <div className="flex max-w-sm flex-wrap justify-center gap-2">
                  {group.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={`${group.title}-${skill}`}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: 0.15 + index * 0.08 + skillIndex * 0.04,
                      }}
                      whileHover={{
                        y: -2,
                        scale: 1.03,
                      }}
                      className="rounded-lg border border-zinc-800 bg-zinc-900/60 px-3 py-2 text-sm text-zinc-400 transition-colors duration-300 hover:border-blue-500/30 hover:bg-blue-500/10 hover:text-zinc-200"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>

              <div className="absolute bottom-0 left-1/2 h-px w-0 -translate-x-1/2 bg-blue-500 transition-all duration-500 group-hover:w-1/2" />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
