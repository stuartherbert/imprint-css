const util = require('util');

const plugin = require('tailwindcss/plugin');

const { borders } = require("./variables/borders");

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
const panel = require("./components/panel");

const { headingVars, headingStyles } = require("./typography/headings");
const { textStyles, textVars } = require("./typography/text");
const { typographyFontModifierStyles } = require("./typography/font-modifiers");
const { inlineBlockRelunits, inlineBlockStyles } = require("./typography/inline-block");
const { typographySpacingStyles } = require('./typography/font-spacing');
const { buildRelunits } = require("./helpers/relunits");
const { containers, screens } = require("./theme/screens");
const { spacingUnits } = require("./utilities/spacing");
const { inner } = require("./utilities/inner.js");
const { colors } = require("./theme/colors.js");
const { fontVars } = require("./typography/fonts");
const { semantic } = require("./variables/semantic");
const { spacingVars } = require("./variables/spacing");
const { preStyles, preVars } = require("./typography/pre");
const { listStyles, listVars } = require("./typography/lists");
const { bodyStyles, bodyVars } = require("./typography/body");
const { mainStyles } = require("./typography/main");
const { linksStyles, linksVars } = require("./typography/links");
const { flowVars, flowStyles } = require("./typography/flow");
const { tableVars, tableStyles } = require("./typography/tables");

// calculate the relative units that we need to add to the theme
const relunits = buildRelunits(
  inlineBlockRelunits
);

const imprintCss = {
  utilities: {
    vars: {
      ...spacingVars,
      ...fontVars,
      ...bodyVars,
      ...headingVars,
      ...preVars,
      ...textVars,
      ...listVars,
      ...linksVars,
      ...flowVars,
      ...tableVars,
      ...borders.vars,
      ...inner.vars,
      ...depth.cars,
    },
    internalStyles: {
      ...typographySpacingStyles,
      ...typographyFontModifierStyles,
      ...inlineBlockStyles,
      ...bodyStyles,
    },
    styles: {
      ...mainStyles,
      ...headingStyles,
      ...textStyles,
      ...preStyles,
      ...listStyles,
      ...linksStyles,
      ...flowStyles,
      ...tableStyles,
      ...inner.styles,
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
      ...panel.components.vars,
    },
    styles: {
      // these are utilities, but they go here so that they can be overridden
      // in the HTML
      ...depth.components.styles,
      ...inner.styles,

      ...alert.components.styles,
      ...block.components.styles,
      ...callout.components.styles,
      ...colorSwatch.components.styles,
      ...panel.components.styles,
    },
  },
  theme: {
    screens,
    colors,
    // relunits,
    extend: {
      lineHeight: { ...relunits },
      spacing: { ...spacingUnits, ...relunits },
    }
  }
}

console.log(util.inspect(imprintCss, { depth: 10, colors: true }));

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
      ...imprintCss.utilities.vars,
      ...imprintCss.components.vars,
    }
  });

  // these need adding separately to avoid circular dependency errors
  addUtilities(typographySpacingStyles);
  addUtilities(typographyFontModifierStyles);
  addUtilities(inlineBlockStyles);

  addUtilities(bodyStyles);

  // add our typography styles
  addUtilities({
    '.imprint': {
      ...mainStyles,
      ...headingStyles,
      ...textStyles,
      ...preStyles,
      ...listStyles,
      ...linksStyles,
      ...flowStyles,
      ...tableStyles,
    }
  })

  // add the containers as static utilities
  addUtilities(containers);

  // add more complex components
  addComponents({
      ...imprintCss.components.styles,
  });
},
{
  theme: {
    screens,
    relunits,
    colors: colors,
    extend: {
      fontSize: { ...relunits },
      lineHeight: { ...relunits },
      spacing: { ...spacingUnits, ...relunits },
    }
  }
})