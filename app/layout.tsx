import "./globals.css";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { cn } from "@/lib/utils";
import { baseMetadata, createWebSiteJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";

import { GoogleAnalytics } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
});
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata = baseMetadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      data-scroll-behavior="smooth"
      lang="en"
      className={cn(
        "font-sans overflow-x-hidden",
        inter.variable,
        spaceGrotesk.variable,
        jetbrainsMono.variable
      )}
    >
      <body
        suppressHydrationWarning
        className="overflow-x-hidden bg-[#121214] text-neutral-300 antialiased"
      >
        <JsonLd data={createWebSiteJsonLd()} />
        <GoogleAnalytics gaId="G-YBDW21NF4Y" />

        {children}
      </body>
    </html>
  );
}
