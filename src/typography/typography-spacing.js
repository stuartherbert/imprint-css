import { applyStyle, buildOutExternalStyles, rememberStyle } from "../helpers";
import { styleDefinitions, stylesAndScreens } from "./typography-definitions";

const typographySpacingStyles = {};
const typographyInternalStyles = stylesAndScreens();

// create the 'internal' utility definitions
styleDefinitions().forEach(
    function({ styleName, screenName, marginBottom, marginTop, nestedMarginTop}) {
        const stylesToBuild = [
            {
                name: 'spacing',
                value: marginBottom,
                apply: 'mb-'
            },
            {
                name: 'spacingTop',
                value: marginTop,
                apply: 'mt-'
            },
            {
                name: 'nestedSpacingTop',
                value: nestedMarginTop,
                apply: 'mt-'
            },
        ]

        stylesToBuild.forEach(
            function(styleToBuild) {
                // do we have a style?
                if (styleToBuild.value === undefined) {
                    return;
                }

                // yes we do
                const internalStyleName = '__imprint-' + styleName + '-' + screenName + '-' + styleToBuild.name;
                applyStyle(typographySpacingStyles, '.' + internalStyleName, styleToBuild.apply + styleToBuild.value)

                rememberStyle(typographyInternalStyles, styleName, screenName, styleToBuild.name, internalStyleName);
            }
        )
    }
)

// define the styles that we will document :)
buildOutExternalStyles(typographySpacingStyles, typographyInternalStyles);

module.exports = {
    typographySpacingStyles,
}