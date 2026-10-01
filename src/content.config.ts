import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const posts = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/posts" }),
    schema: z.object({
        slug: z.string(),
        title: z.string(),
        date: z.coerce.date(),
        description: z.string().optional(),
    }),
});

export const collections = { posts };
