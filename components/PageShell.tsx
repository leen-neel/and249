import { Navbar } from "@/components/Navbar";
import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";

export function CornerMarkers() {
  return (
    <>
      <div className="absolute -bottom-[9px] -left-[9px] text-neutral-600 font-mono text-[10px] w-4 h-4 flex items-center justify-center pointer-events-none">
        <Plus />
      </div>
      <div className="absolute -bottom-[9px] -right-[9px] text-neutral-600 font-mono text-[10px] w-4 h-4 flex items-center justify-center pointer-events-none">
        <Plus />
      </div>
    </>
  );
}

export function PageShellHeader() {
  return (
    <div className="w-full h-[80px] border-b border-dashed border-neutral-800/80 relative">
      <Navbar />
      <CornerMarkers />
    </div>
  );
}

export function PageShell({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className="min-h-screen bg-[#121214] text-neutral-300 font-sans selection:bg-teal-900 selection:text-teal-100 relative flex flex-col">
      <div
        className={cn(
          "relative z-10 flex flex-col w-full min-h-screen max-w-7xl mx-auto border-l border-r border-dashed border-neutral-800/80",
          className
        )}
      >
        <PageShellHeader />
        {children}
      </div>
    </div>
  );
}
