import { ArrowRight, Plus } from "lucide-react";
import Link from "next/link";

export function ContextualFooter({ type }: { type: "case-study" | "article" }) {
  if (type === "case-study") {
    return (
      <div className="w-full flex flex-col border-t border-dashed border-neutral-800/80 relative">
        <div className="w-full px-8 lg:px-16 py-16 flex flex-col items-center justify-center text-center">
          <h3 className="text-2xl font-medium text-white tracking-tight mb-6">
            Need a validation-ready MVP shipped in weeks?
          </h3>
          <Link
            href="/#engagement"
            className="text-sm font-medium text-white hover:text-teal-400 transition-colors inline-flex items-center group"
          >
            Get in touch{" "}
            <span className="ml-2 font-mono group-hover:translate-x-1 transition-transform">
              <ArrowRight className="w-4 h-4" />
            </span>
          </Link>
        </div>
        <div className="absolute -top-[9px] -left-[9px] text-neutral-600 font-mono text-[10px] w-4 h-4 flex items-center justify-center pointer-events-none">
          <Plus />
        </div>
        <div className="absolute -top-[9px] -right-[9px] text-neutral-600 font-mono text-[10px] w-4 h-4 flex items-center justify-center pointer-events-none">
          <Plus />
        </div>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col md:flex-row border-t border-dashed border-neutral-800/80 relative">
      {/* Left Lane */}
      <div className="flex-1 px-8 lg:px-16 py-12 md:border-r border-b md:border-b-0 border-dashed border-neutral-800/80 flex flex-col justify-center">
        <h3 className="text-lg font-medium text-white tracking-tight mb-2">
          From theory to production.
        </h3>
        <p className="text-sm text-neutral-400 mb-6">
          Explore real-world technical execution and validation.
        </p>
        <Link
          href="/case-studies"
          className="text-sm font-medium text-white hover:text-teal-400 transition-colors inline-flex items-center group self-start"
        >
          View case studies{" "}
          <span className="ml-2 font-mono group-hover:translate-x-1 transition-transform">
            <ArrowRight className="w-4 h-4" />
          </span>
        </Link>
      </div>

      {/* Right Lane */}
      <div className="flex-1 px-8 lg:px-16 py-12 flex flex-col justify-center">
        <h3 className="text-lg font-medium text-white tracking-tight mb-2">
          Ready to accelerate your architecture?
        </h3>
        <p className="text-sm text-neutral-400 mb-6">
          Let&apos;s discuss your product engineering requirements.
        </p>
        <Link
          href="/#engagement"
          className="text-sm font-medium text-white hover:text-teal-400 transition-colors inline-flex items-center group self-start"
        >
          Get in touch{" "}
          <span className="ml-2 font-mono group-hover:translate-x-1 transition-transform">
            <ArrowRight className="w-4 h-4" />
          </span>
        </Link>
      </div>

      <div className="absolute -top-[9px] -left-[9px] text-neutral-600 font-mono text-[10px] w-4 h-4 flex items-center justify-center pointer-events-none">
        <Plus />
      </div>
      <div className="absolute -top-[9px] -right-[9px] text-neutral-600 font-mono text-[10px] w-4 h-4 flex items-center justify-center pointer-events-none">
        <Plus />
      </div>
      <div className="absolute -top-[9px] left-1/2 -translate-x-[50%] hidden md:flex text-neutral-600 font-mono text-[10px] w-4 h-4 items-center justify-center pointer-events-none">
        <Plus />
      </div>
    </div>
  );
}
