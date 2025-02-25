import { z } from "astro:content";

export const oklchSchema = z.object({
    lightness: z.number(),
    chroma: z.number(),
    hue: z.number(),
});