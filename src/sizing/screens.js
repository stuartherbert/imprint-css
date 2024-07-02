//
// Copyright (c) 2023-present Stuart Herbert
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

// this is the central container that we are populating
const definitionStore = require("../helpers/definitionStore");
const { objectMap } = require("../helpers/objectMap");
const { buildStyleNameForScreen } = require("../helpers/styles");

const SCREEN_DEFINITIONS = {
    "a": {
        theme: { "max": "640px" },
        articleMaxWidth: "100%",
    },
    "a-t": {
        theme: { "raw": "(max-width: 640px) and (hover: none)" },
        description: "mobile phones (mostly in portrait)",
        bodyFontSize: "17px",
    },
    "a-d": {
        theme: { 'raw': "(max-width: 640px) and (hover: hover)" },
        description: "desktops and laptops",
        bodyFontSize: "16px",
    },
    "b": {
        theme: { "min": "641px" },
        articleMaxWidth: "100%",
    },
    "b-t": {
        theme: { "raw": "(min-width: 641px) and (hover: none)" },
        description: "(many) mobile phones in landscape, and small tablets (in portrait)",
        bodyFontSize: "17px",
    },
    "b-d": {
        theme: { 'raw': "(min-width: 641px) and (hover: hover)" },
        description: "desktops and laptops",
        bodyFontSize: "16px",
    },
    "c": {
        theme: { "min": "769px" },
        articleMaxWidth: "100%",
    },
    "c-t": {
        theme: { "raw": "(min-width: 769px) and (hover: none)" },
        description: "regular tablets (in portrait)",
        bodyFontSize: "16px",
    },
    "c-d": {
        theme: { "raw": "(min-width: 641px) and (hover: hover)" },
        description: "desktops and laptops",
        bodyFontSize: "16px",
    },
    "d": {
        theme: { "min": "1025px" },
        articleMaxWidth: "60rem",
    },
    "d-t": {
        theme: { "raw": "(min-width: 1025px) and (hover: none)" },
        description: "large tablets (in portrait) and regular tablets (in landscape)",
        bodyFontSize: "16px",
    },
    "d-d": {
        theme: { "raw": "(min-width: 1025px) and (hover: hover)" },
        description: "desktops and laptops",
        bodyFontSize: "16px",
    },
    "e": {
        theme: { "min": "1280px" },
        articleMaxWidth: "60rem",
    },
    "e-t": {
        theme: { "raw": "(min-width: 1280px) and (hover: none)" },
        description: "large tablets (in landscape)",
        bodyFontSize: "16px",
    },
    "e-d": {
        theme: { "raw": "(min-width: 1280px) and (hover: hover)" },
        description: "desktops and laptops",
        bodyFontSize: "16px",
    },
    "f": {
        theme: { "min": "1920px" },
        description: "full-screen windows",
    },
    "f-t": {
        theme: { "raw": "(min-width:1920px) and (hover: none)" },
        description: "large tablets (in landscape)",
        bodyFontSize: "16px",
    },
    "f-d": {
        theme: { "raw": "(min-width:1920px) and (hover: hover)" },
        description: "desktops and laptops",
        bodyFontSize: "16px",
    },
}

const ALL_SCREEN_NAMES = Object.getOwnPropertyNames(SCREEN_DEFINITIONS);
const SCREEN_NAMES = ALL_SCREEN_NAMES.filter((screenName) => screenName.length === 1);

definitionStore.theme.screens = {
    ...definitionStore.theme.screens,
    ...objectMap(
        SCREEN_DEFINITIONS,
        (screenDefinition) => screenDefinition.theme,
    ),
}

function mediaQuery(screenName) {
    // shorthand
    const screen = SCREEN_DEFINITIONS[screenName];

    // robustness!
    if (screen === undefined) {
        throw new Error("unknown screen name " + screenName);
    }

    // special case - raw query
    if (screen.theme['raw'] !== undefined) {
        return "@media (" + screen.theme['raw'] + ')';
    }

    // general case
    const parts = [];
    Object.getOwnPropertyNames(screen.theme).forEach(
        function(key) {
            switch (key) {
                case "min":
                    parts.push("min-width: " + screen.theme[key]);
                    break;
                case "max":
                    parts.push("max-width: "  + screen.theme[key]);

                default:
                    break;
            }
        }
    );

    return "@media (" + parts.join(" and ") + ")";
}

function applyStylesToScreen(screenName, styles) {
    return {
        [mediaQuery(screenName)]: { ...styles }
    }
}

function addInternalStyleForScreens(container, screenNames, style) {
    screenNames.forEach(
        function(screenName) {
            // the internal style that we are targetting
            const internalStyleName = buildStyleNameForScreen(screenName, style);

            // special case - no definition exists
            if (definitionStore.internalStyles[internalStyleName] === undefined) {
                return;
            }

            // general case - we have a style for this screen
            const cssQuery = mediaQuery(screenName);

            container[cssQuery] = {
                ...container[cssQuery],
                ...definitionStore.internalStyles[style + '-' + screenName],
            }
        }
    );
}

module.exports = {
    addInternalStyleForScreens,
    applyStylesToScreen,
    mediaQuery,
    SCREEN_NAMES,
    ALL_SCREEN_NAMES,
    SCREEN_DEFINITIONS,
}