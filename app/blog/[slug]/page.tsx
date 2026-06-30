import { getBlogPost, getBlogPosts } from "@/lib/content";
import { Navbar } from "@/components/Navbar";
import { notFound } from "next/navigation";
import { MarkdownContent } from "@/components/markdown-content";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ContextualFooter } from "@/components/ContextualFooter";
import type { Metadata } from "next";
import { formatDisplayDate } from "@/lib/utils";
import {
  createArticleJsonLd,
  createArticleMetadata,
  createBreadcrumbJsonLd,
  createWebPageJsonLd,
  extractMarkdownExcerpt,
} from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { FadeUp } from "@/components/motion/reveal";
import { ArrowLeft, Plus } from "lucide-react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  try {
    const { frontmatter, content } = getBlogPost(slug);
    const description =
      frontmatter.description ?? extractMarkdownExcerpt(content);

    return createArticleMetadata({
      title: frontmatter.title,
      description,
      path: `/blog/${slug}`,
      publishedTime: frontmatter.date,
      tags: frontmatter.tags,
    });
  } catch {
    notFound();
  }
}

export async function generateStaticParams() {
  const posts = getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  let post;
  try {
    post = getBlogPost(slug);
  } catch (e) {
    notFound();
  }

  const { frontmatter, content } = post;
  const description =
    frontmatter.description ?? extractMarkdownExcerpt(content);

  return (
    <div className="min-h-screen bg-[#121214] text-neutral-300 font-sans selection:bg-teal-900 selection:text-teal-100 relative flex flex-col">
      <JsonLd
        data={[
          createWebPageJsonLd({
            name: frontmatter.title,
            description,
            path: `/blog/${slug}`,
          }),
          createArticleJsonLd({
            title: frontmatter.title,
            description,
            path: `/blog/${slug}`,
            publishedTime: frontmatter.date,
            tags: frontmatter.tags,
          }),
          createBreadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: frontmatter.title, path: `/blog/${slug}` },
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

        <main className="flex-1 flex flex-col relative">
          {/* Header Block */}
          <div className="w-full px-8 lg:px-16 py-16 lg:py-24 border-b border-dashed border-neutral-800/80 relative flex flex-col items-center text-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-xs font-mono text-neutral-500 hover:text-teal-400 transition-colors mb-12 self-start lg:self-auto lg:absolute lg:top-16 lg:left-16"
            >
              <ArrowLeft className="w-4 h-4" />
              GO BACK
            </Link>

            <FadeUp>
              <div className="max-w-3xl w-full flex flex-col items-center">
                <time
                  dateTime={frontmatter.date}
                  className="text-[10px] font-mono text-teal-500 uppercase tracking-widest block mb-4"
                >
                  {formatDisplayDate(frontmatter.date)}
                </time>
                <h1 className="text-3xl lg:text-5xl font-medium text-white tracking-tight leading-tight mb-8">
                  {frontmatter.title}
                </h1>

                {frontmatter.tags && (
                  <div className="flex flex-wrap gap-2 justify-center">
                    {frontmatter.tags.map((t) => (
                      <Badge
                        key={t}
                        variant="secondary"
                        className="bg-transparent border border-neutral-800 text-neutral-400 font-normal text-[11px] rounded-sm transition-all duration-200 hover:bg-teal-950/30 hover:border-teal-900/50 hover:text-teal-400 hover:-translate-y-px"
                      >
                        {t}
                      </Badge>
                    ))}
                  </div>
                )}
              </div>
            </FadeUp>

            <div className="absolute -bottom-[9px] -left-[9px] text-neutral-600 font-mono text-[10px] w-4 h-4 flex items-center justify-center pointer-events-none">
              +
            </div>
            <div className="absolute -bottom-[9px] -right-[9px] text-neutral-600 font-mono text-[10px] w-4 h-4 flex items-center justify-center pointer-events-none">
              +
            </div>
          </div>

          {/* Body Content */}
          <FadeUp>
            <div className="w-full px-8 lg:px-16 py-16 flex justify-center">
              <MarkdownContent content={content} />
            </div>
          </FadeUp>
        </main>

        <ContextualFooter type="article" />
      </div>
    </div>
  );
}
