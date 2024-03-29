import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
  type: "content",
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

const projectCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      url: z.string(),
      image: image(),
      tags: z.array(z.string()),
      isClient: z.boolean(),
    }),
});

export const collections = {
  blog: blogCollection,
  projects: projectCollection,
};
