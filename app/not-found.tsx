import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { PageShell, CornerMarkers } from "@/components/PageShell";
import { Button } from "@/components/ui/button";
import { FadeUp } from "@/components/motion/reveal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you're looking for doesn't exist or has been moved.",
};

const quickLinks = [
  { href: "/case-studies", label: "Case Studies", description: "Real-world builds and outcomes" },
  { href: "/blog", label: "Blog", description: "Technical essays and strategy deep-dives" },
  { href: "/speaking", label: "Speaking", description: "Talks on architecture and delivery" },
] as const;

export default function NotFound() {
  return (
    <PageShell>
      <main className="flex-1 flex flex-col">
        <div className="flex-1 flex flex-col items-center justify-center px-8 lg:px-12 py-24 lg:py-36 border-b border-dashed border-neutral-800/80 relative overflow-hidden text-center">
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
            <div className="w-[700px] h-[700px] rounded-full bg-[radial-gradient(circle,rgba(13,148,136,0.04)_0%,transparent_20%)]" />
          </div>

          <div className="relative z-10 flex flex-col items-center max-w-lg">
            <FadeUp>
              <span className="text-[10px] font-mono text-neutral-600 uppercase tracking-widest mb-8">
                Error Code
              </span>
            </FadeUp>

            <FadeUp delay={0.05}>
              <h1
                className="text-[7rem] sm:text-[8rem] lg:text-[9rem] font-medium text-white tracking-tighter leading-none mb-8 font-display"
                aria-label="404"
              >
                4<span className="text-teal-400">0</span>4
              </h1>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h2 className="text-xl lg:text-2xl font-medium text-white tracking-tight mb-4">
                Page not found
              </h2>
            </FadeUp>

            <FadeUp delay={0.14}>
              <p className="text-sm text-neutral-400 leading-relaxed mb-10">
                The route you&apos;re looking for doesn&apos;t exist, was moved,
                or never shipped. Let&apos;s get you back on track.
              </p>
            </FadeUp>

            <FadeUp delay={0.18}>
              <Link href="/">
                <Button
                  variant="outline"
                  className="px-5 py-2 h-auto border border-[#53E6CC]/40 bg-[#53E6CC]/10 text-[#53E6CC] rounded-sm hover:border-[#53E6CC]/65 hover:bg-[#53E6CC]/18 hover:text-[#53E6CC] transition-all duration-200 hover:-translate-y-px text-sm font-medium inline-flex items-center gap-2"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to Home
                </Button>
              </Link>
            </FadeUp>
          </div>

          <CornerMarkers />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 relative">
          {quickLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group px-8 lg:px-12 py-10 md:border-r last:md:border-r-0 border-b md:border-b-0 border-dashed border-neutral-800/80 hover:bg-neutral-900/40 transition-colors relative flex flex-col"
            >
              <span className="text-[10px] font-mono text-neutral-600 uppercase tracking-widest mb-3">
                Explore
              </span>
              <span className="text-base font-medium text-neutral-200 group-hover:text-teal-400 transition-colors tracking-tight mb-2">
                {link.label}
              </span>
              <span className="text-sm text-neutral-500 mb-4">{link.description}</span>
              <span className="text-sm font-medium text-neutral-400 group-hover:text-teal-400 transition-colors inline-flex items-center mt-auto">
                Visit
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
              <CornerMarkers />
            </Link>
          ))}
        </div>
      </main>
    </PageShell>
  );
}
