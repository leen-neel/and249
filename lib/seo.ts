import type { Metadata } from "next";

function getSiteUrl(): string {
  if (process.env.NEXT_PUBLIC_SITE_URL) return process.env.NEXT_PUBLIC_SITE_URL;
  if (process.env.APP_URL) return process.env.APP_URL;
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  return "http://localhost:3000";
}

const personConfig = {
  role: "Full-Stack Product Engineer",
  specialization: "SaaS MVPs & AI Systems",
  publicTitle: "SaaS Product Engineer & Technical Consultant",
  tagline:
    "Anindo Neel Dutta is a tech consultant and full-stack engineer based in India, helping startups build SaaS products, AI-powered systems, and Next.js applications.",
  availability:
    "Currently taking on select engagements for SaaS MVPs, AI integration, and outbound systems.",
  availabilityChip:
    "Open for select engagements · 2–4 week sprints",
  contactHeadline: "Ship your MVP or AI system in weeks, not months.",
  coreStack: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  contactType: "consulting inquiries",
  contactUrl: "/#engagement",
  areaServed: "Worldwide",
  homeLocation: { country: "India" },
  skills: [
    "SaaS MVP development",
    "Next.js",
    "TypeScript",
    "LLM pipelines",
    "Outbound automation",
    "API documentation automation",
    "GTM/GA4 debugging",
  ],
  knowsAbout: [
    "LLM pipelines",
    "Two-step LLM classification",
    "Next.js",
    "TypeScript",
    "GTM/GA4 debugging",
    "Google Tag Manager",
    "Google Analytics 4",
    "SaaS MVP architecture",
    "Outbound automation systems",
    "API documentation automation",
    "Conversion tracking",
    "WordPress scalability",
  ],
  sections: {
    blog: "Deep dives on SaaS MVPs, LLM pipelines, GTM/GA4 debugging, and engineering trade-offs after shipping.",
    caseStudies:
      "DocPilot, outbound recruiting automation, and other client work — shipped under real deadlines.",
    speaking:
      "WordCamp talks on WordPress engineering, scope creep, and software that outlasts the project.",
  },
} as const;

export const siteConfig = {
  name: "Anindo Neel Dutta",
  title: `Anindo Neel Dutta | ${personConfig.publicTitle}`,
  description:
    "Full-stack product engineer helping early-stage founders ship SaaS MVPs, AI-powered systems, and outbound automation. Based in India, working worldwide.",
  jobTitle: personConfig.publicTitle,
  url: getSiteUrl(),
  locale: "en_US",
  social: {
    github: "https://github.com/leen-neel",
    linkedin: "https://www.linkedin.com/in/anindoneel/",
    x: "https://x.com/anindoneel",
  },
  keywords: [
    "SaaS MVP developer",
    "SaaS product engineer",
    "LLM pipeline engineer",
    "outbound automation",
    "Next.js developer",
    "full-stack engineer",
    "technical consultant",
    "AI integration",
    "startup engineer",
    "Anindo Neel Dutta",
  ],

  person: personConfig,

  faq: [
    {
      question: "Do you work with early-stage startups?",
      answer:
        "Yes. I work primarily with pre-seed and seed-stage founders who need a validation-ready MVP without engineering bloat. Most engagements are first-product builds or rescuing MVPs that stalled on scope creep. I take on a small number of clients at a time so you get direct senior-level execution, not a dev shop hand-off.",
    },
    {
      question: "What's your typical MVP timeline?",
      answer:
        "A focused SaaS MVP typically ships in 2-4 weeks from kickoff to production. That includes core auth, billing hooks, the main product workflow, and deployment, not months of discovery decks. Timeline depends on scope clarity; ambiguous requirements get trimmed to what validates the business hypothesis fastest.",
    },
    {
      question: "Do you build AI/LLM integrations?",
      answer:
        "Yes. I build production LLM pipelines: RAG systems, two-step classification, API doc automation, and outbound agents, not demo chatbots. Integrations use structured prompts, eval loops, and cost controls so they hold up after launch, not just in a prototype.",
    },
    {
      question: "What stack do you use?",
      answer:
        "React, Next.js, TypeScript, and Tailwind CSS on the frontend. The backend is Next.js API routes or serverless functions with PostgreSQL or a managed database depending on scale. I pick boring, proven tools so your MVP stays maintainable when you hire a team.",
    },
    {
      question: "Do you work with clients outside India?",
      answer:
        "Yes. I'm based in India and work with clients worldwide across US, EU, and APAC time zones. Communication is async-first with overlap for key calls. I've shipped production systems for international startups without requiring on-site presence.",
    },
    {
      question: "What does a typical engagement look like?",
      answer:
        "Engagements start with a discovery call, then a fixed-scope sprint to ship the MVP or integration. You get weekly demos, direct Slack access, and handoff docs, with no account managers in between. Most clients stay on for iteration sprints after launch.",
    },
    {
      question: "Do you handle design and UX?",
      answer:
        "I implement clean, conversion-focused UI using established design systems and your brand direction. For full custom design, I partner with designers or work from your Figma files. The goal is shippable, professional interfaces, not agency mockups that delay launch.",
    },
  ],

  ogImage: {
    path: "/og.png",
    width: 1200,
    height: 630,
    alt: `Anindo Neel Dutta — ${personConfig.publicTitle}`,
  },
} as const;

