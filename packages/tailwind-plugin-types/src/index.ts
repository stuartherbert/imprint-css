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

export type { CssBreakpoint } from "./CssBreakpoint/CssBreakpoint.type";

export type { CssDefinition } from "./CssDefinition/CssDefinition.type";

export type { CssStyle } from "./CssStyle/CssStyle.type";

export type { CssStyles } from "./CssStyles/CssStyles.type";

export type { CssVar } from "./CssVar/CssVar.type";
export { newCssVar } from "./CssVar/newCssVar";

export type { CssVars } from "./CssVars/CssVars.type";
export { newCssVars } from "./CssVars/newCssVars";

export type { CssVarType } from "./CssVarType/CssVarType.type";

export type { CustomMediaQueryDefinition } from "./CustomMediaQueryDefinition/CustomMediaQueryDefinition.type";
export { isCustomMediaQueryDefinition } from "./CustomMediaQueryDefinition/isCustomMediaQueryDefinition";
export { validateCustomMediaQueryDefinition } from "./CustomMediaQueryDefinition/validateCustomMediaQueryDefinition";

export type { MaxWidthMediaQueryDefinition } from "./MaxWidthMediaQueryDefinition/MaxWidthMediaQueryDefinition.type";
export { isMaxWidthMediaQueryDefinition } from "./MaxWidthMediaQueryDefinition/isMaxWidthMediaQueryDefinition";
export { validateMaxWidthMediaQueryDefinition } from "./MaxWidthMediaQueryDefinition/validateMaxWidthMediaQueryDefinition";

export type { MinWidthMediaQueryDefinition } from "./MinWidthMediaQueryDefinition/MinWidthMediaQueryDefinition.type";
export { isMinWidthMediaQueryDefinition } from "./MinWidthMediaQueryDefinition/isMinWidthMediaQueryDefinition";
export { validateMinWidthMediaQueryDefinition } from "./MinWidthMediaQueryDefinition/validateMinWidthMediaQueryDefinition";

export type { MediaQueryDefinition } from "./MediaQueryDefinition/MediaQueryDefinition.type";

export type { SizingUnit } from "./SizingUnit/SizingUnit.type";
export type { SizingUnits } from "./SizingUnits/SizingUnits.type";

export type { StaticStyle } from "./StaticStyle/StaticStyle.type";
export { newStaticStyle } from "./StaticStyle/newStaticStyle";
export type { StaticStyles } from "./StaticStyles/StaticStyles.type";

export type { TailwindColorDefinition } from "./TailwindColorDefinition/TailwindColorDefinition.type";
export { isTailwindColorDefinition } from "./TailwindColorDefinition/isTailwindColorDefinition";
export { validateTailwindColorDefinition } from "./TailwindColorDefinition/validateTailwindColorDefinition";

export type { TailwindColorDefinitions } from "./TailwindColorDefinitions/TailwindColorDefinitions.type";

export type { TailwindColorPaletteData } from "./TailwindColorPaletteData/TailwindColorPaletteData.type";
export { isTailwindColorPaletteData } from "./TailwindColorPaletteData/isTailwindColorPaletteData";
export { validateTailwindColorPaletteData } from "./TailwindColorPaletteData/validateTailwindColorPaletteData";
export { colorPaletteShade } from "./TailwindColorPaletteData/colorPaletteShade";

export type { TailwindThemeColorData } from "./TailwindThemeColorData/TailwindThemeColorData.type";
export { isTailwindThemeColorData } from "./TailwindThemeColorData/isTailwindThemeColorData";
export { tailwindThemeColor } from "./TailwindThemeColorData/tailwindThemeColor";
export { validateTailwindThemeColorData } from "./TailwindThemeColorData/validateTailwindColorDefinition";

export type { TailwindThemeColors } from "./TailwindThemeColors/TailwindThemeColors.type";

export type { TailwindThemeSizingUnits } from "./TailwindThemeSizingUnits/TailwindThemeSizingUnits.type";
export { newTailwindThemeSizingUnits } from "./TailwindThemeSizingUnits/newTailwindThemeSizingUnits";