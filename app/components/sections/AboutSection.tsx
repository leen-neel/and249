"use client";

import { motion } from "framer-motion";

const AboutSection = () => {
  const skills = [
    {
      name: "Frontend",
      items: ["Next.js", "Nuxt.JS", "TypeScript", "Tailwind CSS"],
    },
    { name: "Backend", items: ["Node.js", "Python", "PostgreSQL", "MongoDB"] },
    { name: "DevOps", items: ["Docker", "AWS", "CI/CD", "Git"] },
  ];

  return (
    <section id="about" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="bg-gradient-to-br from-white to-gray-400 bg-clip-text text-3xl font-bold text-transparent md:text-5xl">
            About Me
          </h2>
          <p className="mt-4 text-gray-400">
            Full-stack developer passionate about building scalable applications
          </p>
        </motion.div>

        <div className="grid gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <h3 className="mb-4 text-xl font-bold text-white">Background</h3>
              <p className="text-gray-400">
                With over 5 years of experience in software development, I
                specialize in building scalable SaaS applications and MVPs. My
                journey in tech has led me through various roles, from startup
                environments to enterprise solutions, giving me a unique
                perspective on product development and user experience.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <h3 className="mb-4 text-xl font-bold text-white">Approach</h3>
              <p className="text-gray-400">
                I believe in creating solutions that are not only technically
                sound but also user-friendly and scalable. My development
                process focuses on clean code, performance optimization, and
                creating intuitive user experiences that solve real-world
                problems.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            {skills.map((skillGroup, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
              >
                <h3 className="mb-4 text-xl font-bold text-white">
                  {skillGroup.name}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="rounded-full bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 text-center"
        >
          <a
            href="#contact"
            className="inline-block rounded-full border border-white/20 bg-white/10 px-8 py-3 text-sm font-medium text-white backdrop-blur-sm transition-all hover:bg-white/20"
          >
            Let's Work Together
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
