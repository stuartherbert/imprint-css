import { reference } from "astro:content";
import { renderableSchema } from "./renderable";
import config from "../../imprint.config.js";

const navSectionsNames: string[] = [];
config.navSections.forEach((navSection) => navSectionsNames.push(navSection.name));

export const docsSchema = renderableSchema.extend({
    prev: reference('docs').optional(),
    next: reference('docs').optional(),
});
