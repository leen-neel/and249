import * as React from "react";
import { GridSection } from "./GridSystem";
import { Reveal } from "./motion/reveal";
import { Plus } from "lucide-react";
import { siteConfig } from "@/lib/seo";

export function Profile() {
  const person = siteConfig.person;

  return (
    <GridSection className="flex flex-col w-full" id="profile">
      <Reveal>
        <div className="flex flex-col gap-2 px-8 lg:px-12 py-12 border-b border-dashed border-neutral-800/80">
          <span className="text-[10px] font-mono text-neutral-500 tracking-widest uppercase">
            [ 06 // THE ENGINEER ]
          </span>
          <h2 className="text-xl lg:text-2xl font-medium tracking-tight text-white mt-2">
            About & Execution Philosophy.
          </h2>
        </div>
      </Reveal>

      <div className="flex flex-col lg:flex-row w-full">
        <Reveal delay={0.08} className="w-full lg:w-[30%]">
          <div className="group relative z-10 flex flex-col gap-8 px-8 lg:px-12 py-12 border-b lg:border-b-0 lg:border-r border-dashed border-neutral-800/80 h-full">
            <div className="absolute -top-[9px] -left-[9px] text-neutral-600 font-mono text-[10px] w-4 h-4 flex items-center justify-center pointer-events-none opacity-40 group-hover:opacity-100 transition-opacity duration-75 ease-out">
              <Plus />
            </div>
            <div className="absolute -top-[9px] -right-[9px] text-neutral-600 font-mono text-[10px] w-4 h-4 flex items-center justify-center pointer-events-none opacity-40 group-hover:opacity-100 transition-opacity duration-75 ease-out">
              <Plus />
            </div>
            <div className="absolute -bottom-[9px] -left-[9px] text-neutral-600 font-mono text-[10px] w-4 h-4 flex items-center justify-center pointer-events-none opacity-40 group-hover:opacity-100 transition-opacity duration-75 ease-out">
              <Plus />
            </div>
            <div className="absolute -bottom-[9px] -right-[9px] text-neutral-600 font-mono text-[10px] w-4 h-4 flex items-center justify-center pointer-events-none opacity-40 group-hover:opacity-100 transition-opacity duration-75 ease-out">
              <Plus />
            </div>

            <div>
              <span className="text-[10px] font-mono text-neutral-600 uppercase tracking-widest block mb-2">
                Role
              </span>
              <span className="text-sm font-medium text-neutral-300">
                {person.role}
              </span>
            </div>

            <div>
              <span className="text-[10px] font-mono text-neutral-600 uppercase tracking-widest block mb-2">
                Specialization
              </span>
              <span className="text-sm font-medium text-neutral-300">
                {person.specialization}
              </span>
            </div>

            <div>
              <span className="text-[10px] font-mono text-neutral-600 uppercase tracking-widest block mb-2">
                Location
              </span>
              <span className="text-sm font-medium text-neutral-300">
                {person.homeLocation.country}
              </span>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.16} className="w-full lg:w-[70%]">
          <div className="flex flex-col gap-6 px-8 lg:px-12 py-12 justify-center h-full">
            <p className="text-sm text-neutral-400 leading-relaxed font-sans max-w-2xl">
              My engineering philosophy is rooted in velocity and reduction.
              Over the years, I&apos;ve seen too many early-stage startups stall
              because they got bogged down in engineering bloat—building complex
              microservices and premature optimizations before they even had
              their first paying customer.
            </p>
            <p className="text-sm text-neutral-400 leading-relaxed font-sans max-w-2xl">
              I specialize in taking products from zero to launched in a matter
              of weeks. By utilizing a highly optimized, type-safe stack
              (Next.js, TypeScript, Tailwind), I architect pristine frontend
              systems and reliable backend logic that scale seamlessly past
              early revenue targets.
            </p>
            <p className="text-sm text-neutral-400 leading-relaxed font-sans max-w-2xl">
              Whether we&apos;re launching a validation-ready MVP or overhauling
              an outbound automation engine, my focus remains singular:
              translate complex business requirements into high-fidelity,
              high-performance software that converts.
            </p>
          </div>
        </Reveal>
      </div>
    </GridSection>
  );
}
