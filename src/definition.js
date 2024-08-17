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

const util = require('util');

const plugin = require('tailwindcss/plugin');
const definitionStore = require('./helpers/definitionStore');

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

require("./styling-the-page/default-font-size");
require("./styling-the-page/fonts.js");

// ----------------------------------------------------------------
//
// import our sizing definitions
//
// ----------------------------------------------------------------

require("./sizing/devices");
// require("./sizing/spacing");

// ----------------------------------------------------------------
//
// import our additional colors
//
// ----------------------------------------------------------------

require("./colors/colors.js");

// ----------------------------------------------------------------
//
// import our default styling
//
// ----------------------------------------------------------------

require("./variables/semantic");
require("./styling-the-page/body");
require("./typography/flow");
require("./typography/font-weight");
require('./typography/font-spacing');
require('./typography/font-sizing');
require('./typography/line-heights');
require("./typography/inline-blocks");
require('./typography/blocks');
require("./typography/headings");

// console.log(util.inspect(definitionStore, { depth: 10, colors: true }));
// process.exit(1);

require("./typography/text");
require("./typography/links");
require("./typography/lists");
require("./typography/pre");
require("./typography/tables");
// require("./typography/main");
require("./utilities/imprint-article");

// ----------------------------------------------------------------
//
// import our components
//
// ----------------------------------------------------------------

require("./components/alert");
require("./components/block");
require("./components/callout");
require("./components/depth");
require("./components/inner");
require("./components/panel");
// const colorSwatch = require("./components/color-swatch");

// make sure we can use our new spacing units for text-* and leading-*
// utilities too
definitionStore.theme.extend.fontSize = definitionStore.theme.extend.spacing;
definitionStore.theme.extend.lineHeight = definitionStore.theme.extend.spacing;
definitionStore.theme.extend.borderRadius = definitionStore.theme.extend.spacing;

module.exports = definitionStore;