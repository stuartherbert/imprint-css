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

import { newStaticStyle } from "@imprintcss/tailwind-plugin-types";
import { DEFINITION_STORE } from "../../definitionStore/DEFINITION_STORE";

const staticStyle = newStaticStyle(
    "panel",
    {
        componentStyles: {
            ".imprint-panel": {
                "background-color": "var(--imprint-semantic-content-background-color)",
                "color": "var(--imprint-semantic-content-color)",
                // "background-color": "var(--background-color)",
                // "color": "var(--color)",

                "border-width": "var(--imprint-panel-border-width)",
                "border-style": "solid",
                "border-color": "var(--imprint-semantic-border-outer-color)",
                "@apply rounded overflow-hidden": {},
            },
            ".imprint-panel.--subtle": {
                "--imprint-panel-border-width": "var(--imprint-border-inner-width)",
            },
            // ".imprint-panel.--primary": {
            //     "--imprint-panel-border-color": "var(--imprint-primary-heading-background-color)",
            // },
            // ".imprint-panel.--secondary": {
            //     "--imprint-panel-border-color": "var(--imprint-secondary-heading-background-color)",
            // },
            // ".imprint-panel.--info": {
            //     "--imprint-panel-border-color": "var(--imprint-info-heading-background-color)",
            // },
            // ".imprint-panel.--success": {
            //     "--imprint-panel-border-color": "var(--imprint-success-heading-background-color)",
            // },
            // ".imprint-panel.--warning": {
            //     "--imprint-panel-border-color": "var(--imprint-warning-heading-background-color)",
            // },
            // ".imprint-panel.--danger": {
            //     "--imprint-panel-border-color": "var(--imprint-danger-heading-background-color)",
            // },

            // ".imprint-panel.--disabled": {
            //     "--imprint-panel-border-color": "var(--imprint-disabled-heading-background-color)",
            //     "--imprint-panel-color": "var(--imprint-disabled-content-color)",
            // },
            // ".imprint-panel.--faded": {
            //     "--imprint-panel-border-color": "var(--imprint-faded-heading-background-color)",
            //     "--imprint-panel-color": "var(--imprint-faded-content-color)",
            // },
        },
    },
);

DEFINITION_STORE.addStaticStyle(staticStyle);