import { z, reference } from "astro:content";

export const colorAliasSchema = z.array(reference('colors'));