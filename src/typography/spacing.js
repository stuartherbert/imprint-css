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

const definitionStore = require("../helpers/definitionStore");
const { addInternalStyleForScreens, ALL_SCREEN_NAMES } = require("../sizing/screens");
const { STYLE_NAMES } = require("./__definitions");

// create the utility classes
const staticUtilities = {};
STYLE_NAMES.forEach(
    function(styleName) {
        const targetUtility = '.imprint-spacing-' + styleName;

        staticUtilities[targetUtility] = {}
        addInternalStyleForScreens(staticUtilities[targetUtility], ALL_SCREEN_NAMES, '.__imprint-spacing-' + styleName);
        // addInternalStyleForScreens(staticUtilities[targetUtility], ALL_SCREEN_NAMES, '.__imprint-nestedSpacingTop-' + styleName);
    }
);

definitionStore.staticUtilities.styles = {
    ...definitionStore.staticUtilities.styles,
    ...staticUtilities,
}