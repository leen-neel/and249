---
title: "DocPilot: How I Built an Automated API Documentation Tool in 3 Weeks"
timeline: "3-Week Sprint"
metric: "100+ docs generated"
date: "2026-04-15"
summary: "DocPilot is a devtools project I built to solve automated API documentation for solo developers and startups. It connects to your GitHub repo or accepts an OpenAPI spec, reads your codebase with AI, and generates structured docs, an API console, a mock server, and SDKs in TypeScript, Python, PHP, and more, all without writing a single line of documentation manually."
tech: ["Next.js", "Drizzle", "Gemini"]
highlights:
  - "Full-stack Next.js app with GitHub webhooks and OpenAPI/PDF ingestion"
  - "Two-step AI pipeline: route recognition, then structured doc generation"
  - "HTTP explorer, API console, mock server, and downloadable SDKs across languages"
---

## The Problem

Every developer has been there: you build an API, ship it, and then documentation becomes the thing you promise to write later. Later never comes. For solo devs and startups especially, keeping docs in sync with a fast-moving codebase is a losing battle.

I wanted to fix that. Not by making it easier to write docs manually, but by removing the need to write them at all.

DocPilot is an automated API documentation platform that reads your codebase, understands it, and generates structured, interactive docs. Users get an HTTP method explorer, an API console, a mock server, auto-generated SDKs, and an FAQ, all from a single source input.

---

## Stack

- **Frontend + Backend:** Next.js (full-stack)
- **Database:** Neon (serverless Postgres)
- **ORM:** Drizzle
- **AI:** Gemini API
- **Hosting:** Vercel

I chose Gemini over other providers purely on cost. At the volume of text DocPilot processes per doc generation, token costs add up fast, and Gemini gave the best price-to-quality ratio for this use case.

---

## Two Ways to Get Your Docs

### 1. GitHub Sync

Users connect their GitHub repo and DocPilot hooks into it via webhook. Every push to main triggers a re-sync, no manual intervention needed. DocPilot reads the codebase, runs it through the AI pipeline, and updates the docs automatically.

### 2. File Upload

Users can upload a PDF or an OpenAPI spec. DocPilot parses it and generates the same structured documentation output.

Both paths produce the same result: a hosted doc page at a unique URL (`/[id]`) with the full suite of tools.

---

## What Gets Generated

Each doc page includes:

- **HTTP Methods:** a structured view of all endpoints, params, and responses
- **API Console:** make live calls directly from the docs
- **Mock Server:** test against a simulated version of the API
- **SDK:** single-file SDKs in TypeScript, JavaScript, Python, PHP, and more
- **FAQ:** auto-generated from the codebase context

Everything is stored as structured data in the database. No markdown files, no static exports. The docs are a living record that updates when the code does.

---

## The Hard Parts

### PDF Parsing

OpenAPI specs in PDF form are structured documents masquerading as unstructured ones. PDFs don't have semantic layers; they're a flat rendering. Extracting the right fields, understanding what's a parameter vs. a description vs. a schema, and passing that cleanly into the generation pipeline required building a robust parsing layer before anything touched the AI.

### SDK Codegen

Generating SDKs across multiple languages from a single spec meant the output had to be both syntactically correct and idiomatic across TypeScript, JavaScript, Python, PHP, and others. The output is a single-file SDK: lightweight, self-contained, and immediately usable. Users can view it inline or download it directly.

### GitHub Sync: The Bug That Forced a Better Architecture

This was the most interesting problem to solve.

In early testing, DocPilot was ingesting every file in the repo and treating them all as potential API routes. Framework files, config, middleware, utility helpers: all of it was getting fed into the generation pipeline, producing noisy, inaccurate docs.

The root cause: I was reading the file structure and trying to determine which files were API routes purely through path-based heuristics. It didn't work reliably across different frameworks and project structures.

The fix was to add an AI layer specifically for file recognition. Instead of my code guessing which files mattered, I had Gemini read the file tree first and identify which files were likely to define API routes. Only after that classification step did my code actually read the file contents and build the context for doc generation.

This two-step approach (AI for structure recognition, deterministic code for content extraction) made the sync reliable across different codebases.

---

## What I'd Do Differently

The current implementation regenerates all docs on every push to main. For small repos this is fine, but it's inefficient for larger codebases where a single commit might touch one endpoint. Diffing at the file level and only regenerating affected docs is the right solution; I scoped it out during the build but left it for a post-MVP iteration.

---

## Where It Is Now

DocPilot has generated 100+ docs since launch. The target users are solo developers and early-stage startups who move fast and can't afford to treat documentation as a separate project.

The build took 3 weeks from zero to live.

---

**Live at [docpilot.dev](https://docpilot.dev)**
