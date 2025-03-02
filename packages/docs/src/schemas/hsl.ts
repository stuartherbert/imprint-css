import { z } from "astro:content";

export const hslSchema = z.object({
    hue: z.number(),
    saturation: z.number(),
    luminosity: z.number(),
});