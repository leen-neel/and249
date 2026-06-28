import { CornerMarkers, PageShell } from "@/components/PageShell";
import { cn } from "@/lib/utils";

function Pulse({ className }: { className?: string }) {
  return (
    <div
      className={cn("bg-neutral-800/50 animate-pulse rounded-sm", className)}
      aria-hidden
    />
  );
}

function BorderedSection({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "border-b border-dashed border-neutral-800/80 relative",
        className
      )}
    >
      {children}
      <CornerMarkers />
    </div>
  );
}

export function ListPageLoading({ rows = 5 }: { rows?: number }) {
  return (
    <PageShell>
      <main className="flex-1 flex flex-col relative">
        <BorderedSection className="w-full px-8 lg:px-12 py-16 lg:py-20 flex flex-col">
          <Pulse className="h-3 w-28 mb-12" />
          <Pulse className="h-9 w-64 max-w-full mb-4" />
          <Pulse className="h-4 w-full max-w-2xl" />
          <Pulse className="h-4 w-full max-w-xl mt-2" />
        </BorderedSection>

        <div className="flex flex-col w-full">
          {Array.from({ length: rows }).map((_, index) => (
            <BorderedSection
              key={index}
              className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-16 px-8 lg:px-12 py-8"
            >
              <Pulse className="h-3 w-24 flex-shrink-0" />
              <Pulse className="h-5 w-full max-w-md" />
            </BorderedSection>
          ))}
        </div>
      </main>
    </PageShell>
  );
}

export function ArticlePageLoading() {
  return (
    <PageShell>
      <main className="flex-1 flex flex-col relative">
        <BorderedSection className="w-full px-8 lg:px-16 py-16 lg:py-24 flex flex-col items-center text-center">
          <Pulse className="h-3 w-24 mb-4" />
          <Pulse className="h-10 w-full max-w-2xl mb-8" />
          <div className="flex flex-wrap gap-2 justify-center">
            <Pulse className="h-5 w-16" />
            <Pulse className="h-5 w-20" />
            <Pulse className="h-5 w-14" />
          </div>
        </BorderedSection>

        <div className="w-full px-8 lg:px-16 py-16 flex justify-center">
          <div className="w-full max-w-3xl space-y-4">
            <Pulse className="h-4 w-full" />
            <Pulse className="h-4 w-full" />
            <Pulse className="h-4 w-[92%]" />
            <Pulse className="h-4 w-full mt-8" />
            <Pulse className="h-4 w-full" />
            <Pulse className="h-4 w-[88%]" />
          </div>
        </div>
      </main>
    </PageShell>
  );
}

export function SplitArticlePageLoading() {
  return (
    <PageShell>
      <main className="flex-1 flex flex-col lg:flex-row relative">
        <BorderedSection className="w-full lg:w-[35%] lg:border-b-0 lg:border-r p-8 lg:p-12">
          <Pulse className="h-3 w-24 mb-12" />
          <Pulse className="h-3 w-20 mb-6" />
          <Pulse className="h-8 w-full max-w-xs mb-8" />
          <div className="space-y-3">
            <Pulse className="h-3 w-32" />
            <Pulse className="h-3 w-28" />
            <Pulse className="h-3 w-36" />
          </div>
          <div className="flex flex-wrap gap-2 mt-8">
            <Pulse className="h-5 w-14" />
            <Pulse className="h-5 w-16" />
            <Pulse className="h-5 w-12" />
          </div>
        </BorderedSection>

        <div className="w-full lg:w-[65%] px-8 lg:px-12 py-12 lg:py-16">
          <div className="w-full max-w-2xl space-y-4">
            <Pulse className="h-4 w-full" />
            <Pulse className="h-4 w-full" />
            <Pulse className="h-4 w-[92%]" />
            <Pulse className="h-4 w-full mt-8" />
            <Pulse className="h-4 w-full" />
            <Pulse className="h-4 w-[88%]" />
            <Pulse className="h-32 w-full mt-8 rounded-md" />
          </div>
        </div>
      </main>
    </PageShell>
  );
}
