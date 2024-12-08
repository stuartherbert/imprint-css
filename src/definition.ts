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

require("./styles/styling-the-page/default-font-size");
require("./styles/styling-the-page/font-families");

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

require("./variables/semantic");
require("./styles/styling-the-page/body");
require("./styles/typography/flow");
require("./styles/typography/font-weight");
require('./styles/typography/font-spacing');
require('./styles/typography/font-sizing');
require('./styles/typography/line-heights');
require("./styles/typography/inline-blocks");
require('./styles/typography/blocks');
require("./styles/typography/headings");

// const util = require('util');
// console.log(util.inspect(DEFINITION_STORE, { depth: 10, colors: true }));
// process.exit(1);

require("./styles/typography/text");
require("./styles/typography/links");
require("./styles/typography/lists.js");
require("./styles/typography/pre");
require("./styles/typography/tables");
// require("./typography/main");
require("./utilities/imprint-article");

// ----------------------------------------------------------------
//
// import our components
//
// ----------------------------------------------------------------

require("./styles/components/alert");
require("./styles/components/block");
require("./styles/components/callout");
require("./styles/components/shaded");
require("./styles/components/standout");
require("./styles/components/inner");
require("./styles/components/panel");
// const colorSwatch = require("./components/color-swatch");

// make sure we can use our new spacing units for text-* and leading-*
// utilities too
DEFINITION_STORE.theme.extend.fontSize = DEFINITION_STORE.theme.extend.spacing;
DEFINITION_STORE.theme.extend.lineHeight = DEFINITION_STORE.theme.extend.spacing;
DEFINITION_STORE.theme.extend.borderRadius = DEFINITION_STORE.theme.extend.spacing;

module.exports = DEFINITION_STORE;