import { z } from "astro:content";

export const renderableSchema = z.object({
    collection: z.string().optional().default("docs"),
    title: z.string(),
    description: z.string(),
    navSection: z.string(),
});
