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

import { makeCssHexColorDefinition } from "@safelytyped/css-color";
import type { CssColorDefinitions } from "../types/CssColorDefinitions/CssColorDefinitions.type";

export const MATMET_COLORS: CssColorDefinitions = {
    "matmet-amber": makeCssHexColorDefinition("#f0a30a"),
    "matmet-brown": makeCssHexColorDefinition("#825a2c"),
    "matmet-cobalt": makeCssHexColorDefinition("#0050ef"),
    "matmet-crimson": makeCssHexColorDefinition("#a20025"),
    "matmet-cyan": makeCssHexColorDefinition("#1ba1e2"),
    "matmet-emerald": makeCssHexColorDefinition("#008a00"),
    "matmet-green": makeCssHexColorDefinition("#60a917"),
    "matmet-indigo": makeCssHexColorDefinition("#6a00ff"),
    "matmet-lime": makeCssHexColorDefinition("#a4c400"),
    "matmet-magenta": makeCssHexColorDefinition("#d80073"),
    "matmet-mauve": makeCssHexColorDefinition("#76608a"),
    "matmet-olive": makeCssHexColorDefinition("#6d8764"),
    "matmet-orange": makeCssHexColorDefinition("#fa6800"),
    "matmet-pink": makeCssHexColorDefinition("#f472d0"),
    "matmet-red": makeCssHexColorDefinition("#e51400"),
    "matmet-sienna": makeCssHexColorDefinition("#a0522d"),
    "matmet-steel": makeCssHexColorDefinition("#647687"),
    "matmet-teal": makeCssHexColorDefinition("#00aba9"),
    "matmet-violet": makeCssHexColorDefinition("#a0f"),
    "matmet-yellow": makeCssHexColorDefinition("#e3c800"),
};