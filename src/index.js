const util = require('util');

const plugin = require('tailwindcss/plugin');
const definitionStore = require('./helpers/definitionStore.js');

// ================================================================
//
// Import all the bits that make up ImprintCSS
//
// ----------------------------------------------------------------

// ----------------------------------------------------------------
//
// import our sizing definitions
//
// ----------------------------------------------------------------

require("./sizing/screens");
require("./sizing/spacing");
require("./sizing/bodyFontSize");
require("./utilities/imprint-article");

// ----------------------------------------------------------------
//
// import our additional colors
//
// ----------------------------------------------------------------

require("./colors/colors.js");

// ----------------------------------------------------------------
//
// import our default styling
//
// ----------------------------------------------------------------

require("./variables/semantic");
require("./typography/body");
require("./typography/flow");
require("./typography/fonts");
require("./typography/font-weight");
require('./typography/font-spacing');
require('./typography/font-sizing');
require('./typography/line-heights');
require("./typography/inline-blocks");
require('./typography/blocks');
require("./typography/headings");

// console.log(util.inspect(definitionStore, { depth: 10, colors: true }));
// process.exit(1);

require("./typography/text");
require("./typography/links");
require("./typography/lists");
require("./typography/pre");
require("./typography/tables");
// require("./typography/main");

// ----------------------------------------------------------------
//
// import our components
//
// ----------------------------------------------------------------

require("./components/alert");
require("./components/block");
require("./components/callout");
require("./components/depth");
require("./components/inner");
require("./components/panel");
// const colorSwatch = require("./components/color-swatch");


// make sure we can use our new spacing units for text-* and leading-*
// utilities too
definitionStore.theme.extend.fontSize = definitionStore.theme.extend.spacing;
definitionStore.theme.extend.lineHeight = definitionStore.theme.extend.spacing;

module.exports = plugin(function({ addUtilities, addComponents }) {
    addUtilities({
        ":root": {
            ...definitionStore.staticUtilities.vars,
            ...definitionStore.staticComponents.vars,
            ...definitionStore.defaultStyling.vars,
        }
    });
    addUtilities({
        ".imprint": {
            ...definitionStore.defaultStyling.styles,
        }
    })
    addUtilities({...definitionStore.staticUtilities.styles});
    addComponents({...definitionStore.staticComponents.styles});
},
{
    theme: definitionStore.theme,
});