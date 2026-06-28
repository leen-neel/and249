import { GridSection } from "./GridSystem";
import { Reveal } from "./motion/reveal";
import { getCaseStudy } from "@/lib/content";
import Link from "next/link";

const FEATURED_SLUG = "docpilot";

export async function CaseStudy() {
  const { frontmatter, slug } = getCaseStudy(FEATURED_SLUG);
  const highlights =
    frontmatter.highlights ??
    frontmatter.tech?.map((item) => `Built with ${item}`) ??
    [];

  return (
    <GridSection className="flex flex-col w-full" id="validation">
      <Reveal>
        <div className="flex flex-col gap-2 px-8 lg:px-12 py-12 border-b border-dashed border-neutral-800/80">
          <span className="text-[10px] font-mono text-neutral-500 tracking-widest uppercase">
            [ 04 // VALIDATION ]
          </span>
          <h2 className="text-xl lg:text-2xl font-medium tracking-tight text-white mt-2">
            Selected Case Studies & Impact.
          </h2>
        </div>
      </Reveal>

      <div className="flex flex-col lg:flex-row w-full">
        <Reveal delay={0.08} className="w-full lg:w-[40%]">
          <div className="flex flex-col gap-8 px-8 lg:px-12 py-12 border-b lg:border-b-0 lg:border-r border-dashed border-neutral-800/80 h-full">
            <div>
              <span className="text-[10px] font-mono text-neutral-600 uppercase tracking-widest block mb-2">
                Project
              </span>
              <h3 className="text-lg font-medium text-white tracking-tight">
                {frontmatter.title}
              </h3>
            </div>

            <div>
              <span className="text-[10px] font-mono text-neutral-600 uppercase tracking-widest block mb-2">
                Timeline
              </span>
              <span className="text-sm font-medium text-neutral-300">
                {frontmatter.timeline}
              </span>
            </div>

            <div>
              <span className="text-[10px] font-mono text-neutral-600 uppercase tracking-widest block mb-2">
                Metric
              </span>
              <span className="text-lg font-medium text-teal-400">
                {frontmatter.metric}
              </span>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.16} className="w-full lg:w-[60%]">
          <div className="flex flex-col gap-8 px-8 lg:px-12 py-12 h-full">
            <blockquote className="border-l-2 border-teal-900/50 pl-6 py-2">
              <p className="text-base text-neutral-300 italic leading-relaxed">
                &quot;{frontmatter.summary}&quot;
              </p>
            </blockquote>

            {highlights.length > 0 && (
              <div className="flex flex-col gap-4 mt-4">
                <span className="text-[10px] font-mono text-neutral-600 uppercase tracking-widest">
                  Technical Delivery
                </span>
                <ul className="flex flex-col gap-3">
                  {highlights.map((item, index) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="text-teal-500 font-mono text-xs mt-0.5">
                        {String(index + 1).padStart(2, "0")}/
                      </span>
                      <span className="text-sm text-neutral-400 leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <Link
              href={`/case-studies/${slug}`}
              className="text-sm text-neutral-400 hover:text-teal-400 transition-colors duration-200 w-fit"
            >
              Read the full case study →
            </Link>
          </div>
        </Reveal>
      </div>
    </GridSection>
  );
}
