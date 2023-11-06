const plugin = require('tailwindcss/plugin')

import { colorSwatch } from "./components/color-swatch";
import { headingStyles } from "./typography/headings";
import { textStyles, textVars } from "./typography/text";
import { typographyFontModifierStyles } from "./typography/font-modifiers";
import { inlineBlockRelunits, inlineBlockStyles } from "./typography/inline-block";
import { typographySpacingStyles } from './typography/font-spacing';
import { buildRelunits } from "./helpers/relunits";
import { containers, screens } from "./utilities/screens";
import { spacingUnits } from "./utilities/spacing";
import { colors } from "./theme/colors";
import { fontVars } from "./typography/fonts";
import { spacingVars } from "./variables/spacing";
import { preStyles, preVars } from "./typography/pre";
import { listStyles, listVars } from "./typography/lists";

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
    { values: theme('relunits') }
  );

  matchUtilities(
    {
      lineheight: (value) => (
        {
          'line-height': value
        }
      )
    },
    { values: theme('relunits') }
  );

  // add the variables that we reuse in other styles
  addUtilities({
    ':root': {
      ...spacingVars,
      ...fontVars,
      ...preVars,
      ...textVars,
      ...listVars,
    }
  });

  // these need adding separately to avoid circular dependency errors
  addUtilities(typographySpacingStyles);
  addUtilities(typographyFontModifierStyles);
  addUtilities(inlineBlockStyles);

  // add our typography styles
  addUtilities({
    '.imprint': {
      ...headingStyles,
      ...textStyles,
      ...preStyles,
      ...listStyles,
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
      spacing: spacingUnits,
    }
  }
})