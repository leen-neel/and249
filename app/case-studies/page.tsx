import { getCaseStudies } from "@/lib/content";
import { formatDisplayDate } from "@/lib/utils";
import { Navbar } from "@/components/Navbar";
import { createListPageMetadata } from "@/lib/seo";
import Link from "next/link";
import { ArrowLeft, Plus } from "lucide-react";

export const metadata = createListPageMetadata({
  title: "Case Studies",
  description:
    "Product engineering and MVP delivery case studies — translating complex requirements into high-performance architectures.",
  path: "/case-studies",
});

export default function CaseStudiesPage() {
  const caseStudies = getCaseStudies();

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
              Case Studies
            </h1>
            <p className="text-sm text-neutral-400 max-w-2xl leading-relaxed">
              Product engineering and MVP delivery focus. Translating complex
              requirements into high-performance architectures, optimized for
              rapid validation and scalable growth.
            </p>

            <div className="absolute -bottom-[9px] -left-[9px] text-neutral-600 font-mono text-[10px] w-4 h-4 flex items-center justify-center pointer-events-none">
              <Plus />
            </div>
            <div className="absolute -bottom-[9px] -right-[9px] text-neutral-600 font-mono text-[10px] w-4 h-4 flex items-center justify-center pointer-events-none">
              <Plus />
            </div>
          </div>

          <div className="flex flex-col w-full">
            {caseStudies.map((study) => (
              <Link
                href={`/case-studies/${study.slug}`}
                key={study.slug}
                className="group flex flex-col lg:flex-row lg:items-center justify-between gap-4 px-8 lg:px-12 py-8 lg:py-10 border-b border-dashed border-neutral-800/80 hover:bg-neutral-900/40 transition-colors relative"
              >
                <div className="w-full lg:w-1/3">
                  <h2 className="text-lg font-medium text-white group-hover:text-teal-400 transition-colors tracking-tight">
                    {study.frontmatter.title}
                  </h2>
                </div>

                <div className="w-full lg:w-1/3 flex lg:justify-center">
                  <span className="text-sm font-medium text-teal-400 tracking-wide">
                    {study.frontmatter.metric}
                  </span>
                </div>

                <div className="w-full lg:w-1/3 flex lg:justify-end">
                  <span className="text-xs font-mono text-neutral-500">
                    {formatDisplayDate(study.frontmatter.date)}
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
