import { z } from "astro:content";

const wcagContrastSchema = z.object({
    A_normal: z.boolean(),
    AA_normal: z.boolean(),
    AA_large: z.boolean(),
    AA_ui: z.boolean(),
    AAA_normal: z.boolean(),
    AAA_large: z.boolean(),
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

export const colorsSchema = z.object({
    definition: z.string().startsWith('#'),
    hex: z.string().startsWith('#'),
    general: generalSchema,
    pairedWithLightColor: pairedWithColorSchema,
    pairedWithDarkColor: pairedWithColorSchema,
});
