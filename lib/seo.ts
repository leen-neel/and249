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
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const url = `${siteConfig.url}${path}`;
  const fullTitle = `${title} — ${siteConfig.name}`;

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
      images: getOgImages(),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [absoluteUrl(siteConfig.ogImage.path)],
    },
  };
}

const personAuthor = {
  "@type": "Person" as const,
  name: siteConfig.name,
  url: siteConfig.url,
};

export function createPersonJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    url: siteConfig.url,
    image: absoluteUrl(siteConfig.ogImage.path),
    jobTitle: siteConfig.jobTitle,
    description: siteConfig.description,
    sameAs: Object.values(siteConfig.social),
    knowsAbout: siteConfig.keywords,
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
    headline: title,
    description,
    datePublished: publishedTime,
    author: personAuthor,
    publisher: personAuthor,
    image,
    url,
    mainEntityOfPage: url,
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
    name: title,
    description,
    datePublished: publishedTime,
    author: personAuthor,
    image,
    url,
    mainEntityOfPage: url,
    ...(tags?.length ? { keywords: tags.join(", ") } : {}),
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
