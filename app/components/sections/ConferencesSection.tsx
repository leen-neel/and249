"use client";

import { motion } from "framer-motion";
import {
  IconCalendar,
  IconMapPin,
  IconMicrophone,
  IconExternalLink,
} from "@tabler/icons-react";

interface Conference {
  event: string;
  role: string;
  topic: string;
  date: string;
  location: string;
  link?: string;
}

const conferences: Conference[] = [
  {
    event: "WordCamp Kolkata 2022",
    role: "Speaker",
    topic: "Headless WordPress + Astro 🚀",
    date: "Dec 2022",
    location: "Kolkata, India",
    link: "https://kolkata.wordcamp.org/2022/session/headless-wordpress-astro-%f0%9f%9a%80-by-anindo-neel-dutta/",
  },
  {
    event: "WordCamp Nagpur 2024",
    role: "Speaker",
    topic: "A Deep Dive into JAMStack with Headless WordPress",
    date: "Sep 2024",
    location: "Nagpur, India",
    link: "https://nagpur.wordcamp.org/2024/jamstack-meets-wordpress-anindo-neel-dutta-to-lead-advanced-workshop-at-wordcamp-nagpur-2024/",
  },
  {
    event: "WordCamp Surat 2025",
    role: "Speaker",
    topic: "Building Code That Scales Beyond the Project",
    date: "Nov 2025",
    location: "Surat, India",
    link: "https://surat.wordcamp.org/2025/session/software-engineering-for-wordpress-building-code-that-scales-beyond-the-project/",
  },
  {
    event: "WordCamp Kolhapur 2026",
    role: "Speaker",
    topic:
      'Stress from Scope Creep: The Psychological Cost of "Can You Also..."',
    date: "Feb 2026",
    location: "Kolhapur, India",
    link: "https://kolhapur.wordcamp.org/2026/session/stress-from-scope-creep-the-psychological-cost-of-can-you-also/",
  },
  {
    event: "WordCamp Pune 2026",
    role: "Facilitator",
    topic: "WordPress + AI: Connect WordPress with AI workflows",
    date: "Feb 2026",
    location: "Pune, India",
    link: "https://pune.wordcamp.org/2026/facilitator",
  },
];

const ConferencesSection = () => {
  return (
    <section
      id="conferences"
      className="relative py-20 bg-black/50 overflow-hidden"
    >
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-teal-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="bg-gradient-to-br from-white to-gray-400 bg-clip-text pb-2 text-3xl font-bold text-transparent md:text-5xl h-20">
            Speaking Engagements
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Sharing insights on AI, voice technology, and engineering at
            conferences and meetups.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {conferences.map((conf, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/20"
            >
              {/* Card Header */}
              <div className="flex justify-between items-start mb-4">
                <div className="inline-flex items-center justify-center rounded-lg bg-emerald-500/10 p-2 text-emerald-500 group-hover:scale-110 transition-transform">
                  <IconMicrophone size={24} />
                </div>
                <span className="text-xs font-semibold uppercase tracking-wider text-emerald-500/80 bg-emerald-500/10 px-2 py-1 rounded">
                  {conf.role}
                </span>
              </div>

              {/* Card Content */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                    {conf.event}
                  </h3>
                  <p className="text-sm text-gray-300 mt-1 italic leading-relaxed">
                    &ldquo;{conf.topic}&rdquo;
                  </p>
                </div>

                <div className="flex flex-col gap-2 text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <IconCalendar size={16} className="text-emerald-500/60" />
                    <span>{conf.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <IconMapPin size={16} className="text-emerald-500/60" />
                    <span>{conf.location}</span>
                  </div>
                </div>

                {conf.link && (
                  <a
                    href={conf.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-emerald-400 hover:text-emerald-300 transition-colors mt-2"
                  >
                    Learn More
                    <IconExternalLink size={14} />
                  </a>
                )}
              </div>

              {/* Subtle radial glow on hover */}
              <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-emerald-500/0 via-emerald-500/40 to-emerald-500/0 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConferencesSection;
