import { z, reference } from "astro:content";

export const colorGroupSchema = z.array(reference('colors'));