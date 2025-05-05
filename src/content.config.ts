import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blogSchema = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.string(),
      heroImage: image(),
      category: z.string(),
      tags: z.array(z.string()),
      draft: z.boolean(),
    }),
});

const projectSchema = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),

  schema: ({ image }) =>
    z.object({
      title: z.string(),
      url: z.string().optional(),
      image: image(),
      tags: z.array(z.string()),
      wip: z.boolean().optional(),
    }),
});

export const collections = {
  blog: blogSchema,
  projects: projectSchema,
};
