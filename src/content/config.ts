import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.string(),
    heroImage: z.string(),
    category: z.string(),
    tags: z.array(z.string()),
    draft: z.boolean(),
  }),
});

export const collections = {
  blog: blogCollection,
};
