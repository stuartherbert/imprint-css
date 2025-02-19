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

import { describe } from "mocha";
import { ALL_COLORS } from "../defaults/ALL_COLORS";
import { BOOTSTRAP_COLORS, colorFromCollection, GANBARO_COLORS } from "@imprintcss/color-collections";
import { expect } from "chai";
import { mustBeCssColorPalette } from "../types/CssColorPalette/mustBeCssColorPalette";

describe("colorFromCollection", () => {
    it("can retrieve colors that are not in a palette", () => {
        // ----------------------------------------------------------------
        // explain your test

        // this test proves that colorFromCollection() can successfully
        // find a color that is defined directly in the collection.

        // ----------------------------------------------------------------
        // setup your test

        const expectedValue = ALL_COLORS['imprint-blackgold'];
        expect(expectedValue).is.not.undefined;

        // ----------------------------------------------------------------
        // perform the change

        const actualValue = colorFromCollection("imprint-blackgold");

        // ----------------------------------------------------------------
        // test the results

        expect(actualValue).is.not.undefined;
        expect(actualValue).eqls(expectedValue);
    });

    it("can retrieve colors from a color palette", () => {
        // ----------------------------------------------------------------
        // explain your test

        // this test proves that colorFromCollection() can successfully
        // find a color that is defined inside a nested color palette

        // ----------------------------------------------------------------
        // setup your test

        const ganbaroBlue = mustBeCssColorPalette(GANBARO_COLORS['ganbaro-blue']);
        const expectedValue = ganbaroBlue['500'];
        expect(expectedValue).is.not.undefined;

        // ----------------------------------------------------------------
        // perform the change

        const actualValue = colorFromCollection("ganbaro-blue-500");

        // ----------------------------------------------------------------
        // test the results

        expect(actualValue).is.not.undefined;
        expect(actualValue).eqls(expectedValue);
    });

    it("supports color palettes with a DEFAULT color", () => {
        // ----------------------------------------------------------------
        // explain your test

        // this test proves that colorFromCollection() will successfully
        // return the DEFAULT color from a color palette

        // ----------------------------------------------------------------
        // setup your test

        const bootstrapPurple = mustBeCssColorPalette(BOOTSTRAP_COLORS['bs-purple']);
        const expectedValue = bootstrapPurple.DEFAULT;
        expect(expectedValue).is.not.undefined;

        // ----------------------------------------------------------------
        // perform the change

        const actualValue = colorFromCollection("bs-purple");

        // ----------------------------------------------------------------
        // test the results

        expect(actualValue).is.not.undefined;
        expect(actualValue).eqls(expectedValue);
    });

    it("uses the ALL_COLORS collection by default", () => {
        // ----------------------------------------------------------------
        // explain your test

        // this test proves that the caller does not have to pass a
        // `collection` parameter to colorFromCollection()

        // ----------------------------------------------------------------
        // setup your test

        const expectedValue = ALL_COLORS['imprint-blackgold'];
        expect(expectedValue).is.not.undefined;

        // ----------------------------------------------------------------
        // perform the change

        const actualValue = colorFromCollection("imprint-blackgold");

        // ----------------------------------------------------------------
        // test the results

        expect(actualValue).is.not.undefined;
        expect(actualValue).eqls(expectedValue);
    });
});