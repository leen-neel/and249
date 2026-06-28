import { getCaseStudy, getCaseStudies } from "@/lib/content";
import { Navbar } from "@/components/Navbar";
import { notFound } from "next/navigation";
import { MarkdownContent } from "@/components/markdown-content";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ContextualFooter } from "@/components/ContextualFooter";
import type { Metadata } from "next";
import { formatDisplayDate } from "@/lib/utils";
import { createArticleMetadata, createCreativeWorkJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { FadeUp, Reveal } from "@/components/motion/reveal";
import { ArrowLeft, Plus } from "lucide-react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  try {
    const { frontmatter } = getCaseStudy(slug);
    return createArticleMetadata({
      title: frontmatter.title,
      description: frontmatter.summary,
      path: `/case-studies/${slug}`,
      publishedTime: frontmatter.date,
      tags: frontmatter.tech,
    });
  } catch {
    return { title: "Not Found" };
  }
}

export async function generateStaticParams() {
  const caseStudies = getCaseStudies();
  return caseStudies.map((study) => ({
    slug: study.slug,
  }));
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  let caseStudy;
  try {
    caseStudy = getCaseStudy(slug);
  } catch (e) {
    notFound();
  }

  const { frontmatter, content } = caseStudy;

  return (
    <div className="min-h-screen bg-[#121214] text-neutral-300 font-sans selection:bg-teal-900 selection:text-teal-100 relative flex flex-col">
      <JsonLd
        data={createCreativeWorkJsonLd({
          title: frontmatter.title,
          description: frontmatter.summary,
          path: `/case-studies/${slug}`,
          publishedTime: frontmatter.date,
          tags: frontmatter.tech,
        })}
      />
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

        <main className="flex-1 flex flex-col lg:flex-row relative">
          {/* Left Sticky Lane: Metadata */}
          <div className="w-full lg:w-[35%] border-b lg:border-b-0 lg:border-r border-dashed border-neutral-800/80 p-8 lg:p-12 relative lg:sticky lg:top-0 lg:h-[calc(100vh-80px)] overflow-y-auto">
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 text-xs font-mono text-neutral-500 hover:text-teal-400 transition-colors mb-12"
            >
              <ArrowLeft className="w-4 h-4" />
              GO BACK
            </Link>

            <FadeUp>
              <div className="flex flex-col gap-8">
                <div>
                  <span className="text-[10px] font-mono text-neutral-600 uppercase tracking-widest block mb-2">
                    Project
                  </span>
                  <h1 className="text-2xl font-medium text-white tracking-tight leading-tight">
                    {frontmatter.title}
                  </h1>
                </div>

                <div className="w-full h-[1px] border-t border-dashed border-neutral-800/80"></div>

                <div>
                  <span className="text-[10px] font-mono text-neutral-600 uppercase tracking-widest block mb-2">
                    Timeline
                  </span>
                  <span className="text-sm font-medium text-neutral-300">
                    {frontmatter.timeline}
                  </span>
                </div>

                <div>
                  <span className="text-[10px] font-mono text-neutral-600 uppercase tracking-widest block mb-2">
                    Metric
                  </span>
                  <span className="text-sm font-medium text-teal-400">
                    {frontmatter.metric}
                  </span>
                </div>

                <div>
                  <span className="text-[10px] font-mono text-neutral-600 uppercase tracking-widest block mb-2">
                    Date
                  </span>
                  <time
                    dateTime={frontmatter.date}
                    className="text-sm font-medium text-neutral-300"
                  >
                    {formatDisplayDate(frontmatter.date)}
                  </time>
                </div>

                {frontmatter.tech && (
                  <div>
                    <span className="text-[10px] font-mono text-neutral-600 uppercase tracking-widest block mb-3">
                      Core Stack
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {frontmatter.tech.map((t) => (
                        <Badge
                          key={t}
                          variant="secondary"
                          className="bg-neutral-900 border border-neutral-800 text-neutral-400 font-normal text-[11px] rounded-sm hover:bg-teal-950/30 hover:border-teal-900/50 hover:text-teal-400 transition-colors"
                        >
                          {t}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </FadeUp>
          </div>

          <Reveal delay={0.1} className="w-full lg:w-[65%]">
            <div className="p-8 lg:p-16 flex justify-center h-full">
              <MarkdownContent content={content} />
            </div>
          </Reveal>

          <div className="absolute top-[0px] hidden lg:flex left-[35%] -translate-x-[50%] text-neutral-600 font-mono text-[10px] w-4 h-4 items-center justify-center pointer-events-none">
            <Plus />
          </div>
        </main>

        <ContextualFooter type="case-study" />
      </div>
    </div>
  );
}
