import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Insights } from "@/components/Insights";
import { Capabilities } from "@/components/Capabilities";
import { CaseStudy } from "@/components/CaseStudy";
import { Profile } from "@/components/Profile";
import { Contact } from "@/components/Contact";
import { JsonLd } from "@/components/JsonLd";
import { createPersonJsonLd } from "@/lib/seo";

import { Plus } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#121214] text-neutral-300 font-sans selection:bg-teal-900 selection:text-teal-100 relative flex flex-col">
      <JsonLd data={createPersonJsonLd()} />
      <div className="relative z-10 flex flex-col w-full min-h-screen max-w-7xl mx-auto border-l border-r border-dashed border-neutral-800/80">
        <div className="w-full h-[80px] border-b border-dashed border-neutral-800/80 relative">
          <Navbar />
          <div className="absolute -bottom-[9px] -left-[9px] text-neutral-600 font-mono text-[10px] w-4 h-4 flex items-center justify-center pointer-events-none">
            <Plus />
          </div>
          <div className="absolute -bottom-[9px] -right-[9px] text-neutral-600 font-mono text-[10px] w-4 h-4 flex items-center justify-center pointer-events-none">
            <Plus />
          </div>
        </div>
        <main className="flex-1 flex flex-col">
          <div className="border-b border-dashed border-neutral-800/80 relative">
            <Hero />
            <div className="absolute -bottom-[9px] -left-[9px] text-neutral-600 font-mono text-[10px] w-4 h-4 flex items-center justify-center pointer-events-none">
              <Plus />
            </div>
            <div className="absolute -bottom-[9px] -right-[9px] text-neutral-600 font-mono text-[10px] w-4 h-4 flex items-center justify-center pointer-events-none">
              <Plus />
            </div>
          </div>
          <div className="flex flex-col lg:flex-row border-b border-dashed border-neutral-800/80 relative">
            <div className="w-full lg:w-[65%] border-b lg:border-b-0 lg:border-r border-dashed border-neutral-800/80">
              <Projects />
            </div>
            <div className="w-full lg:w-[35%] bg-[#121214]">
              <Insights />
            </div>
            <div className="absolute -bottom-[9px] -left-[9px] text-neutral-600 font-mono text-[10px] w-4 h-4 flex items-center justify-center pointer-events-none">
              <Plus />
            </div>
            <div className="absolute -bottom-[9px] -right-[9px] text-neutral-600 font-mono text-[10px] w-4 h-4 flex items-center justify-center pointer-events-none">
              <Plus />
            </div>
            <div className="absolute -bottom-[9px] hidden lg:flex left-[65%] -translate-x-[50%] text-neutral-600 font-mono text-[10px] w-4 h-4 items-center justify-center pointer-events-none">
              <Plus />
            </div>
            <div className="absolute -top-[9px] hidden lg:flex left-[65%] -translate-x-[50%] text-neutral-600 font-mono text-[10px] w-4 h-4 items-center justify-center pointer-events-none">
              <Plus />
            </div>
          </div>

          <div className="border-b border-dashed border-neutral-800/80 relative">
            <Capabilities />
            <div className="absolute -bottom-[9px] -left-[9px] text-neutral-600 font-mono text-[10px] w-4 h-4 flex items-center justify-center pointer-events-none">
              <Plus />
            </div>
            <div className="absolute -bottom-[9px] -right-[9px] text-neutral-600 font-mono text-[10px] w-4 h-4 flex items-center justify-center pointer-events-none">
              <Plus />
            </div>
          </div>

          <div className="border-b border-dashed border-neutral-800/80 relative">
            <CaseStudy />
            <div className="absolute -bottom-[9px] -left-[9px] text-neutral-600 font-mono text-[10px] w-4 h-4 flex items-center justify-center pointer-events-none">
              <Plus />
            </div>
            <div className="absolute -bottom-[9px] -right-[9px] text-neutral-600 font-mono text-[10px] w-4 h-4 flex items-center justify-center pointer-events-none">
              <Plus />
            </div>
          </div>

          <div className="border-b border-dashed border-neutral-800/80 relative">
            <Profile />
            <div className="absolute -bottom-[9px] -left-[9px] text-neutral-600 font-mono text-[10px] w-4 h-4 flex items-center justify-center pointer-events-none">
              <Plus />
            </div>
            <div className="absolute -bottom-[9px] -right-[9px] text-neutral-600 font-mono text-[10px] w-4 h-4 flex items-center justify-center pointer-events-none">
              <Plus />
            </div>
          </div>

          <div className="border-b border-dashed border-neutral-800/80 relative">
            <Contact />
            <div className="absolute -bottom-[9px] -left-[9px] text-neutral-600 font-mono text-[10px] w-4 h-4 flex items-center justify-center pointer-events-none">
              <Plus />
            </div>
            <div className="absolute -bottom-[9px] -right-[9px] text-neutral-600 font-mono text-[10px] w-4 h-4 flex items-center justify-center pointer-events-none">
              <Plus />
            </div>
          </div>
        </main>
        <footer className="h-[80px] w-full flex items-center justify-between px-8 lg:px-12 text-[12px] font-medium text-neutral-500">
          <div className="flex gap-4 lg:gap-10">
            <span>
              © {new Date().getFullYear()} Anindo Neel Dutta. All rights
              reserved.
            </span>
          </div>
          <div className="flex gap-6">
            <Link
              href="https://github.com/leen-neel"
              className="hover:text-teal-400 transition-colors"
            >
              Github
            </Link>
            <Link
              href="https://x.com/anindoneel"
              className="hover:text-teal-400 transition-colors"
            >
              X
            </Link>
            <Link
              href="https://www.linkedin.com/in/anindoneel/"
              className="hover:text-teal-400 transition-colors"
            >
              LinkedIn
            </Link>
          </div>
        </footer>
      </div>
    </div>
  );
}
