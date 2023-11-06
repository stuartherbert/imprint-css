const plugin = require('tailwindcss/plugin')

import { colorSwatch } from "./components/color-swatch";
import { headings } from "./typography/headings";
import { textStyles } from "./typography/text";
import { typographyFontModifierStyles } from "./typography/typography-font-modifiers";
import { typographySizeRelunits, typographySizeStyles } from "./typography/typography-sizes";
import { typographySpacingStyles } from './typography/typography-spacing';
import { typographStyles } from "./typography/typography-styles";
import { buildRelunits } from "./utilities/relunits";
import { containers, screens } from "./utilities/screens";
import { spacingUnits } from "./utilities/spacing";
import { colors } from "./theme/colors";
import { defaultColors } from "./variables/default-colors";
import { fontVars } from "./variables/fonts";
import { spacingVars } from "./variables/spacing";
import { preStyles } from "./typography/pre";

// calculate the relative units that we need to add to the theme
const relunits = buildRelunits(
  typographySizeRelunits
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
  addUtilities(fontVars);
  addUtilities(spacingVars);

  // add our default colors
  addUtilities(defaultColors);

  // add the typography as static utilities
  addUtilities(typographySpacingStyles);
  addUtilities(typographyFontModifierStyles);
  addUtilities(typographySizeStyles);
  addUtilities(typographStyles);
  addUtilities(textStyles);
  addUtilities(preStyles);

  // add the containers as static utilities
  addUtilities(containers);

  // add our base styles
  addUtilities(headings);

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