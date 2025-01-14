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

export { APPLE_COLORS } from "./colors/apple";
export { BOOTSTRAP_COLORS } from "./colors/bootstrap";
export { CSS_EXTENDED_COLORS } from "./colors/css";
export { FLAT_COLORS } from "./colors/flat";
export { GANBARO_COLORS } from "./colors/ganbaro";
export { IMPRINT_COLORS } from "./colors/imprint";
export { MATERIAL_COLORS } from "./colors/material-design";
export { METRO_COLORS } from "./colors/metro";
export { MISC_COLORS } from "./colors/misc";
export { MSDL_COLORS } from "./colors/msdl";
export { SOCIAL_COLORS } from "./colors/social";
export { TAILWIND_COLORS } from "./colors/tailwind";

// the light and dark colors that we use in our color analysis inspector
export { DEFAULT_BG } from "./defaults/DEFAULT_BG";
export { DEFAULT_FG } from "./defaults/DEFAULT_FG";

export { ALL_COLOR_COLLECTIONS } from "./defaults/ALL_COLOR_COLLECTIONS";
export { ALL_COLORS } from "./defaults/ALL_COLORS";

export { analyseColor } from "./inspectors/analyseColor";
export { colorFromCollection } from "./inspectors/colorFromCollection";
export { hasDefaultColor } from "./inspectors/hasDefaultColor";

export { collectionToDefinitions } from "./transforms/collectionToDefinitions";
export { paletteToDefinitions } from "./transforms/paletteToDefinitions";

export type { ColorAnalysis } from "./types/ColorAnalysis/ColorAnalysis.type";

export type { CssColorDefinition } from "./types/CssColorDefinition/CssColorDefinition.type";
export { isCssColorDefinition } from "./types/CssColorDefinition/isCssColorDefinition";
export { mustBeCssColorDefinition } from "./types/CssColorDefinition/mustBeCssColorDefinition";
export { validateCssColorDefinition } from "./types/CssColorDefinition/validateCssColorDefinition";

export type { CssColorDefinitions } from "./types/CssColorDefinitions/CssColorDefinitions.type";

export type { CssColorPalette } from "./types/CssColorPalette/CssColorPalette.type";
export { isCssColorPalette } from "./types/CssColorPalette/isCssColorPalette";
export { mustBeCssColorPalette } from "./types/CssColorPalette/mustBeCssColorPalette";
export { validateCssColorPalette } from "./types/CssColorPalette/validateCssColorPalette";

export type { CssColorCollection } from "./types/CssColorCollection/CssColorCollection.type";
export type { CssColorCollections } from "./types/CssColorCollections/CssColorCollections.type";

export { makeUnknownColorError } from "./types/UnknownColor/makeUnknownColorError";
export type { UnknownColorData } from "./types/UnknownColor/UnknownColorData.type";
export { UnknownColorError } from "./types/UnknownColor/UnknownColorError";

