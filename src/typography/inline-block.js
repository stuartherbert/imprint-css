import { applyStyle, buildOutExternalStyles, rememberStyle } from "../helpers/styles";
import { addRelunit } from '../helpers/relunits';
import { styleDefinitions, stylesAndScreens } from "./__definitions";

const internalStyles = stylesAndScreens();
const inlineBlockRelunits = {};
const inlineBlockStyles = {};

// create the 'internal' utility definitions
styleDefinitions().forEach(
    function({ styleName, screenName, fontSize, lineHeight, fontModifiers}) {
        // make sure they're in the list of relunits to export
        addRelunit(inlineBlockRelunits, fontSize);
        addRelunit(inlineBlockRelunits, lineHeight);

        // what are our internal styles called?
        const inlineStyleName = '__imprint-' + styleName + '-' + screenName + '-inline';
        const blockStyleName = '__imprint-' + styleName + '-' + screenName + '-block';

        // define them!
        applyStyle(inlineBlockStyles, '.'+inlineStyleName, 'fontsize-' + fontSize);
        applyStyle(inlineBlockStyles, '.'+blockStyleName, inlineStyleName, 'lineheight-' + lineHeight);

        // remember them for later
        rememberStyle(internalStyles, styleName, screenName, 'inline', inlineStyleName);
        rememberStyle(internalStyles, styleName, screenName, 'block', blockStyleName)
    }
)

// define the styles that we will document :)
buildOutExternalStyles(inlineBlockStyles, internalStyles);

module.exports = {
    inlineBlockRelunits,
    inlineBlockStyles
}