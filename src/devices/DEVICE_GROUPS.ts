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
import { HashMap } from "@safelytyped/core-types";
import { parseDefinitions } from "../helpers/parseDefinition";
import type { DeviceGroups } from "../types/DeviceGroups/DeviceGroups.type";
import { buildMediaQuery } from "../helpers/buildMediaQuery";
import type { TailwindMediaQueryDefinition } from "../types/TailwindMediaQueryDefinition/TailwindMediaQueryDefinition.type";
import { RAW_DEVICE_DEFINITIONS } from "./RAW_DEVICE_DEFINITIONS";
import { DEFINITION_STORE } from "../definitionStore/DEFINITION_STORE";

interface ParsedDeviceGroup {
    minScreenWidth?: string;
    maxScreenWidth?: string;
    tabletRemPx?: string;
    desktopRemPx: string;
    articleMaxWidth: string;
    targetDevices: string;
}

const parsedDefinitions = parseDefinitions<HashMap<ParsedDeviceGroup>>(
    (RAW_DEVICE_DEFINITIONS as unknown) as HashMap<string>,
    [
        [ 'minScreenWidth', 'maxScreenWidth' ],
        [ 'tabletRemPx', 'desktopRemPx' ],
        [ 'articleMaxWidth' ],
        [ 'targetDevices' ],
    ],
);

export const DEVICE_GROUPS: DeviceGroups = {};
HashMap.map(
    parsedDefinitions,
    function(definition: ParsedDeviceGroup, key: string) {
        // work out what the screen widths are
        let mediaQueryDefinition = "";
        let screenWidth = "";

        if (definition.minScreenWidth) {
            mediaQueryDefinition = "min-width: " + definition.minScreenWidth + "";
            screenWidth = definition.minScreenWidth + " and above";
        }
        else {
            mediaQueryDefinition = "max-width: " + definition.maxScreenWidth + "";
            screenWidth = "up to " + definition.maxScreenWidth;
        }
        let tailwindDefinition: TailwindMediaQueryDefinition = { "raw": "(" + mediaQueryDefinition + ")" };

        // shorthand
        const deviceGroup = key;
        const tabletDeviceGroup = key + '-t';
        const desktopDeviceGroup = key + '-d';

        // plug these into the DEVICE_GROUPS constant
        DEVICE_GROUPS[deviceGroup] = {
            name: deviceGroup,
            breakpoint: {
                name: deviceGroup,
                tailwindDefinition,
                mediaQuery: buildMediaQuery(tailwindDefinition),
                screenWidth,
                targetDevices: definition.targetDevices,
            },
            remPx: definition.desktopRemPx,
            articleMaxWidth: definition.articleMaxWidth,
        }

        if (definition.tabletRemPx) {
            tailwindDefinition = { "raw": "(" + mediaQueryDefinition + ") and (hover:none)" };

            DEVICE_GROUPS[tabletDeviceGroup] = {
                name: tabletDeviceGroup,
                breakpoint: {
                    name: tabletDeviceGroup,
                    tailwindDefinition,
                    mediaQuery: buildMediaQuery(tailwindDefinition),
                    screenWidth,
                    targetDevices: definition.targetDevices,
                },
                remPx: definition.tabletRemPx,
                articleMaxWidth: definition.articleMaxWidth,
            }
        }

        tailwindDefinition = { "raw": "(" + mediaQueryDefinition + ") and (hover:hover)" };
        DEVICE_GROUPS[desktopDeviceGroup] = {
            name: desktopDeviceGroup,
            breakpoint: {
                name: desktopDeviceGroup,
                tailwindDefinition,
                mediaQuery: buildMediaQuery(tailwindDefinition),
                screenWidth,
                targetDevices: "desktop and laptop",
            },
            remPx: definition.desktopRemPx,
            articleMaxWidth: definition.articleMaxWidth,
        }
    }
)

DEFINITION_STORE.devices = DEVICE_GROUPS;
DEFINITION_STORE.theme.extend.screens = {
    ...DEFINITION_STORE.theme.extend.screens,
    ...HashMap.map(
        DEVICE_GROUPS,
        (screenDefinition) => screenDefinition.breakpoint.tailwindDefinition,
    ),
}
