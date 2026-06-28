import * as React from "react";
import { GridSection } from "./GridSystem";
import { getBlogPosts } from "@/lib/content";
import Link from "next/link";
import { Reveal } from "./motion/reveal";
import { Speaking } from "./Speaking";
import { ArrowRight } from "lucide-react";

export async function Insights() {
  const posts = getBlogPosts();

  return (
    <GridSection className="h-full flex flex-col" id="activity">
      <Reveal>
        <Speaking />
      </Reveal>

      {/* Writing Section */}
      <Reveal delay={0.1}>
        <div className="flex flex-col gap-6 px-8 lg:px-12 py-8 lg:py-12 flex-1">
          <h2 className="text-lg font-medium tracking-tight text-white mb-2">
            WRITING
          </h2>
          <div className="space-y-6 flex-1">
            {posts.map((post, idx) => (
              <Reveal key={post.slug} delay={idx * 0.06}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group relative z-10 flex flex-col gap-1 cursor-pointer"
                >
                  <span className="text-[11px] text-neutral-500 font-mono">
                    {post.frontmatter.date}
                  </span>
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium text-neutral-300 group-hover:text-teal-400 transition-colors duration-200 ease-out">
                      {post.frontmatter.title}
                    </h3>
                    <span className="text-neutral-600 font-mono opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-teal-400 transition-all duration-200 ease-out">
                      <ArrowRight className="size-5" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
          <div className="mt-2">
            <Link
              href="/blog"
              className="group relative z-10 text-sm text-neutral-400 hover:text-teal-400 transition-colors duration-200 ease-out font-sans"
            >
              View all articles{" "}
              <span className="inline-block transition-transform duration-200 ease-out group-hover:translate-x-1">
                <ArrowRight className="size-3" />
              </span>
            </Link>
          </div>
        </div>
      </Reveal>
    </GridSection>
  );
}
