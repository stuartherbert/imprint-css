import { resolveNumerical } from "@safelytyped/core-types";
import { getEntry } from "astro:content";

interface ColorPaletteBreakdownEntry {
    colorName: string;
    shortName: string;
}


export interface ColorPaletteBreakdown {
    defaultColor?: string;
    regularPalette: ColorPaletteBreakdownEntry[];
    alternatePalette: ColorPaletteBreakdownEntry[];
}

export async function breakdownColorPalette(colorPalette: string)
{
    const retval: ColorPaletteBreakdown = {
        regularPalette: [],
        alternatePalette: [],
    }

    const paletteData = await getEntry("colorPalettes", colorPalette);
    if (paletteData === undefined) {
        throw new Error("unknown color palette: " + colorPalette);
    }

    // shorthand
    const hasDefault = paletteData.data.some((ref) => ref.id === colorPalette);
    const paletteWithoutDefault = paletteData.data.filter((ref) => ref.id !== colorPalette);

    if (hasDefault) {
        retval.defaultColor = colorPalette;
    }

    // we need to split the palette up into two sets:
    //
    // the 'regular' palette
    // any alternative shades (including the special case of `-0`)
    paletteWithoutDefault.forEach((ref) => {
        const refSuffix = ref.id.slice(colorPalette.length + 1);
        const numSuffix = resolveNumerical(refSuffix);

        // this is what we're going to add
        const entry: ColorPaletteBreakdownEntry = {
            colorName: ref.id,
            shortName: refSuffix,
        }

        // now work out where to add it
        if (numSuffix === 0 || Number.isNaN(numSuffix)) {
            retval.alternatePalette.push(entry);
        }
        else {
            retval.regularPalette.push(entry);
        }
    })

    // all done
    return retval;
}
