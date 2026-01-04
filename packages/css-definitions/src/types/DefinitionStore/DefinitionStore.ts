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

import type { CssStyle, CssStyles, CssVar, CssVars, MediaQueryDefinition, StaticStyle, StaticStyles, TailwindThemeColors } from "@imprintcss/tailwind-plugin-types";
import { HashMap, isString, type Maybe } from "@safelytyped/core-types";
import type { RecursiveKeyValuePair } from "tailwindcss/types/config";
import { cssLengthSuffix } from "../../helpers/cssLengthSuffix";
import { replaceCssLengthSuffix } from "../../helpers/replaceCssLengthSuffix";
import { rootPixel } from "../../helpers/rootPixel";
import type { ColorGroups } from "../ColorGroups/ColorGroups.type";
import { newColorGroups, type ColorGroupsInitialiser } from "../ColorGroups/newColorGroups";
import type { DeviceGroups } from "../DeviceGroups/DeviceGroups.type";
import type { ImprintTypographyStyle } from "../ImprintTypographyStyle/ImprintTypographyStyle.type";
import type { RootPixelOptions } from "../RootPixelOptions/RootPixelOptions.type";
import { DEFAULT_ROOT_PIXEL_OPTIONS } from "../RootPixelOptions/defaults/DEFAULT_ROOT_PIXEL_OPTIONS";

export class DefinitionStore
{
    typographyDefinitions: HashMap<ImprintTypographyStyle> = {};
    devices: DeviceGroups = {};
    sizing: {
        rootPixels: HashMap<string>;
        spacing: HashMap<string>;
        fontSizes: HashMap<string>;
        fontWeights: HashMap<string>;
        lineHeights: HashMap<string>;
    } = {
            rootPixels: {},
            spacing: {},
            fontSizes: {},
            fontWeights: {},
            lineHeights: {}
        };

    public readonly staticStyles: StaticStyles = {};

    public colorGroups: ColorGroups;

    public allVars: CssVars = {};

    public allStyles: CssStyles = {};

    theme: {
        extend: {
            borderRadius: HashMap<string>;
            colors: RecursiveKeyValuePair<string,string>;
            screens: HashMap<MediaQueryDefinition>;
            spacing: HashMap<string>;
            fontSize: HashMap<string>;
            fontWeight: HashMap<string>;
            lineHeight: HashMap<string>;
        }
    } = {
            extend: {
                borderRadius: {},
                colors: {},
                screens: {},
                spacing: {},
                fontSize: {},
                fontWeight: {},
                lineHeight: {},
            }
        };

    public constructor(
        {
            colorGroups,
        }: {
            colorGroups: ColorGroupsInitialiser,
        } = {
            colorGroups: {}
        }
    )
    {
        this.colorGroups = newColorGroups(colorGroups);
    }

    public addColors(colors: TailwindThemeColors)
    {
        this.theme.extend.colors = {
            ...this.theme.extend.colors,
            ...colors
        };
    }

    public addColorGroups(colorGroups: ColorGroups)
    {
        this.colorGroups = colorGroups;
    }

    public addStaticStyle(input: StaticStyle)
    {
        this.staticStyles[input.name] = input;

        this.allStyles = {
            ...this.allStyles,
            ...input.baseStyles,
            ...input.utilityStyles,
            ...input.componentStyles,
        };

        this.allVars = {
            ...this.allVars,
            ...input.vars,
        };
    }

    public generateRootPixels(rootPixelOptions: Partial<RootPixelOptions>) {
        // set our defaults
        const rootPixelSizes =
        {
            ...DEFAULT_ROOT_PIXEL_OPTIONS,
            ...rootPixelOptions
        };

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
            case "px": {
                const name = replaceCssLengthSuffix(newUnit, "rpx");
                value = rootPixel(newUnit);

                this.sizing.rootPixels[name] = value;
                this.theme.extend.spacing[name] = value;

                // all done
                return value;
            }
            case "rpx":
                value = rootPixel(newUnit);

                this.sizing.rootPixels[newUnit] = value;
                this.theme.extend.spacing[newUnit] = value;
                return value;

            default:
                throw new Error("unsupported spacing unit " + unitType);
        }
    }

    public styles(cssSelector: string): Maybe<CssStyle>
    {
        return this.allStyles[cssSelector];
    }

    public var(varName: string): Maybe<CssVar>
    {
        return this.allVars[varName];
    }

    public exportVars(): HashMap<string>
    {
        return HashMap.map(this.allVars, (cssVar) => cssVar.value);
    }

    public exportBaseLayer(): CssStyles
    {
        return HashMap.flatMap(this.staticStyles, (style) => style.baseStyles);
    }

    public exportUtilityLayer(): CssStyles
    {
        return HashMap.flatMap(this.staticStyles, (style) => style.utilityStyles);
    }

    public exportComponentLayer(): CssStyles
    {
        return HashMap.flatMap(this.staticStyles, (style) => style.componentStyles);
    }
}