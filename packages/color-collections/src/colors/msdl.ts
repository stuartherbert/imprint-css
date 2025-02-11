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
import type { CssColorCollection } from "../types/CssColorCollection/CssColorCollection.type";

export const MSDL_COLORS: CssColorCollection = {
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

    "msdl-bilbao": {
        "1": makeCssHexColorDefinition("#498205"),
        "2": makeCssHexColorDefinition("#599b00"),
        "3": makeCssHexColorDefinition("#6bb700"),
        "4": makeCssHexColorDefinition("#7cd300"),
        "5": makeCssHexColorDefinition("#9ad93a"),
        "6": makeCssHexColorDefinition("#b7df74"),
        "7": makeCssHexColorDefinition("#d5e5ae"),
    },
    "msdl-black": makeCssHexColorDefinition("#000"),
    "msdl-blue": {
        "1": makeCssHexColorDefinition("#00188f"),
        "2": makeCssHexColorDefinition("#0027b4"),
        "3": makeCssHexColorDefinition("#0037da"),
        "4": makeCssHexColorDefinition("#0046ff"),
        "5": makeCssHexColorDefinition("#3b78ff"),
        "6": makeCssHexColorDefinition("#7ba7ff"),
        "7": makeCssHexColorDefinition("#abc9ed"),
    },
    "msdl-bluelagoon": {
        "1": makeCssHexColorDefinition("#005b70"),
        "2": makeCssHexColorDefinition("#006f94"),
        "3": makeCssHexColorDefinition("#0099bc"),
        "4": makeCssHexColorDefinition("#00bcf2"),
        "5": makeCssHexColorDefinition("#31d2f7"),
        "6": makeCssHexColorDefinition("#69eaff"),
        "7": makeCssHexColorDefinition("#99ecff"),
    },
    "msdl-brown": {
        "1": makeCssHexColorDefinition("#ab620d"),
        "2": makeCssHexColorDefinition("#d48c00"),
        "3": makeCssHexColorDefinition("#eaa300"),
        "4": makeCssHexColorDefinition("#ffb900"),
        "5": makeCssHexColorDefinition("#ffc83d"),
        "6": makeCssHexColorDefinition("#ffd679"),
        "7": makeCssHexColorDefinition("#ffe5b6"),
    },
    "msdl-christalle": {
        "1": makeCssHexColorDefinition("#401b6c"),
        "2": makeCssHexColorDefinition("#4e257f"),
        "3": makeCssHexColorDefinition("#5c2e91"),
        "4": makeCssHexColorDefinition("#744da9"),
        "5": makeCssHexColorDefinition("#8764b8"),
        "6": makeCssHexColorDefinition("#cfc4f5"),
    },
    "msdl-christi": {
        "1": makeCssHexColorDefinition("#73aa24"),
        "2": makeCssHexColorDefinition("#8cbd18"),
        "3": makeCssHexColorDefinition("#a4cf0c"),
        "4": makeCssHexColorDefinition("#bad80a"),
        "5": makeCssHexColorDefinition("#d1ec3c"),
        "6": makeCssHexColorDefinition("#e4f577"),
        "7": makeCssHexColorDefinition("#f8ffb3"),
    },
    "msdl-deepkoamaru": {
        "1": makeCssHexColorDefinition("#373277"),
        "2": makeCssHexColorDefinition("#49409a"),
        "3": makeCssHexColorDefinition("#5a4ebc"),
        "4": makeCssHexColorDefinition("#7160e8"),
        "5": makeCssHexColorDefinition("#8378de"),
        "6": makeCssHexColorDefinition("#b5b5e2"),
    },
    "msdl-eggplant": {
        "1": makeCssHexColorDefinition("#77004d"),
        "2": makeCssHexColorDefinition("#9b0062"),
        "3": makeCssHexColorDefinition("#bf0077"),
        "4": makeCssHexColorDefinition("#e3008c"),
        "5": makeCssHexColorDefinition("#e43ba6"),
        "6": makeCssHexColorDefinition("#e8a3de"),
    },
    "msdl-falured": {
        "1": makeCssHexColorDefinition("#7f1d10"),
        "2": makeCssHexColorDefinition("#a52613"),
        "3": makeCssHexColorDefinition("#da3b01"),
        "4": makeCssHexColorDefinition("#f03a17"),
        "5": makeCssHexColorDefinition("#ef6950"),
        "6": makeCssHexColorDefinition("#ee9889"),
        "7": makeCssHexColorDefinition("#eec7c2"),
    },
    "msdl-fungreen": {
        "1": makeCssHexColorDefinition("#00722e"),
        "2": makeCssHexColorDefinition("#10893e"),
        "3": makeCssHexColorDefinition("#00ae56"),
        "4": makeCssHexColorDefinition("#00cc6a"),
        "5": makeCssHexColorDefinition("#38d487"),
        "6": makeCssHexColorDefinition("#70dda5"),
        "7": makeCssHexColorDefinition("#a8e5c2"),
    },
    "msdl-gablegreen": {
        "1": makeCssHexColorDefinition("#2d3f3a"),
        "2": makeCssHexColorDefinition("#3b534d"),
        "3": makeCssHexColorDefinition("#486860"),
        "4": makeCssHexColorDefinition("#567c73"),
        "5": makeCssHexColorDefinition("#7d9d95"),
        "6": makeCssHexColorDefinition("#a3bfb7"),
        "7": makeCssHexColorDefinition("#cae0d9"),
    },
    "msdl-gray": {
        "1": makeCssHexColorDefinition("#1f1f1f"),
        "2": makeCssHexColorDefinition("#2b2b2b"),
        "3": makeCssHexColorDefinition("#393939"),
        "4": makeCssHexColorDefinition("#767676"),
        "5": makeCssHexColorDefinition("#ccc"),
        "6": makeCssHexColorDefinition("#e6e6e6"),
        "7": makeCssHexColorDefinition("#f2f2f2"),
    },
    "msdl-green": {
        "1": makeCssHexColorDefinition("#0b6a0b"),
        "2": makeCssHexColorDefinition("#107c10"),
        "3": makeCssHexColorDefinition("#13a10e"),
        "4": makeCssHexColorDefinition("#16c60c"),
        "5": makeCssHexColorDefinition("#47d041"),
        "6": makeCssHexColorDefinition("#79db75"),
        "7": makeCssHexColorDefinition("#aae5aa"),
    },
    "msdl-indiantan": {
        "1": makeCssHexColorDefinition("#4d291c"),
        "2": makeCssHexColorDefinition("#603d30"),
        "3": makeCssHexColorDefinition("#8e562e"),
        "4": makeCssHexColorDefinition("#ac744c"),
        "5": makeCssHexColorDefinition("#bb9167"),
        "6": makeCssHexColorDefinition("#d8b094"),
        "7": makeCssHexColorDefinition("#f7d7c4"),
    },
    "msdl-midnightblue": {
        "1": makeCssHexColorDefinition("#242466"),
        "2": makeCssHexColorDefinition("#32318c"),
        "3": makeCssHexColorDefinition("#413eb3"),
        "4": makeCssHexColorDefinition("#4f4bd9"),
        "5": makeCssHexColorDefinition("#6b69d6"),
        "6": makeCssHexColorDefinition("#bebee5"),
    },
    "msdl-mirage": {
        "1": makeCssHexColorDefinition("#394146"),
        "2": makeCssHexColorDefinition("#4a5459"),
        "3": makeCssHexColorDefinition("#5a686c"),
        "4": makeCssHexColorDefinition("#69797e"),
        "5": makeCssHexColorDefinition("#859599"),
        "6": makeCssHexColorDefinition("#a0aeb2"),
        "7": makeCssHexColorDefinition("#bac8cc"),
    },
    "msdl-mondo": {
        "1": makeCssHexColorDefinition("#4c4a48"),
        "2": makeCssHexColorDefinition("#5d5a58"),
        "3": makeCssHexColorDefinition("#6e6a68"),
        "4": makeCssHexColorDefinition("#7a7574"),
        "5": makeCssHexColorDefinition("#989391"),
        "6": makeCssHexColorDefinition("#b1adab"),
        "7": makeCssHexColorDefinition("#cbc6c4"),
    },
    "msdl-mosque": {
        "1": makeCssHexColorDefinition("#005e50"),
        "2": makeCssHexColorDefinition("#008272"),
        "3": makeCssHexColorDefinition("#00b294"),
        "4": makeCssHexColorDefinition("#00cea6"),
        "5": makeCssHexColorDefinition("#41dabc"),
        "6": makeCssHexColorDefinition("#81e6d3"),
        "7": makeCssHexColorDefinition("#c2f2e9"),
    },
    "msdl-palatinatepurple": {
        "1": makeCssHexColorDefinition("#5c005c"),
        "2": makeCssHexColorDefinition("#800074"),
        "3": makeCssHexColorDefinition("#9a0089"),
        "4": makeCssHexColorDefinition("#b4009e"),
        "5": makeCssHexColorDefinition("#c239b3"),
        "6": makeCssHexColorDefinition("#de94e0"),
    },
    "msdl-prussianblue": {
        "1": makeCssHexColorDefinition("#003966"),
        "2": makeCssHexColorDefinition("#004e8c"),
        "3": makeCssHexColorDefinition("#0063b1"),
        "4": makeCssHexColorDefinition("#0078d7"),
        "5": makeCssHexColorDefinition("#3a96dd"),
        "6": makeCssHexColorDefinition("#83beec"),
        "7": makeCssHexColorDefinition("#b3dbf2"),
    },
    "msdl-rawumber": {
        "1": makeCssHexColorDefinition("#7f4200"),
        "2": makeCssHexColorDefinition("#b05e0d"),
        "3": makeCssHexColorDefinition("#d47300"),
        "4": makeCssHexColorDefinition("#ff8c00"),
        "5": makeCssHexColorDefinition("#fa4"),
        "6": makeCssHexColorDefinition("#ffc988"),
        "7": makeCssHexColorDefinition("#ffdabb"),
    },
    "msdl-red": {
        "1": makeCssHexColorDefinition("#750b1c"),
        "2": makeCssHexColorDefinition("#a80000"),
        "3": makeCssHexColorDefinition("#c50f1f"),
        "4": makeCssHexColorDefinition("#e81123"),
        "5": makeCssHexColorDefinition("#e74856"),
        "6": makeCssHexColorDefinition("#e6808a"),
        "7": makeCssHexColorDefinition("#f4abba"),
    },
    "msdl-redberry": {
        "1": makeCssHexColorDefinition("#761721"),
        "2": makeCssHexColorDefinition("#a4262c"),
        "3": makeCssHexColorDefinition("#d13438"),
        "4": makeCssHexColorDefinition("#ff4343"),
        "5": makeCssHexColorDefinition("#ff6767"),
        "6": makeCssHexColorDefinition("#ff8c8c"),
        "7": makeCssHexColorDefinition("#ffc0c0"),
    },
    "msdl-saddlebrown": {
        "1": makeCssHexColorDefinition("#7f2f08"),
        "2": makeCssHexColorDefinition("#a74109"),
        "3": makeCssHexColorDefinition("#ca5010"),
        "4": makeCssHexColorDefinition("#f7630c"),
        "5": makeCssHexColorDefinition("#f7894a"),
        "6": makeCssHexColorDefinition("#f7b189"),
        "7": makeCssHexColorDefinition("#f2d5c9"),
    },
    "msdl-sapphire": {
        "1": makeCssHexColorDefinition("#11255e"),
        "2": makeCssHexColorDefinition("#19318d"),
        "3": makeCssHexColorDefinition("#203dbd"),
        "4": makeCssHexColorDefinition("#2849ec"),
        "5": makeCssHexColorDefinition("#4f6bed"),
        "6": makeCssHexColorDefinition("#7c96f9"),
        "7": makeCssHexColorDefinition("#a6bdff"),
    },
    "msdl-scarletgum": {
        "1": makeCssHexColorDefinition("#460f54"),
        "2": makeCssHexColorDefinition("#5c126b"),
        "3": makeCssHexColorDefinition("#721481"),
        "4": makeCssHexColorDefinition("#881798"),
        "5": makeCssHexColorDefinition("#b146c2"),
        "6": makeCssHexColorDefinition("#dea2ed"),
    },
    "msdl-teal": {
        "1": makeCssHexColorDefinition("#066"),
        "2": makeCssHexColorDefinition("#038387"),
        "3": makeCssHexColorDefinition("#009ca4"),
        "4": makeCssHexColorDefinition("#00b7c3"),
        "5": makeCssHexColorDefinition("#30c6cc"),
        "6": makeCssHexColorDefinition("#61d6d6"),
        "7": makeCssHexColorDefinition("#91e5df"),
    },
    "msdl-tyrianpurple": {
        "1": makeCssHexColorDefinition("#6b0036"),
        "2": makeCssHexColorDefinition("#970044"),
        "3": makeCssHexColorDefinition("#c30052"),
        "4": makeCssHexColorDefinition("#ea005e"),
        "5": makeCssHexColorDefinition("#ee3f86"),
        "6": makeCssHexColorDefinition("#edbed2"),
    },
    "msdl-white": makeCssHexColorDefinition("#fff"),
    "msdl-windsor": {
        "1": makeCssHexColorDefinition("#49397a"),
        "2": makeCssHexColorDefinition("#5e4a9d"),
        "3": makeCssHexColorDefinition("#735bc1"),
        "4": makeCssHexColorDefinition("#886ce4"),
        "5": makeCssHexColorDefinition("#9c89e9"),
        "6": makeCssHexColorDefinition("#c3c3f4"),
    },
    "msdl-yellow": {
        "1": makeCssHexColorDefinition("#986f0b"),
        "2": makeCssHexColorDefinition("#c19c00"),
        "3": makeCssHexColorDefinition("#dfbe00"),
        "4": makeCssHexColorDefinition("#fce100"),
        "5": makeCssHexColorDefinition("#fff100"),
        "6": makeCssHexColorDefinition("#faec6e"),
        "7": makeCssHexColorDefinition("#f9f1a5"),
    },
};
