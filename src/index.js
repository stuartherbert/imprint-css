const util = require('util');

const plugin = require('tailwindcss/plugin');

const { borders } = require("./variables/borders");

// ================================================================
//
// Import all the bits that make up ImprintCSS
//
// ----------------------------------------------------------------

// ----------------------------------------------------------------
//
// import our new screens
//
// ----------------------------------------------------------------

const devices = require("./devices/screens.js");

// ----------------------------------------------------------------
//
// import our additional colors
//
// ----------------------------------------------------------------

const colors = require("./colors/colors.js");

// ----------------------------------------------------------------
//
// import our default styling
//
// ----------------------------------------------------------------

const body = require("./typography/body");
const flow = require("./typography/flow");
const fonts = require("./typography/fonts");
const fontModifiers = require("./typography/font-modifiers");
const fontSpacing = require('./typography/font-spacing');
const headings = require("./typography/headings");
const inlineBlocks = require("./typography/inline-block");
const links = require("./typography/links");
const lists = require("./typography/lists");
const main = require("./typography/main");
const pre = require("./typography/pre");
const spacing = require("./typography/spacing.js");
const text = require("./typography/text");
const tables = require("./typography/tables");

// ----------------------------------------------------------------
//
// import our components
//
// ----------------------------------------------------------------

const alert = require("./components/alert");
const block = require("./components/block");
const callout = require("./components/callout");
const colorSwatch = require("./components/color-swatch");
const depth = require("./components/depth");
const inner = require("./components/inner");
const panel = require("./components/panel");

const { semantic } = require("./variables/semantic");

const relunits = {
  ...inlineBlocks.theme.spacing.relunits,
};

const imprintCss = {
  // these are a special case
  //
  // they need adding separately, to avoid circular dependencies
  internalUtilities: {
    vars: {
      ...body.internalUtilities.vars,
    },
    styles: {
      ...fontSpacing.internalUtilities.styles,
      ...fontModifiers.internalUtilities.styles,
      ...inlineBlocks.internalUtilities.styles,
      ...body.internalUtilities.styles,
    }
  },

  // these can be added using the `addUtility()` function
  staticUtilities: {
    vars: {
      ...spacing.staticUtilities.vars,
      ...devices.staticUtilities.vars,
      ...fonts.staticUtilities.vars,
      ...headings.staticUtilities.vars,
      ...main.staticUtilities.vars,
      ...pre.staticUtilities.vars,
      ...text.staticUtilities.vars,
      ...lists.staticUtilities.vars,
      ...links.staticUtilities.vars,
      ...flow.staticUtilities.vars,
      ...tables.staticUtilities.vars,
      ...borders.vars,
      ...depth.cars,
    },
    styles: {
      ...devices.staticUtilities.styles,
      ...main.staticUtilities.styles,
      ...fonts.staticUtilities.styles,
      ...headings.staticUtilities.styles,
      ...text.staticUtilities.styles,
      ...pre.staticUtilities.styles,
      ...lists.staticUtilities.styles,
      ...links.staticUtilities.styles,
      ...flow.staticUtilities.styles,
      ...tables.staticUtilities.styles,
    },
  },
  components: {
    vars: {
      ...semantic.vars,
      ...alert.components.vars,
      ...block.components.vars,
      ...callout.components.vars,
      ...colorSwatch.components.vars,
      ...depth.components.vars,
      ...inner.components.vars,
      ...panel.components.vars,
    },
    styles: {
      // these are utilities, but they go here so that they can be overridden
      // in the HTML
      ...depth.components.styles,
      ...inner.components.styles,

      ...alert.components.styles,
      ...block.components.styles,
      ...callout.components.styles,
      ...colorSwatch.components.styles,
      ...panel.components.styles,
    },
  },
  theme: {
    screens: devices.theme.screens,
    colors: colors.theme.colors,
    relunits,
    extend: {
      lineHeight: { ...relunits },
      spacing: { ...spacing.theme.spacing.spacingUnits, ...relunits },
    }
  }
}

console.log(util.inspect(imprintCss, { depth: 10, colors: true }));
// console.log(util.inspect(imprintCss.internalStyles, { depth: 10, colors: true }));

module.exports = plugin(function({ matchUtilities, addUtilities, addComponents, theme }) {
  matchUtilities(
    {
      fontsize: (value) => (
        {
          'font-size': value,
        }
      )
    },
    { values: theme('spacing') }
  );

  matchUtilities(
    {
      lineheight: (value) => (
        {
          'line-height': value
        }
      )
    },
    { values: theme('spacing') }
  );

  // add the variables that we reuse in other styles
  addUtilities({
    ':root': {
      ...imprintCss.internalUtilities.vars,
      ...imprintCss.staticUtilities.vars,
      ...imprintCss.components.vars,
    }
  });

  // these need adding separately to avoid circular dependency errors
  addUtilities(imprintCss.internalUtilities.styles);

  // add our typography styles
  addUtilities({
    '.imprint': {
      ...main.staticUtilities.styles,
      ...headings.staticUtilities.styles,
      ...text.staticUtilities.styles,
      ...pre.staticUtilities.styles,
      ...lists.staticUtilities.styles,
      ...links.staticUtilities.styles,
      ...flow.staticUtilities.styles,
      ...tables.staticUtilities.styles,
    }
  })

  // add the containers as static utilities
  addUtilities(devices.staticUtilities.styles);

  // add more complex components
  addComponents({
      ...imprintCss.components.styles,
  });
},
{
  theme: {
    screens: devices.theme.screens,
    relunits,
    colors: colors.theme.colors,
    extend: {
      fontSize: { ...relunits },
      lineHeight: { ...relunits },
      spacing: { ...spacing.theme.spacing.spacingUnits, ...relunits },
    }
  }
})