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

const { colors } = require("../colors/colors");
const { rgb } = require("../helpers/colors");
const _ = require("lodash");

const definitionStore = require('../helpers/definitionStore.js');
const { objectMap } = require("../helpers/objectMap.js");

/** @type {import('../../types/index.js').CssVars} */
const semanticVars = {
    "--imprint-color": {
        name: "--imprint-color",
        value: colors['imprint-nero'],
        type: "color",
        description: "default color for text",
        valueDescription: "imprint-nero",
    },
    "--imprint-background-color": {
        name: "--imprint-background-color",
        value: colors['white'],
        type: "color",
        description: "default background color for the page",
        valueDescription: "white",
    },

    "--imprint-semantic-content-background-color": {
        name: "--imprint-semantic-content-background-color",
        value: "var(--imprint-background-color)",
        type: "color",
        description: "background color for content blocks",
        valueDescription: "--imprint-background-color",
    },
    "--imprint-semantic-content-color": {
        name: "--imprint-semantic-content-color",
        value: "var(--imprint-color)",
        type: "color",
        description: "text color for content",
        valueDescription: "--imprint-color",
    },
    "--imprint-semantic-shaded-background-color": {
        name: "--imprint-semantic-shaded-background-color",
        value: rgb(colors['imprint-palegray'], '0.66'),
        type: "color",
        description: "background color for content blocks when --shaded applied",
        valueDescription: "rgb(imprint-palegray / 0.66)",
    },
    "--imprint-semantic-shaded-color": {
        name: "--imprint-semantic-shaded-color",
        value: "var(--imprint-color)",
        type: "color",
        description: "text color for content blocks when --shaded applied",
        valueDescription: "--imprint-color",
    },
    "--imprint-semantic-heading-background-color": {
        name: "--imprint-semantic-heading-background-color",
        value: "var(--imprint-color)",
        type: "color",
        description: "background color for headings",
        valueDescription: "--imprint-color",
    },
    "--imprint-semantic-heading-accent-color": {
        name: "--imprint-semantic-heading-accent-color",
        value: "var(--imprint-color)",
        type: "color",
        description: "border color to use for headings",
        valueDescription: "--imprint-color",
    },
    "--imprint-semantic-heading-color": {
        name: "--imprint-semantic-heading-color",
        value: "var(--imprint-background-color)",
        type: "color",
        description: "text color for headings",
        valueDescription: "--imprint-background-color",
    },

    "--imprint-semantic-link-color": {
        name: "--imprint-semantic-link-color",
        value: colors['ganbaro-blue']['500'],
        type: "color",
        description: "text color for HTML links",
        valueDescription: "ganbaro-blue-500",
    },
    "--imprint-semantic-link-background-color": {
        name: "--imprint-semantic-link-background-color",
        value: 'inherit',
        type: "color",
        description: "background color for HTML links",
        valueDescription: "inherit",
    },
    "--imprint-semantic-link-border-color": {
        name: "--imprint-semantic-link-border-color",
        value: colors['imprint-gray'],
        type: "color",
        description: "border / underlinke color for HTML links",
        valueDescription: "imprint-gray",
    },

    "--imprint-semantic-link-visited-color": {
        name: "--imprint-semantic-link-visited-color",
        value: colors['ganbaro-blue']['900'],
        type: "color",
        description: "text color for visited HTML links",
        valueDescription: "ganbaro-blue-900",
    },
    "--imprint-semantic-link-visited-background-color": {
        name: "--imprint-semantic-link-visited-background-color",
        value: 'inherit',
        type: "color",
        description: "background color for visited HTML links",
        valueDescription: "inherit",
    },
    "--imprint-semantic-link-visited-border-color": {
        name: "--imprint-semantic-link-visited-border-color",
        value: 'var(--imprint-link-border)',
        type: "color",
        description: "border / underline color for visited HTML links",
        valueDescription: "--imprint-link-border",
    },

    "--imprint-semantic-link-hover-color": {
        name: "--imprint-semantic-link-hover-color",
        value: colors['ganbaro-red']['500'],
        type: "color",
        description: "text color for HTML links when hovering over them",
        valueDescription: "ganbaro-red-500",
    },

    "--imprint-semantic-link-hover-background-color": {
        name: "--imprint-semantic-link-hover-background-color",
        value: 'inherit',
        type: "color",
        description: "background color for HTML links when hovering over them",
        valueDescription: "inherit",
    },
    "--imprint-semantic-link-hover-border-color": {
        name: "--imprint-semantic-link-hover-border-color",
        value: colors['ganbaro-red']['500'],
        type: "color",
        description: "border / underline color for HTML links when hovering over them",
        valueDescription: "ganbaro-red-500",
    },

    "--imprint-semantic-link-active-color": {
        name: "--imprint-semantic-link-active-color",
        value: colors['ganbaro-red']['500'],
        type: "color",
        description: "text color for HTML links when clicking on them",
        valueDescription: "ganbaro-red-500",
    },
    "--imprint-semantic-link-active-background-color": {
        name: "--imprint-semantic-link-active-background-color",
        value: 'inherit',
        type: "color",
        description: "background color for HTML links when clicking on them",
        valueDescription: "inherit",
    },
    "--imprint-semantic-link-active-border-color": {
        name: "--imprint-semantic-link-active-border-color",
        value: colors['ganbaro-red']['500'],
        type: "color",
        description: "border / underline color for HTML links when clicking on them",
        valueDescription: "ganbaro-red-500",
    },

    "--imprint-semantic-code-background-color": {
        name: "--imprint-semantic-code-background-color",
        value: rgb(colors['imprint-palered'], '1'),
        type: "color",
        description: "background color for code elements",
        valueDescription: "imprint-palered",
    },
    "--imprint-semantic-code-color": {
        name: "--imprint-semantic-code-color",
        value: colors['ganbaro-red']['500'],
        type: "color",
        description: "text color for code elements",
        valueDescription: "ganbaro-red-500",
    },
    "--imprint-semantic-code-border-color": {
        name: "--imprint-semantic-code-border-color",
        value: colors['imprint-lightgray'],
        type: "color",
        description: "border / outline color for code elements",
        valueDescription: "imprint-lightgray",
    },

    "--imprint-semantic-pre-color": {
        name: "--imprint-semantic-pre-color",
        value: colors['imprint-nero'],
        type: "color",
        description: "text color for pre elements",
        valueDescription: "imprint-nero",
    },
    "--imprint-semantic-pre-background-color": {
        name: "--imprint-semantic-pre-background-color",
        value: "var(--imprint-default-shaded-background-color)",
        type: "color",
        description: "background color for pre elements",
        valueDescription: "--imprint-shaded-background-color",
    },
    "--imprint-semantic-pre-border-color": {
        name: "--imprint-semantic-pre-border-color",
        value: colors['imprint-lightgray'],
        type: "color",
        description: "border / outline color for pre elements",
        valueDescription: "imprint-lightgray",
    },

    "--imprint-semantic-samp-color": {
        name: "--imprint-semantic-samp-color",
        value: 'inherit',
        type: "color",
        description: "text color for samp elements",
        valueDescription: "inherit",
    },
    "--imprint-semantic-samp-background-color": {
        name: "--imprint-semantic-samp-background-color",
        value: rgb(colors['imprint-palered'], '0.66'),
        type: "color",
        description: "background color for samp elements",
        valueDescription: "help!",
    },

    "--imprint-semantic-code-example-line-no-color": {
        name: "--imprint-semantic-code-example-line-no-color",
        value: colors['imprint-gray'],
        type: "color",
        description: "text color for line numbers in code example blocks",
        valueDescription: "--imprint-gray",
    },

    "--imprint-semantic-box-shadow-color": {
        name: "--imprint-semantic-box-shadow-color",
        value: rgb(colors['imprint-gray'], "0.90"),
        // value: "black",
        type: "color",
        description: "color for box shadow effects",
        valueDescription: "rgb(imprint-palegray / 0.90)",
    },

    "--imprint-semantic-border-outer-color": {
        name: "--imprint-semantic-border-outer-color",
        value: colors['imprint-nero'],
        type: "color",
        description: "outer border color for tables and featured blocks",
        valueDescription: "imprint-nero",
    },
    "--imprint-semantic-border-inner-color": {
        name: "--imprint-semantic-border-inner-color",
        value: colors['imprint-gray'],
        type: "color",
        description: "inner border color for tables and featured blocks",
        valueDescription: "imprint-gray",
    },
    "--imprint-semantic-stripe-background-color": {
        name: "--imprint-semantic-stripe-background-color",
        value: colors['imprint-palegray'],
        type: "color",
        description: "background color for striped data blocks",
        valueDescription: "imprint-palegray",
    },
    "--imprint-semantic-stripe-color": {
        name: "--imprint-semantic-stripe-color",
        value: colors['imprint-nero'],
        type: "color",
        description: "text color for striped data blocks",
        valueDescription: "imprint-nero",
    },
}

