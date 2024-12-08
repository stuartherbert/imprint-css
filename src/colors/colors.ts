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


import { DEFINITION_STORE } from "../definitionStore/DEFINITION_STORE";
import { materialColor } from "../types/MaterialColorPalette/materialColor";
import type { TailwindColorsData } from "../types/TailwindColorsData/TailwindColorsData.type";

import { APPLE_COLORS } from "./apple";
import { CSS_EXTENDED_COLORS } from "./css";
import { FLAT_COLORS } from "./flat";
import { GANBARO_COLORS } from "./ganbaro";
import { IMPRINT_COLORS } from "./imprint";
import { MATERIAL_COLORS } from "./material-design";
import { METRO_COLORS } from "./metro";
import { MISC_COLORS } from "./misc";
import { MSDL_COLORS } from "./msdl";
import { SOCIAL_COLORS } from "./social";

export const colors: TailwindColorsData = {
    ...APPLE_COLORS,
    ...CSS_EXTENDED_COLORS,
    ...FLAT_COLORS,
    ...GANBARO_COLORS,
    ...IMPRINT_COLORS,
    ...MATERIAL_COLORS,
    ...METRO_COLORS,
    ...MISC_COLORS,
    ...MSDL_COLORS,
    ...SOCIAL_COLORS,
    ...{
        "imprint-primary": materialColor(GANBARO_COLORS["ganbaro-blue"], '500'),
        "imprint-secondary": materialColor(GANBARO_COLORS["ganbaro-green"], '500'),
    }
}

export const colorGroups = {
    apple: APPLE_COLORS,
    css: CSS_EXTENDED_COLORS,
    flat: FLAT_COLORS,
    ganbaro: GANBARO_COLORS,
    imprint: IMPRINT_COLORS,
    materialDesign: MATERIAL_COLORS,
    metro: METRO_COLORS,
    misc: MISC_COLORS,
    msdl: MSDL_COLORS,
    social: SOCIAL_COLORS,
}

// add colours to the theme
DEFINITION_STORE.addColors(colors);