import hljs from "highlight.js/lib/core";
import typescript from "highlight.js/lib/languages/typescript";
import { cn } from "@/lib/utils";

hljs.registerLanguage("typescript", typescript);

type CodeBlockProps = {
  code: string;
  language?: string;
  className?: string;
};

export function CodeBlock({
  code,
  language = "typescript",
  className,
}: CodeBlockProps) {
  const highlighted = hljs.highlight(code.trim(), { language }).value;

  return (
    <div className={cn("markdown-content", className)}>
      <pre>
        <code
          className={`hljs language-${language}`}
          dangerouslySetInnerHTML={{ __html: highlighted }}
        />
      </pre>
    </div>
  );
}
