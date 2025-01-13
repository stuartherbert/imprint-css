//
// Copyright (c) 2025-present Ganbaro Digital Ltd
// All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions
// are met:
//
//   * Re-distributions of source code must retain the above copyright
//     notice, this list of conditions and the following disclaimer.
//
//   * Redistributions in binary form must reproduce the above copyright
//     notice, this list of conditions and the following disclaimer in
//     the documentation and/or other materials provided with the
//     distribution.
//
//   * Neither the names of the copyright holders nor the names of his
//     contributors may be used to endorse or promote products derived
//     from this software without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
// "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
// LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS
// FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
// COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
// INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING,
// BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
// LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
// CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT
// LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN
// ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
// POSSIBILITY OF SUCH DAMAGE.
//

import { DEFAULT_DATA_PATH, THROW_THE_ERROR, type DataPath, type OnError } from "@safelytyped/core-types";
import { ALL_COLORS } from "../defaults/ALL_COLORS";
import type { CssColorCollection } from "../types/CssColorCollection/CssColorCollection.type";
import type { CssColorDefinition } from "../types/CssColorDefinition/CssColorDefinition.type";
import { isCssColorDefinition } from "../types/CssColorDefinition/isCssColorDefinition";
import { makeUnknownColorError } from "../types/UnknownColor/makeUnknownColorError";
import { hasDefaultColor } from "./hasDefaultColor";

export function colorFromCollection(
    colorName: string,
    {
        collection = ALL_COLORS,
        path = DEFAULT_DATA_PATH,
        onError = THROW_THE_ERROR,
    }: {
        collection?: CssColorCollection,
        path?: DataPath,
        onError?: OnError,
    } = {}
): CssColorDefinition
{
    // shorthand
    const unknownColorError = makeUnknownColorError(colorName, { path });

    // special case - colorName matches an entry in our collection
    if (collection[colorName]) {
        // is it a color?
        if (isCssColorDefinition(collection[colorName])) {
            return collection[colorName];
        }

        // it must be a color palette
        if (hasDefaultColor(collection[colorName])) {
            return collection[colorName].DEFAULT;
        }

        // if we get here, then no match
        return onError(unknownColorError);
    }

    // general case - colorName may be pointing at something inside a
    // color palette

    const parts = colorName.split("-");
    if (parts.length < 2) {
        return onError(unknownColorError);
    }

    // shorthand
    const paletteName = parts.slice(0, -1).join("-");
    const paletteEntry = parts[parts.length - 1];

    const maybePalette = collection[paletteName];
    if (maybePalette === undefined) {
        return onError(unknownColorError);
    }
    if (isCssColorDefinition(maybePalette)) {
        return onError(unknownColorError);
    }

    // what do we have?
    const colorData = maybePalette[paletteEntry];
    if (isCssColorDefinition(colorData)) {
        // we found the requested color!
        return colorData;
    }

    // if we get here, then we were unable to find this color
    return onError(unknownColorError);
}