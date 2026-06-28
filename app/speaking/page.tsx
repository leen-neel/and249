import { getSpeakingAppearances } from "@/lib/content";
import { formatDisplayDate } from "@/lib/utils";
import { Navbar } from "@/components/Navbar";
import { createListPageMetadata } from "@/lib/seo";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Plus } from "lucide-react";

export const metadata = createListPageMetadata({
  title: "Speaking",
  description:
    "Conference talks, workshops, and stage appearances on SaaS architecture, edge compute, and product engineering.",
  path: "/speaking",
});

export default function SpeakingPage() {
  const appearances = getSpeakingAppearances();

  return (
    <div className="min-h-screen bg-[#121214] text-neutral-300 font-sans selection:bg-teal-900 selection:text-teal-100 relative flex flex-col">
      <div className="relative z-10 flex flex-col w-full min-h-screen max-w-7xl mx-auto border-l border-r border-dashed border-neutral-800/80">
        <div className="w-full h-[80px] border-b border-dashed border-neutral-800/80 relative">
          <Navbar />
          <div className="absolute -bottom-[9px] -left-[9px] text-neutral-600 font-mono text-[10px] w-4 h-4 flex items-center justify-center pointer-events-none">
            <Plus />
          </div>
          <div className="absolute -bottom-[9px] -right-[9px] text-neutral-600 font-mono text-[10px] w-4 h-4 flex items-center justify-center pointer-events-none">
            <Plus />
          </div>
        </div>

        <main className="flex-1 flex flex-col relative">
          <div className="w-full px-8 lg:px-12 py-16 lg:py-20 border-b border-dashed border-neutral-800/80 relative flex flex-col">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-mono text-neutral-500 hover:text-teal-400 transition-colors mb-12"
            >
              <ArrowLeft className="w-4 h-4" />
              BACK TO HOME
            </Link>

            <h1 className="text-3xl lg:text-4xl font-medium text-white tracking-tight leading-tight mb-4">
              Speaking Appearances
            </h1>
            <p className="text-sm text-neutral-400 max-w-2xl leading-relaxed">
              Conference talks, workshops, and stage appearances on SaaS
              architecture, edge compute, and product engineering.
            </p>

            <div className="absolute -bottom-[9px] -left-[9px] text-neutral-600 font-mono text-[10px] w-4 h-4 flex items-center justify-center pointer-events-none">
              <Plus />
            </div>
            <div className="absolute -bottom-[9px] -right-[9px] text-neutral-600 font-mono text-[10px] w-4 h-4 flex items-center justify-center pointer-events-none">
              <Plus />
            </div>
          </div>

          <div className="flex flex-col w-full">
            {appearances.map((talk) => (
              <Link
                href={`/speaking/${talk.slug}`}
                key={talk.slug}
                className="group flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-8 px-8 lg:px-12 py-8 border-b border-dashed border-neutral-800/80 hover:bg-neutral-900/40 transition-colors relative"
              >
                <div className="relative z-10 flex-1 min-w-0">
                  <span className="text-xs font-mono text-neutral-500 block mb-1">
                    {talk.frontmatter.conference}
                  </span>
                  <h2 className="text-lg font-medium text-neutral-200 group-hover:text-teal-400 transition-colors tracking-tight truncate">
                    {talk.frontmatter.title}
                  </h2>
                </div>

                <div className="relative z-10 flex-shrink-0 lg:w-40 flex justify-start lg:justify-center">
                  <Badge
                    variant="secondary"
                    className="bg-neutral-900 border border-neutral-800 text-neutral-400 font-normal text-[11px] rounded-sm transition-all duration-200 group-hover:bg-teal-950/30 group-hover:border-teal-900/50 group-hover:text-teal-400"
                  >
                    {talk.frontmatter.tag}
                  </Badge>
                </div>

                <div className="relative z-10 flex-shrink-0 lg:w-32 text-left lg:text-right">
                  <span className="text-sm font-mono text-neutral-500 group-hover:text-neutral-300 transition-colors">
                    {talk.frontmatter.date
                      ? formatDisplayDate(talk.frontmatter.date)
                      : talk.frontmatter.year}
                  </span>
                </div>

                <div className="absolute -bottom-[9px] -left-[9px] text-neutral-600 font-mono text-[10px] w-4 h-4 flex items-center justify-center pointer-events-none">
                  <Plus />
                </div>
                <div className="absolute -bottom-[9px] -right-[9px] text-neutral-600 font-mono text-[10px] w-4 h-4 flex items-center justify-center pointer-events-none">
                  <Plus />
                </div>
              </Link>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
