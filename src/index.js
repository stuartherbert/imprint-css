const plugin = require('tailwindcss/plugin')
import { typographyRelunits, typographyStyles } from "./typography-sizes";
import { buildRelunits } from "./relunits";

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
    screens: {
      'a': { 'max': "319px"},
      'b': { 'max': "599px" },
      'c': { 'raw': '(min-width:600px) and (pointer:corse)' },
      'd': { 'raw': '(min-width:600px) and (pointer:fine)' },
    },
    relunits,
  }
})