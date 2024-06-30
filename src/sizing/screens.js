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

// these are the screens that we want to add
const screenDefinitions = {
    'a': { 'max': "319px" },
    'b': { 'min': "320px" },
    'c': { 'min': '600px' },
    'c-t': { 'raw': '(min-width:600px) and (pointer:corse)' },
    'c-d': { 'raw': '(min-width:600px) and (pointer:fine)' },
    'd': { 'min': '1920px' },
};

definitionStore.theme.screens = {
    ...definitionStore.theme.screens,
    ...screenDefinitions,
}

const ALL_SCREEN_NAMES = Object.getOwnPropertyNames(screenDefinitions);
const SCREEN_NAMES = ALL_SCREEN_NAMES.filter((screenName) => screenName.length === 1);

// these are the internal styles that we want to add
const internalStyles = {
    '.__imprint-container-a': {
        'max-width': '100%',
    },
    '.__imprint-container-b': {
        'max-width': '320px',
    },
    '.__imprint-container-c': {
        'max-width': '600px',
    },
    '.__imprint-container-d': {
        'max-width': '800px',
    },
}

definitionStore.internalStyles = {
    ...definitionStore.internalStyles,
    ...internalStyles,
}

// these are the styles that we want to export
const staticUtilities = {
    '.imprint-container': {}
};
addInternalStyleForScreens(
    staticUtilities[".imprint-container"],
    ALL_SCREEN_NAMES,
    ".__imprint-container",
);

definitionStore.staticUtilities.styles = {
    ...definitionStore.staticUtilities.styles,
    ...staticUtilities,
}

function mediaQuery(screenName) {
    // shorthand
    const screen = screenDefinitions[screenName];

    // robustness!
    if (screen === undefined) {
        throw new Error("unknown screen name " + screenName);
    }

    // special case - raw query
    if (screen['raw'] !== undefined) {
        return "@media (" + screen['raw'] + ')';
    }

    // general case
    const parts = [];
    Object.getOwnPropertyNames(screen).forEach(
        function(key) {
            switch (key) {
                case "min":
                    parts.push("min-width: " + screen[key]);
                    break;
                case "max":
                    parts.push("max-width: "  + screen[key]);

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
}