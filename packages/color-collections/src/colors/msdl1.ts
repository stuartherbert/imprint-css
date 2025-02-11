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

export const MSDL1_COLORS: CssColorDefinitions = {
    // taken from https://colorlib.com/etc/metro-colors.html
    // on 2025-02-11
    "msdl1-lightgreen": makeCssHexColorDefinition("#99b433"),
    "msdl1-green": makeCssHexColorDefinition("#00a300"),
    "msdl1-darkgreen": makeCssHexColorDefinition("#1e7145"),
    "msdl1-magenta": makeCssHexColorDefinition("#ff0097"),
    "msdl1-lightpurple": makeCssHexColorDefinition("#9f00a7"),
    "msdl1-purple": makeCssHexColorDefinition("#7e3878"),
    "msdl1-darkpurple": makeCssHexColorDefinition("#603cba"),
    "msdl1-darken": makeCssHexColorDefinition("#1d1d1d"),
    "msdl1-teal": makeCssHexColorDefinition("#00aba9"),
    "msdl1-lightblue": makeCssHexColorDefinition("#eff4ff"),
    "msdl1-blue": makeCssHexColorDefinition("#2d89ef"),
    "msdl1-darkblue": makeCssHexColorDefinition("#2b5797"),
    "msdl1-yellow": makeCssHexColorDefinition("#ffc40d"),
    "msdl1-orange": makeCssHexColorDefinition("#e3a21a"),
    "msdl1-darkorange": makeCssHexColorDefinition("#da532c"),
    "msdl1-red": makeCssHexColorDefinition("#ee1111"),
    "msdl1-darkred": makeCssHexColorDefinition("#b91d47"),
    "msdl1-white": makeCssHexColorDefinition("#fff"),
};
