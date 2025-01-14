import { z, reference } from "astro:content";

export const colorHueSchema = z.array(reference('colors'));