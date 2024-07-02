const definitionStore = require('../helpers/definitionStore.js');
const { ALL_SCREEN_NAMES, SCREEN_DEFINITIONS, mediaQuery } = require("../sizing/screens.js");

const bodyFontSizeStyles = {};
ALL_SCREEN_NAMES.forEach(
    function(screenName) {
        // do we have a bodyfont size?
        if (SCREEN_DEFINITIONS[screenName].bodyFontSize === undefined) {
            return;
        }

        // if we get here, we do

        bodyFontSizeStyles[mediaQuery(screenName)] = {
            'font-size': SCREEN_DEFINITIONS[screenName].bodyFontSize,
        }
    }
);
definitionStore.staticUtilities.styles['.imprint-fontsize-root'] = bodyFontSizeStyles;