/** @type {import('../../types/index.js').SemanticSettings} */
const semanticThemes = {
    // special case - `default` exists for when we want to override other
    // semantic schemes with the original colours
    "default": {
        name: "default",
        contentBackgroundColor: semanticVars["--imprint-semantic-content-background-color"].value,
        contentColor: semanticVars["--imprint-semantic-content-color"].value,
        shadedBackgroundColor: semanticVars["--imprint-semantic-shaded-background-color"].value,
        headingBackgroundColor: semanticVars["--imprint-semantic-heading-background-color"].value,
        headingAccentColor: semanticVars["--imprint-semantic-heading-accent-color"].value,
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
    "primary": {
        name: "primary",
        contentBackgroundColor: "var(--imprint-background-color)",
        contentColor: colors['imprint-nero'],
        shadedBackgroundColor: rgb(colors['ganbaro-blue'][50], 0.2),
        headingBackgroundColor: colors['ganbaro-blue'][500],
        headingAccentColor: colors['ganbaro-blue'][600],
        headingColor: colors["white"],
        borderInnerColor: colors['ganbaro-blue'][200],
    },
    "secondary": {
        name: "secondary",
        contentBackgroundColor: "var(--imprint-background-color)",
        contentColor: colors['imprint-nero'],
        shadedBackgroundColor: rgb(colors['ganbaro-green'][50], 0.3),
        headingBackgroundColor: colors['ganbaro-green'][500],
        headingAccentColor: colors['ganbaro-green'][600],
        headingColor: colors['imprint-nero'],
        borderInnerColor: colors['ganbaro-green'][200],
    },
    "info": {
        name: "info",
        contentBackgroundColor: "var(--imprint-background-color)",
        contentColor: "var(--imprint-color)",
        shadedBackgroundColor: colors['imprint-paleblue'],
        headingBackgroundColor: colors['imprint-darkblue'],
        headingAccentColor: rgb(colors['imprint-darkblue'], 1),
        headingColor: colors['white'],
        borderInnerColor: colors['ganbaro-blue'][300],
    },

    "success": {
        name: "success",
        contentBackgroundColor: "var(--imprint-background-color)",
        contentColor: "var(--imprint-color)",
        shadedBackgroundColor: colors['imprint-palegreen'],
        headingBackgroundColor: colors['ganbaro-green'][900],
        headingAccentColor: colors['ganbaro-green'][700],
        headingColor: colors['white'],
    },
    "warning": {
        name: "warning",
        contentBackgroundColor: "var(--imprint-background-color)",
        contentColor: "var(--imprint-color)",
        shadedBackgroundColor: colors['imprint-paleyellow'],
        headingBackgroundColor: colors['ganbaro-yellow'][900],
        headingAccentColor: colors['ganbaro-yellow'][900],
        headingColor: colors['imprint-nero'],
    },
    "danger": {
        name: "danger",
        contentBackgroundColor: "var(--imprint-background-color)",
        contentColor: "var(--imprint-color)",
        shadedBackgroundColor: colors['imprint-lightred'],
        headingBackgroundColor: colors['ganbaro-red'][900],
        headingAccentColor: colors['ganbaro-red'][600],
        headingColor: colors['white'],
    },
    "faded": {
        name: "faded",
        contentBackgroundColor: "var(--imprint-background-color)",
        contentColor: colors['imprint-gray'],
        headingBackgroundColor: colors['imprint-palegray'],
        headingAccentColor: colors['imprint-palegray'],
        headingColor: colors['imprint-gray'],
        shadedBackgroundColor: rgb(colors['imprint-palegray'], '0.20'),
    },
    "disabled": {
        name: "disabled",
        contentBackgroundColor: "var(--imprint-background-color)",
        contentColor: colors['imprint-gray'],
        headingBackgroundColor: colors['imprint-gray'],
        headingAccentColor: colors['imprint-gray'],
        headingColor: colors['imprint-palegray'],
        shadedBackgroundColor: rgb(colors['imprint-palegray'], '0.40'),
    },
}


// all the allColors list first
definitionStore.addVars(semanticVars, definitionStore.staticUtilities);

const allSemantics = {};

objectMap(
    semanticThemes,
    function (semantics, semanticType) {
        /** @type {import('../../types/index.js').StaticUtility} */
        const settings = {
            styles: {
                ':root': {}
            },
            vars: {},
        }

        // if any of these properties haven't been set, try and give them
        // the same value as another property
        //
        // this reduces the amount of duplication above
        //
        // we don't copy the value across; we set it to a variable, so that
        // changing the parent changes this one too
        const defaults = {
            borderOuterColor: "headingBackgroundColor",
            borderInnerColor: "headingAccentColor",
            shadedContentColor: "contentColor",
            stripeBackgroundColor: "shadedBackgroundColor",
            stripeColor: "shadedContentColor",
        }
        Object.getOwnPropertyNames(defaults).forEach(
            function(key) {
                if (semantics[key] === undefined && semantics[defaults[key]]) {
                    // semantics[key] = "var(--imprint-" + semanticType + "-" + _.kebabCase(defaults[key]) + ")";
                    semantics[key] = semantics[defaults[key]];
                }
            }
        )
        // console.log(semantics);

        const targetStyle = ".--imprint-" + semanticType;
        const objectKeys = Object.getOwnPropertyNames(semantics).filter((key) => key !== "name");

        for (const key of objectKeys) {
            const kebabKey = _.kebabCase(key);

            settings.styles[targetStyle] = {
                ...settings.styles[targetStyle],
                ...{
                    ["--imprint-semantic-" + kebabKey]: semantics[key]
                }
            }
            settings.styles[":root"]["--imprint-" + semanticType + "-" + kebabKey] = semantics[key];
        }
        allSemantics["imprint-" + semanticType] = settings;
        definitionStore.addStaticUtility("imprint-" + semanticType, settings);
    }
);

module.exports = allSemantics;