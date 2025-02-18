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

import _ from "lodash";

import { HashMap } from "@safelytyped/core-types";
import { newCssVars, newCssVar, newStaticStyle } from "@imprintcss/tailwind-plugin-types";
import { newSemanticSetting } from "../types/SemanticSetting/newSemanticSetting";
import { newSemanticSettings } from "../types/SemanticSettings/newSemanticSettings";
import { DEFINITION_STORE } from "../definitionStore/DEFINITION_STORE";
import { rgb } from "../helpers/rgb";
import { colorFromCollection } from "@imprintcss/color-collections";

const semanticVars = newCssVars(
    newCssVar(
        "--imprint-color",
        {
            value: colorFromCollection("imprint-nero"),
            type: "color",
            description: "default color for text",
            valueDescription: "imprint-nero",
        },
    ),
    newCssVar(
        "--imprint-background-color",
        {
            value: "white",
            type: "color",
            description: "default background color for the page",
            valueDescription: "white",
        },
    ),
    newCssVar(
        "--imprint-semantic-content-background-color",
        {
            value: "var(--imprint-background-color)",
            type: "color",
            description: "background color for content blocks",
            valueDescription: "--imprint-background-color",
        },
    ),
    newCssVar(
        "--imprint-semantic-content-color",
        {
            value: "var(--imprint-color)",
            type: "color",
            description: "text color for content",
            valueDescription: "--imprint-color",
        },
    ),
    newCssVar(
        "--imprint-semantic-shaded-background-color",
        {
            value: colorFromCollection("imprint-palegray"),
            type: "color",
            description: "background color for content blocks when --shaded applied",
            valueDescription: "imprint-palegray",
        },
    ),
    newCssVar(
        "--imprint-semantic-shaded-color",
        {
            value: "var(--imprint-color)",
            type: "color",
            description: "text color for content blocks when --shaded applied",
            valueDescription: "--imprint-color",
        },
    ),
    newCssVar(
        "--imprint-semantic-heading-background-color",
        {
            value: "var(--imprint-color)",
            type: "color",
            description: "background color for headings",
            valueDescription: "--imprint-color",
        },
    ),
    newCssVar(
        "--imprint-semantic-heading-color",
        {
            value: "var(--imprint-background-color)",
            type: "color",
            description: "text color for headings",
            valueDescription: "--imprint-background-color",
        },
    ),
    newCssVar(
        "--imprint-semantic-link-color",
        {
            value: colorFromCollection("imprint-blue"),
            type: "color",
            description: "text color for HTML links",
            valueDescription: "imprint-blue",
        },
    ),
    newCssVar(
        "--imprint-semantic-link-background-color",
        {
            value: "inherit",
            type: "color",
            description: "background color for HTML links",
            valueDescription: "inherit",
        },
    ),
    newCssVar(
        "--imprint-semantic-link-border-color",
        {
            value: colorFromCollection("imprint-gray"),
            type: "color",
            description: "border / underlinke color for HTML links",
            valueDescription: "imprint-gray",
        },
    ),
    newCssVar(
        "--imprint-semantic-link-visited-color",
        {
            value: colorFromCollection("imprint-darkblue"),
            type: "color",
            description: "text color for visited HTML links",
            valueDescription: "imprint-darkblue",
        },
    ),
    newCssVar(
        "--imprint-semantic-link-visited-background-color",
        {
            value: "inherit",
            type: "color",
            description: "background color for visited HTML links",
            valueDescription: "inherit",
        },
    ),
    newCssVar(
        "--imprint-semantic-link-visited-border-color",
        {
            value: "var(--imprint-link-border)",
            type: "color",
            description: "border / underline color for visited HTML links",
            valueDescription: "--imprint-link-border",
        },
    ),

    newCssVar(
        "--imprint-semantic-link-hover-color",
        {
            value: colorFromCollection("ganbaro-red-800"),
            type: "color",
            description: "text color for HTML links when hovering over them",
            valueDescription: "ganbaro-red-800",
        },
    ),
    newCssVar(
        "--imprint-semantic-link-hover-background-color",
        {
            value: "inherit",
            type: "color",
            description: "background color for HTML links when hovering over them",
            valueDescription: "inherit",
        },
    ),
    newCssVar(
        "--imprint-semantic-link-hover-border-color",
        {
            value: colorFromCollection("ganbaro-red-800"),
            type: "color",
            description: "border / underline color for HTML links when hovering over them",
            valueDescription: "ganbaro-red-800",
        },
    ),
    newCssVar(
        "--imprint-semantic-link-active-color",
        {
            value: colorFromCollection("ganbaro-red-800"),
            type: "color",
            description: "text color for HTML links when clicking on them",
            valueDescription: "ganbaro-red-800",
        },
    ),
    newCssVar(
        "--imprint-semantic-link-active-background-color",
        {
            value: "inherit",
            type: "color",
            description: "background color for HTML links when clicking on them",
            valueDescription: "inherit",
        },
    ),
    newCssVar(
        "--imprint-semantic-link-active-border-color",
        {
            value: colorFromCollection("ganbaro-red-800"),
            type: "color",
            description: "border / underline color for HTML links when clicking on them",
            valueDescription: "ganbaro-red-800",
        },
    ),
    newCssVar(
        "--imprint-semantic-code-background-color",
        {
            value: colorFromCollection("imprint-palered"),
            type: "color",
            description: "background color for code elements",
            valueDescription: "imprint-palered",
        },
    ),
    newCssVar(
        "--imprint-semantic-code-color",
        {
            value: colorFromCollection("ganbaro-red-800"),
            type: "color",
            description: "text color for code elements",
            valueDescription: "ganbaro-red-800",
        },
    ),
    newCssVar(
        "--imprint-semantic-code-border-color",
        {
            value: colorFromCollection("imprint-lightgray"),
            type: "color",
            description: "border / outline color for code elements",
            valueDescription: "imprint-lightgray",
        },
    ),

    newCssVar(
        "--imprint-semantic-pre-color",
        {
            value: colorFromCollection("imprint-nero"),
            type: "color",
            description: "text color for pre elements",
            valueDescription: "imprint-nero",
        },
    ),
    newCssVar(
        "--imprint-semantic-pre-background-color",
        {
            value: colorFromCollection("imprint-palegray"),
            type: "color",
            description: "background color for pre elements",
            valueDescription: "imprint-palegray",
        },
    ),
    newCssVar(
        "--imprint-semantic-pre-border-color",
        {
            value: colorFromCollection("imprint-lightgray"),
            type: "color",
            description: "border / outline color for pre elements",
            valueDescription: "imprint-lightgray",
        },
    ),
    newCssVar(
        "--imprint-semantic-samp-color",
        {
            value: "inherit",
            type: "color",
            description: "text color for samp elements",
            valueDescription: "inherit",
        },
    ),
    newCssVar(
        "--imprint-semantic-samp-background-color",
        {
            value: colorFromCollection("imprint-palered"),
            type: "color",
            description: "background color for samp elements",
            valueDescription: "imprint-palered",
        },
    ),
    newCssVar(
        "--imprint-semantic-code-example-line-no-color",
        {
            value: colorFromCollection("imprint-gray"),
            type: "color",
            description: "text color for line numbers in code example blocks",
            valueDescription: "--imprint-gray",
        },
    ),
    newCssVar(
        "--imprint-semantic-box-shadow-color",
        {
            value: rgb(colorFromCollection("imprint-gray"), "0.90"),
            // value: "black",
            type: "color",
            description: "color for box shadow effects",
            valueDescription: "rgb(imprint-palegray / 0.90)",
        },
    ),
    newCssVar(
        "--imprint-semantic-border-outer-color",
        {
            value: colorFromCollection("imprint-nero"),
            type: "color",
            description: "outer border color for tables and featured blocks",
            valueDescription: "imprint-nero",
        },
    ),
    newCssVar(
        "--imprint-semantic-border-inner-color",
        {
            value: colorFromCollection("imprint-gray"),
            type: "color",
            description: "inner border color for tables and featured blocks",
            valueDescription: "imprint-gray",
        },
    ),
    newCssVar(
        "--imprint-semantic-stripe-background-color",
        {
            value: colorFromCollection("imprint-palegray"),
            type: "color",
            description: "background color for striped data blocks",
            valueDescription: "imprint-palegray",
        },
    ),
    newCssVar(
        "--imprint-semantic-stripe-color",
        {
            value: colorFromCollection("imprint-nero"),
            type: "color",
            description: "text color for striped data blocks",
            valueDescription: "imprint-nero",
        },
    ),
);

