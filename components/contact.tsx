"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { personal } from "@/lib/data";

export default function Contact() {
  return (
    <section
      id="contact"
      className="section relative overflow-hidden pb-16 pt-24"
    >
      <div className="blur-bg bottom-[-220px] left-1/2 -translate-x-1/2 opacity-30" />

      {/* Contact Card */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
        className="relative overflow-hidden rounded-[32px] border border-zinc-800 bg-zinc-950"
      >
        {/* Background Grid */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.035] [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] [background-size:40px_40px]" />

        <div className="relative grid gap-12 p-8 sm:p-10 md:p-14 lg:grid-cols-[1.25fr_0.75fr] lg:gap-16 lg:p-16">
          {/* Left */}
          <div className="flex flex-col justify-center">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mono mb-5 text-sm text-blue-400"
            >
              GET IN TOUCH
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="max-w-3xl text-4xl font-bold leading-[1.05] tracking-[-0.04em] sm:text-5xl md:text-6xl lg:text-[4.5rem]"
            >
              Lets build something
              <br />
              <span className="gradient-text">intelligent.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25 }}
              className="mt-7 max-w-xl text-base leading-7 text-zinc-400 sm:text-lg sm:leading-8"
            >
              Have an AI project, product idea, or technical challenge? Lets
              turn it into something real.
            </motion.p>

            <motion.a
              href={`mailto:${personal.email}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35 }}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
              className="button-primary mt-9 w-fit"
            >
              <Mail size={18} className="mr-2" />
              Start a Conversation
              <ArrowUpRight size={18} className="ml-2" />
            </motion.a>
          </div>

          {/* Right */}
          <div className="flex flex-col justify-center gap-3">
            {/* Email */}
            <motion.a
              href={`mailto:${personal.email}`}
              whileHover={{ x: 5 }}
              className="group flex items-center gap-4 rounded-2xl border border-zinc-800 bg-zinc-900/40 p-4 transition-all duration-300 hover:border-blue-500/30 hover:bg-blue-500/[0.06]"
            >
              <div className="shrink-0 rounded-xl bg-zinc-900 p-3 transition-colors group-hover:bg-blue-500/10">
                <Mail size={19} className="text-blue-400" />
              </div>

              <div className="min-w-0">
                <p className="mono text-[11px] tracking-wide text-zinc-500">
                  EMAIL
                </p>
                <p className="mt-1 truncate text-sm text-zinc-300">
                  {personal.email}
                </p>
              </div>
            </motion.a>

            {/* GitHub */}
            <motion.a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ x: 5 }}
              className="group flex items-center gap-4 rounded-2xl border border-zinc-800 bg-zinc-900/40 p-4 transition-all duration-300 hover:border-blue-500/30 hover:bg-blue-500/[0.06]"
            >
              <div className="shrink-0 rounded-xl bg-zinc-900 p-3 transition-colors group-hover:bg-blue-500/10">
                <FaGithub size={19} className="text-blue-400" />
              </div>

              <div>
                <p className="mono text-[11px] tracking-wide text-zinc-500">
                  GITHUB
                </p>
                <p className="mt-1 text-sm text-zinc-300">@marwanx216</p>
              </div>
            </motion.a>

            {/* LinkedIn */}
            <motion.a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ x: 5 }}
              className="group flex items-center gap-4 rounded-2xl border border-zinc-800 bg-zinc-900/40 p-4 transition-all duration-300 hover:border-blue-500/30 hover:bg-blue-500/[0.06]"
            >
              <div className="shrink-0 rounded-xl bg-zinc-900 p-3 transition-colors group-hover:bg-blue-500/10">
                <FaLinkedinIn size={19} className="text-blue-400" />
              </div>

              <div>
                <p className="mono text-[11px] tracking-wide text-zinc-500">
                  LINKEDIN
                </p>
                <p className="mt-1 text-sm text-zinc-300">Marwan Ashraf</p>
              </div>
            </motion.a>

            {/* Location */}
            <div className="flex items-center gap-4 rounded-2xl border border-zinc-800 bg-zinc-900/20 p-4">
              <div className="shrink-0 rounded-xl bg-zinc-900 p-3">
                <MapPin size={19} className="text-blue-400" />
              </div>

              <div>
                <p className="mono text-[11px] tracking-wide text-zinc-500">
                  LOCATION
                </p>
                <p className="mt-1 text-sm text-zinc-300">
                  {personal.location}
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-zinc-900 pt-6 text-xs text-zinc-600 sm:flex-row"
      >
        <p>© {new Date().getFullYear()} Marwan Ashraf.</p>

        <p className="mono">Designed & built with AI engineering in mind.</p>
      </motion.footer>
    </section>
  );
}
