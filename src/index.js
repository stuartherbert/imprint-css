const util = require('util');

const plugin = require('tailwindcss/plugin');

const { colorSwatch } = require("./components/color-swatch");
const { headingVars, headingStyles } = require("./typography/headings");
const { textStyles, textVars } = require("./typography/text");
const { typographyFontModifierStyles } = require("./typography/font-modifiers");
const { inlineBlockRelunits, inlineBlockStyles } = require("./typography/inline-block");
const { typographySpacingStyles } = require('./typography/font-spacing');
const { buildRelunits } = require("./helpers/relunits");
const { containers, screens } = require("./theme/screens");
const { spacingUnits } = require("./utilities/spacing");
const { colors } = require("./theme/colors.js");
const { fontVars } = require("./typography/fonts");
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
    }
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
  addComponents(colorSwatch);
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