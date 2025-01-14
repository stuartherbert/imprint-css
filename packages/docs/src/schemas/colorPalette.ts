import { z, reference } from "astro:content";

export const colorPaletteSchema = z.array(reference('colors'));