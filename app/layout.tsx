import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import FloatingNav from "./components/sections/FloatingNav";

import { GoogleAnalytics } from "@next/third-parties/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Anindo Neel Dutta – Full-Stack Developer for SaaS, AI & Web Apps",
  description:
    "Full-stack engineer specializing in AI, voice tech, and scalable SaaS. Explore Anindo Neel Dutta's portfolio, projects, and writing on web development, product building, and modern frontend tools.",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
  ),
  generator: "Next.js",
  applicationName: "Anindo's Portfolio",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Full Stack Developer",
    "Web Development",
    "Portfolio",
    "React",
    "Next.js",
    "TypeScript",
  ],
  authors: [{ name: "Anindo" }],
  creator: "Anindo",
  publisher: "Anindo",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/favicon.svg",
  },
  themeColor: "#53e6cc",
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
  openGraph: {
    type: "website",
    title: "Anindo Neel Dutta – Full-Stack Developer for SaaS, AI & Web Apps",
    description:
      "Full-stack engineer specializing in AI, voice tech, and scalable SaaS. Explore Anindo Neel Dutta's portfolio, projects, and writing on web development, product building, and modern frontend tools.",
    url: "/",
    siteName: "Anindo's Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Anindo's Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Anindo Neel Dutta – Full-Stack Developer for SaaS, AI & Web Apps",
    description:
      "Full-stack engineer specializing in AI, voice tech, and scalable SaaS. Explore Anindo Neel Dutta's portfolio, projects, and writing on web development, product building, and modern frontend tools.",
    images: ["/og-image.jpg"],
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased dark`}
      >
        <FloatingNav>{children}</FloatingNav>
        <GoogleAnalytics gaId="G-2N06X7N287" />
      </body>
    </html>
  );
}
