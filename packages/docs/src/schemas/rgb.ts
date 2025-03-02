import { z } from "astro:content";

export const rgbSchema = z.object({
    red: z.number(),
    green: z.number(),
    blue: z.number(),
});