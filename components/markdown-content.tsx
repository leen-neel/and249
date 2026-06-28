import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import type { Element } from "hast";
import { cn } from "@/lib/utils";
import { MermaidDiagram } from "./mermaid-diagram";

const markdownProse =
  "markdown-content prose prose-invert max-w-none prose-neutral w-full max-w-3xl prose-headings:font-medium prose-headings:tracking-tight prose-a:text-teal-400 hover:prose-a:text-teal-300 prose-a:transition-colors prose-pre:p-0 prose-pre:bg-transparent prose-pre:border-0 prose-pre:shadow-none prose-img:my-8 prose-img:rounded-sm leading-relaxed text-[15px]";

function getMermaidSource(node: Element | undefined) {
  if (!node || node.tagName !== "code") return null;

  const className = node.properties?.className;
  const classes = Array.isArray(className)
    ? className.map(String)
    : className
      ? [String(className)]
      : [];

  if (!classes.some((name) => name.includes("language-mermaid"))) {
    return null;
  }

  return node.children
    .map((child) => ("value" in child ? child.value : ""))
    .join("")
    .replace(/\n$/, "");
}

export function MarkdownContent({
  content,
  className,
}: {
  content: string;
  className?: string;
}) {
  return (
    <article className={cn(markdownProse, className)}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[[rehypeHighlight, { plainText: ["mermaid"] }]]}
        components={{
          pre({ node, children }) {
            const codeNode = node?.children?.[0];
            const mermaidSource =
              codeNode?.type === "element"
                ? getMermaidSource(codeNode)
                : null;

            if (mermaidSource) {
              return <MermaidDiagram chart={mermaidSource} />;
            }

            return <pre>{children}</pre>;
          },
          code({ className, children, ...props }) {
            if (/language-mermaid/.test(className ?? "")) {
              return null;
            }

            return (
              <code className={className} {...props}>
                {children}
              </code>
            );
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </article>
  );
}
