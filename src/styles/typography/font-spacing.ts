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

import { HashMap } from "@safelytyped/core-types";
import { TYPOGRAPHY_DEFINITIONS } from "./definitions/TYPOGRAPHY_DEFINITIONS";
import { newStaticUtility } from "../../types/StaticUtility/newStaticUtility";
import type { CssStyle } from "../../types/CssStyle/CssStyle.type";
import { DEFINITION_STORE } from "../../definitionStore/DEFINITION_STORE";
import { buildStyleName } from "../../helpers/buildStyleName";

const staticUtility = newStaticUtility('font-spacing', { vars: {}, styles: {}, baseStyles: {}});

interface StyleToBuild {
    name: string;
    value: string|undefined;
    styles: CssStyle;
}

// create the utility classes
HashMap.forEach(
    TYPOGRAPHY_DEFINITIONS,
    function({ styleName, marginBottom, marginTop, nestedMarginTop}) {
        const stylesToBuild: StyleToBuild[] = [
            {
                name: 'spacing',
                value: marginBottom,
                styles: {
                    'margin-bottom': DEFINITION_STORE.rootPixel(marginBottom),
                },
            },
            {
                name: 'spacingTop',
                value: marginTop,
                styles: marginTop? {
                    'margin-top': DEFINITION_STORE.rootPixel(marginTop),
                } : {},
            },
            {
                name: 'nestedSpacingTop',
                value: nestedMarginTop,
                styles: {
                    'margin-top': DEFINITION_STORE.rootPixel(nestedMarginTop),
                },
            },
        ]

        stylesToBuild.forEach(
            function(styleToBuild) {
                // do we have a style?
                if (styleToBuild.value === undefined) {
                    return;
                }

                // yes we do

                // what will it be called?
                const cssSelector = buildStyleName('.imprint', styleToBuild.name, styleName);

                // add it to the list
                staticUtility.styles[cssSelector] = styleToBuild.styles;
            }
        )
    }
);

DEFINITION_STORE.addStaticUtility(staticUtility);