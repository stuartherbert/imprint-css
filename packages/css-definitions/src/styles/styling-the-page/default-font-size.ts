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
import { ALL_DEVICE_NAMES } from "../../devices/ALL_DEVICE_NAMES";
import { DEVICE_GROUPS } from "../../devices/DEVICE_GROUPS";
import { mediaQuery } from "../../helpers/mediaQuery";

const settings = newStaticStyle(
    "default-font-size",
    {
        vars: newCssVars(
            newCssVar(
                "--imprint-fontsize-root-base",
                {
                    value: "16px",
                    type: "size",
                    description: "default font size for the whole HTML document",
                    valueDescription: "1rem",
                },
            ),
            newCssVar(
                "--imprint-fontsize-root-zoom",
                {
                    value: "0px",
                    type: "size",
                    description: "default font size increase/decrease",
                    valueDescription: ""
                },
            ),
            newCssVar(
                "--imprint-fontsize-root",
                {
                    value: "calc(var(--imprint-fontsize-root-base) + var(--imprint-fontsize-root-zoom))",
                    type: "size",
                    description: "computed value of default font size",
                    valueDescription: "",
                },
            ),
        ),
        utilityStyles: {
            ".imprint-fontsize-root": {
                "font-size": "calc(var(--imprint-fontsize-root-base) + var(--imprint-fontsize-root-zoom))",
            },
        },
    },
);

ALL_DEVICE_NAMES.forEach(
    function(screenName) {
        // do we have a bodyfont size?
        if (DEVICE_GROUPS[screenName].remPx === undefined) {
            return;
        }

        // if we get here, we do
        const varName = "--imprint-fontsize-root-" + screenName;
        settings.vars[varName] = {
            name: varName,
            value: DEVICE_GROUPS[screenName].remPx,
            type: "size",
            description: "default font size for screen " + screenName,
            valueDescription: "1rem on " + screenName,
        };

        settings.utilityStyles[mediaQuery(screenName)] = {
            ":root": {
                "--imprint-fontsize-root-base": "var(" + varName + ")",
            },
        };
    }
);

DEFINITION_STORE.addStaticStyle(settings);
