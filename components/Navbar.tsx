"use client";

import { motion, useReducedMotion } from "motion/react";
import { Button } from "./ui/button";
import Link from "next/link";

export function Navbar() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.nav
      initial={shouldReduceMotion ? false : { opacity: 0, y: -6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      className="h-full w-full flex items-center justify-between px-8 lg:px-12"
    >
      <Link href="/">
        <div className="flex items-center gap-3.5">
          <span
            className="text-[1.3rem] font-semibold leading-none text-[#53E6CC]"
            aria-hidden="true"
          >
            &amp;
          </span>
          <span className="text-lg font-medium tracking-tight text-white">
            Anindo Neel Dutta
          </span>
        </div>
      </Link>
      <div className="hidden md:flex gap-8 items-center text-[12px] font-medium tracking-wide text-[#ccc]">
        <Link
          href="/"
          className="nav-link hover:text-teal-400 transition-colors duration-200"
        >
          Home
        </Link>
        <Link
          href="/case-studies"
          className="nav-link hover:text-teal-400 transition-colors duration-200"
        >
          Case Studies
        </Link>
        <Link
          href="/speaking"
          className="nav-link hover:text-teal-400 transition-colors duration-200"
        >
          Speaking
        </Link>
        <Link
          href="/blog"
          className="nav-link hover:text-teal-400 transition-colors duration-200"
        >
          Blog
        </Link>

        <Link href="/#engagement">
          <Button
            variant="outline"
            className="px-4 py-1.5 h-auto border border-[#53E6CC]/40 bg-[#53E6CC]/10 text-[#53E6CC] rounded-sm hover:border-[#53E6CC]/65 hover:bg-[#53E6CC]/18 hover:text-[#53E6CC] transition-all duration-200 hover:-translate-y-px text-[12px] font-medium"
          >
            Get in Touch
          </Button>
        </Link>
      </div>
    </motion.nav>
  );
}
