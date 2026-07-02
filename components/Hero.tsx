"use client";

import type { ReactNode } from "react";

import { GridSection } from "./GridSystem";
import { Button } from "./ui/button";
import { FadeUp } from "./motion/reveal";
import { motion } from "motion/react";
import { AnimatedGreeting } from "./motion/animated-greeting";
import { StatTicker } from "./StatTicker";
import Link from "next/link";
import { siteConfig } from "@/lib/seo";

function SocialIcon({ children }: { children: ReactNode }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="size-5"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

export function Hero() {
  return (
    <GridSection className="relative flex flex-col w-full overflow-hidden">
      <div className="relative px-8 lg:px-12 py-20 lg:py-28 w-full">
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center z-0">
          <div className="hero-glow w-[800px] h-[800px] rounded-full bg-[radial-gradient(circle,rgba(13,148,136,0.03)_0%,transparent_20%)]" />
        </div>

        <div className="relative z-10 flex flex-col gap-6 max-w-3xl">
          <FadeUp>
            <Link
              href="#engagement"
              className="group inline-flex items-center gap-2 w-fit px-3 py-1.5 rounded-sm border border-neutral-800/80 bg-neutral-900/40 text-[11px] font-mono text-neutral-400 hover:text-teal-400 hover:border-teal-900/50 transition-colors duration-200"
            >
              <span className="size-1.5 rounded-full bg-teal-500 animate-pulse" />
              {siteConfig.person.availabilityChip}
              <span className="transition-transform duration-200 group-hover:translate-x-0.5">
                →
              </span>
            </Link>
          </FadeUp>

          <FadeUp delay={0.04}>
            <h1 className="text-4xl lg:text-5xl xl:text-[3.25rem] font-medium text-white tracking-tight leading-[1.08]">
              {siteConfig.person.contactHeadline}
            </h1>
          </FadeUp>

          <FadeUp delay={0.1}>
            <div className="flex flex-col gap-3 max-w-xl">
              <motion.span
                layout
                transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
                className="inline-flex w-fit max-w-full items-center overflow-hidden px-2.5 py-1 rounded-sm border border-teal-900/40 bg-teal-950/25 text-teal-400 text-sm font-mono"
              >
                <AnimatedGreeting />
              </motion.span>
              <p className="text-base text-neutral-400 font-normal leading-relaxed">
                Anindo Neel Dutta is a full-stack product engineer based in
                India, working with startups and founders worldwide. I ship SaaS
                MVPs, production LLM pipelines, and outbound automation on
                Next.js and TypeScript, usually in fixed 2-4 week sprints.
              </p>
            </div>
          </FadeUp>

          <FadeUp delay={0.18}>
            <div className="flex flex-wrap items-center gap-6 mt-2">
              <Link href="#engagement">
                <Button
                  variant="outline"
                  className="px-6 py-3 h-auto border border-[#53E6CC]/40 bg-[#53E6CC]/10 text-[#53E6CC] rounded-sm hover:border-[#53E6CC]/65 hover:bg-[#53E6CC]/18 hover:text-[#53E6CC] transition-all duration-200 hover:-translate-y-px active:translate-y-0 text-sm font-medium"
                >
                  Book a discovery call
                </Button>
              </Link>
              <div className="flex items-center gap-5 text-neutral-500">
                <Link
                  href={siteConfig.social.github}
                  aria-label="GitHub"
                  className="transition-all duration-200 hover:text-teal-400 hover:-translate-y-0.5"
                >
                  <SocialIcon>
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.01.28-2.09 0-3.1 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </SocialIcon>
                </Link>
                <Link
                  href={siteConfig.social.linkedin}
                  aria-label="LinkedIn"
                  className="transition-all duration-200 hover:text-teal-400 hover:-translate-y-0.5"
                >
                  <SocialIcon>
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </SocialIcon>
                </Link>
                <Link
                  href={siteConfig.social.x}
                  aria-label="X"
                  className="transition-all duration-200 hover:text-teal-400 hover:-translate-y-0.5"
                >
                  <SocialIcon>
                    <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                    <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
                  </SocialIcon>
                </Link>
              </div>
            </div>
          </FadeUp>
        </div>
      </div>

      <StatTicker />
    </GridSection>
  );
}
