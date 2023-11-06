import { applyStyle, buildOutExternalStyles, rememberStyle } from "../helpers/styles";
import { styleDefinitions, stylesAndScreens } from "./__definitions";

const typographyInternalStyles = stylesAndScreens();
const typographyFontModifierStyles = {};

// create the 'internal' utility definitions
styleDefinitions().forEach(
    function({ styleName, screenName, fontModifiers}) {
        // do we have any modifiers for this style?
        if (fontModifiers.length === 0) {
            return;
        }

        // what is our internal style called?
        const fontsStyleName = '__imprint-' + styleName + '-' + screenName + '-fonts';
        const fontsStyles = fontModifiers.map((fontModifier) => 'font-' + fontModifier);

        // define it
        applyStyle(typographyFontModifierStyles, '.'+fontsStyleName, ...fontsStyles);

        // remember them for later
        rememberStyle(typographyInternalStyles, styleName, screenName, 'fonts', fontsStyleName);
    }
)

// define the styles that we will document :)
buildOutExternalStyles(typographyFontModifierStyles, typographyInternalStyles);

module.exports = {
    typographyFontModifierStyles,
}