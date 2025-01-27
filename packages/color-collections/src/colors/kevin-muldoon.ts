//
// Copyright (c) 2025-present Ganbaro Digital Ltd
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

// based on a color palette shown in an image on this blog post by
// Kevin Muldoon
//
// https://uxdesign.cc/how-should-you-name-your-colors-in-a-design-system-3086513476df

export const KM_COLORS: CssColorDefinitions = {
    "km-laughingorange": makeCssHexColorDefinition("#fea230"),
    "km-lemondrop": makeCssHexColorDefinition("#f7f5e8"),
    "km-cardboard-tan": makeCssHexColorDefinition("#dbb286"),
    "km-daredevil-orange": makeCssHexColorDefinition("#e56220"),
    "km-positive-red": makeCssHexColorDefinition("#bb2f30"),
    "km-shire-green": makeCssHexColorDefinition("#3d9354"),
    "km-loyal-blue": makeCssHexColorDefinition("#2a6786"),
    "km-charcoal-black": makeCssHexColorDefinition("#212121"),
    "km-paper-white": makeCssHexColorDefinition("#f2f2f2"),
    "km-light-cool-gray": makeCssHexColorDefinition("#bfc3c7"),
    "km-medium-cool-gray": makeCssHexColorDefinition("#686f73"),
    "km-dark-cool-gray": makeCssHexColorDefinition("#393f44"),
};
