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

// this is the central container that we are populating
const definitionStore = require("../helpers/definitionStore");
const { objectMap } = require("../helpers/objectMap");
const { parseDefinitions } = require("../helpers/parseDefinition");
const { buildStyleNameForScreen } = require("../helpers/styles");

/**
 * our device definitions are:
 *
 * minScreenWidth/maxScreenWidth
 * tabletRemPx/desktopRemPx
 * articleMaxWidth
 * target devices description
 */
const definitions = {
    'a': '-/640px ; 18px/16px ; 100% ; smart phones (in portrait)',
    'b': '641px/- ; 20px/16px ; 100% ; smart phones (in landscape) & small tablets (in portrait)',
    'c': '769px/- ; 18px/16px ; 100% ; regular tablets (in portrait)',
    'd': '1025px/- ; 18px/16px ; 60rem ; large tablets (in portrait)',
    'e': '1281px/- ; 16px/16px ; 60rem ; large tablets (in landscape)',
    'f': '1920px/- ; -/16px ; 60rem ; full-size windows',
}

const parsedDefinitions = parseDefinitions(
    definitions,
    [
        [ 'minScreenWidth', 'maxScreenWidth' ],
        [ 'tabletRemPx', 'desktopRemPx' ],
        [ 'articleMaxWidth' ],
        [ 'targetDevices' ],
    ],
    ';'
);

/** @type {import('../../types').DeviceGroups} */
const DEVICE_GROUPS = {};
objectMap(
    parsedDefinitions,
    function(definition, key) {
        // work out what the screen widths are
        let tailwindDefinition = "";
        let screenWidth = "";

        if (definition.minScreenWidth) {
            tailwindDefinition = "min-width: " + definition.minScreenWidth + "";
            screenWidth = definition.minScreenWidth + " and above";
        }
        else {
            tailwindDefinition = "max-width: " + definition.maxScreenWidth + "";
            screenWidth = "up to " + definition.maxScreenWidth;
        }

        // shorthand
        const deviceGroup = key;
        const tabletDeviceGroup = key + '-t';
        const desktopDeviceGroup = key + '-d';

        DEVICE_GROUPS[deviceGroup] = {
            name: deviceGroup,
            breakpoint: {
                name: deviceGroup,
                tailwindDefinition: { "raw": "(" + tailwindDefinition + ")" },
                screenWidth,
                targetDevices: definition.targetDevices,
            },
            remPx: definition.desktopRemPx,
            articleMaxWidth: definition.articleMaxWidth,
        }
        DEVICE_GROUPS[deviceGroup].breakpoint.mediaQuery = buildMediaQuery(DEVICE_GROUPS[deviceGroup].breakpoint.tailwindDefinition);

        if (definition.tabletRemPx) {
            DEVICE_GROUPS[tabletDeviceGroup] = {
                name: tabletDeviceGroup,
                breakpoint: {
                    name: tabletDeviceGroup,
                    tailwindDefinition: { "raw": "(" + tailwindDefinition + ") and (hover:none)" },
                    screenWidth,
                    targetDevices: definition.targetDevices,
                },
                remPx: definition.tabletRemPx,
                articleMaxWidth: definition.articleMaxWidth,
            }
            DEVICE_GROUPS[tabletDeviceGroup].breakpoint.mediaQuery = buildMediaQuery(DEVICE_GROUPS[tabletDeviceGroup].breakpoint.tailwindDefinition);
        }

        DEVICE_GROUPS[desktopDeviceGroup] = {
            name: desktopDeviceGroup,
            breakpoint: {
                name: desktopDeviceGroup,
                tailwindDefinition: { "raw": "(" + tailwindDefinition + ") and (hover:hover)" },
                screenWidth,
                targetDevices: "desktop and laptop",
            },
            remPx: definition.desktopRemPx,
            articleMaxWidth: definition.articleMaxWidth,
        }
        DEVICE_GROUPS[desktopDeviceGroup].breakpoint.mediaQuery = buildMediaQuery(DEVICE_GROUPS[desktopDeviceGroup].breakpoint.tailwindDefinition);

    }
)

const ALL_DEVICE_NAMES = Object.getOwnPropertyNames(DEVICE_GROUPS);
const DEVICE_NAMES = ALL_DEVICE_NAMES.filter((screenName) => screenName.length === 1);

definitionStore.devices = DEVICE_GROUPS;
definitionStore.theme.extend.screens = {
    ...definitionStore.theme.extend.screens,
    ...objectMap(
        DEVICE_GROUPS,
        (screenDefinition) => screenDefinition.breakpoint.tailwindDefinition,
    ),
}

function buildMediaQuery(tailwindDefinition) {
    // special case - raw query
    if (tailwindDefinition['raw'] !== undefined) {
        if (tailwindDefinition.raw.includes('and')) {
            return "@media (" + tailwindDefinition['raw'] + ')';
        }
        return "@media " + tailwindDefinition['raw'];
    }

    // general case
    const parts = [];
    Object.getOwnPropertyNames(tailwindDefinition).forEach(
        function(key) {
            switch (key) {
                case "min":
                    parts.push("min-width: " + tailwindDefinition[key]);
                    break;
                case "max":
                    parts.push("max-width: "  + tailwindDefinition[key]);

                default:
                    break;
            }
        }
    );

    return "@media (" + parts.join(" and ") + ")";
}

function mediaQuery(screenName) {
    // shorthand
    const screen = DEVICE_GROUPS[screenName];

    // robustness!
    if (screen === undefined) {
        throw new Error("unknown screen name " + screenName);
    }

    // shorthand
    return buildMediaQuery(screen.breakpoint.tailwindDefinition);
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
    DEVICE_NAMES,
    ALL_DEVICE_NAMES,
    DEVICE_GROUPS,
}