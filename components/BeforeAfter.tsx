import { X, Check } from "lucide-react";
import { GridSection } from "./GridSystem";
import { Reveal } from "./motion/reveal";
import { beforeAfter } from "@/lib/homepage";

export function BeforeAfter() {
  return (
    <GridSection className="flex flex-col w-full" id="approach">
      <Reveal>
        <div className="flex flex-col gap-2 px-8 lg:px-12 py-12 border-b border-dashed border-neutral-800/80">
          <span className="text-[10px] font-mono text-neutral-500 tracking-widest uppercase">
            [ 01 // THE SHIFT ]
          </span>
          <h2 className="text-xl lg:text-2xl font-medium tracking-tight text-white mt-2">
            A shift in where the work lives.
          </h2>
          <p className="text-sm text-neutral-400 max-w-2xl leading-relaxed mt-2">
            Early-stage founders stall when engineering becomes coordination
            overhead. The fix is treating product builds like infrastructure —
            scoped, repeatable, and owned end to end.
          </p>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 lg:grid-cols-2">
        <Reveal delay={0.08}>
          <div className="flex flex-col gap-6 px-8 lg:px-12 py-12 border-b lg:border-b-0 lg:border-r border-dashed border-neutral-800/80 h-full">
            <div>
              <span className="text-[10px] font-mono text-neutral-600 uppercase tracking-widest">
                {beforeAfter.before.label}
              </span>
              <h3 className="text-lg font-medium text-neutral-400 mt-3 tracking-tight">
                {beforeAfter.before.title}
              </h3>
            </div>
            <ul className="flex flex-col gap-4">
              {beforeAfter.before.items.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <X className="size-4 text-neutral-600 mt-0.5 shrink-0" />
                  <span className="text-sm text-neutral-500 leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.16}>
          <div className="flex flex-col gap-6 px-8 lg:px-12 py-12 bg-teal-950/10 h-full relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(13,148,136,0.06)_0%,transparent_50%)] pointer-events-none" />
            <div className="relative">
              <span className="text-[10px] font-mono text-teal-500 uppercase tracking-widest">
                {beforeAfter.after.label}
              </span>
              <h3 className="text-lg font-medium text-white mt-3 tracking-tight">
                {beforeAfter.after.title}
              </h3>
            </div>
            <ul className="flex flex-col gap-4 relative">
              {beforeAfter.after.items.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check className="size-4 text-teal-500 mt-0.5 shrink-0" />
                  <span className="text-sm text-neutral-300 leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </GridSection>
  );
}