const semanticThemes = newSemanticSettings(
    // special case - `default` exists for when we want to override other
    // semantic schemes with the original colours
    newSemanticSetting(
        "default",
        {
            contentBackgroundColor: semanticVars["--imprint-semantic-content-background-color"].value,
            contentColor: semanticVars["--imprint-semantic-content-color"].value,
            shadedBackgroundColor: semanticVars["--imprint-semantic-shaded-background-color"].value,
            shadedContentColor: semanticVars["--imprint-semantic-shaded-color"].value,
            headingBackgroundColor: semanticVars["--imprint-semantic-heading-background-color"].value,
            headingColor: semanticVars["--imprint-semantic-heading-color"].value,

            linkColor: semanticVars["--imprint-semantic-link-color"].value,
            linkBackgroundColor: semanticVars["--imprint-semantic-link-background-color"].value,
            linkBorderColor: semanticVars["--imprint-semantic-link-border-color"].value,

            linkVisitedColor: semanticVars["--imprint-semantic-link-visited-color"].value,
            linkVisitedBackgroundColor: semanticVars["--imprint-semantic-link-visited-background-color"].value,
            linkVisitedBorderColor: semanticVars["--imprint-semantic-link-visited-border-color"].value,

            linkHoverColor: semanticVars["--imprint-semantic-link-hover-color"].value,
            linkHoverBackgroundColor: semanticVars["--imprint-semantic-link-hover-background-color"].value,
            linkHoverBorderColor: semanticVars["--imprint-semantic-link-hover-border-color"].value,

            linkActiveColor: semanticVars["--imprint-semantic-link-active-color"].value,
            linkActiveBackgroundColor: semanticVars["--imprint-semantic-link-active-background-color"].value,
            linkActiveBorderColor: semanticVars["--imprint-semantic-link-active-border-color"].value,

            codeBackgroundColor: semanticVars["--imprint-semantic-code-background-color"].value,
            codeColor: semanticVars["--imprint-semantic-code-color"].value,
            codeBorderColor: semanticVars["--imprint-semantic-code-border-color"].value,

            preColor: semanticVars["--imprint-semantic-pre-color"].value,
            preBackgroundColor: semanticVars["--imprint-semantic-pre-background-color"].value,

            sampColor: semanticVars["--imprint-semantic-samp-color"].value,
            sampBackgroundColor: semanticVars["--imprint-semantic-samp-background-color"].value,

            codeExampleLineNoColor: semanticVars["--imprint-semantic-code-example-line-no-color"].value,
            boxShadowColor: semanticVars["--imprint-semantic-box-shadow-color"].value,
            borderOuterColor: semanticVars["--imprint-semantic-border-outer-color"].value,
            borderInnerColor: semanticVars["--imprint-semantic-border-inner-color"].value,
            stripeBackgroundColor: semanticVars["--imprint-semantic-stripe-background-color"].value,
            stripeColor: semanticVars["--imprint-semantic-stripe-color"].value,
        },
    ),
    newSemanticSetting(
        "primary",
        {
            contentBackgroundColor: "var(--imprint-background-color)",
            contentColor: colorFromCollection("imprint-nero"),
            shadedBackgroundColor: colorFromCollection("imprint-paleblue"),
            headingBackgroundColor: colorFromCollection("imprint-primary"),
            headingColor: "white",
            borderInnerColor: colorFromCollection("imprint-brightblue"),
            shadedContentColor: "var(--imprint-color)",
        },
    ),
    newSemanticSetting(
        "secondary",
        {
            contentBackgroundColor: "var(--imprint-background-color)",
            contentColor: colorFromCollection("imprint-nero"),
            shadedBackgroundColor: rgb(colorFromCollection("ganbaro-green-50"), "0.3"),
            headingBackgroundColor: colorFromCollection("ganbaro-green"),
            headingColor: colorFromCollection("imprint-nero"),
            borderInnerColor: colorFromCollection("ganbaro-green-200"),
            shadedContentColor: colorFromCollection("ganbaro-green-400"),
        },
    ),
    newSemanticSetting(
        "info",
        {
            contentBackgroundColor: "var(--imprint-background-color)",
            contentColor: "var(--imprint-color)",
            shadedBackgroundColor: colorFromCollection("imprint-paleblue"),
            headingBackgroundColor: colorFromCollection("imprint-blue"),
            headingColor: "white",
            borderInnerColor: colorFromCollection("imprint-brightblue"),
            shadedContentColor: "var(--imprint-color)",
        },
    ),
    newSemanticSetting(
        "success",
        {
            contentBackgroundColor: "var(--imprint-background-color)",
            contentColor: "var(--imprint-color)",
            shadedBackgroundColor: colorFromCollection("imprint-palegreen"),
            headingBackgroundColor: colorFromCollection("ganbaro-green-900"),
            headingColor: "white",
            shadedContentColor: colorFromCollection("ganbaro-green-400"),
        },
    ),
    newSemanticSetting(
        "warning",
        {
            contentBackgroundColor: "var(--imprint-background-color)",
            contentColor: "var(--imprint-color)",
            shadedBackgroundColor: colorFromCollection("imprint-paleyellow"),
            headingBackgroundColor: colorFromCollection("imprint-yellow"),
            headingColor: colorFromCollection("imprint-nero"),
            shadedContentColor: colorFromCollection("ganbaro-yellow-100"),
        },
    ),
    newSemanticSetting(
        "danger",
        {
            contentBackgroundColor: "var(--imprint-background-color)",
            contentColor: "var(--imprint-color)",
            shadedBackgroundColor: colorFromCollection("imprint-lightred"),
            headingBackgroundColor: colorFromCollection("imprint-red"),
            headingColor: "white",
            shadedContentColor: colorFromCollection("imprint-lightred"),
        },
    ),
    newSemanticSetting(
        "faded",
        {
            contentBackgroundColor: "var(--imprint-background-color)",
            contentColor: colorFromCollection("imprint-gray"),
            headingBackgroundColor: colorFromCollection("imprint-palegray"),
            headingColor: colorFromCollection("imprint-gray"),
            shadedBackgroundColor: rgb(colorFromCollection("imprint-palegray"), "0.20"),
            shadedContentColor: colorFromCollection("imprint-gray"),
            boxShadowColor: semanticVars["--imprint-semantic-box-shadow-color"].value,
        },
    ),
    newSemanticSetting(
        "disabled",
        {
            contentBackgroundColor: "var(--imprint-background-color)",
            contentColor: colorFromCollection("imprint-gray"),
            headingBackgroundColor: colorFromCollection("imprint-gray"),
            headingColor: colorFromCollection("imprint-palegray"),
            shadedBackgroundColor: rgb(colorFromCollection("imprint-palegray"), "0.40"),
            shadedContentColor: colorFromCollection("imprint-gray"),
        },
    ),
);


const staticStyle = newStaticStyle(
    "semantic-modifiers",
    {
        vars: semanticVars,
    }
);

// build the styles from our semantic settings
HashMap.forEach(
    semanticThemes,
    function (semanticTheme, semanticType) {
        // what is the style that we are building?
        const targetStyle = ".--imprint-" + semanticType;
        staticStyle.utilityStyles[targetStyle] = {};

        // what are its CSS properties?
        HashMap.forEach(
            HashMap.omit(semanticTheme, ["name"]),
            function(value, key) {
                const kebabKey = "--imprint-semantic-" + _.kebabCase(key);
                staticStyle.utilityStyles[targetStyle][kebabKey] = value;
            }
        );
    }
);

DEFINITION_STORE.addStaticStyle(staticStyle);