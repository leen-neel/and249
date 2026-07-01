import { generateLlmsFullTxt } from "@/lib/llms-full-txt";

export const revalidate = 3600;

export function GET() {
  return new Response(generateLlmsFullTxt(), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
