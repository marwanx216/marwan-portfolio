"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { certifications } from "@/lib/data";

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="section relative overflow-hidden pt-28"
    >
      <div className="blur-bg right-[-250px] top-20 opacity-25" />

      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.7 }}
        className="mb-20"
      >
        <p className="mono mb-3 text-blue-400">COURSES & CERTIFICATIONS</p>

        <h2 className="section-title">
          Knowledge built
          <br />
          through continuous learning.
        </h2>

        <p className="section-subtitle">
          Courses, training programs, and certifications that shaped my
          foundation across AI, machine learning, data science, and engineering.
        </p>
      </motion.div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {certifications.map((certificate, index) => (
          <motion.a
            key={certificate.title}
            href={certificate.image}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              delay: index * 0.08,
              duration: 0.6,
            }}
            whileHover={{ y: -8 }}
            className="card group relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950"
          >
            <div className="relative aspect-[16/10] overflow-hidden border-b border-zinc-800 bg-zinc-900">
              <Image
                src={certificate.image}
                alt={certificate.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/0 transition duration-500 group-hover:bg-black/30" />

              <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/70 opacity-0 backdrop-blur-md transition-all duration-300 group-hover:opacity-100">
                <ExternalLink size={17} />
              </div>
            </div>

            <div className="flex min-h-[210px] flex-col items-center justify-center px-8 py-9 text-center">
              <p className="mono mb-3 text-xs tracking-[0.25em] text-blue-400">
                {certificate.number}
              </p>

              <h3 className="max-w-sm text-xl font-semibold leading-snug tracking-tight">
                {certificate.title}
              </h3>

              <div className="my-5 h-px w-14 bg-gradient-to-r from-transparent via-blue-500 to-transparent transition-all duration-500 group-hover:w-24" />

              <p className="text-sm text-zinc-400">{certificate.issuer}</p>

              <p className="mono mt-2 text-xs text-zinc-600">
                {certificate.year}
              </p>
            </div>

            <div className="absolute bottom-0 left-1/2 h-px w-0 -translate-x-1/2 bg-blue-500 transition-all duration-500 group-hover:w-1/2" />
          </motion.a>
        ))}
      </div>
    </section>
  );
}
