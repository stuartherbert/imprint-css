//
// Copyright (c) 2024-present Ganbaro Digital Ltd
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

import { DEFAULT_DATA_PATH, HashMap, UnsupportedTypeError, recast, validate, validateObject, type AnyHashMap, type AppErrorOr, type TypeValidatorOptions } from "@safelytyped/core-types";
import type { TailwindThemeColorData } from "./TailwindThemeColorData.type";
import { isTailwindThemeColorData } from "./isTailwindThemeColorData";
import { isTailwindColorPaletteData } from "../TailwindColorPaletteData/isTailwindColorPaletteData";

export function validateTailwindThemeColorData
(
    input: unknown,
    {
        path = DEFAULT_DATA_PATH,
    }: Partial<TypeValidatorOptions> = {}
): AppErrorOr<TailwindThemeColorData>
{
    return validate(input)
        .next((x) => validateObject(x))
        .next((x) => validateObjectContainsColors(x))
        .value();
}

function validateObjectContainsColors
(
    input: AnyHashMap,
    {
        path = DEFAULT_DATA_PATH,
    }: Partial<TypeValidatorOptions> = {}
): AppErrorOr<TailwindThemeColorData>
{
    // all keys in this object must be acceptable color definitions
    if (HashMap.every(input, (val) => isTailwindThemeColorData(val) || isTailwindColorPaletteData(val))) {
        return recast<AnyHashMap, TailwindThemeColorData>(input);
    }

    // if we get here, we have a problem
    return new UnsupportedTypeError({
        public: {
            dataPath: path,
            expected: "TailwindThemeColorData",
            actual: "something else"
        }
    });
}