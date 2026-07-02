import {
  getBlogPosts,
  getCaseStudies,
  getSpeakingAppearances,
} from "@/lib/content";
import { getPersonOccupationName, siteConfig } from "@/lib/seo";

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

function formatPersonProfile(): string {
  const person = siteConfig.person;

  return formatSection("About", [
    `- Role: ${person.role}`,
    `- Specialization: ${person.specialization}`,
    `- Occupation: ${getPersonOccupationName()}`,
    `- Location: ${person.homeLocation.country} (serving ${person.areaServed})`,
    `- Skills: ${person.skills.join(", ")}`,
    `- Contact: ${llmsAbsoluteUrl(person.contactUrl)}`,
  ]);
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
    formatPersonProfile(),
    formatSection(
      "Core pages",
      [
        formatLink("/", "Home", getPersonOccupationName()),
        formatLink("/blog", "Blog", siteConfig.person.sections.blog),
        formatLink(
          "/case-studies",
          "Case studies",
          siteConfig.person.sections.caseStudies
        ),
        formatLink(
          "/speaking",
          "Speaking",
          siteConfig.person.sections.speaking
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
      siteConfig.person.knowsAbout.map((topic) => `- ${topic}`)
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
