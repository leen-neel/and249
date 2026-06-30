import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Link from "next/link";
import { ArrowLeft, Plus } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";
import { getNotes } from "@/lib/content";
import { formatDisplayDate } from "@/lib/utils";
import { createListPageMetadata } from "@/lib/seo";

const listMetadata = {
  title: "Notes",
  description:
    "Scratchpad. Random thoughts, reminders, and things I don't want to forget.",
  path: "/notes",
} as const;

export const metadata: Metadata = {
  ...createListPageMetadata(listMetadata),
  robots: { index: false, follow: false },
};

function getNoteHoverRotation(seed: string): number {
  const hash = [...seed].reduce((acc, char) => acc + char.charCodeAt(0), 0);
  return ((hash % 13) - 6) * 0.2;
}

export default function NotesPage() {
  const notes = getNotes();

  return (
    <div className="min-h-screen bg-[#121214] text-neutral-300 font-sans selection:bg-teal-900 selection:text-teal-100 relative flex flex-col">
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

        <main className="flex-1 flex flex-col relative">
          <div className="w-full px-8 lg:px-12 py-16 lg:py-20 border-b border-dashed border-neutral-800/80 relative flex flex-col">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-mono text-neutral-500 hover:text-teal-400 transition-colors mb-12"
            >
              <ArrowLeft className="w-4 h-4" />
              BACK TO HOME
            </Link>

            <h1 className="text-3xl lg:text-4xl font-medium text-white tracking-tight leading-tight mb-4">
              Notes
            </h1>
            <p className="text-sm text-neutral-400 max-w-2xl leading-relaxed">
              Scratchpad. Random thoughts, reminders, and things I don&apos;t
              want to forget.
            </p>

            <div className="absolute -bottom-[9px] -left-[9px] text-neutral-600 font-mono text-[10px] w-4 h-4 flex items-center justify-center pointer-events-none">
              <Plus />
            </div>
            <div className="absolute -bottom-[9px] -right-[9px] text-neutral-600 font-mono text-[10px] w-4 h-4 flex items-center justify-center pointer-events-none">
              <Plus />
            </div>
          </div>

          <div className="relative px-8 lg:px-12 py-10 lg:py-12 bg-neutral-900/10 border-b border-dashed border-neutral-800/80">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {notes.map((note) => (
                <Card
                  key={note.slug}
                  style={
                    {
                      "--hover-rotate": `${getNoteHoverRotation(note.slug)}deg`,
                    } as CSSProperties
                  }
                  className="group relative flex flex-col rounded-xl bg-[#18181b]/60 border border-neutral-800/60 shadow-none hover:border-neutral-700/80 hover:z-10 transition-all duration-300 ease-out motion-safe:hover:[transform:translateY(-2px)_rotate(var(--hover-rotate))] h-full"
                >
                  <CardContent className="flex flex-col flex-1 p-6">
                    <div className="flex items-center justify-between gap-3 mb-4">
                      <span className="text-[10px] font-mono text-teal-500 uppercase tracking-widest">
                        {"// note"}
                      </span>
                      <time
                        dateTime={note.frontmatter.date}
                        className="text-[10px] font-mono text-neutral-600 uppercase tracking-widest shrink-0"
                      >
                        {formatDisplayDate(note.frontmatter.date)}
                      </time>
                    </div>

                    <p className="text-sm text-neutral-400 leading-relaxed group-hover:text-neutral-300 transition-colors whitespace-pre-wrap">
                      {note.body}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="absolute -bottom-[9px] -left-[9px] text-neutral-600 font-mono text-[10px] w-4 h-4 flex items-center justify-center pointer-events-none">
              <Plus />
            </div>
            <div className="absolute -bottom-[9px] -right-[9px] text-neutral-600 font-mono text-[10px] w-4 h-4 flex items-center justify-center pointer-events-none">
              <Plus />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