export function getPersonOccupationName(): string {
  return `${siteConfig.person.role} — ${siteConfig.person.specialization}`;
}
function absoluteUrl(path: string): string {
  return path.startsWith("http") ? path : `${siteConfig.url}${path}`;
}

/** Static OG PNG for content pages, e.g. `/blog/my-post` → `/blog/my-post.png` */
export function getContentOgImagePath(path: string): string {
  return `${path}.png`;
}

export function getOgImages(
  imagePath: string = siteConfig.ogImage.path,
  alt: string = siteConfig.ogImage.alt
) {
  return [
    {
      url: absoluteUrl(imagePath),
      width: siteConfig.ogImage.width,
      height: siteConfig.ogImage.height,
      alt,
    },
  ];
}

export const baseMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s — ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
    images: getOgImages(),
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [absoluteUrl(siteConfig.ogImage.path)],
  },
  icons: {
    icon: "/favicon.svg",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteConfig.url,
  },
};

export function extractMarkdownExcerpt(
  content: string,
  maxLength = 160
): string {
  const text = content
    .replace(/^#+\s.*$/gm, "")
    .replace(/[*_`[\]()]/g, "")
    .replace(/\n+/g, " ")
    .trim();

  if (text.length <= maxLength) return text;

  const truncated = text.slice(0, maxLength);
  const lastSpace = truncated.lastIndexOf(" ");
  return `${truncated.slice(0, lastSpace > 0 ? lastSpace : maxLength).trim()}…`;
}

export function createListPageMetadata({
  title,
  description,
  path,
  imagePath,
}: {
  title: string;
  description: string;
  path: string;
  imagePath?: string;
}): Metadata {
  const url = `${siteConfig.url}${path}`;
  const fullTitle = `${title} — ${siteConfig.name}`;
  const images = getOgImages(imagePath, title);
  const imageUrls = images.map((image) => image.url);

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      title: fullTitle,
      description,
      siteName: siteConfig.name,
      images,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: imageUrls,
    },
  };
}

// JSON-LD @id values are graph node identifiers, not HTML id attributes.
// personId uses the homepage URL (the real canonical page for you as a Person).
// websiteId uses a fragment only to distinguish WebSite from Person on the same domain.
const personId = siteConfig.url;
const websiteId = `${siteConfig.url}/#website`;

const personAuthor = {
  "@type": "Person" as const,
  "@id": personId,
  name: siteConfig.name,
  url: siteConfig.url,
};

const publisher = {
  ...personAuthor,
  image: absoluteUrl(siteConfig.ogImage.path),
};

export function createPersonJsonLd() {
  const person = siteConfig.person;

  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": personId,
    name: siteConfig.name,
    url: siteConfig.url,
    image: absoluteUrl(siteConfig.ogImage.path),
    jobTitle: siteConfig.jobTitle,
    description: siteConfig.description,
    sameAs: Object.values(siteConfig.social),
    nationality: {
      "@type": "Country",
      name: person.homeLocation.country,
    },
    homeLocation: {
      "@type": "Country",
      name: person.homeLocation.country,
    },
    areaServed: person.areaServed,
    knowsAbout: person.knowsAbout,
    hasOccupation: {
      "@type": "Occupation",
      name: getPersonOccupationName(),
      occupationLocation: {
        "@type": "Country",
        name: person.homeLocation.country,
      },
      skills: person.skills,
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: person.contactType,
      url: absoluteUrl(person.contactUrl),
      availableLanguage: ["English"],
    },
  };
}

export function createWebSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": websiteId,
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    inLanguage: "en-US",
    author: { "@id": personId },
    publisher: { "@id": personId },
  };
}

export function createFAQPageJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${siteConfig.url}/#faq`,
    mainEntity: siteConfig.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function createWebPageJsonLd({
  name,
  description,
  path,
}: {
  name: string;
  description: string;
  path: string;
}) {
  const url = `${siteConfig.url}${path}`;

  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    name,
    description,
    url,
    isPartOf: { "@id": websiteId },
    about: { "@id": personId },
    author: { "@id": personId },
  };
}

