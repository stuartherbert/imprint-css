import { z } from "astro:content";

export const cmykSchema = z.object({
    cyan: z.number(),
    magenta: z.number(),
    yellow: z.number(),
    key: z.number(),
});