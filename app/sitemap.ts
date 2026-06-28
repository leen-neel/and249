import type { MetadataRoute } from "next";
import {
  getBlogPosts,
  getCaseStudies,
  getSpeakingAppearances,
} from "@/lib/content";
import { siteConfig } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/case-studies`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/speaking`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  const blogRoutes: MetadataRoute.Sitemap = getBlogPosts().map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.frontmatter.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const caseStudyRoutes: MetadataRoute.Sitemap = getCaseStudies().map(
    (study) => ({
      url: `${baseUrl}/case-studies/${study.slug}`,
      lastModified: new Date(study.frontmatter.date),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })
  );

  const speakingRoutes: MetadataRoute.Sitemap = getSpeakingAppearances().map(
    (talk) => ({
      url: `${baseUrl}/speaking/${talk.slug}`,
      lastModified: new Date(
        talk.frontmatter.date ?? `${talk.frontmatter.year}-01-01`
      ),
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })
  );

  return [...staticRoutes, ...blogRoutes, ...caseStudyRoutes, ...speakingRoutes];
}
