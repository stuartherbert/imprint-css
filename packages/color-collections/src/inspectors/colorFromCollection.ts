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

import { DEFAULT_DATA_PATH, isString, THROW_THE_ERROR, type DataPath, type OnError } from "@safelytyped/core-types";
import { ALL_COLORS } from "../defaults/ALL_COLORS";
import type { CssColorCollection } from "../types/CssColorCollection/CssColorCollection.type";
import type { CssColorDefinition } from "../types/CssColorDefinition/CssColorDefinition.type";
import type { CssColorDefinitions } from "../types/CssColorDefinitions/CssColorDefinitions.type";
import type { CssColorPalette } from "../types/CssColorPalette/CssColorPalette.type";
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

    const parts = colorName.split("-");
    let colorData: CssColorCollection|CssColorPalette|CssColorDefinitions|CssColorDefinition = collection;

    parts.forEach(part => {
        // robustness
        if (isString(colorData)) {
            return onError(unknownColorError);
        }
        if (colorData[part] === undefined) {
            return onError(unknownColorError);
        }

        colorData = colorData[part];
    });

    // what do we have?
    if (isCssColorDefinition(colorData)) {
        // we found the requested color!
        return colorData;
    }

    // if we get here, we're probably looking at a color palette
    //
    // if it has a default color, we can use that
    if (hasDefaultColor(colorData)) {
        return colorData.DEFAULT;
    }

    // if we get here, then we were unable to find this color
    return onError(unknownColorError);
}
