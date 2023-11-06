import { applyStyle, buildOutExternalStyles, rememberStyle } from "../helpers/styles";
import { addRelunit } from '../helpers/relunits';
import { styleDefinitions, stylesAndScreens } from "./typography-definitions";

const typographyInternalStyles = stylesAndScreens();
const typographySizeRelunits = {};
const typographySizeStyles = {};

// create the 'internal' utility definitions
styleDefinitions().forEach(
    function({ styleName, screenName, fontSize, lineHeight, fontModifiers}) {
        // make sure they're in the list of relunits to export
        addRelunit(typographySizeRelunits, fontSize);
        addRelunit(typographySizeRelunits, lineHeight);

        // what are our internal styles called?
        const inlineStyleName = '__imprint-' + styleName + '-' + screenName + '-inline';
        const blockStyleName = '__imprint-' + styleName + '-' + screenName + '-block';

        // define them!
        applyStyle(typographySizeStyles, '.'+inlineStyleName, 'fontsize-' + fontSize);
        applyStyle(typographySizeStyles, '.'+blockStyleName, inlineStyleName, 'lineheight-' + lineHeight);

        // remember them for later
        rememberStyle(typographyInternalStyles, styleName, screenName, 'inline', inlineStyleName);
        rememberStyle(typographyInternalStyles, styleName, screenName, 'block', blockStyleName)
    }
)

// define the styles that we will document :)
buildOutExternalStyles(typographySizeStyles, typographyInternalStyles);

module.exports = {
    typographySizeRelunits,
    typographySizeStyles
}