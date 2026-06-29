import { getSpeakingAppearance, getSpeakingAppearances } from "@/lib/content";
import { Navbar } from "@/components/Navbar";
import { notFound } from "next/navigation";
import { MarkdownContent } from "@/components/markdown-content";
import Link from "next/link";
import { ContextualFooter } from "@/components/ContextualFooter";
import type { Metadata } from "next";
import { formatDisplayDate } from "@/lib/utils";
import {
  createArticleMetadata,
  createBreadcrumbJsonLd,
  createSpeakingEventJsonLd,
  createWebPageJsonLd,
  extractMarkdownExcerpt,
} from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { FadeUp, Reveal } from "@/components/motion/reveal";
import { ArrowLeft, ArrowRight, Plus } from "lucide-react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  try {
    const { frontmatter, content } = getSpeakingAppearance(slug);
    const description = frontmatter.summary ?? extractMarkdownExcerpt(content);

    return createArticleMetadata({
      title: frontmatter.title,
      description,
      path: `/speaking/${slug}`,
      publishedTime: frontmatter.date ?? `${frontmatter.year}-01-01`,
      tags: [frontmatter.tag],
    });
  } catch {
    return { title: "Not Found" };
  }
}

export async function generateStaticParams() {
  const appearances = getSpeakingAppearances();
  return appearances.map((talk) => ({
    slug: talk.slug,
  }));
}

export default async function SpeakingDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  let talk;
  try {
    talk = getSpeakingAppearance(slug);
  } catch {
    notFound();
  }

  const { frontmatter, content } = talk;
  const description = frontmatter.summary ?? extractMarkdownExcerpt(content);

  return (
    <div className="min-h-screen bg-[#121214] text-neutral-300 font-sans selection:bg-teal-900 selection:text-teal-100 relative flex flex-col">
      <JsonLd
        data={[
          createWebPageJsonLd({
            name: frontmatter.title,
            description,
            path: `/speaking/${slug}`,
          }),
          createSpeakingEventJsonLd({
            title: frontmatter.title,
            description,
            path: `/speaking/${slug}`,
            conference: frontmatter.conference,
            date: frontmatter.date,
            year: frontmatter.year,
            tag: frontmatter.tag,
            slidesUrl: frontmatter.slidesUrl,
            videoUrl: frontmatter.videoUrl,
          }),
          createBreadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Speaking", path: "/speaking" },
            { name: frontmatter.title, path: `/speaking/${slug}` },
          ]),
        ]}
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
          <div className="w-full lg:w-[35%] border-b lg:border-b-0 lg:border-r border-dashed border-neutral-800/80 p-8 lg:p-12 relative lg:sticky lg:top-0 lg:h-[calc(100vh-80px)] overflow-y-auto">
            <Link
              href="/speaking"
              className="inline-flex items-center gap-2 text-xs font-mono text-neutral-500 hover:text-teal-400 transition-colors mb-12"
            >
              <ArrowLeft className="w-4 h-4" />
              GO BACK
            </Link>

            <FadeUp>
              <div className="flex flex-col gap-8">
                <div>
                  <span className="text-[10px] font-mono text-neutral-600 uppercase tracking-widest block mb-2">
                    Talk
                  </span>
                  <h1 className="text-2xl font-medium text-white tracking-tight leading-tight">
                    {frontmatter.title}
                  </h1>
                </div>

                <div className="w-full h-[1px] border-t border-dashed border-neutral-800/80" />

                <div>
                  <span className="text-[10px] font-mono text-neutral-600 uppercase tracking-widest block mb-2">
                    Date
                  </span>
                  <span className="text-sm font-medium text-neutral-300">
                    {frontmatter.date
                      ? formatDisplayDate(frontmatter.date)
                      : frontmatter.year}
                  </span>
                </div>

                <div>
                  <span className="text-[10px] font-mono text-neutral-600 uppercase tracking-widest block mb-2">
                    Conference
                  </span>
                  <span className="text-sm font-medium text-neutral-300">
                    {frontmatter.conference}
                  </span>
                </div>

                <div>
                  <span className="text-[10px] font-mono text-neutral-600 uppercase tracking-widest block mb-2">
                    Topic
                  </span>
                  <span className="text-sm font-medium text-teal-400">
                    {frontmatter.tag}
                  </span>
                </div>

                {(frontmatter.slidesUrl || frontmatter.videoUrl) && (
                  <div>
                    <span className="text-[10px] font-mono text-neutral-600 uppercase tracking-widest block mb-3">
                      Resources
                    </span>
                    <div className="flex flex-col gap-2">
                      {frontmatter.slidesUrl && (
                        <Link
                          href={frontmatter.slidesUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group relative z-10 inline-flex items-center gap-1.5 text-sm text-neutral-400 hover:text-teal-400 transition-colors"
                        >
                          View slides
                          <ArrowRight className="size-3 shrink-0 transition-transform duration-200 ease-out group-hover:translate-x-0.5" />
                        </Link>
                      )}
                      {frontmatter.videoUrl && (
                        <Link
                          href={frontmatter.videoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group relative z-10 inline-flex items-center gap-1.5 text-sm text-neutral-400 hover:text-teal-400 transition-colors"
                        >
                          Watch recording
                          <ArrowRight className="size-3 shrink-0 transition-transform duration-200 ease-out group-hover:translate-x-0.5" />
                        </Link>
                      )}
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

        <ContextualFooter type="article" />
      </div>
    </div>
  );
}
