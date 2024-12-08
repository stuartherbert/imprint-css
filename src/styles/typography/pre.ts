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
    "pre",
    {
        vars: newCssVars(
            newCssVar(
                '--imprint-block-mono-border-radius',
                {
                    value: '0.25rem',
                    type: "size",
                    description: "corner radius of the border around all monospaced elements",
                    valueDescription: "",
                },
            ),
            newCssVar(
                '--imprint-inline-mono-size',
                {
                    value: '0.85em',
                    type: "size",
                    description: "font-size for inline monospaced elements",
                    valueDescription: "",
                },
            ),
            newCssVar(
                '--imprint-inline-mono-border-radius',
                {
                    value: '0.25rem',
                    type: "size",
                    description: "",
                    valueDescription: "",
                },
            ),
            newCssVar(
                '--imprint-inline-mono-padding',
                {
                    value: '0.1em 0.2em',
                    type: "size",
                    description: "",
                    valueDescription: ""
                },
            ),
            newCssVar(
                '--imprint-code-border',
                {
                    value: '1px solid var(--imprint-semantic-code-border-color)',
                    type: "group",
                    description: "",
                    valueDescription: "",
                }
            ),
            newCssVar(
                '--imprint-code-padding',
                {
                    value: 'var(--imprint-inline-mono-padding)',
                    type: "group",
                    description: "",
                    valueDescription: "",
                }
            ),
            newCssVar(
                '--imprint-code-border-radius',
                {
                    value: 'var(--imprint-inline-mono-border-radius)',
                    type: "size",
                    description: "",
                    valueDescription: "",
                }
            ),
            newCssVar(
                '--imprint-pre-padding',
                {
                    value: '0.5rem 1rem',
                    type: "size",
                    description: "",
                    valueDescription: "",
                },
            ),
            newCssVar(
                '--imprint-pre-border-radius',
                {
                    value: 'var(--imprint-block-mono-border-radius)',
                    type: "size",
                    description: "",
                    valueDescription: "",
                },
            ),
            newCssVar(
                '--imprint-samp-border-radius',
                {
                    value: 'var(--imprint-inline-mono-border-radius)',
                    type: "size",
                    description: "",
                    valueDescription: "",
                },
            ),
            newCssVar(
                '--imprint-samp-padding',
                {
                    value: 'var(--imprint-inline-mono-padding)',
                    type: "group",
                    description: "",
                    valueDescription: "",
                }
            ),
        ),
        styles: {
            '.imprint-pre': {
                'font-family': 'var(--imprint-font-monospace)',
                '@apply imprint-block-bodycopy': {},
                'font-size': 'var(--imprint-inline-mono-size)',
                'color': 'var(--imprint-semantic-pre-color)',
                'background-color': 'var(--imprint-semantic-pre-background-color)',
                'border': 'var(--imprint-code-border)',
                'padding': 'var(--imprint-pre-padding)',
                'border-radius': 'var(--imprint-pre-border-radius)',
                'overflow-x': 'auto',
                'white-space': 'pre-wrap',
                'word-wrap': 'break-word',
            },
            '.imprint-code': {
                'font-family': 'var(--imprint-font-monospace)',
                'font-size': 'var(--imprint-inline-mono-size)',
                'padding': 'var(--imprint-code-padding)',
                'background-color': 'var(--imprint-semantic-code-background-color)',
                'color': 'var(--imprint-semantic-code-color)',
                'border-radius': 'var(--imprint-code-border-radius)',
                'overflow-wrap': 'break-word',
                'white-space': 'pre-wrap',
                'hyphens': 'none',
            },
        },
        baseStyles: {
            'code, pre, samp, tt': {
                'font-family': 'var(--imprint-font-monospace)',
            },

            ':not(pre) > code, tt': {
                'font-size': 'var(--imprint-inline-mono-size)',
                'padding': 'var(--imprint-code-padding)',
                'background-color': 'var(--imprint-semantic-code-background-color)',
                'color': 'var(--imprint-semantic-code-color)',
                'border-radius': 'var(--imprint-code-border-radius)',
                'overflow-wrap': 'break-word',
                'white-space': 'pre-wrap',
                'hyphens': 'none',
            },

            'samp': {
                'font-size': 'var(--imprint-inline-mono-size)',
                'padding': 'var(--imprint-samp-padding)',
                'background-color': 'var(--imprint-samp-background-color)',
                'color': 'var(--imprint-semantic-samp-color)',
                'border': 'var(--imprint-code-border)',
                'border-radius': 'var(--imprint-samp-border-radius)',
                'overflow-wrap': 'break-word',
                'hyphens': 'none',
            },

            "pre:not(:has(:not(code)))": {
                '@apply imprint-block-bodycopy': {},
                'font-size': 'var(--imprint-inline-mono-size)',
                'color': 'var(--imprint-semantic-pre-color)',
                'background-color': 'var(--imprint-semantic-pre-background-color)',
                'border': 'var(--imprint-code-border)',
                'padding': 'var(--imprint-pre-padding)',
                'border-radius': 'var(--imprint-pre-border-radius)',
                'overflow-x': 'auto',
                'white-space': 'pre-wrap',
                'word-wrap': 'break-word',
            },

            "pre:has(code)": {
                'font-size': 'var(--imprint-inline-mono-size)',
            },

            ".--shiki-numbered pre > code": {
                ".line:last-child:empty" : {
                    "display": "none",
                },

                "list-style-type": "decimal",
                "padding-left": "var(--imprint-list-indent)",
                "display": "flex",
                "flex-flow": "row wrap",
                "::marker": {
                    "color": "var(--imprint-code-example-line-no-color)",
                },

                ".line": {
                    "list-style-position": "outside",
                    "display": "list-item",
                    "flex-basis": "100%",
                    "flex-grow": "1",
                    "flex-shrink": "0",
                },
            },

            "a code": {
                "color": "inherit",
                "border-bottom": "inherit",
                "padding-bottom": "0px",
                "border-radius": "0",
            },
        },
    }
);

DEFINITION_STORE.addStaticUtility(staticUtility);