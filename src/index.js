const util = require('util');

const plugin = require('tailwindcss/plugin');
const definitionStore = require('./helpers/definitionStore.js');
const { relunit } = require("./helpers/sizingUnits.js");

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

require("./sizing/screens.js");
require("./sizing/spacing.js");

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
require("./typography/spacing");
require("./typography/inline-blocks");
require('./typography/blocks');

require("./typography/headings");
require("./typography/text");
require("./typography/links");
require("./typography/lists");
require("./typography/pre");
require("./typography/tables");
require("./typography/main");

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

// console.log(util.inspect(definitionStore, { depth: 10, colors: true }));
// process.exit(1);

// make sure we can use our new spacing units for text-* and leading-*
// utilities too
definitionStore.theme.extend.fontSize = definitionStore.theme.extend.spacing;
definitionStore.theme.extend.lineHeight = definitionStore.theme.extend.spacing;

module.exports = plugin(function({ matchUtilities, addUtilities, addComponents, addVariant, theme }) {
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



// const relunits = {
//   ...inlineBlocks.theme.spacing.relunits,
// };

// const imprintCss = {
//   // these are a special case
//   //
//   // they need adding separately, to avoid circular dependencies
//   internalUtilities: {
//     vars: {
//       ...body.internalUtilities.vars,
//     },
//     styles: {
//       ...fontSpacing.internalUtilities.styles,
//       ...fontModifiers.internalUtilities.styles,
//       ...inlineBlocks.internalUtilities.styles,
//       ...body.internalUtilities.styles,
//       ...links.internalUtilities.styles,
//       ...lists.internalUtilities.styles,
//       ...text.internalUtilities.styles,
//     }
//   },

//   // these can be added using the `addUtility()` function
//   staticUtilities: {
//     vars: {
//       ...spacing.staticUtilities.vars,
//       ...devices.staticUtilities.vars,
//       ...semantic.staticUtilities.vars,
//       ...fonts.staticUtilities.vars,
//       ...headings.staticUtilities.vars,
//       ...main.staticUtilities.vars,
//       ...pre.staticUtilities.vars,
//       ...text.staticUtilities.vars,
//       ...lists.staticUtilities.vars,
//       ...links.staticUtilities.vars,
//       ...flow.staticUtilities.vars,
//       ...tables.staticUtilities.vars,
//       ...depth.cars,
//     },
//     styles: {
//       ...devices.staticUtilities.styles,
//       ...main.staticUtilities.styles,
//       ...fonts.staticUtilities.styles,
//       ...headings.staticUtilities.styles,
//       ...text.staticUtilities.styles,
//       ...pre.staticUtilities.styles,
//       ...lists.staticUtilities.styles,
//       ...links.staticUtilities.styles,
//       ...flow.staticUtilities.styles,
//       ...tables.staticUtilities.styles,
//     },
//   },
//   components: {
//     vars: {
//       ...alert.components.vars,
//       ...block.components.vars,
//       ...callout.components.vars,
//       ...colorSwatch.components.vars,
//       ...depth.components.vars,
//       ...inner.components.vars,
//       ...panel.components.vars,
//     },
//     styles: {
//       // these are utilities, but they go here so that they can be overridden
//       // in the HTML
//       ...depth.components.styles,
//       ...inner.components.styles,

//       ...alert.components.styles,
//       ...block.components.styles,
//       ...callout.components.styles,
//       ...colorSwatch.components.styles,
//       ...panel.components.styles,
//     },
//   },
//   variants: {
//     ...text.variants
//   },
//   theme: {
//     screens: devices.theme.screens,
//     colors: colors.theme.colors,
//     relunits,
//     extend: {
//       lineHeight: { ...relunits },
//       spacing: { ...spacing.theme.spacing.spacingUnits, ...relunits },
//     }
//   }
// }

// console.log(util.inspect(imprintCss, { depth: 10, colors: true }));
// // console.log(util.inspect(imprintCss.internalStyles, { depth: 10, colors: true }));

// module.exports = plugin(function({ matchUtilities, addUtilities, addComponents, addVariant, theme }) {
//   matchUtilities(
//     {
//       fontsize: (value) => (
//         {
//           'font-size': value,
//         }
//       )
//     },
//     { values: theme('spacing') }
//   );

//   matchUtilities(
//     {
//       lineheight: (value) => (
//         {
//           'line-height': value
//         }
//       )
//     },
//     { values: theme('spacing') }
//   );

//   // add the variables that we reuse in other styles
//   addUtilities({
//     ':root': {
//       ...imprintCss.internalUtilities.vars,
//       ...imprintCss.staticUtilities.vars,
//       ...imprintCss.components.vars,
//     }
//   });

//   // these need adding separately to avoid circular dependency errors
//   addUtilities(imprintCss.internalUtilities.styles);

//   // add our typography styles
//   addUtilities({
//     '.imprint': {
//       ...main.staticUtilities.styles,
//       ...headings.staticUtilities.styles,
//       ...text.staticUtilities.styles,
//       ...pre.staticUtilities.styles,
//       ...lists.staticUtilities.styles,
//       ...links.staticUtilities.styles,
//       ...flow.staticUtilities.styles,
//       ...tables.staticUtilities.styles,
//     }
//   })

//   // add the containers as static utilities
//   addUtilities(devices.staticUtilities.styles);

//   // add more complex components
//   addComponents({
//       ...imprintCss.components.styles,
//   });

//   // add our variants
//   for (const key of Object.keys(imprintCss.variants)) {
//     addVariant(key, imprintCss.variants[key]);
//   }
// },
// {
//   theme: {
//     screens: devices.theme.screens,
//     relunits,
//     colors: colors.theme.colors,
//     extend: {
//       fontSize: { ...relunits },
//       lineHeight: { ...relunits },
//       spacing: { ...spacing.theme.spacing.spacingUnits, ...relunits },
//     }
//   }
// })