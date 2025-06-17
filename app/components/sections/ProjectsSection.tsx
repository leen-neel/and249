"use client";

import { motion } from "framer-motion";

const ProjectsSection = () => {
  const projects = [
    {
      title: "DocPilot",
      description:
        "DocPilot is a developer tool that lets teams create rich, interactive API documentation with built-in SDKs, mock servers, and AI features — all in one place.",
      image: "./projects/docpilot.png",
      tags: ["Next.js", "TypeScript", "PostgreSQL", "Gemini"],
      link: "https://docpilot.dev",
    },
    {
      title: "Breezi",
      description:
        "Breezi is a voice-first mindfulness app that helps users track their emotional well-being. It uses voice journaling powered by Vapi, emotional analysis with Gemini, and manages subscriptions seamlessly through Stripe — all backed by a clean Drizzle ORM database.",
      image: "./projects/breezi.png",
      tags: ["React", "Node.js", "PostgreSQL", "Vapi", "Gemini"],
      link: "https://youtu.be/CE30bQ16jnw",
    },
    {
      title: "Mockly",
      description:
        "Mockly is an AI-powered mock interview platform that simulates real interview scenarios. It uses Vapi for voice interaction, Gemini for dynamic question generation and feedback, and Firebase for seamless auth and real-time data.",
      image: "./projects/mockly.png",
      tags: ["NuxtJS", "Vapi", "Gemini", "Firebase"],
      link: "https://ai-mock-interview-neon-six.vercel.app/",
    },
  ];

  return (
    <section id="projects" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="bg-gradient-to-br from-white to-gray-400 bg-clip-text text-3xl font-bold text-transparent md:text-5xl">
            Featured Projects
          </h2>
          <p className="mt-4 text-gray-400">
            A selection of my recent work in SaaS and MVP development
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all hover:bg-white/10"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold text-white">
                  {project.title}
                </h3>
                <p className="mb-4 text-sm text-gray-400">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="rounded-full bg-white/10 px-3 py-1 text-xs text-white backdrop-blur-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="mt-4 inline-block rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm transition-all hover:bg-white/20"
                >
                  View Project
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
