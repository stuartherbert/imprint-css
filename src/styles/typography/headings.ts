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

import { DEFINITION_STORE } from "../../definitionStore/DEFINITION_STORE";
import { newCssVar } from "../../types/CssVar/newCssVar";
import { newCssVars } from "../../types/CssVars/newCssVars";
import { newStaticUtility } from "../../types/StaticUtility/newStaticUtility";

const staticUtility = newStaticUtility(
    "headings",
    {
        vars: newCssVars(
            newCssVar(
                '--imprint-h1-underline-width',
                {
                    value: '1px',
                    type: "size",
                    description: "size of the line below H1",
                    valueDescription: "",
                }
            ),
            newCssVar(
                '--imprint-h1-underline-style',
                {
                    value: 'solid',
                    type: "line-style",
                    description: "style of the line below H1",
                    valueDescription: "",
                }
            ),
            newCssVar(
                '--imprint-h1-underline-color',
                {
                    value: 'var(--imprint-semantic-border-outer-color)',
                    type: "color",
                    description: "color of the line below H1",
                    valueDescription: "",
                }
            ),
        ),
        defaultStyles: {
            'h1': {
                '@apply imprint-block-canon imprint-fontweight-canon': {},
            },
            'h1:nth-of-type(1)': {
                'padding-bottom': DEFINITION_STORE.rootPixel("6px"),
                'border-bottom': 'var(--imprint-h1-underline-width) var(--imprint-h1-underline-style) var(--imprint-h1-underline-color)',
            },

            'h2': {
                '@apply imprint-block-trafalga imprint-fontweight-trafalga': {},
            },

            'h3': {
                '@apply imprint-block-doublepica imprint-fontweight-doublepica': {},
            },

            'h4': {
                '@apply imprint-block-greatprimer imprint-fontweight-greatprimer': {},
            },

            'h5': {
                '@apply imprint-block-longprimer imprint-fontweight-longprimer': {},
            },

            'h6': {
                '@apply imprint-block-brevier imprint-fontweight-brevier': {},
            },
        },
    },
);

DEFINITION_STORE.addStaticUtility(staticUtility);