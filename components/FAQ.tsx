"use client";

import Link from "next/link";
import { Plus } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { GridSection } from "./GridSystem";
import { Reveal } from "./motion/reveal";
import { siteConfig } from "@/lib/seo";

const quickFacts = [
  { value: "2-4 wks", label: "Typical MVP" },
  { value: "Worldwide", label: "Client reach" },
  { value: "Direct", label: "Senior execution" },
] as const;

export function FAQ() {
  const person = siteConfig.person;

  return (
    <GridSection className="flex flex-col w-full" id="faq">
      <div className="flex flex-col lg:flex-row w-full">
        <Reveal className="w-full lg:w-[38%]">
          <div className="group relative flex flex-col gap-8 px-8 lg:px-12 py-12 lg:py-16 border-b lg:border-b-0 lg:border-r border-dashed border-neutral-800/80 h-full">
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

            <div className="flex flex-col gap-4">
              <span className="text-[10px] font-mono text-neutral-500 tracking-widest uppercase">
                [ FAQ ]
              </span>
              <h2 className="text-xl lg:text-2xl font-medium tracking-tight text-white">
                Common questions before we start.
              </h2>
              <p className="text-sm text-neutral-400 leading-relaxed">
                Straight answers on scope, timeline, stack, and how engagements
                work, so you know what you&apos;re signing up for.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {quickFacts.map((fact) => (
                <div
                  key={fact.label}
                  className="flex flex-col p-4 rounded-md border border-teal-900/40 bg-teal-950/20"
                >
                  <span className="text-lg font-light text-white mb-1 tracking-tight">
                    {fact.value}
                  </span>
                  <span className="text-[9px] text-teal-500 uppercase tracking-widest font-mono leading-tight">
                    {fact.label}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-3">
              <span className="text-[10px] font-mono text-neutral-600 uppercase tracking-widest">
                Core stack
              </span>
              <div className="flex flex-wrap gap-2">
                {person.coreStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-[11px] font-mono text-neutral-300 px-2.5 py-1 rounded-sm border border-neutral-800/80 bg-neutral-900/40"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <blockquote className="border-l-2 border-teal-900/50 pl-5 py-1">
              <p className="text-sm text-neutral-400 italic leading-relaxed">
                &quot;I take on a small number of clients at a time so you get
                direct senior-level execution, not a dev shop hand-off.&quot;
              </p>
            </blockquote>

            <Link
              href={person.contactUrl}
              className="group inline-flex items-center gap-2 text-sm font-medium text-teal-400 hover:text-teal-300 transition-colors mt-auto"
            >
              Book a discovery call
              <span className="inline-block transition-transform duration-75 ease-out group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </Reveal>

        <Reveal delay={0.12} className="w-full lg:w-[62%]">
          <div className="flex flex-col px-8 lg:px-12 py-12 lg:py-16 h-full justify-center">
            <Accordion type="single" collapsible className="w-full">
              {siteConfig.faq.map((item, index) => (
                <AccordionItem
                  key={item.question}
                  value={`faq-${index}`}
                  className="border-neutral-800/80"
                >
                  <AccordionTrigger className="text-base text-white hover:text-teal-400 hover:no-underline py-5">
                    <span className="flex items-start gap-4 text-left">
                      <span className="text-[10px] font-mono text-teal-500/70 mt-1.5 shrink-0 tabular-nums">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      {item.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-neutral-400 leading-relaxed pl-8">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </Reveal>
      </div>
    </GridSection>
  );
}
