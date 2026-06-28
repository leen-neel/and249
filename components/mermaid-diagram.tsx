"use client";

import { useEffect, useId, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type MermaidDiagramProps = {
  chart: string;
  className?: string;
};

function stripDiagramBackground(container: HTMLDivElement) {
  container.querySelectorAll("rect.background").forEach((rect) => {
    rect.setAttribute("fill", "transparent");
    rect.setAttribute("stroke", "none");
  });
}

export function MermaidDiagram({ chart, className }: MermaidDiagramProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const id = useId().replace(/:/g, "");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    async function renderChart() {
      setIsLoading(true);
      setError(null);

      const { default: mermaid } = await import("mermaid");

      mermaid.initialize({
        startOnLoad: false,
        theme: "base",
        themeVariables: {
          darkMode: true,
          background: "transparent",
          primaryColor: "#134e4a",
          primaryTextColor: "#e4e4e7",
          primaryBorderColor: "#115e59",
          secondaryColor: "#134e4a",
          tertiaryColor: "#134e4a",
          lineColor: "#52525b",
          fontFamily: "ui-monospace, monospace",
          fontSize: "13px",
          edgeLabelBackground: "transparent",
        },
        flowchart: {
          htmlLabels: true,
          curve: "basis",
          padding: 12,
        },
      });

      try {
        const { svg } = await mermaid.render(`mermaid-${id}`, chart.trim());

        if (!cancelled && containerRef.current) {
          containerRef.current.innerHTML = svg;
          stripDiagramBackground(containerRef.current);
          setError(null);
          setIsLoading(false);
        }
      } catch {
        if (!cancelled) {
          setError("Unable to render diagram.");
          setIsLoading(false);
        }
      }
    }

    renderChart();

    return () => {
      cancelled = true;
    };
  }, [chart, id]);

  if (error) {
    return (
      <pre className="my-8 overflow-x-auto rounded-md border border-neutral-800 bg-[#18181b] p-4 font-mono text-xs text-neutral-400">
        {chart}
      </pre>
    );
  }

  return (
    <div
      className={cn(
        "mermaid-diagram my-8 w-full overflow-x-auto rounded-md border border-neutral-800 bg-[#18181b] p-4",
        className
      )}
      aria-label="Architecture diagram"
      aria-busy={isLoading}
    >
      {isLoading ? (
        <div className="flex min-h-[120px] items-center justify-center">
          <span className="font-mono text-[10px] uppercase tracking-widest text-neutral-600 animate-pulse">
            Rendering diagram
          </span>
        </div>
      ) : null}
      <div
        ref={containerRef}
        className={cn(
          isLoading && "hidden",
          "[&_svg]:mx-auto [&_svg]:block [&_svg]:max-w-full [&_svg]:overflow-visible",
          "[&_svg_rect.background]:fill-transparent [&_svg_rect.background]:stroke-none"
        )}
      />
    </div>
  );
}