type CollectionItem = {
  name: string;
  path: string;
  description?: string;
};

export function createCollectionPageJsonLd({
  title,
  description,
  path,
  items,
}: {
  title: string;
  description: string;
  path: string;
  items: CollectionItem[];
}) {
  const url = `${siteConfig.url}${path}`;

  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${url}#webpage`,
    name: title,
    description,
    url,
    isPartOf: { "@id": websiteId },
    about: { "@id": personId },
    author: { "@id": personId },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        url: `${siteConfig.url}${item.path}`,
        ...(item.description ? { description: item.description } : {}),
      })),
    },
  };
}

export function createBreadcrumbJsonLd(
  crumbs: Array<{ name: string; path: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: `${siteConfig.url}${crumb.path}`,
    })),
  };
}

export function createArticleJsonLd({
  title,
  description,
  path,
  publishedTime,
  tags,
  imagePath,
}: {
  title: string;
  description: string;
  path: string;
  publishedTime: string;
  tags?: string[];
  imagePath?: string;
}) {
  const url = `${siteConfig.url}${path}`;
  const image = absoluteUrl(imagePath ?? getContentOgImagePath(path));

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${url}#article`,
    headline: title,
    description,
    datePublished: publishedTime,
    author: personAuthor,
    publisher,
    image,
    url,
    mainEntityOfPage: { "@id": `${url}#webpage` },
    isPartOf: { "@id": websiteId },
    ...(tags?.length ? { keywords: tags.join(", ") } : {}),
  };
}

export function createCreativeWorkJsonLd({
  title,
  description,
  path,
  publishedTime,
  tags,
  imagePath,
}: {
  title: string;
  description: string;
  path: string;
  publishedTime: string;
  tags?: string[];
  imagePath?: string;
}) {
  const url = `${siteConfig.url}${path}`;
  const image = absoluteUrl(imagePath ?? getContentOgImagePath(path));

  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "@id": `${url}#creativework`,
    name: title,
    description,
    datePublished: publishedTime,
    author: personAuthor,
    image,
    url,
    mainEntityOfPage: { "@id": `${url}#webpage` },
    isPartOf: { "@id": websiteId },
    ...(tags?.length ? { keywords: tags.join(", ") } : {}),
  };
}

export function createSpeakingEventJsonLd({
  title,
  description,
  path,
  conference,
  date,
  year,
  tag,
  slidesUrl,
  videoUrl,
}: {
  title: string;
  description: string;
  path: string;
  conference: string;
  date?: string;
  year: string;
  tag: string;
  slidesUrl?: string;
  videoUrl?: string;
}) {
  const url = `${siteConfig.url}${path}`;
  const image = absoluteUrl(getContentOgImagePath(path));
  const startDate = date ?? `${year}-01-01`;

  return {
    "@context": "https://schema.org",
    "@type": "Event",
    "@id": `${url}#event`,
    name: title,
    description,
    url,
    startDate,
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    location: {
      "@type": "Place",
      name: conference,
    },
    performer: personAuthor,
    organizer: {
      "@type": "Organization",
      name: conference,
    },
    author: personAuthor,
    image,
    keywords: tag,
    isPartOf: { "@id": websiteId },
    ...(slidesUrl
      ? {
          subjectOf: {
            "@type": "PresentationDigitalDocument",
            url: slidesUrl,
            name: `${title} — slides`,
          },
        }
      : {}),
    ...(videoUrl
      ? {
          recordedIn: {
            "@type": "VideoObject",
            url: videoUrl,
            name: title,
          },
        }
      : {}),
  };
}

export function createArticleMetadata({
  title,
  description,
  path,
  publishedTime,
  tags,
  imagePath,
}: {
  title: string;
  description: string;
  path: string;
  publishedTime: string;
  tags?: string[];
  imagePath?: string;
}): Metadata {
  const url = `${siteConfig.url}${path}`;
  const fullTitle = `${title} — ${siteConfig.name}`;
  const images = getOgImages(imagePath ?? getContentOgImagePath(path), title);
  const imageUrls = images.map((image) => image.url);

  return {
    title,
    description,
    keywords: tags,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title: fullTitle,
      description,
      publishedTime,
      authors: [siteConfig.name],
      tags,
      siteName: siteConfig.name,
      images,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: imageUrls,
    },
  };
}
