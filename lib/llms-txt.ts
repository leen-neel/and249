import {
  getBlogPosts,
  getCaseStudies,
  getSpeakingAppearances,
} from "@/lib/content";
import { siteConfig } from "@/lib/seo";

export function llmsAbsoluteUrl(path: string): string {
  return path.startsWith("http") ? path : `${siteConfig.url}${path}`;
}

function formatLink(path: string, title: string, description?: string): string {
  const url = llmsAbsoluteUrl(path);
  return description ? `- [${title}](${url}): ${description}` : `- [${title}](${url})`;
}

function formatSection(title: string, lines: string[]): string {
  if (lines.length === 0) return "";
  return `## ${title}\n${lines.join("\n")}`;
}

export function generateLlmsTxt(): string {
  const blogPosts = getBlogPosts();
  const caseStudies = getCaseStudies();
  const speaking = getSpeakingAppearances();

  const sections = [
    `# ${siteConfig.name}`,
    "",
    `> ${siteConfig.description}`,
    "",
    `Full text: [llms-full.txt](${llmsAbsoluteUrl("/llms-full.txt")})`,
    "",
    formatSection(
      "Core pages",
      [
        formatLink("/", "Home", siteConfig.jobTitle),
        formatLink("/blog", "Blog", "Articles on SaaS, AI systems, and engineering."),
        formatLink(
          "/case-studies",
          "Case studies",
          "Client projects with outcomes, stack, and approach."
        ),
        formatLink(
          "/speaking",
          "Speaking",
          "Conference talks and presentations."
        ),
      ].filter(Boolean)
    ),
    formatSection(
      "Blog",
      blogPosts.map((post) =>
        formatLink(
          `/blog/${post.slug}`,
          post.frontmatter.title,
          post.frontmatter.description
        )
      )
    ),
    formatSection(
      "Case studies",
      caseStudies.map((study) =>
        formatLink(
          `/case-studies/${study.slug}`,
          study.frontmatter.title,
          study.frontmatter.summary
        )
      )
    ),
    formatSection(
      "Speaking",
      speaking.map((talk) =>
        formatLink(
          `/speaking/${talk.slug}`,
          talk.frontmatter.title,
          `${talk.frontmatter.conference} (${talk.frontmatter.year}) — ${talk.frontmatter.summary}`
        )
      )
    ),
    formatSection(
      "Expertise",
      siteConfig.keywords.map((keyword) => `- ${keyword}`)
    ),
    formatSection(
      "Profiles",
      [
        formatLink(siteConfig.social.github, "GitHub"),
        formatLink(siteConfig.social.linkedin, "LinkedIn"),
        formatLink(siteConfig.social.x, "X"),
      ].filter(Boolean)
    ),
  ];

  return sections.filter(Boolean).join("\n\n").trimEnd() + "\n";
}
