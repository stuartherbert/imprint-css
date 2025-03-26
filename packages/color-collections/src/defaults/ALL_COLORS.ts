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

import { APPLE_COLORS } from "../colors/apple";
import { BOOTSTRAP_COLORS } from "../colors/bootstrap";
import { CSS_NAMED_COLORS } from "../colors/css";
import { FLAT_COLORS } from "../colors/flat";
import { GANBARO_COLORS } from "../colors/ganbaro";
import { IMPRINT_COLORS } from "../colors/imprint";
import { MATERIAL_COLORS } from "../colors/material-design";
import { MATMET_COLORS } from "../colors/material-ui-metro";
import { METRO_COLORS } from "../colors/metro";
import { MSDL1_COLORS } from "../colors/msdl1";
import { MSDL2_COLORS } from "../colors/msdl2";
import { SOCIAL_COLORS } from "../colors/social";
import { TAILWIND3_COLORS } from "../colors/tailwind3";
import { WIKIPEDIA_COLORS } from "../colors/wikipedia";
import { collectionToDefinitions } from "../transforms/collectionToDefinitions";
import type { CssColorDefinitions } from "../types/CssColorDefinitions/CssColorDefinitions.type";

export const ALL_COLORS: CssColorDefinitions = {
    ...APPLE_COLORS,
    ...collectionToDefinitions(BOOTSTRAP_COLORS),
    ...CSS_NAMED_COLORS,
    ...FLAT_COLORS,
    ...collectionToDefinitions(GANBARO_COLORS),
    ...IMPRINT_COLORS,
    ...collectionToDefinitions(MATERIAL_COLORS),
    ...MATMET_COLORS,
    ...METRO_COLORS,
    ...MSDL1_COLORS,
    ...collectionToDefinitions(MSDL2_COLORS),
    ...SOCIAL_COLORS,
    ...collectionToDefinitions(TAILWIND3_COLORS),
    ...WIKIPEDIA_COLORS,
};

// console.log(ALL_COLORS);