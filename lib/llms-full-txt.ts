import {
  getBlogPost,
  getBlogPosts,
  getCaseStudies,
  getCaseStudy,
  getSpeakingAppearance,
  getSpeakingAppearances,
} from "@/lib/content";
import { llmsAbsoluteUrl } from "@/lib/llms-txt";
import { getPersonOccupationName, siteConfig } from "@/lib/seo";

function formatDocument({
  title,
  metadata,
  content,
}: {
  title: string;
  metadata: string[];
  content: string;
}): string {
  const meta = metadata.map((line) => `- ${line}`).join("\n");

  return [`## ${title}`, "", meta, "", content.trim()].join("\n");
}

export function generateLlmsFullTxt(): string {
  const blogPosts = getBlogPosts();
  const caseStudies = getCaseStudies();
  const speaking = getSpeakingAppearances();

  const blogSections = blogPosts.map((post) => {
    const { frontmatter, content } = getBlogPost(post.slug);
    const metadata = [
      `URL: ${llmsAbsoluteUrl(`/blog/${post.slug}`)}`,
      `Published: ${frontmatter.date}`,
      ...(frontmatter.tags?.length
        ? [`Tags: ${frontmatter.tags.join(", ")}`]
        : []),
      ...(frontmatter.description
        ? [`Summary: ${frontmatter.description}`]
        : []),
    ];

    return formatDocument({
      title: frontmatter.title,
      metadata,
      content,
    });
  });

  const caseStudySections = caseStudies.map((study) => {
    const { frontmatter, content } = getCaseStudy(study.slug);
    const metadata = [
      `URL: ${llmsAbsoluteUrl(`/case-studies/${study.slug}`)}`,
      `Published: ${frontmatter.date}`,
      `Timeline: ${frontmatter.timeline}`,
      `Outcome: ${frontmatter.metric}`,
      `Summary: ${frontmatter.summary}`,
      ...(frontmatter.tech?.length
        ? [`Tech: ${frontmatter.tech.join(", ")}`]
        : []),
    ];

    return formatDocument({
      title: frontmatter.title,
      metadata,
      content,
    });
  });

  const speakingSections = speaking.map((talk) => {
    const { frontmatter, content } = getSpeakingAppearance(talk.slug);
    const metadata = [
      `URL: ${llmsAbsoluteUrl(`/speaking/${talk.slug}`)}`,
      `Conference: ${frontmatter.conference}`,
      `Year: ${frontmatter.year}`,
      ...(frontmatter.date ? [`Date: ${frontmatter.date}`] : []),
      `Topic: ${frontmatter.tag}`,
      `Summary: ${frontmatter.summary}`,
      ...(frontmatter.slidesUrl ? [`Slides: ${frontmatter.slidesUrl}`] : []),
      ...(frontmatter.videoUrl ? [`Video: ${frontmatter.videoUrl}`] : []),
    ];

    return formatDocument({
      title: frontmatter.title,
      metadata,
      content,
    });
  });

  const sections = [
    `# ${siteConfig.name}`,
    "",
    `> ${siteConfig.description}`,
    "",
    `Index: [llms.txt](${llmsAbsoluteUrl("/llms.txt")})`,
    "",
    `## About`,
    `- Role: ${siteConfig.person.role}`,
    `- Specialization: ${siteConfig.person.specialization}`,
    `- Occupation: ${getPersonOccupationName()}`,
    `- Location: ${siteConfig.person.homeLocation.country} (serving ${siteConfig.person.areaServed})`,
    `- Skills: ${siteConfig.person.skills.join(", ")}`,
    `- Expertise: ${siteConfig.person.knowsAbout.join(", ")}`,
    `- Contact: ${llmsAbsoluteUrl(siteConfig.person.contactUrl)}`,
    "",
    "# Blog",
    "",
    ...(blogSections.length > 0 ? blogSections : ["_No published posts yet._"]),
    "",
    "# Case studies",
    "",
    ...(caseStudySections.length > 0
      ? caseStudySections
      : ["_No case studies yet._"]),
    "",
    "# Speaking",
    "",
    ...(speakingSections.length > 0
      ? speakingSections
      : ["_No speaking appearances yet._"]),
  ];

  return sections.join("\n\n").trimEnd() + "\n";
}
