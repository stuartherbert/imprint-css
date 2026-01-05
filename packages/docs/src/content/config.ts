// Import utilities from `astro:content`
import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";
import { colorsSchema } from "../schemas/color";
import { colorAliasSchema } from "../schemas/colorAlias";
import { colorGroupSchema } from "../schemas/colorGroup";
import { colorHueSchema } from "../schemas/colorHue";
import { colorPaletteSchema } from "../schemas/colorPalette";
import { docsSchema } from "../schemas/doc";

const CssStyles = defineCollection({
    type: 'data'
});

const devices = defineCollection({
    loader: glob({ pattern: "*.json", base: "./src/data/devices" }),
    schema: z.object({
        name: z.string(),
        breakpoint: z.object({
            name: z.string(),
            mediaQuery: z.string(),
            screenWidth: z.string(),
            targetDevices: z.string(),
        }),
        remPx: z.string(),
        articleMaxWidth: z.string(),
    }),
});

const docs = defineCollection({
    loader: glob({ pattern: "**/*.mdx", base: "./src/content/docs"}),
    schema: docsSchema,
});

const CssVars = defineCollection({
    type: 'data',
    schema: z.object({
        name: z.string(),
        value: z.string(),
        type: z.enum(["color", "font-family", "size"]),
        description: z.string(),
        valueDescription: z.string(),
    }),
});

const colors = defineCollection({
    loader: glob({ pattern: "*.json", base: "./src/data/colors" }),
    schema: colorsSchema,
});

const colorAliases = defineCollection({
    loader: glob({ pattern: "*.json", base: "./src/data/colorAliases" }),
    schema: colorAliasSchema,
});

const colorGroups = defineCollection({
    loader: glob({ pattern: "*.json", base: "./src/data/colorGroups" }),
    schema: colorGroupSchema,
});

const colorHues = defineCollection({
    loader: glob({ pattern: "*.json", base: "./src/data/colorHues" }),
    schema: colorHueSchema,
});

const colorPalettes = defineCollection({
    loader: glob({ pattern: "*.json", base: "./src/data/colorPalettes" }),
    schema: colorPaletteSchema,
});

const sizingUnitSets = defineCollection({
    type: "data",
    schema: z.object({}).catchall(z.string()),
});

export const collections = {
    colors,
    colorAliases,
    colorGroups,
    colorHues,
    colorPalettes,
    devices,
    docs,
    CssStyles,
    CssVars,
    sizingUnitSets,
};
