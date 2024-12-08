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
import { newStaticComponent } from "../../types/StaticComponent/newStaticComponent";

const staticComponent = newStaticComponent(
    "callout",
    {
        vars: newCssVars(
            newCssVar(
                "--imprint-callout-border-width",
                {
                    value: "4px",
                    type: "size",
                    description: "default border width for the callout",
                    valueDescription: "",
                },
            ),
            newCssVar(
                "--imprint-callout-background-color",
                {
                    value: "inherit",
                    type: "color",
                    description: "background color for the callout",
                    valueDescription: "inherit",
                },
            ),
            newCssVar(
                "--imprint-callout-color",
                {
                    value: "inherit",
                    type: "color",
                    description: "text color for the callout",
                    valueDescription: "inherit",
                },
            ),
        ),
        styles: {
            ".imprint-callout": {
                "background-color": "var(--imprint-semantic-background-color)",
                "color": "var(--imprint-callout-color)",
                "border-left": "var(--imprint-callout-border-width) solid var(--imprint-semantic-border-outer-color)",
            },
            ".imprint-callout.--subtle": {
                "--imprint-callout-border-width": "2px",
            },
        },
        baseStyles: {},
    }
);

DEFINITION_STORE.addStaticComponent(staticComponent);