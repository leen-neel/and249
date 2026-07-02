"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "motion/react";
import { homepageStats } from "@/lib/homepage";
import { FadeUp } from "./motion/reveal";

function AnimatedValue({ value, suffix }: { value: string; suffix: string }) {
  const shouldReduceMotion = useReducedMotion();
  const numeric = parseInt(value.replace(/\D/g, ""), 10);
  const isNumeric = !Number.isNaN(numeric) && value === String(numeric);

  const [display, setDisplay] = useState(
    isNumeric && !shouldReduceMotion ? 0 : numeric
  );

  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isNumeric || shouldReduceMotion || hasAnimated.current) {
      setDisplay(numeric);
      return;
    }

    hasAnimated.current = true;
    const duration = 1200;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(numeric * eased));
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [isNumeric, numeric, shouldReduceMotion]);

  if (!isNumeric) {
    return (
      <span>
        {value}
        {suffix}
      </span>
    );
  }

  return (
    <span>
      {display}
      {suffix}
    </span>
  );
}

export function StatTicker() {
  return (
    <FadeUp>
      <div className="w-full border-t border-dashed border-neutral-800/80 bg-neutral-900/20">
        <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-dashed divide-neutral-800/80">
          {homepageStats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center sm:items-start gap-1 px-8 lg:px-12 py-6"
            >
              <span className="text-2xl lg:text-3xl font-light text-white tracking-tight tabular-nums">
                <AnimatedValue value={stat.value} suffix={stat.suffix} />
              </span>
              <span className="text-[10px] font-mono text-teal-500/80 uppercase tracking-widest text-center sm:text-left">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </FadeUp>
  );
}
