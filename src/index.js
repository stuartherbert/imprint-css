const plugin = require('tailwindcss/plugin')
import { colors } from "./colors";
import { containers, screens } from "./utilities/screens";
import { typographySpacingStyles } from './typography/typography-spacing';
import { typographySizeRelunits, typographySizeStyles } from "./typography/typography-sizes";
import { typographyFontModifierStyles } from "./typography/typography-font-modifiers";
import { buildRelunits } from "./utilities/relunits";
import { spacingUnits } from "./utilities/spacing";
import { typographStyles } from "./typography/typography-styles";
import colorSwatch from "./components/color-swatch";
import { headings } from "./typography/headings";

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

  // add the typography as static utilities
  addUtilities(typographySpacingStyles);
  addUtilities(typographyFontModifierStyles);
  addUtilities(typographySizeStyles);
  addUtilities(typographStyles);

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