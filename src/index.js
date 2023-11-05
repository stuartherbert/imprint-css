const plugin = require('tailwindcss/plugin')
import { typographyStyles } from "./sizes";

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

  addUtilities({
    // Canon
    '.__imprint-canon-a-inline': {
      '@apply fontsize-28': {},
    },
    '.__imprint-canon-a-block': {
      '@apply __imprint-canon-a-inline lineheight-32': {},
    },
    '.__imprint-canon-b-inline': {
      '@apply fontsize-32': {},
    },
    '.__imprint-canon-b-block': {
      '@apply __imprint-canon-b-inline lineheight-36': {},
    },
    '.__imprint-canon-c-inline': {
      '@apply fontsize-52': {},
    },
    '.__imprint-canon-c-block': {
      '@apply __imprint-canon-c-inline lineheight-56': {},
    },
    '.__imprint-canon-d-inline': {
      '@apply fontsize-44': {},
    },
    '.__imprint-canon-d-block': {
      '@apply __imprint-canon-d-inline lineheight-48': {},
    },
    '.canon-inline': {
      '@apply a:__imprint-canon-a-inline b:__imprint-canon-b-inline c:__imprint-canon-c-inline d:__imprint-canon-d-inline': {},
    },
    '.canon-block': {
      '@apply a:__imprint-canon-a-block b:__imprint-canon-b-block c:__imprint-canon-c-block d:__imprint-canon-d-block': {},
    },
    // Trafalga
    '.__imprint-trafalga-a-inline': {
      '@apply fontsize-20': {},
    },
    '.__imprint-trafalga-a-block': {
      '@apply __imprint-trafalga-a-inline lineheight-24': {},
    },
    '.__imprint-trafalga-b-inline': {
      '@apply fontsize-24': {},
    },
    '.__imprint-trafalga-b-block': {
      '@apply __imprint-trafalga-b-inline lineheight-28': {},
    },
    '.__imprint-trafalga-c-inline': {
      '@apply fontsize-36': {},
    },
    '.__imprint-trafalga-c-block': {
      '@apply __imprint-trafalga-c-inline lineheight-40': {},
    },
    '.__imprint-trafalga-d-inline': {
      '@apply fontsize-32': {},
    },
    '.__imprint-trafalga-d-block': {
      '@apply __imprint-trafalga-d-inline lineheight-36': {},
    },
    '.trafalga-inline': {
      '@apply a:__imprint-trafalga-a-inline b:__imprint-trafalga-b-inline c:__imprint-trafalga-c-inline d:__imprint-trafalga-d-inline': {},
    },
    '.trafalga-block': {
      '@apply a:__imprint-trafalga-a-block b:__imprint-trafalga-b-block c:__imprint-trafalga-c-block d:__imprint-trafalga-d-block': {},
    },

    // Paragon
    '.__imprint-paragon-a-inline': {
      '@apply fontsize-20': {},
    },
    '.__imprint-paragon-a-block': {
      '@apply __imprint-paragon-a-inline lineheight-24': {},
    },
    '.__imprint-paragon-b-inline': {
      '@apply fontsize-22': {},
    },
    '.__imprint-paragon-b-block': {
      '@apply __imprint-paragon-b-inline lineheight-26': {},
    },
    '.__imprint-paragon-c-inline': {
      '@apply fontsize-28': {},
    },
    '.__imprint-paragon-c-block': {
      '@apply __imprint-paragon-c-inline lineheight-32': {},
    },
    '.__imprint-paragon-d-inline': {
      '@apply fontsize-28': {},
    },
    '.__imprint-paragon-d-block': {
      '@apply __imprint-paragon-d-inline lineheight-32': {},
    },
    '.paragon-inline': {
      '@apply a:__imprint-paragon-a-inline b:__imprint-paragon-b-inline c:__imprint-paragon-c-inline d:__imprint-paragon-d-inline': {},
    },
    '.paragon-block': {
      '@apply a:__imprint-paragon-a-block b:__imprint-paragon-b-block c:__imprint-paragon-c-block d:__imprint-paragon-d-block': {},
    },

    // Double Pica
    '.__imprint-doublepica-a-inline': {
      '@apply fontsize-20': {},
    },
    '.__imprint-doublepica-a-block': {
      '@apply __imprint-doublepica-a-inline lineheight-24': {},
    },
    '.__imprint-doublepica-b-inline': {
      '@apply fontsize-20': {},
    },
    '.__imprint-doublepica-b-block': {
      '@apply __imprint-doublepica-b-inline lineheight-24': {},
    },
    '.__imprint-doublepica-c-inline': {
      '@apply fontsize-26': {},
    },
    '.__imprint-doublepica-c-block': {
      '@apply __imprint-doublepica-c-inline lineheight-30': {},
    },
    '.__imprint-doublepica-d-inline': {
      '@apply fontsize-24': {},
    },
    '.__imprint-doublepica-d-block': {
      '@apply __imprint-doublepica-d-inline lineheight-28': {},
    },
    '.doublepica-inline': {
      '@apply a:__imprint-doublepica-a-inline b:__imprint-doublepica-b-inline c:__imprint-doublepica-c-inline d:__imprint-doublepica-d-inline': {},
    },
    '.doublepica-block': {
      '@apply a:__imprint-doublepica-a-block b:__imprint-doublepica-b-block c:__imprint-doublepica-c-block d:__imprint-doublepica-d-block': {},
    },

    // Great Primer
    '.__imprint-greatprimer-a-inline': {
      '@apply fontsize-18': {},
    },
    '.__imprint-greatprimer-a-block': {
      '@apply __imprint-greatprimer-a-inline lineheight-22': {},
    },
    '.__imprint-greatprimer-b-inline': {
      '@apply fontsize-18': {},
    },
    '.__imprint-greatprimer-b-block': {
      '@apply __imprint-greatprimer-b-inline lineheight-22': {},
    },
    '.__imprint-greatprimer-c-inline': {
      '@apply fontsize-21': {},
    },
    '.__imprint-greatprimer-c-block': {
      '@apply __imprint-greatprimer-c-inline lineheight-24': {},
    },
    '.__imprint-greatprimer-d-inline': {
      '@apply fontsize-20': {},
    },
    '.__imprint-greatprimer-d-block': {
      '@apply __imprint-greatprimer-d-inline lineheight-24': {},
    },
    '.greatprimer-inline': {
      '@apply a:__imprint-greatprimer-a-inline b:__imprint-greatprimer-b-inline c:__imprint-greatprimer-c-inline d:__imprint-greatprimer-d-inline': {},
    },
    '.greatprimer-block': {
      '@apply a:__imprint-greatprimer-a-block b:__imprint-greatprimer-b-block c:__imprint-greatprimer-c-block d:__imprint-greatprimer-d-block': {},
    },

    // Body Copy
    '.__imprint-bodycopy-a-inline': {
      '@apply fontsize-15': {},
    },
    '.__imprint-bodycopy-a-block': {
      '@apply __imprint-bodycopy-a-inline lineheight-20': {},
    },
    '.__imprint-bodycopy-b-inline': {
      '@apply fontsize-16': {},
    },
    '.__imprint-bodycopy-b-block': {
      '@apply __imprint-bodycopy-b-inline lineheight-22': {},
    },
    '.__imprint-bodycopy-c-inline': {
      '@apply fontsize-18': {},
    },
    '.__imprint-bodycopy-c-block': {
      '@apply __imprint-bodycopy-c-inline lineheight-24': {},
    },
    '.__imprint-bodycopy-d-inline': {
      '@apply fontsize-16': {},
    },
    '.__imprint-bodycopy-d-block': {
      '@apply __imprint-bodycopy-d-inline lineheight-22': {},
    },
    '.bodycopy-inline': {
      '@apply a:__imprint-bodycopy-a-inline b:__imprint-bodycopy-b-inline c:__imprint-bodycopy-c-inline d:__imprint-bodycopy-d-inline': {},
    },
    '.bodycopy-block': {
      '@apply a:__imprint-bodycopy-a-block b:__imprint-bodycopy-b-block c:__imprint-bodycopy-c-block d:__imprint-bodycopy-d-block': {},
    },

    // Pica
    '.__imprint-pica-a-inline': {
      '@apply fontsize-15': {},
    },
    '.__imprint-pica-a-block': {
      '@apply __imprint-pica-a-inline lineheight-20': {},
    },
    '.__imprint-pica-b-inline': {
      '@apply fontsize-16': {},
    },
    '.__imprint-pica-b-block': {
      '@apply __imprint-pica-b-inline lineheight-20': {},
    },
    '.__imprint-pica-c-inline': {
      '@apply fontsize-18': {},
    },
    '.__imprint-pica-c-block': {
      '@apply __imprint-pica-c-inline lineheight-22': {},
    },
    '.__imprint-pica-d-inline': {
      '@apply fontsize-16': {},
    },
    '.__imprint-pica-d-block': {
      '@apply __imprint-pica-d-inline lineheight-20': {},
    },
    '.pica-inline': {
      '@apply a:__imprint-pica-a-inline b:__imprint-pica-b-inline c:__imprint-pica-c-inline d:__imprint-pica-d-inline': {},
    },
    '.pica-block': {
      '@apply a:__imprint-pica-a-block b:__imprint-pica-b-block c:__imprint-pica-c-block d:__imprint-pica-d-block': {},
    },

    // Long Primer
    '.__imprint-longprimer-a-inline': {
      '@apply fontsize-15': {},
    },
    '.__imprint-longprimer-a-block': {
      '@apply __imprint-longprimer-a-inline lineheight-18': {},
    },
    '.__imprint-longprimer-b-inline': {
      '@apply fontsize-15': {},
    },
    '.__imprint-longprimer-b-block': {
      '@apply __imprint-longprimer-b-inline lineheight-18': {},
    },
    '.__imprint-longprimer-c-inline': {
      '@apply fontsize-15': {},
    },
    '.__imprint-longprimer-c-block': {
      '@apply __imprint-longprimer-c-inline lineheight-20': {},
    },
    '.__imprint-longprimer-d-inline': {
      '@apply fontsize-14': {},
    },
    '.__imprint-longprimer-d-block': {
      '@apply __imprint-longprimer-d-inline lineheight-18': {},
    },
    '.longprimer-inline': {
      '@apply a:__imprint-longprimer-a-inline b:__imprint-longprimer-b-inline c:__imprint-longprimer-c-inline d:__imprint-longprimer-d-inline': {},
    },
    '.longprimer-block': {
      '@apply a:__imprint-longprimer-a-block b:__imprint-longprimer-b-block c:__imprint-longprimer-c-block d:__imprint-longprimer-d-block': {},
    },

    // Brevier
    '.__imprint-brevier-a-inline': {
      '@apply fontsize-14': {},
    },
    '.__imprint-brevier-a-block': {
      '@apply __imprint-brevier-a-inline lineheight-16': {},
    },
    '.__imprint-brevier-b-inline': {
      '@apply fontsize-14': {},
    },
    '.__imprint-brevier-b-block': {
      '@apply __imprint-brevier-b-inline lineheight-18': {},
    },
    '.__imprint-brevier-c-inline': {
      '@apply fontsize-14': {},
    },
    '.__imprint-brevier-c-block': {
      '@apply __imprint-brevier-c-inline lineheight-18': {},
    },
    '.__imprint-brevier-d-inline': {
      '@apply fontsize-13': {},
    },
    '.__imprint-brevier-d-block': {
      '@apply __imprint-brevier-d-inline lineheight-16': {},
    },
    '.brevier-inline': {
      '@apply a:__imprint-brevier-a-inline b:__imprint-brevier-b-inline c:__imprint-brevier-c-inline d:__imprint-brevier-d-inline': {},
    },
    '.brevier-block': {
      '@apply a:__imprint-brevier-a-block b:__imprint-brevier-b-block c:__imprint-brevier-c-block d:__imprint-brevier-d-block': {},
    },

    // Minion
    '.__imprint-minion-a-inline': {
      '@apply fontsize-12': {},
    },
    '.__imprint-minion-a-block': {
      '@apply __imprint-minion-a-inline lineheight-16': {},
    },
    '.__imprint-minion-b-inline': {
      '@apply fontsize-12': {},
    },
    '.__imprint-minion-b-block': {
      '@apply __imprint-minion-b-inline lineheight-16': {},
    },
    '.__imprint-minion-c-inline': {
      '@apply fontsize-13': {},
    },
    '.__imprint-minion-c-block': {
      '@apply __imprint-minion-c-inline lineheight-16': {},
    },
    '.__imprint-minion-d-inline': {
      '@apply fontsize-12': {},
    },
    '.__imprint-minion-d-block': {
      '@apply __imprint-minion-d-inline lineheight-16': {},
    },
    '.minion-inline': {
      '@apply a:__imprint-minion-a-inline b:__imprint-minion-b-inline c:__imprint-minion-c-inline d:__imprint-minion-d-inline': {},
    },
    '.minion-block': {
      '@apply a:__imprint-minion-a-block b:__imprint-minion-b-block c:__imprint-minion-c-block d:__imprint-minion-d-block': {},
    },

    // Altas
    '.__imprint-atlas-a-inline': {
      '@apply fontsize-78': {},
    },
    '.__imprint-atlas-a-block': {
      '@apply __imprint-atlas-a-inline lineheight-84': {},
    },
    '.__imprint-atlas-b-inline': {
      '@apply fontsize-96': {},
    },
    '.__imprint-atlas-b-block': {
      '@apply __imprint-atlas-b-inline lineheight-102': {},
    },
    '.__imprint-atlas-c-inline': {
      '@apply fontsize-192': {},
    },
    '.__imprint-atlas-c-block': {
      '@apply __imprint-atlas-c-inline lineheight-208': {},
    },
    '.__imprint-atlas-d-inline': {
      '@apply fontsize-140': {},
    },
    '.__imprint-atlas-d-block': {
      '@apply __imprint-atlas-d-inline lineheight-148': {},
    },
    '.atlas-inline': {
      '@apply a:__imprint-atlas-a-inline b:__imprint-atlas-b-inline c:__imprint-atlas-c-inline d:__imprint-atlas-d-inline': {},
    },
    '.atlas-block': {
      '@apply a:__imprint-atlas-a-block b:__imprint-atlas-b-block c:__imprint-atlas-c-block d:__imprint-atlas-d-block': {},
    },

    // Elephant
    '.__imprint-elephant-a-inline': {
      '@apply fontsize-60': {},
    },
    '.__imprint-elephant-a-block': {
      '@apply __imprint-elephant-a-inline lineheight-64': {},
    },
    '.__imprint-elephant-b-inline': {
      '@apply fontsize-78': {},
    },
    '.__imprint-elephant-b-block': {
      '@apply __imprint-elephant-b-inline lineheight-84': {},
    },
    '.__imprint-elephant-c-inline': {
      '@apply fontsize-156': {},
    },
    '.__imprint-elephant-c-block': {
      '@apply __imprint-elephant-c-inline lineheight-170': {},
    },
    '.__imprint-elephant-d-inline': {
      '@apply fontsize-116': {},
    },
    '.__imprint-elephant-d-block': {
      '@apply __imprint-elephant-d-inline lineheight-124': {},
    },
    '.elephant-inline': {
      '@apply a:__imprint-elephant-a-inline b:__imprint-elephant-b-inline c:__imprint-elephant-c-inline d:__imprint-elephant-d-inline': {},
    },
    '.elephant-block': {
      '@apply a:__imprint-elephant-a-block b:__imprint-elephant-b-block c:__imprint-elephant-c-block d:__imprint-elephant-d-block': {},
    },

    // Imperial
    '.__imprint-imperial-a-inline': {
      '@apply fontsize-50': {},
    },
    '.__imprint-imperial-a-block': {
      '@apply __imprint-imperial-a-inline lineheight-54': {},
    },
    '.__imprint-imperial-b-inline': {
      '@apply fontsize-64': {},
    },
    '.__imprint-imperial-b-block': {
      '@apply __imprint-imperial-b-inline lineheight-72': {},
    },
    '.__imprint-imperial-c-inline': {
      '@apply fontsize-124': {},
    },
    '.__imprint-imperial-c-block': {
      '@apply __imprint-imperial-c-inline lineheight-136': {},
    },
    '.__imprint-imperial-d-inline': {
      '@apply fontsize-96': {},
    },
    '.__imprint-imperial-d-block': {
      '@apply __imprint-imperial-d-inline lineheight-104': {},
    },
    '.imperial-inline': {
      '@apply a:__imprint-imperial-a-inline b:__imprint-imperial-b-inline c:__imprint-imperial-c-inline d:__imprint-imperial-d-inline': {},
    },
    '.imperial-block': {
      '@apply a:__imprint-imperial-a-block b:__imprint-imperial-b-block c:__imprint-imperial-c-block d:__imprint-imperial-d-block': {},
    },

    // Royal
    '.__imprint-royal-a-inline': {
      '@apply fontsize-40': {},
    },
    '.__imprint-royal-a-block': {
      '@apply __imprint-royal-a-inline lineheight-44': {},
    },
    '.__imprint-royal-b-inline': {
      '@apply fontsize-52': {},
    },
    '.__imprint-royal-b-block': {
      '@apply __imprint-royal-b-inline lineheight-60': {},
    },
    '.__imprint-royal-c-inline': {
      '@apply fontsize-94': {},
    },
    '.__imprint-royal-c-block': {
      '@apply __imprint-royal-c-inline lineheight-104': {},
    },
    '.__imprint-royal-d-inline': {
      '@apply fontsize-76': {},
    },
    '.__imprint-royal-d-block': {
      '@apply __imprint-royal-d-inline lineheight-84': {},
    },
    '.royal-inline': {
      '@apply a:__imprint-royal-a-inline b:__imprint-royal-b-inline c:__imprint-royal-c-inline d:__imprint-royal-d-inline': {},
    },
    '.royal-block': {
      '@apply a:__imprint-royal-a-block b:__imprint-royal-b-block c:__imprint-royal-c-block d:__imprint-royal-d-block': {},
    },

    // Foolscap
    '.__imprint-foolscap-a-inline': {
      '@apply fontsize-32': {},
    },
    '.__imprint-foolscap-a-block': {
      '@apply __imprint-foolscap-a-inline lineheight-36': {},
    },
    '.__imprint-foolscap-b-inline': {
      '@apply fontsize-40': {},
    },
    '.__imprint-foolscap-b-block': {
      '@apply __imprint-foolscap-b-inline lineheight-44': {},
    },
    '.__imprint-foolscap-c-inline': {
      '@apply fontsize-72': {},
    },
    '.__imprint-foolscap-c-block': {
      '@apply __imprint-foolscap-c-inline lineheight-80': {},
    },
    '.__imprint-foolscap-d-inline': {
      '@apply fontsize-56': {},
    },
    '.__imprint-foolscap-d-block': {
      '@apply __imprint-foolscap-d-inline lineheight-60': {},
    },
    '.foolscap-inline': {
      '@apply a:__imprint-foolscap-a-inline b:__imprint-foolscap-b-inline c:__imprint-foolscap-c-inline d:__imprint-foolscap-d-inline': {},
    },
    '.foolscap-block': {
      '@apply a:__imprint-foolscap-a-block b:__imprint-foolscap-b-block c:__imprint-foolscap-c-block d:__imprint-foolscap-d-block': {},
    },

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
    relunits: {
      12: '0.75rem',
      13: '0.813rem',
      14: '0.875rem',
      15: '0.938rem',
      18: '1.125rem',
      20: '1.25rem',
      21: '1.313rem',
      22: '1.375rem',
      24: '1.5rem',
      26: '1.625rem',
      28: '175rem',
      30: '1.875rem',
      32: '2rem',
      36: '2.25rem',
      40: '2.5rem',
      44: '2.75rem',
      48: '3rem',
      50: '3.125rem',
      52: '3.25rem',
      54: '3.375rem',
      56: '3.5rem',
      60: '3.75rem',
      64: '4rem',
      72: '4.5rem',
      78: '4.875rem',
      84: '5.25rem',
      96: '6rem',
      104: '6.5rem',
      116: '7.25rem',
      124: '7.75rem',
      140: '8.75rem',
      148: '9.25rem',
      156: '9.75rem',
      170: '10.625rem',
      192: '12rem',
      208: '13rem',
    },
  }
})