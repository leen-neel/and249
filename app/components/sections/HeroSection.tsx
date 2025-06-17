"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const BackgroundBeams = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <motion.div
        animate={{
          y: [0, -40, 0],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-40 left-0 h-[500px] w-[500px] rounded-full bg-emerald-500/30 blur-[100px]"
      />
      <motion.div
        animate={{
          y: [0, 40, 0],
          x: [0, -20, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -bottom-40 right-0 h-[500px] w-[500px] rounded-full bg-teal-500/30 blur-[100px]"
      />
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-emerald-500/20 to-teal-500/20 blur-[80px]"
      />
    </div>
  );
};

const HeroSection = () => {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <BackgroundBeams />
      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-left"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-8"
            >
              <h1 className="text-4xl font-bold text-white md:text-7xl">
                Greetings! I&apos;m Anindo 👋🏻
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mb-12 text-lg text-gray-400 md:text-xl"
            >
              I build, ship, and scale digital products. Got a project in mind?
              How can I help?
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex items-center gap-6"
            >
              <Link
                href="https://cal.com/anindo-neel-dutta-epyib1/30min"
                target="_blank"
              >
                <button className="group relative overflow-hidden rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 p-[1px] transition-all hover:scale-105">
                  <span className="relative z-10 block rounded-full bg-black px-8 py-3 text-sm font-medium text-white transition-all group-hover:bg-transparent">
                    Book a call
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 opacity-0 transition-opacity group-hover:opacity-100" />
                </button>
              </Link>
              <Link href="#projects">
                <button className="group relative overflow-hidden rounded-full border border-white/20 bg-white/5 p-[1px] backdrop-blur-sm transition-all hover:scale-105">
                  <span className="relative z-10 block rounded-full bg-black px-8 py-3 text-sm font-medium text-white transition-all group-hover:bg-transparent">
                    View Projects
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 opacity-0 transition-opacity group-hover:opacity-100" />
                </button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative"
          >
            <div className="relative aspect-square w-full max-w-[600px] overflow-hidden rounded-full transition-all duration-300 hover:rotate-12">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-teal-500/20" />
              <Image
                src="/Me.png"
                alt="Hero Image"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 rounded-full border border-white/10 " />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -right-4 -top-4 h-32 w-32 rounded-full bg-emerald-500/20 blur-2xl" />
            <div className="absolute -bottom-4 -left-4 h-32 w-32 rounded-full bg-teal-500/20 blur-2xl" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
