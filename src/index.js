const plugin = require('tailwindcss/plugin')
import { colors } from "./colors";
import { containers, screens } from "./screens";
import { typographyRelunits, typographyStyles } from "./typography-sizes";
import { buildRelunits } from "./relunits";
import { spacingUnits } from "./spacing";

// calculate the relative units that we need to add to the theme
const relunits = buildRelunits(
  typographyRelunits
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
  addUtilities(typographyStyles);

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