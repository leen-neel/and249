import * as React from "react";
import { CodeBlock } from "./code-block";
import { GridSection } from "./GridSystem";
import { Reveal } from "./motion/reveal";

const coreStackSnippet = `import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  // Architecting scalable server endpoints
  const data = await fetchSystemState();
  return Response.json(data);
}`;

export function Capabilities() {
  return (
    <GridSection className="flex flex-col w-full" id="capabilities">
      <Reveal>
        <div className="flex flex-col gap-4 px-8 lg:px-12 py-12 border-b border-dashed border-neutral-800/80">
          <h2 className="text-xl lg:text-2xl font-medium tracking-tight text-white">
            Product engineering built for business outcomes.
          </h2>
          <p className="text-sm text-neutral-400 max-w-2xl leading-relaxed">
            Translating complex requirements into high-performance
            architectures, optimized for rapid validation and scalable growth.
          </p>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-8 lg:px-12 py-12 bg-neutral-900/10">
        <Reveal delay={0.08}>
          <div className="flex flex-col p-8 rounded-xl bg-[#18181b]/60 border border-neutral-800/60 shadow-lg transition-all duration-300 hover:border-neutral-700/80 hover:-translate-y-0.5 h-full">
            <span className="text-[10px] font-mono text-neutral-500 mb-6 tracking-widest uppercase">
              01 // Engine Foundation
            </span>
            <h3 className="text-lg font-medium text-white mb-4">
              Core Stack & High-Fidelity Execution
            </h3>
            <p className="text-sm text-neutral-400 mb-8 leading-relaxed">
              Specializing in React, Next.js, and TypeScript. Building robust,
              type-safe foundations with highly optimized data fetching, complex
              state management, and pristine design systems.
            </p>

            <CodeBlock code={coreStackSnippet} className="mt-auto" />
          </div>
        </Reveal>

        <Reveal delay={0.16}>
          <div className="flex flex-col p-8 rounded-xl bg-[#18181b]/60 border border-teal-900 shadow-[0_0_30px_rgba(13,148,136,0.03)] relative overflow-hidden group transition-all duration-300 hover:-translate-y-0.5 h-full">
            <div className="absolute inset-0 bg-teal-950/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10 flex flex-col h-full">
              <span className="text-[10px] font-mono text-teal-500 mb-6 tracking-widest uppercase">
                02 // Growth & Rapid Velocity
              </span>
              <h3 className="text-lg font-medium text-white mb-4">
                MVP Velocity & Outbound Automation Systems
              </h3>
              <p className="text-sm text-neutral-400 mb-8 leading-relaxed">
                Taking your product from concept to a live SaaS MVP in weeks,
                backed by automated infrastructure built for high throughput.
                Executing rapid development cycles for early-stage founders to
                accelerate business validation.
              </p>

              <div className="mt-auto grid grid-cols-2 gap-4">
                <div className="flex flex-col p-5 rounded-md border border-teal-900/40 bg-teal-950/20">
                  <span className="text-3xl font-light text-white mb-2 tracking-tight">
                    10x
                  </span>
                  <span className="text-[10px] text-teal-500 uppercase tracking-widest font-mono">
                    Iteration Speed
                  </span>
                </div>
                <div className="flex flex-col p-5 rounded-md border border-teal-900/40 bg-teal-950/20">
                  <span className="text-3xl font-light text-white mb-2 tracking-tight">
                    2-4 wks
                  </span>
                  <span className="text-[10px] text-teal-500 uppercase tracking-widest font-mono">
                    Time to MVP
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </GridSection>
  );
}
