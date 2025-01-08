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

import { DEFINITION_STORE } from "./definitionStore/DEFINITION_STORE";

// ================================================================
//
// Import all the bits that make up ImprintCSS
//
// ----------------------------------------------------------------

// ----------------------------------------------------------------
//
// our tools for styling the whole page
//
// ----------------------------------------------------------------

import "./styles/styling-the-page/default-font-size";
import "./styles/styling-the-page/font-families";

// ----------------------------------------------------------------
//
// import our sizing definitions
//
// ----------------------------------------------------------------

// require("./sizing/devices");
// require("./sizing/spacing");

// ----------------------------------------------------------------
//
// import our additional colors
//
// ----------------------------------------------------------------

// require("./colors/colors");

// ----------------------------------------------------------------
//
// import our default styling
//
// ----------------------------------------------------------------

import "./variables/semantic";
import "./styles/styling-the-page/body";
import "./styles/typography/flow";
import "./styles/typography/font-weight";
import "./styles/typography/font-spacing";
import "./styles/typography/font-sizing";
import "./styles/typography/line-heights";
import "./styles/typography/inline-blocks";
import "./styles/typography/blocks";
import "./styles/typography/headings";

// const util = require('util');
// console.log(util.inspect(DEFINITION_STORE, { depth: 10, colors: true }));
// process.exit(1);

import "./styles/typography/text";
import "./styles/typography/links";
import "./styles/typography/lists.js";
import "./styles/typography/pre";
import "./styles/typography/tables";
// require("./typography/main");
import "./utilities/imprint-article";

// ----------------------------------------------------------------
//
// import our components
//
// ----------------------------------------------------------------

import "./styles/components/alert";
import "./styles/components/block";
import "./styles/components/callout";
import "./styles/components/standout";
import "./styles/components/shaded";
import "./styles/components/inner";
import "./styles/components/panel";
// const colorSwatch = require("./components/color-swatch");

// make sure we can use our new spacing units for text-* and leading-*
// utilities too
DEFINITION_STORE.theme.extend.fontSize = DEFINITION_STORE.theme.extend.spacing;
DEFINITION_STORE.theme.extend.lineHeight = DEFINITION_STORE.theme.extend.spacing;
DEFINITION_STORE.theme.extend.borderRadius = DEFINITION_STORE.theme.extend.spacing;

// ================================================================
//
// Our package exports
//
// ----------------------------------------------------------------

export type { ColorGroups } from "./types/ColorGroups/ColorGroups.type";
export { DefinitionStore } from "./types/DefinitionStore/DefinitionStore";
export type { DeviceGroup } from "./types/DeviceGroup/DeviceGroup.type";
export type { DeviceGroups } from "./types/DeviceGroups/DeviceGroups.type";
export type { ImprintTypographyStyle } from "./types/ImprintTypographyStyle/ImprintTypographyStyle.type";
export type { MaterialColorPalette } from "./types/MaterialColorPalette/MaterialColorPalette.type";
export type { MaterialColorPalettes } from "./types/MaterialColorPalettes/MaterialColorPalettes.type";
export type { MSDLColorPalette } from "./types/MSDLColorPalette/MSDLColorPalette.type";
export type { RawDeviceDefinitions } from "./types/RawDeviceDefinitions/RawDeviceDefinitions.type";
export type { RootPixelOptions } from "./types/RootPixelOptions/RootPixelOptions.type";
export type { SemanticSetting } from "./types/SemanticSetting/SemanticSetting.type";
export type { SemanticSettings } from "./types/SemanticSettings/SemanticSettings.type";

export { DEFINITION_STORE };