import type { Metadata } from "next";

function getSiteUrl(): string {
  if (process.env.NEXT_PUBLIC_SITE_URL) return process.env.NEXT_PUBLIC_SITE_URL;
  if (process.env.APP_URL) return process.env.APP_URL;
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  return "http://localhost:3000";
}

export const siteConfig = {
  name: "Anindo Neel Dutta",
  title: "Anindo Neel Dutta | Tech Consultant & Full-Stack Engineer",
  description:
    "Tech consultant and full-stack engineer helping startups and businesses build SaaS products, AI-powered systems, and high-performance web applications. Based in India, working globally.",
  jobTitle: "Tech Consultant & Full-Stack Engineer",
  url: getSiteUrl(),
  locale: "en_US",
  social: {
    github: "https://github.com/leen-neel",
    linkedin: "https://www.linkedin.com/in/anindoneel/",
    x: "https://x.com/anindoneel",
  },
  keywords: [
    "tech consultant",
    "technology consultant",
    "full-stack engineer",
    "SaaS development",
    "AI integration",
    "Next.js developer",
    "startup consultant",
    "software consultant",
    "web application development",
    "Anindo Neel Dutta",
  ],

  ogImage: {
    path: "/og.png",
    width: 1200,
    height: 630,
    alt: "Anindo Neel Dutta — Tech Consultant & Full-Stack Engineer",
  },
} as const;
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
    knowsAbout: siteConfig.keywords,
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
