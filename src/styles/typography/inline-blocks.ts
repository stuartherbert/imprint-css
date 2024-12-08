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

import type { CssStyles } from "../../types/CssStyles/CssStyles.type";
import { DEFINITION_STORE } from "../../definitionStore/DEFINITION_STORE";
import { newStaticUtility } from "../../types/StaticUtility/newStaticUtility";
import { TYPOGRAPHY_STYLE_NAMES } from "./definitions/TYPOGRAPHY_STYLE_NAMES";
import { buildStyleName } from "../../helpers/buildStyleName";

// create the utility classes
const localStyles: CssStyles = {};

TYPOGRAPHY_STYLE_NAMES.forEach(
    function(styleName) {
        const targetUtility = buildStyleName('.imprint-inline', styleName);

        localStyles[targetUtility] = {
            ...DEFINITION_STORE.styles('.imprint-fontsize-' + styleName),
            ...DEFINITION_STORE.styles('.imprint-fontweight-' + styleName),
        }
    }
);

DEFINITION_STORE.addStaticUtility(
    newStaticUtility(
        'inline-blocks',
        {
            vars: {},
            styles: localStyles,
            baseStyles: {},
        }
    ),
);