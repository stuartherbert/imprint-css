const plugin = require('tailwindcss/plugin')
import { colors } from "./colors";
import { containers, screens } from "./screens";
import { typographySizeRelunits, typographySizeStyles } from "./typography-sizes";
import { buildRelunits } from "./relunits";
import { spacingUnits } from "./spacing";
import { typographStyles } from "./typography-styles";

// calculate the relative units that we need to add to the theme
const relunits = buildRelunits(
  typographySizeRelunits
);

module.exports = plugin(function({ matchUtilities, addUtilities, theme }) {
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
  addUtilities(typographySizeStyles);
  addUtilities(typographStyles);

  // add the containers as static utilities
  addUtilities(containers);

  // add our base styles
  addUtilities({
    '.imprint': {
      // base styles
      'h1': {
        '@apply canon-block': {}
      },
      'h2': {
        '@apply trafalga-block': {},
      },
    },
  })
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