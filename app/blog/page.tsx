import { getBlogPosts } from "@/lib/content";
import { formatDisplayDate } from "@/lib/utils";
import { Navbar } from "@/components/Navbar";
import { createCollectionPageJsonLd, createListPageMetadata, siteConfig } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import Link from "next/link";
import { ArrowLeft, Plus } from "lucide-react";

const listMetadata = {
  title: "Blog",
  description: siteConfig.person.sections.blog,
  path: "/blog",
  imagePath: "/blog.png",
} as const;

export const metadata = createListPageMetadata(listMetadata);

export default function BlogPage() {
  const posts = getBlogPosts();

  return (
    <div className="min-h-screen bg-[#121214] text-neutral-300 font-sans selection:bg-teal-900 selection:text-teal-100 relative flex flex-col">
      <JsonLd
        data={createCollectionPageJsonLd({
          ...listMetadata,
          items: posts.map((post) => ({
            name: post.frontmatter.title,
            path: `/blog/${post.slug}`,
            description: post.frontmatter.description,
          })),
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
              Articles & Insights
            </h1>
            <p className="text-sm text-neutral-400 max-w-2xl leading-relaxed">
              A lean, editorial directory of technical essays and strategy
              deep-dives.
            </p>

            <div className="absolute -bottom-[9px] -left-[9px] text-neutral-600 font-mono text-[10px] w-4 h-4 flex items-center justify-center pointer-events-none">
              <Plus />
            </div>
            <div className="absolute -bottom-[9px] -right-[9px] text-neutral-600 font-mono text-[10px] w-4 h-4 flex items-center justify-center pointer-events-none">
              <Plus />
            </div>
          </div>

          <div className="flex flex-col w-full">
            {posts.map((post) => (
              <Link
                href={`/blog/${post.slug}`}
                key={post.slug}
                className="group flex flex-col lg:flex-row lg:items-center justify-start gap-6 lg:gap-16 px-8 lg:px-12 py-8 border-b border-dashed border-neutral-800/80 hover:bg-neutral-900/40 transition-colors relative"
              >
                <div className="w-32 flex-shrink-0">
                  <span className="text-xs font-mono text-neutral-500">
                    {formatDisplayDate(post.frontmatter.date)}
                  </span>
                </div>

                <div className="flex-1">
                  <h2 className="text-lg font-medium text-neutral-200 group-hover:text-teal-400 transition-colors tracking-tight">
                    {post.frontmatter.title}
                  </h2>
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
