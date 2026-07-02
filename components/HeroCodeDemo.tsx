"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { CodeBlock } from "./code-block";
import { heroCodeTabs } from "@/lib/homepage";
import { FadeUp } from "./motion/reveal";

type TabId = (typeof heroCodeTabs)[number]["id"];

export function HeroCodeDemo() {
  const [activeTab, setActiveTab] = useState<TabId>(heroCodeTabs[0].id);
  const activeCode =
    heroCodeTabs.find((tab) => tab.id === activeTab)?.code ?? heroCodeTabs[0].code;

  return (
    <FadeUp delay={0.2} className="w-full">
      <div className="flex flex-col rounded-lg border border-neutral-800/80 bg-[#18181b]/60 overflow-hidden shadow-lg">
        <div className="flex items-center gap-1 px-3 py-2.5 border-b border-neutral-800/80 bg-neutral-900/40">
          <span className="size-2.5 rounded-full bg-neutral-700" />
          <span className="size-2.5 rounded-full bg-neutral-700" />
          <span className="size-2.5 rounded-full bg-neutral-700" />
          <span className="ml-3 text-[10px] font-mono text-neutral-500 uppercase tracking-widest">
            engagement.ts
          </span>
        </div>

        <div className="flex flex-wrap gap-1 px-3 py-2 border-b border-neutral-800/60">
          {heroCodeTabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "px-3 py-1.5 text-[11px] font-mono rounded-sm transition-colors duration-150",
                activeTab === tab.id
                  ? "bg-teal-950/40 text-teal-400 border border-teal-900/50"
                  : "text-neutral-500 hover:text-neutral-300 border border-transparent"
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="p-1">
          <CodeBlock
            code={activeCode}
            className="[&_pre]:border-0 [&_pre]:bg-transparent [&_pre_code]:text-[0.75rem] [&_pre_code]:leading-relaxed [&_pre_code]:py-3 [&_pre_code]:px-3"
          />
        </div>
      </div>
    </FadeUp>
  );
}
