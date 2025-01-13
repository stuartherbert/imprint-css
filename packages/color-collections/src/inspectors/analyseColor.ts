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

import { contrastRatio, hasClearContrast, hues, isDark, isLight, isMidtone, luma, makeCssHexColorDefinition, relativeLuminance, tonality, wcagContrast, type AnyCssColor } from "@safelytyped/css-color";
import type { ColorAnalysis } from "../types/ColorAnalysis/ColorAnalysis.type";
import { roundDown } from "@safelytyped/math-rounding";
import { DEFAULT_FG } from "../defaults/DEFAULT_FG";
import { DEFAULT_BG } from "../defaults/DEFAULT_BG";

export function analyseColor(
    input: AnyCssColor,
    {
        defaultFg = DEFAULT_FG,
        defaultBg = DEFAULT_BG
    }: {
        defaultFg?: AnyCssColor,
        defaultBg?: AnyCssColor
    } = {}
): ColorAnalysis
{
    // analyse the color
    const retval = {
        definition: input.definition(),
        hex: makeCssHexColorDefinition(input.hex()),
        general: {
            hues: hues(input),
            tonality: tonality(input),
            isDark: isDark(input),
            isMidtone: isMidtone(input),
            isLight: isLight(input),
            luma: roundDown(3, luma(input)),
            relativeLuminance: roundDown(3, relativeLuminance(input)),
        },
        pairedWithLightColor: {
            clearContrast: hasClearContrast(input, defaultBg),
            contrastRatio: contrastRatio(input, defaultBg),
            wcagContrast: wcagContrast(contrastRatio(input, defaultBg)),
            recommendedForHeadings: false,
            passableForHeadings: false,
            recommendedForBodyContent: false,
            passableForBodyContent: false,
            passableForUi: false,
        },
        pairedWithDarkColor: {
            clearContrast: hasClearContrast(input, defaultFg),
            contrastRatio: contrastRatio(input, defaultFg),
            wcagContrast: wcagContrast(contrastRatio(input, defaultFg)),
            recommendedForHeadings: false,
            passableForHeadings: false,
            recommendedForBodyContent: false,
            passableForBodyContent: false,
            passableForUi: false,
        },
    };

    // use that data for some additional analysis
    retval.pairedWithLightColor.recommendedForHeadings = (retval.pairedWithLightColor.wcagContrast.AAA_large && retval.pairedWithLightColor.clearContrast && !retval.general.isMidtone);
    retval.pairedWithLightColor.passableForHeadings = (retval.pairedWithLightColor.wcagContrast.AA_large && retval.pairedWithLightColor.clearContrast && !retval.general.isMidtone);
    retval.pairedWithLightColor.recommendedForBodyContent = (retval.pairedWithLightColor.wcagContrast.AAA_normal && retval.pairedWithLightColor.clearContrast && !retval.general.isMidtone);
    retval.pairedWithLightColor.passableForBodyContent = (retval.pairedWithLightColor.wcagContrast.AA_normal && retval.pairedWithLightColor.clearContrast && !retval.general.isMidtone);
    retval.pairedWithLightColor.passableForUi = (retval.pairedWithLightColor.wcagContrast.AA_ui && retval.pairedWithLightColor.clearContrast && !retval.general.isMidtone);
    retval.pairedWithDarkColor.recommendedForHeadings = (retval.pairedWithDarkColor.wcagContrast.AAA_large && retval.pairedWithDarkColor.clearContrast && !retval.general.isMidtone);
    retval.pairedWithDarkColor.passableForHeadings = (retval.pairedWithDarkColor.wcagContrast.AA_large && retval.pairedWithDarkColor.clearContrast && !retval.general.isMidtone);
    retval.pairedWithDarkColor.recommendedForBodyContent = (retval.pairedWithDarkColor.wcagContrast.AAA_normal && retval.pairedWithDarkColor.clearContrast && !retval.general.isMidtone);
    retval.pairedWithDarkColor.passableForBodyContent = (retval.pairedWithDarkColor.wcagContrast.AA_normal && retval.pairedWithDarkColor.clearContrast && !retval.general.isMidtone);
    retval.pairedWithDarkColor.passableForUi = (retval.pairedWithDarkColor.wcagContrast.AA_ui && retval.pairedWithDarkColor.clearContrast && !retval.general.isMidtone);

    // all done
    return retval;
}