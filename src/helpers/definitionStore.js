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

const { TYPOGRAPHY_DEFINITIONS } = require("../typography/__definitions");
const _ = require("lodash");
const { cssLengthSuffix, replaceCssLengthSuffix, calculateRootPixel } = require("./sizingUnits");

const definitionStore = {
    typographyDefinitions: TYPOGRAPHY_DEFINITIONS,
    devices: {},
    colors: {},
    internalStyles: {},
    sizing: {
        rootPixels: {},
        spacing: {},
        fontsizes: {},
        lineheights: {},
    },
    baseLayer: {
        vars: {},
        styles: {},
    },
    defaultStyling: {
        vars: {},
        styles: {},
    },
    staticUtilities: {
        vars: {},
        styles: {},
        byName: {},
    },
    staticComponents: {
        vars: {},
        styles: {},
    },
    theme: {
        extend: {
            borderRadius: {},
            colors: {},
            screens: {},
            spacing: {},
        },
    },

    /**
     *
     * @param {import("../../types").CssVars} vars
     * @param {*} destination
     */
    addVars: function (vars, destination) {
        Object.getOwnPropertyNames(vars).forEach(
            function(varName) {
                destination.vars[varName] = vars[varName].value;
            }
        )
    },

    /**
     *
     * @param {import("../../types").CssStyles} styles
     * @param {*} destination
     */
    addStyles: function (styles, destination) {
        _.merge(destination.styles, styles);
        // Object.getOwnPropertyNames(styles).forEach(
        //     function(styleName) {
        //         destination.styles[styleName] = {
        //             ...destination.styles[styleName] ?? {},
        //             ...styles[styleName]
        //         };
        //     }
        // )
    },

    /**
     *
     * @param {string} name
     * @param {import("../../types").StaticUtility} staticUtility
     */
    addStaticUtility: function (name, staticUtility) {
        // keep a record for our documentation
        this.staticUtilities.byName[name] = staticUtility;

        // expand it now, ready to ship to Tailwind
        this.addVars(staticUtility.vars, this.staticUtilities);
        this.addStyles(staticUtility.styles, this.staticUtilities);
        this.addStyles(staticUtility.baseStyles ?? {}, this.baseLayer);
    },

    generateRootPixels: function(rootPixelOptions) {
        // set our defaults
        const rootPixelSizes = {
            'fullCoverage': rootPixelOptions.fullCoverage ?? 40,
            'series': rootPixelOptions.series ?? [2, 3, 5],
            'maxRootPixel': rootPixelOptions.maxRootPixel ?? 800,
        }

        // full coverage
        for (let i = 1 ; i <= rootPixelSizes.fullCoverage; i = i+1) {
            definitionStore.rootPixel(i.toFixed());
        }

        // individual series
        for (const series of rootPixelSizes.series) {
            for (let i = series ; i <= rootPixelSizes.maxRootPixel; i = i+series) {
                definitionStore.rootPixel(i.toFixed());
            }
        }

        // all done
    },

    /**
     * converts the given CSS size into rem units, and adds it to our
     * sizing definitions
     *
     * supports units in: px, su
     *
     * @param {string} newUnit
     * @returns
     */
    rootPixel: function(newUnit) {
        // robustness
        if (newUnit === undefined) {
            return undefined;
        }

        // what are we looking at?
        let unitType = cssLengthSuffix(newUnit);
        if (unitType.length === 0) {
            unitType = "px";
        }

        switch (unitType) {
            case "px":
                const name = replaceCssLengthSuffix(newUnit, "rpx");
                const value = calculateRootPixel(newUnit)

                definitionStore.sizing.rootPixels[name] = value;
                definitionStore.theme.extend.spacing[name] = value;

                // all done
                return value;

            case "su":
                return definitionStore.theme.extend.spacing[newUnit];

            default:
                throw new Error("unsupported spacing unit " + unitType);
        }
    },
}

module.exports = definitionStore;