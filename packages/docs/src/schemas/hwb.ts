import { z } from "astro:content";

export const hwbSchema = z.object({
    hue: z.number(),
    whiteness: z.number(),
    blackness: z.number(),
});