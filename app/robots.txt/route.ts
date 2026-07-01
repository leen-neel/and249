import { siteConfig } from "@/lib/seo";

export const revalidate = 3600;

export function GET() {
  const body = `User-agent: *
Allow: /

Sitemap: ${siteConfig.url}/sitemap.xml

# LLM context files
# llms.txt: ${siteConfig.url}/llms.txt
# llms-full.txt: ${siteConfig.url}/llms-full.txt
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
