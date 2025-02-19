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
            value: colorFromCollection("imprint-shadedgray"),
            type: "color",
            description: "background color for content blocks when --shaded applied",
            valueDescription: "imprint-shadedgray",
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
            value: colorFromCollection("imprint-fgt-alt"),
            type: "color",
            description: "border / underline color for HTML links",
            valueDescription: "imprint-fgt-alt",
        },
    ),
    newCssVar(
        "--imprint-semantic-link-visited-color",
        {
            value: colorFromCollection("imprint-activeblue"),
            type: "color",
            description: "text color for visited HTML links",
            valueDescription: "imprint-activeblue",
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
            value: colorFromCollection("imprint-activered"),
            type: "color",
            description: "text color for HTML links when hovering over them",
            valueDescription: "imprint-activered",
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
            value: colorFromCollection("imprint-activered"),
            type: "color",
            description: "border / underline color for HTML links when hovering over them",
            valueDescription: "imprint-activered",
        },
    ),
    newCssVar(
        "--imprint-semantic-link-active-color",
        {
            value: colorFromCollection("imprint-activered"),
            type: "color",
            description: "text color for HTML links when clicking on them",
            valueDescription: "imprint-activered",
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
            value: colorFromCollection("imprint-activered"),
            type: "color",
            description: "border / underline color for HTML links when clicking on them",
            valueDescription: "imprint-activered",
        },
    ),
    newCssVar(
        "--imprint-semantic-code-background-color",
        {
            value: colorFromCollection("imprint-shadedred"),
            type: "color",
            description: "background color for code elements",
            valueDescription: "imprint-shadedred",
        },
    ),
    newCssVar(
        "--imprint-semantic-code-color",
        {
            value: colorFromCollection("imprint-red"),
            type: "color",
            description: "text color for code elements",
            valueDescription: "imprint-red",
        },
    ),
    newCssVar(
        "--imprint-semantic-code-border-color",
        {
            value: colorFromCollection("imprint-inversion"),
            type: "color",
            description: "border / outline color for code elements",
            valueDescription: "imprint-inversion",
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
            value: colorFromCollection("imprint-shadedgray"),
            type: "color",
            description: "background color for pre elements",
            valueDescription: "imprint-shadedgray",
        },
    ),
    newCssVar(
        "--imprint-semantic-pre-border-color",
        {
            value: colorFromCollection("imprint-inversion"),
            type: "color",
            description: "border / outline color for pre elements",
            valueDescription: "imprint-inversion",
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
            value: colorFromCollection("imprint-shadedred"),
            type: "color",
            description: "background color for samp elements",
            valueDescription: "imprint-shadedred",
        },
    ),
    newCssVar(
        "--imprint-semantic-code-example-line-no-color",
        {
            value: colorFromCollection("imprint-fgt-alt"),
            type: "color",
            description: "text color for line numbers in code example blocks",
            valueDescription: "imprint-fgt-alt",
        },
    ),
    newCssVar(
        "--imprint-semantic-box-shadow-color",
        {
            value: colorFromCollection("imprint-ghost"),
            // value: "black",
            type: "color",
            description: "color for box shadow effects",
            valueDescription: "imprint-ghost",
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
            value: colorFromCollection("imprint-neutral"),
            type: "color",
            description: "inner border color for tables and featured blocks",
            valueDescription: "imprint-neutral",
        },
    ),
    newCssVar(
        "--imprint-semantic-stripe-background-color",
        {
            value: colorFromCollection("imprint-shadedgray"),
            type: "color",
            description: "background color for striped data blocks",
            valueDescription: "imprint-shadedgray",
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
            contentColor: "var(--imprint-color)",
            shadedBackgroundColor: colorFromCollection("imprint-shadedprimary"),
            headingBackgroundColor: colorFromCollection("imprint-primary"),
            headingColor: "white",
            borderInnerColor: colorFromCollection("imprint-accentprimary"),
            shadedContentColor: "var(--imprint-color)",
        },
    ),
    newSemanticSetting(
        "secondary",
        {
            contentBackgroundColor: "var(--imprint-background-color)",
            contentColor: "var(--imprint-color)",
            shadedBackgroundColor: colorFromCollection("imprint-shadedsecondary"),
            headingBackgroundColor: colorFromCollection("imprint-secondary"),
            headingColor: "var(--imprint-color)",
            borderInnerColor: colorFromCollection("imprint-accentsecondary"),
            shadedContentColor: "var(--imprint-color)",
        },
    ),
    newSemanticSetting(
        "info",
        {
            contentBackgroundColor: "var(--imprint-background-color)",
            contentColor: "var(--imprint-color)",
            shadedBackgroundColor: colorFromCollection("imprint-shadedblue"),
            headingBackgroundColor: colorFromCollection("imprint-blue"),
            headingColor: "white",
            borderInnerColor: colorFromCollection("imprint-accentblue"),
            shadedContentColor: "var(--imprint-color)",
        },
    ),
    newSemanticSetting(
        "success",
        {
            contentBackgroundColor: "var(--imprint-background-color)",
            contentColor: "var(--imprint-color)",
            shadedBackgroundColor: colorFromCollection("imprint-shadedgreen"),
            headingBackgroundColor: colorFromCollection("imprint-green"),
            headingColor: "white",
            borderInnerColor: colorFromCollection("imprint-accentgreen"),
            shadedContentColor: "var(--imprint-color)",
        },
    ),
    newSemanticSetting(
        "warning",
        {
            contentBackgroundColor: "var(--imprint-background-color)",
            contentColor: "var(--imprint-color)",
            shadedBackgroundColor: colorFromCollection("imprint-shadedyellow"),
            headingBackgroundColor: colorFromCollection("imprint-yellow"),
            headingColor: colorFromCollection("imprint-nero"),
            borderInnerColor: colorFromCollection("imprint-accentyellow"),
            shadedContentColor: "var(--imprint-color)",
        },
    ),
    newSemanticSetting(
        "danger",
        {
            contentBackgroundColor: "var(--imprint-background-color)",
            contentColor: "var(--imprint-color)",
            shadedBackgroundColor: colorFromCollection("imprint-shadedred"),
            headingBackgroundColor: colorFromCollection("imprint-red"),
            headingColor: "white",
            borderInnerColor: colorFromCollection("imprint-accentred"),
            shadedContentColor: "var(--imprint-color)",
        },
    ),
    newSemanticSetting(
        "faded",
        {
            contentBackgroundColor: "var(--imprint-background-color)",
            contentColor: colorFromCollection("imprint-neutral"),
            headingBackgroundColor: colorFromCollection("imprint-shadedgray"),
            headingColor: colorFromCollection("imprint-neutral"),
            shadedBackgroundColor: rgb(colorFromCollection("imprint-shadedgray"), "0.20"),
            borderInnerColor: colorFromCollection("imprint-shadedgray"),
            shadedContentColor: colorFromCollection("imprint-neutral"),
            boxShadowColor: semanticVars["--imprint-semantic-box-shadow-color"].value,
        },
    ),
    newSemanticSetting(
        "disabled",
        {
            contentBackgroundColor: "var(--imprint-background-color)",
            contentColor: colorFromCollection("imprint-neutral"),
            headingBackgroundColor: colorFromCollection("imprint-neutral"),
            headingColor: colorFromCollection("imprint-shadedgray"),
            shadedBackgroundColor: rgb(colorFromCollection("imprint-shadedgray"), "0.40"),
            shadedContentColor: colorFromCollection("imprint-neutral"),
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