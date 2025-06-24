"use client";

import { motion } from "framer-motion";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
} from "@tabler/icons-react";

const SocialLinks = () => {
  return (
    <div className="fixed bottom-8 left-8 z-50 flex flex-col gap-4">
      <motion.a
        href="https://github.com/leen-neel"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 1.5 }}
        className="rounded-full bg-white/10 p-3 text-white backdrop-blur-sm transition-all hover:bg-white/20"
      >
        <IconBrandGithub size={20} />
      </motion.a>
      <motion.a
        href="https://linkedin.com/in/anindoneel"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 1.6 }}
        className="rounded-full bg-white/10 p-3 text-white backdrop-blur-sm transition-all hover:bg-white/20"
      >
        <IconBrandLinkedin size={20} />
      </motion.a>
      <motion.a
        href="https://x.com/AnindoNeel"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 1.7 }}
        className="rounded-full bg-white/10 p-3 text-white backdrop-blur-sm transition-all hover:bg-white/20"
      >
        <IconBrandX size={20} />
      </motion.a>
    </div>
  );
};

export default SocialLinks;
