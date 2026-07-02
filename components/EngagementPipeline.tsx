import { GridSection } from "./GridSystem";
import { Reveal } from "./motion/reveal";
import { engagementPipeline } from "@/lib/homepage";

export function EngagementPipeline() {
  return (
    <GridSection className="flex flex-col w-full" id="process">
      <Reveal>
        <div className="flex flex-col gap-2 px-8 lg:px-12 py-12 border-b border-dashed border-neutral-800/80">
          <span className="text-[10px] font-mono text-neutral-500 tracking-widest uppercase">
            [ 05 // PROCESS ]
          </span>
          <h2 className="text-xl lg:text-2xl font-medium tracking-tight text-white mt-2">
            How engagements run, step by step.
          </h2>
          <p className="text-sm text-neutral-400 max-w-2xl leading-relaxed mt-2">
            Every sprint follows the same pipeline — scoped upfront, shipped in
            weekly increments, handed off cleanly.
          </p>
        </div>
      </Reveal>

      <div className="flex flex-col">
        {engagementPipeline.map((step, idx) => (
          <Reveal key={step.step} delay={idx * 0.05}>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 px-8 lg:px-12 py-8 border-b border-dashed border-neutral-800/80 last:border-b-0 group hover:bg-neutral-900/20 transition-colors duration-200">
              <span className="text-3xl font-light text-teal-500/40 font-mono tabular-nums shrink-0 w-16 group-hover:text-teal-500/70 transition-colors">
                {step.step}
              </span>
              <div className="flex flex-col gap-2">
                <h3 className="text-base font-medium text-white tracking-tight">
                  {step.title}
                </h3>
                <p className="text-sm text-neutral-400 leading-relaxed max-w-xl">
                  {step.description}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </GridSection>
  );
}
