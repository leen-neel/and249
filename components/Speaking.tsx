import Link from "next/link";
import { getSpeakingAppearances } from "@/lib/content";
import { Badge } from "./ui/badge";
import { Reveal } from "./motion/reveal";
import { ArrowRight } from "lucide-react";

export async function Speaking() {
  const appearances = getSpeakingAppearances().slice(0, 2);

  return (
    <div className="flex flex-col gap-6 px-8 lg:px-12 py-8 lg:py-12 border-b border-dashed border-neutral-800/80">
      <h2 className="text-lg font-medium tracking-tight text-white mb-2">
        SPEAKING
      </h2>
      <div className="space-y-8">
        {appearances.map((talk, idx) => (
          <Reveal key={talk.slug} delay={idx * 0.06}>
            <Link
              href={`/speaking/${talk.slug}`}
              className="group relative z-10 flex flex-col gap-2 cursor-pointer"
            >
              <span className="text-xs text-neutral-500 font-mono">
                {talk.frontmatter.year} — {talk.frontmatter.conference}
              </span>
              <h3 className="text-sm font-medium text-white group-hover:text-teal-400 transition-colors duration-200 ease-out">
                {talk.frontmatter.title}
              </h3>
              <div className="mt-1">
                <Badge
                  variant="secondary"
                  className="bg-neutral-900 border border-neutral-800 text-neutral-400 font-normal text-[10px] rounded-sm transition-all duration-200 hover:bg-teal-950/30 hover:border-teal-900/50 hover:text-teal-400 hover:-translate-y-px"
                >
                  {talk.frontmatter.tag}
                </Badge>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
      <div className="border-t border-dashed border-neutral-800/60 mt-auto pt-6">
        <Link
          href="/speaking"
          className="group relative z-10 text-sm text-neutral-400 hover:text-teal-400 transition-colors duration-200 ease-out font-sans"
        >
          View all appearances{" "}
          <span className="inline-block transition-transform duration-200 ease-out group-hover:translate-x-1">
            <ArrowRight className="size-3" />
          </span>
        </Link>
      </div>
    </div>
  );
}
