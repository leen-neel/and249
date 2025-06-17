"use client";

import { motion } from "framer-motion";

const ServicesSection = () => {
  const services = [
    {
      title: "SaaS Development",
      description:
        "Building scalable, cloud-native applications with modern tech stack",
      icon: "🚀",
    },
    {
      title: "MVP Creation",
      description:
        "Rapid prototyping and development of minimum viable products",
      icon: "⚡",
    },
    {
      title: "Full-Stack Expertise",
      description:
        "End-to-end development with focus on performance and security",
      icon: "💻",
    },
  ];

  return (
    <section className="relative -mt-12 pb-10">
      <div className="mx-auto max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all hover:bg-white/10"
            >
              {/* Gradient Border */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-500/20 to-teal-500/20 opacity-0 transition-opacity group-hover:opacity-100" />

              {/* Content */}
              <div className="relative">
                <div className="mb-4 inline-block rounded-xl bg-white/5 p-3 text-4xl backdrop-blur-sm transition-transform group-hover:scale-110">
                  {service.icon}
                </div>
                <h3 className="mb-2 text-xl font-bold text-white">
                  {service.title}
                </h3>
                <p className="text-gray-400">{service.description}</p>
              </div>

              {/* Hover Effect */}
              <div className="absolute -inset-1 -z-10 rounded-2xl bg-gradient-to-r from-emerald-500/20 to-teal-500/20 opacity-0 blur-xl transition-all group-hover:opacity-100" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
