import { GridSection } from "./GridSystem";
import { Reveal } from "./motion/reveal";
import { trustSignals, marqueeItems } from "@/lib/homepage";

export function TrustStrip() {
  const doubled = [...marqueeItems, ...marqueeItems];

  return (
    <GridSection className="flex flex-col w-full">
      <div className="relative overflow-hidden border-b border-dashed border-neutral-800/80 py-4 marquee-mask">
        <div className="marquee-track absolute inset-y-0 left-0 flex items-center gap-8 w-max">
          {doubled.map((item, i) => (
            <span
              key={`${item}-${i}`}
              className="text-xs font-mono text-neutral-600 uppercase tracking-widest whitespace-nowrap"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      <Reveal>
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-dashed divide-neutral-800/80">
          {trustSignals.map((signal) => (
            <div
              key={signal.label}
              className="flex flex-col gap-1 px-6 lg:px-8 py-6 text-center lg:text-left"
            >
              <span className="text-sm font-medium text-white">
                {signal.label}
              </span>
              <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">
                {signal.detail}
              </span>
            </div>
          ))}
        </div>
      </Reveal>
    </GridSection>
  );
}
