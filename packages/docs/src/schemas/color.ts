import { reference, z } from "astro:content";
import { renderableSchema } from "./renderable";

const wcagContrastSchema = z.object({
    A_normal: z.boolean(),
    AA_normal: z.boolean(),
    AA_large: z.boolean(),
    AA_ui: z.boolean(),
    AAA_normal: z.boolean(),
    AAA_large: z.boolean(),
    large: z.enum(["AAA", "AA", "not accessible"]),
    normal: z.enum(["AAA", "AA", "A", "not accessible"]),
    ui: z.enum(["AA", "not accessible"]),
});

const pairedWithColorSchema = z.object({
    clearContrast: z.boolean(),
    contrastRatio: z.number(),
    wcagContrast: wcagContrastSchema,
    recommendedForHeadings: z.boolean(),
    passableForHeadings: z.boolean(),
    recommendedForBodyContent: z.boolean(),
    passableForBodyContent: z.boolean(),
    passableForUi: z.boolean(),
});

const huesEnum = z.enum([
    "black",
    "white",
    "gray",
    "red",
    "brown",
    "orange",
    "yellow",
    "lime",
    "chartreuse",
    "green",
    "springgreen",
    "teal",
    "cyan",
    "azure",
    "indigo",
    "blue",
    "violet",
    "magenta",
    "fuchsia",
    "purple",
    "rose",
    "pink",
]);
const generalSchema = z.object({
    hues: z.array(huesEnum),
    tonality: z.enum(['light', 'midtone', 'dark']),
    isDark: z.boolean(),
    isMidtone: z.boolean(),
    isLight: z.boolean(),
    luma: z.number(),
    relativeLuminance: z.number(),
});

const pairingSchema = z.object({
    background: z.string().startsWith('#'),
    foreground: z.string().startsWith('#'),
});

export const colorsSchema = renderableSchema.extend({
    // for compatibility with the page layout template
    prev: reference('colors').optional(),
    next: reference('colors').optional(),

    // the color analysis data
    name: z.string(),
    jsName: z.string(),
    definition: z.string().startsWith('#'),
    hex: z.string().startsWith('#'),
    general: generalSchema,
    pairedWithLightColor: pairedWithColorSchema,
    pairedWithDarkColor: pairedWithColorSchema,
    pairings: pairingSchema,
});
