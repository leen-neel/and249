import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { GridSection } from "./GridSystem";
import { Reveal } from "./motion/reveal";
import { offerings } from "@/lib/homepage";

export function Offerings() {
  return (
    <GridSection className="flex flex-col w-full" id="capabilities">
      <Reveal>
        <div className="flex flex-col gap-2 px-8 lg:px-12 py-12 border-b border-dashed border-neutral-800/80">
          <span className="text-[10px] font-mono text-neutral-500 tracking-widest uppercase">
            [ 02 // SURFACES ]
          </span>
          <h2 className="text-xl lg:text-2xl font-medium tracking-tight text-white mt-2">
            Four ways to work together.
          </h2>
          <p className="text-sm text-neutral-400 max-w-2xl leading-relaxed mt-2">
            Pick the engagement that matches where you are — from zero-to-one MVP
            to production AI systems and growth debugging.
          </p>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2">
        {offerings.map((offering, idx) => (
          <Reveal key={offering.id} delay={idx * 0.06}>
            <Link
              href={offering.href}
              className={cn(
                "group relative flex flex-col gap-4 px-8 lg:px-12 py-10 border-b border-dashed border-neutral-800/80 h-full transition-colors duration-200 hover:bg-neutral-900/30",
                idx % 2 === 0 && "md:border-r",
                idx >= offerings.length - 2 && "md:border-b-0"
              )}
            >
              <div className="flex items-start justify-between gap-4">
                <span className="text-[10px] font-mono text-teal-500 tracking-widest uppercase">
                  {offering.id}
                </span>
                <ArrowUpRight className="size-4 text-neutral-600 group-hover:text-teal-400 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 shrink-0" />
              </div>
              <h3 className="text-lg font-medium text-white group-hover:text-teal-400 transition-colors duration-200">
                {offering.title}
              </h3>
              <p className="text-sm text-neutral-400 leading-relaxed flex-1">
                {offering.description}
              </p>
              <span className="text-xs font-mono text-neutral-500 group-hover:text-teal-500/80 transition-colors">
                {offering.cta} →
              </span>
            </Link>
          </Reveal>
        ))}
      </div>
    </GridSection>
  );
}
