const util = require('util')

const plugin = require('tailwindcss/plugin')

import { colorSwatch } from "./components/color-swatch";
import { headingVars, headingStyles } from "./typography/headings";
import { textStyles, textVars } from "./typography/text";
import { typographyFontModifierStyles } from "./typography/font-modifiers";
import { inlineBlockRelunits, inlineBlockStyles } from "./typography/inline-block";
import { typographySpacingStyles } from './typography/font-spacing';
import { buildRelunits } from "./helpers/relunits";
import { containers, screens } from "./theme/screens";
import { spacingUnits } from "./utilities/spacing";
import { colors } from "./theme/colors";
import { fontVars } from "./typography/fonts";
import { spacingVars } from "./variables/spacing";
import { preStyles, preVars } from "./typography/pre";
import { listStyles, listVars } from "./typography/lists";
import { bodyStyles, bodyVars } from "./typography/body";
import { mainStyles } from "./typography/main";
import { linksStyles, linksVars } from "./typography/links";
import { flowVars, flowStyles } from "./typography/flow";
import { tableVars, tableStyles } from "./typography/tables";

// calculate the relative units that we need to add to the theme
const relunits = buildRelunits(
  inlineBlockRelunits
);

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