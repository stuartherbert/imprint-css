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

export const IMPRINT_COLORS: CssColorDefinitions = {
    "imprint-darkred": makeCssHexColorDefinition("#810f13"),
    "imprint-darkblue": makeCssHexColorDefinition("#132b47"),
    "imprint-darkgray": makeCssHexColorDefinition("#404040"),
    "imprint-graphite": makeCssHexColorDefinition("#303030"),
    "imprint-gray": makeCssHexColorDefinition("#a8a8a8"),
    "imprint-lightgray": makeCssHexColorDefinition("#ddd"),
    "imprint-lightred": makeCssHexColorDefinition("#f2dede"),
    "imprint-nero": makeCssHexColorDefinition("#222"),
    "imprint-paleblue": makeCssHexColorDefinition("#eff9fd"),
    "imprint-palegray": makeCssHexColorDefinition("#ededed"),
    "imprint-palegreen": makeCssHexColorDefinition("#dff0d8"),
    "imprint-palered": makeCssHexColorDefinition("#f9f2f4"),
    "imprint-paleyellow": makeCssHexColorDefinition("#fcf8e3"),
    "imprint-yellow": makeCssHexColorDefinition("#f9a900"),
    "imprint-red": makeCssHexColorDefinition("#9b2423"),
    "imprint-green": makeCssHexColorDefinition("#237f52"),
    "imprint-blue": makeCssHexColorDefinition("#005387"),
    "imprint-offwhite": makeCssHexColorDefinition("#f6f6f6"),

    "imprint-brightblue": makeCssHexColorDefinition("#3f9bdb"),
    "imprint-brightgreen": makeCssHexColorDefinition("#68a657"),
    "imprint-brightyellow": makeCssHexColorDefinition("#f6ba21"),
    "imprint-brightred": makeCssHexColorDefinition("#bb0039"),

    // imprint-nero
    "imprint-fg-default": makeCssHexColorDefinition("#222"),
    // imprint-offwhite
    "imprint-bg-default": makeCssHexColorDefinition("#f6f6f6"),

    // NOTE
    //
    // we cannot use colorFromCollection() here, as it creates a
    // circular dependency

    // ganbaro-blue-500
    "imprint-primary": makeCssHexColorDefinition("#234f83"),
    // ganbaro-green-500
    "imprint-secondary": makeCssHexColorDefinition("#b1dd8c"),
};