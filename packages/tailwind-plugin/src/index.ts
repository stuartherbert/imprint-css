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

import type { RootPixelOptions } from "@imprintcss/css-definitions";

// we build all of our styles etc separately, so that we can import it
// into documentation tooling :)
import { DEFINITION_STORE } from "@imprintcss/css-definitions";

// let's export all of our plugin to Tailwind!
import { default as plugin}  from "tailwindcss/plugin";
module.exports = plugin.withOptions(
    function (options:{ rootPixels?: Partial<RootPixelOptions>} = {}) {
        return ({ addBase, addUtilities, addComponents }) => {
            // the root pixels can be overridden by user-defined options
            DEFINITION_STORE.generateRootPixels(options.rootPixels ?? {});

            // console.log(util.inspect(definitionStore, { depth: 10, colors: true }));

            addBase(DEFINITION_STORE.exportBaseLayer());
            addUtilities({
                ":root": DEFINITION_STORE.exportVars()
            });
            addUtilities(DEFINITION_STORE.exportUtilityLayer());
            addComponents(DEFINITION_STORE.exportComponentLayer());
        };
    },
    function(options: { rootPixels?: Partial<RootPixelOptions>} = {}) {
        // the root pixels can be overridden by user-defined options
        DEFINITION_STORE.generateRootPixels(options.rootPixels ?? {});

        return {
            theme: DEFINITION_STORE.theme,
        };
    }
);