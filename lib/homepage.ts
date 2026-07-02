export const homepageStats = [
  { value: "2-4", suffix: " wks", label: "Typical MVP sprint" },
  { value: "3", suffix: " wks", label: "DocPilot shipped to prod" },
  { value: "6", suffix: " wks", label: "Outbound pipeline built" },
] as const;

export const beforeAfter = {
  before: {
    label: "Before",
    title: "Building like a vendor relationship.",
    items: [
      "Months of discovery decks before a single deploy",
      "Agency hand-offs and account managers in the loop",
      "Microservices and premature optimization pre-revenue",
      "Demo chatbots that break the week after launch",
    ],
  },
  after: {
    label: "After",
    title: "Building like infrastructure you ship.",
    items: [
      "Fixed-scope sprints with weekly demos and direct Slack access",
      "Senior execution — no dev shop, no junior hand-off",
      "Boring, proven stack your next hire can maintain",
      "Production LLM pipelines with eval loops and cost controls",
    ],
  },
} as const;

export const offerings = [
  {
    id: "01",
    title: "MVP Sprint",
    description:
      "Validation-ready SaaS from kickoff to production in 2–4 weeks — auth, billing hooks, core workflow, deploy.",
    href: "/case-studies/docpilot",
    cta: "See DocPilot case study",
  },
  {
    id: "02",
    title: "AI / LLM Integration",
    description:
      "RAG systems, two-step classification, API doc automation — structured prompts and eval loops, not demo chatbots.",
    href: "/blog/two-step-llm-pipelines",
    cta: "Read LLM pipeline post",
  },
  {
    id: "03",
    title: "Outbound Systems",
    description:
      "High-throughput recruiting and sales automation wired into your existing product — discovery, matching, delivery.",
    href: "/case-studies/automated-recruiting-outreach",
    cta: "See outbound case study",
  },
  {
    id: "04",
    title: "Technical Advisory",
    description:
      "Architecture review, GTM/GA4 debugging, conversion tracking postmortems — fix what's blocking growth.",
    href: "/blog/debugging-double-counted-conversions-gtm-ga4-postmortem",
    cta: "Read GTM/GA4 postmortem",
  },
] as const;

export const engagementPipeline = [
  {
    step: "01",
    title: "Discovery call",
    description:
      "Scope the business hypothesis, trim ambiguity, and agree on a fixed sprint outcome.",
  },
  {
    step: "02",
    title: "Architecture + sprint plan",
    description:
      "Stack decisions, milestone breakdown, and a shared doc — no months of wireframes.",
  },
  {
    step: "03",
    title: "Weekly demos",
    description:
      "Async-first with Slack access. You see working software every week, not slide decks.",
  },
  {
    step: "04",
    title: "Production deploy",
    description:
      "Ship to Vercel or your infra with handoff docs, env setup, and a clean codebase.",
  },
  {
    step: "05",
    title: "Iteration sprints",
    description:
      "Most clients stay on for post-launch features, integrations, and performance work.",
  },
] as const;

export const trustSignals = [
  { label: "WordCamp talks", detail: "Talks on scope creep & scalability" },
  { label: "Senior-led delivery", detail: "Direct access · no relay team" },
  { label: "Next.js · TypeScript", detail: "Type-safe full stack" },
  { label: "Async worldwide", detail: "US · EU · APAC clients" },
] as const;

export const heroCodeTabs = [
  {
    id: "mvp",
    label: "MVP API",
    code: `// Week 2: core product endpoint
export async function POST(req: Request) {
  const { userId, payload } = await req.json();
  const result = await runCoreWorkflow(userId, payload);
  return Response.json({ ok: true, data: result });
}`,
  },
  {
    id: "llm",
    label: "LLM pipeline",
    code: `// Two-step: classify, then generate
const intent = await classifyIntent(sourceText);
const docs = await generateStructuredDocs({
  intent,
  glossary: productGlossary,
  locale: "en",
});
return { docs, tokensUsed: docs.usage };`,
  },
  {
    id: "outbound",
    label: "Outbound worker",
    code: `// Scheduled discovery + personalized send
export const outreachJob = schedules.task({
  cron: "0 */12 * * *",
  run: async () => {
    const leads = await discoverHiringSignals();
    await rankAndEnqueue(leads, { limit: 5 });
  },
});`,
  },
] as const;

export const marqueeItems = [
  "DocPilot",
  "Outbound recruiting",
  "Next.js",
  "TypeScript",
  "LLM pipelines",
  "Trigger.dev",
  "WordCamp",
  "SaaS MVPs",
] as const;
