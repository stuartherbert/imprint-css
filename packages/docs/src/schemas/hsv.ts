import { z } from "astro:content";

export const hsvSchema = z.object({
    hue: z.number(),
    saturation: z.number(),
    value: z.number(),
});