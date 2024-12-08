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

import { HashMap, isString, type Maybe } from "@safelytyped/core-types";
import type { ImprintTypographyStyle } from "../ImprintTypographyStyle/ImprintTypographyStyle.type";
import type { StaticUtility } from "../StaticUtility/StaticUtility.type";
import type { CssDefinition } from "../CssDefinition/CssDefinition.type";
import type { StaticUtilities } from "../StaticUtilities/StaticUtilities.type";
import type { TailwindColorsData } from "../TailwindColorsData/TailwindColorsData.type";
import { cssLengthSuffix } from "../../helpers/cssLengthSuffix";
import { replaceCssLengthSuffix } from "../../helpers/replaceCssLengthSuffix";
import { rootPixel } from "../../helpers/rootPixel";
import type { DeviceGroups } from "../DeviceGroups/DeviceGroups.type";
import type { StaticComponent } from "../StaticComponent/StaticComponent.type";
import type { StaticComponents } from "../StaticComponents/StaticComponents.type";
import type { RootPixelOptions } from "../RootPixelOptions/RootPixelOptions.type";
import type { TailwindMediaQueryDefinition } from "../TailwindMediaQueryDefinition/TailwindMediaQueryDefinition.type";
import type { CssStyles } from "../CssStyles/CssStyles.type";
import type { CssStyle } from "../CssStyle/CssStyle.type";
import type { CssVar } from "../CssVar/CssVar.type";

export class DefinitionStore
{
    typographyDefinitions: HashMap<ImprintTypographyStyle> = {};
    devices: DeviceGroups = {};
    sizing: {
        rootPixels: HashMap<string>;
        spacing: HashMap<string>;
        fontSizes: HashMap<string>;
        lineHeights: HashMap<string>;
    } = {
        rootPixels: {},
        spacing: {},
        fontSizes: {},
        lineHeights: {}
    };

    public allDefaultStyles: CssStyles = {}

    public internalStyles: CssStyles = {}

    public readonly staticUtilities: StaticUtilities = {};
    public readonly staticComponents: StaticComponents = {};

    public allStaticUtilityStyles = {};
    public allStaticUtilityVars: HashMap<string> = {};
    public allStaticComponentStyles = {};
    public allStaticComponentVars: HashMap<string> = {};

    public allBaseLayerStyles: CssDefinition = {
        vars: {},
        styles: {},
    };

    theme: {
        extend: {
            borderRadius: HashMap<string>;
            colors: object;
            screens: HashMap<TailwindMediaQueryDefinition>;
            spacing: HashMap<string>;
            fontSize: HashMap<string>;
            lineHeight: HashMap<string>;
        }
    } = {
        extend: {
            borderRadius: {},
            colors: {},
            screens: {},
            spacing: {},
            fontSize: {},
            lineHeight: {},
        }
    };

    public addColors(colors: TailwindColorsData)
    {
        this.theme.extend.colors = {
            ...this.theme.extend.colors,
            ...colors
        }
    }

    public addStaticComponent(input: StaticComponent)
    {
        this.staticComponents[input.name] = input;

        this.allStaticComponentStyles = {
            ...this.allStaticComponentStyles,
            ...input.styles
        }
        this.allBaseLayerStyles = {
            ...this.allBaseLayerStyles,
            ...input.baseStyles,
        }
        HashMap.forEach(
            input.vars,
            (cssVar) => this.allStaticComponentVars[cssVar.name] = cssVar.value,
        );
    }

    /**
     *
     * @param {string} name
     * @param {import("../../types").StaticUtility} staticUtility
     */
    public addStaticUtility(staticUtility: StaticUtility) {
        this.staticUtilities[staticUtility.name] = staticUtility;

        this.allStaticUtilityStyles = {
            ...this.allStaticUtilityStyles,
            ...staticUtility.styles
        }
        this.allBaseLayerStyles = {
            ...this.allBaseLayerStyles,
            ...staticUtility.baseStyles,
        }
        this.allDefaultStyles = {
            ...this.allDefaultStyles,
            ...staticUtility.defaultStyles,
        }

        HashMap.forEach(
            staticUtility.vars,
            (cssVar) => this.allStaticUtilityVars[cssVar.name] = cssVar.value,
        );
    }

    public generateRootPixels(rootPixelOptions: RootPixelOptions) {
        // set our defaults
        const rootPixelSizes = {
            'fullCoverage': rootPixelOptions.fullCoverage ?? 40,
            'series': rootPixelOptions.series ?? [2, 3, 5],
            'maxRootPixel': rootPixelOptions.maxRootPixel ?? 800,
        }

        // full coverage
        for (let i = 1 ; i <= rootPixelSizes.fullCoverage; i = i+1) {
            this.rootPixel(i.toFixed());
        }

        // individual series
        for (const series of rootPixelSizes.series) {
            for (let i = series ; i <= rootPixelSizes.maxRootPixel; i = i+series) {
                this.rootPixel(i.toFixed());
            }
        }

        // all done
    }

    /**
     * converts the given CSS size into rem units, and adds it to our
     * sizing definitions
     *
     * supports units in: px
     */
    public rootPixel(newUnit: string): string {
        // robustness
        if (!isString(newUnit)) {
            throw new Error("something went wrong");
        }
        // what are we looking at?
        const unitType = cssLengthSuffix(newUnit);
        let value: string = "";

        switch (unitType) {
            case "px":
                const name = replaceCssLengthSuffix(newUnit, "rpx");
                value = rootPixel(newUnit);

                this.sizing.rootPixels[name] = value;
                this.theme.extend.spacing[name] = value;

                // all done
                return value;

            case "rpx":
                value = rootPixel(newUnit);

                this.sizing.rootPixels[newUnit] = value;
                this.theme.extend.spacing[newUnit] = value;
                return value;

            default:
                throw new Error("unsupported spacing unit " + unitType);
        }
    }

    public styles(styleName: string): CssStyle
    {
        let retval: CssStyle = {};
        HashMap.forEach(
            {
                ...this.staticComponents,
                ...this.staticUtilities,
            },
            function(staticUtility) {
                if (HashMap.has(staticUtility.styles, styleName)) {
                    retval = {
                        ...retval,
                        ...staticUtility.styles[styleName]
                    }
                }
            }
        );

        // all done
        return retval;
    }

    public var(varName: string): Maybe<CssVar>
    {
        let retval: Maybe<CssVar> = undefined;

        HashMap.forEach(
            {
                ...this.staticComponents,
                ...this.staticUtilities,
            },
            function(staticUtility) {
                if (HashMap.has(staticUtility.vars, varName)) {
                    retval = staticUtility.vars[varName];
                }
            }
        );

        return retval;
    }
}