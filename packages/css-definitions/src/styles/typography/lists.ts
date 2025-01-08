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

import { newCssVar, newCssVars, newStaticStyle } from "@imprintcss/tailwind-plugin-types";
import { DEFINITION_STORE } from "../../definitionStore/DEFINITION_STORE";

const staticUtility = newStaticStyle(
    "lists",
    {
        vars: newCssVars(
            newCssVar(
                "--imprint-list-indent",
                {
                    value: "2.5em",
                    type: "size",
                    description: "how far the list is indented",
                    valueDescription: "",
                },
            ),
        ),
        utilityStyles: {
            ".imprint-ul": {
                "list-style-type": "disc",
                "padding-left": "var(--imprint-list-indent)",

                li: {
                    "display": "list-item",
                    "list-style-position": "outside",
                    "p + p": {
                        "margin-top": "var(--imprint-prose-spacing)",
                    },
                },
                "li:has(p)": {
                    "margin-bottom": "var(--imprint-prose-spacing)",
                }
            },

            ".imprint-ol": {
                "list-style-type": "decimal",
                "padding-left": "var(--imprint-list-indent)",

                li: {
                    "display": "list-item",
                    "list-style-position": "outside",
                    "p + p": {
                        "margin-top": "var(--imprint-prose-spacing)",
                    },

                    ol: {
                        "list-style-type": "lower-alpha",

                        ol: {
                            "list-style-type": "lower-roman",
                        }
                    }
                },
                "li:has(p)": {
                    "margin-bottom": "var(--imprint-prose-spacing)",
                },
            },
        },
        baseStyles: {
            "ul:not(nav ul)": {
                "@apply imprint-ul": {},
            },

            "ol:not(nav ol)": {
                "@apply imprint-ol": {},
            },

            dl: {
                dt: {
                    "font-weight": "700",
                    "font-style": "italic",
                },

                dd: {
                    "padding-left": "var(--imprint-list-indent)",
                },
            },
        },
    }
);

DEFINITION_STORE.addStaticStyle(staticUtility);