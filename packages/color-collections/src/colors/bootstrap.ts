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

/**
 * based on colors from the Bootstrap documentation:
 *
 * https://getbootstrap.com/docs/5.3/customize/color/
 */
export const BOOTSTRAP_COLORS = {
    "bs-blue": {
        DEFAULT: makeCssHexColorDefinition("#0d6efd"),
        "100": makeCssHexColorDefinition("#cfe2ff"),
        "200": makeCssHexColorDefinition("#9ec5fe"),
        "300": makeCssHexColorDefinition("#6ea8fe"),
        "400": makeCssHexColorDefinition("#3d8bfd"),
        "500": makeCssHexColorDefinition("#0d6efd"),
        "600": makeCssHexColorDefinition("#0a58ca"),
        "700": makeCssHexColorDefinition("#084298"),
        "800": makeCssHexColorDefinition("#052c65"),
        "900": makeCssHexColorDefinition("#031633"),
    },
    "bs-indigo": {
        DEFAULT: makeCssHexColorDefinition("#6610f2"),
        "100": makeCssHexColorDefinition("#e0cffc"),
        "200": makeCssHexColorDefinition("#c29ffa"),
        "300": makeCssHexColorDefinition("#a370f7"),
        "400": makeCssHexColorDefinition("#8540f5"),
        "500": makeCssHexColorDefinition("#6610f2"),
        "600": makeCssHexColorDefinition("#520dc2"),
        "700": makeCssHexColorDefinition("#3d0a91"),
        "800": makeCssHexColorDefinition("#290661"),
        "900": makeCssHexColorDefinition("#140330"),
    },
    "bs-purple": {
        DEFAULT: makeCssHexColorDefinition("#6f42c1"),
        "100": makeCssHexColorDefinition("#e2d9f3"),
        "200": makeCssHexColorDefinition("#c5b3e6"),
        "300": makeCssHexColorDefinition("#a98eda"),
        "400": makeCssHexColorDefinition("#8c68cd"),
        "500": makeCssHexColorDefinition("#6f42c1"),
        "600": makeCssHexColorDefinition("#59359a"),
        "700": makeCssHexColorDefinition("#432874"),
        "800": makeCssHexColorDefinition("#2c1a4d"),
        "900": makeCssHexColorDefinition("#160d27"),
    },
    "bs-pink": {
        DEFAULT: makeCssHexColorDefinition("#d63384"),
        "100": makeCssHexColorDefinition("#f7d6e6"),
        "200": makeCssHexColorDefinition("#efadce"),
        "300": makeCssHexColorDefinition("#e685b5"),
        "400": makeCssHexColorDefinition("#de5c9d"),
        "500": makeCssHexColorDefinition("#d63384"),
        "600": makeCssHexColorDefinition("#ab296a"),
        "700": makeCssHexColorDefinition("#801f4f"),
        "800": makeCssHexColorDefinition("#561435"),
        "900": makeCssHexColorDefinition("#2b0a1a"),
    },
    "bs-red": {
        DEFAULT: makeCssHexColorDefinition("#dc3545"),
        "100": makeCssHexColorDefinition("#f8d7da"),
        "200": makeCssHexColorDefinition("#f1aeb5"),
        "300": makeCssHexColorDefinition("#ea868f"),
        "400": makeCssHexColorDefinition("#e35d6a"),
        "500": makeCssHexColorDefinition("#dc3545"),
        "600": makeCssHexColorDefinition("#b02a37"),
        "700": makeCssHexColorDefinition("#842029"),
        "800": makeCssHexColorDefinition("#58151c"),
        "900": makeCssHexColorDefinition("#2c0b0e"),
    },
    "bs-orange": {
        DEFAULT: makeCssHexColorDefinition("#fd7e14"),
        "100": makeCssHexColorDefinition("#ffe5d0"),
        "200": makeCssHexColorDefinition("#fecba1"),
        "300": makeCssHexColorDefinition("#feb272"),
        "400": makeCssHexColorDefinition("#fd9843"),
        "500": makeCssHexColorDefinition("#fd7e14"),
        "600": makeCssHexColorDefinition("#ca6510"),
        "700": makeCssHexColorDefinition("#984c0c"),
        "800": makeCssHexColorDefinition("#653208"),
        "900": makeCssHexColorDefinition("#331904"),
    },
    "bs-yellow": {
        DEFAULT: makeCssHexColorDefinition("#ffc107"),
        "100": makeCssHexColorDefinition("#fff3cd"),
        "200": makeCssHexColorDefinition("#ffe69c"),
        "300": makeCssHexColorDefinition("#ffda6a"),
        "400": makeCssHexColorDefinition("#ffcd39"),
        "500": makeCssHexColorDefinition("#ffc107"),
        "600": makeCssHexColorDefinition("#cc9a06"),
        "700": makeCssHexColorDefinition("#997404"),
        "800": makeCssHexColorDefinition("#664d03"),
        "900": makeCssHexColorDefinition("#332701"),
    },
    "bs-green": {
        DEFAULT: makeCssHexColorDefinition("#198754"),
        "100": makeCssHexColorDefinition("#d1e7dd"),
        "200": makeCssHexColorDefinition("#a3cfbb"),
        "300": makeCssHexColorDefinition("#75b798"),
        "400": makeCssHexColorDefinition("#479f76"),
        "500": makeCssHexColorDefinition("#198754"),
        "600": makeCssHexColorDefinition("#146c43"),
        "700": makeCssHexColorDefinition("#0f5132"),
        "800": makeCssHexColorDefinition("#0a3622"),
        "900": makeCssHexColorDefinition("#051b11"),
    },
    "bs-teal": {
        DEFAULT: makeCssHexColorDefinition("#20c997"),
        "100": makeCssHexColorDefinition("#d2f4ea"),
        "200": makeCssHexColorDefinition("#a6e9d5"),
        "300": makeCssHexColorDefinition("#79dfc1"),
        "400": makeCssHexColorDefinition("#4dd4ac"),
        "500": makeCssHexColorDefinition("#20c997"),
        "600": makeCssHexColorDefinition("#1aa179"),
        "700": makeCssHexColorDefinition("#13795b"),
        "800": makeCssHexColorDefinition("#0d503c"),
        "900": makeCssHexColorDefinition("#06281e"),
    },
    "bs-cyan": {
        DEFAULT: makeCssHexColorDefinition("#0dcaf0"),
        "100": makeCssHexColorDefinition("#cff4fc"),
        "200": makeCssHexColorDefinition("#9eeaf9"),
        "300": makeCssHexColorDefinition("#6edff6"),
        "400": makeCssHexColorDefinition("#3dd5f3"),
        "500": makeCssHexColorDefinition("#0dcaf0"),
        "600": makeCssHexColorDefinition("#0aa2c0"),
        "700": makeCssHexColorDefinition("#087990"),
        "800": makeCssHexColorDefinition("#055160"),
        "900": makeCssHexColorDefinition("#032830"),
    },
    "bs-gray": {
        DEFAULT: makeCssHexColorDefinition("#adb5bd"),
        "100": makeCssHexColorDefinition("#f8f9fa"),
        "200": makeCssHexColorDefinition("#e9ecef"),
        "300": makeCssHexColorDefinition("#dee2e6"),
        "400": makeCssHexColorDefinition("#ced4da"),
        "500": makeCssHexColorDefinition("#adb5bd"),
        "600": makeCssHexColorDefinition("#6c757d"),
        "700": makeCssHexColorDefinition("#495057"),
        "800": makeCssHexColorDefinition("#343a40"),
        "900": makeCssHexColorDefinition("#212529"),
    }
};