import * as React from "react";
import { GridSection } from "./GridSystem";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { getCaseStudies } from "@/lib/content";
import Link from "next/link";
import { Reveal } from "./motion/reveal";

export async function Projects() {
  const caseStudies = getCaseStudies();

  return (
    <GridSection className="h-full flex flex-col" id="projects">
      <Reveal>
        <div className="flex items-center justify-between gap-2 px-8 lg:px-12 py-8 lg:py-12 border-b border-dashed border-neutral-800/80">
          <h2 className="text-lg font-medium tracking-tight text-white">
            Case Studies
          </h2>
          <Link
            href="/case-studies"
            className="group relative z-10 text-sm text-neutral-400 hover:text-teal-400 transition-colors duration-200 ease-out font-sans"
          >
            View all projects{" "}
            <span className="inline-block transition-transform duration-200 ease-out group-hover:translate-x-1">
              <ArrowRight className="size-3" />
            </span>
          </Link>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 flex-1">
        {caseStudies.map((study, idx) => (
          <Reveal key={study.slug} delay={idx * 0.07} className="h-full">
            <Link
              href={`/case-studies/${study.slug}`}
              className="block w-full h-full"
            >
              <Card
                className={cn(
                  "group relative z-10 p-8 lg:p-12 border-0 rounded-none bg-transparent hover:bg-neutral-900/40 transition-all duration-200 ease-out flex flex-col justify-between overflow-hidden shadow-none cursor-pointer h-full hover:-translate-y-0.5",
                  "border-dashed border-neutral-800/80",
                  "border-b",
                  idx % 2 === 0 ? "md:border-r" : "",
                  idx >= caseStudies.length - 2 ? "md:border-b-0" : "",
                  idx === caseStudies.length - 1 ? "border-b-0" : ""
                )}
              >
                <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-all duration-200 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <ArrowUpRight className="w-5 h-5 text-teal-500" />
                </div>
                <CardHeader className="p-0 pb-4">
                  <CardTitle className="text-base font-medium text-white group-hover:text-teal-400 transition-colors duration-200 ease-out">
                    {study.frontmatter.title}
                  </CardTitle>
                  <CardDescription className="text-sm text-neutral-500 mt-2 leading-relaxed">
                    {study.frontmatter.summary}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-0 mt-8">
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {study.frontmatter.tech?.map((t) => (
                      <Badge
                        key={t}
                        variant="secondary"
                        className="bg-neutral-900 border border-neutral-800 text-neutral-400 font-normal text-[11px] rounded-sm group-hover:bg-teal-950/30 group-hover:border-teal-900/50 group-hover:text-teal-400 transition-colors"
                      >
                        {t}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Link>
          </Reveal>
        ))}
      </div>
    </GridSection>
  );
}
