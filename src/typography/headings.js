import { calculateRelunit } from "../helpers/relunits";

module.exports = {
    headingVars: {
        '--imprint-h1-underline-width': '1px',
        '--imprint-h1-underline-style': 'solid',
        '--imprint-h1-underline-color': 'var(--imprint-border-outer)',
    },
    headingStyles: {
        'h1': {
            '@apply canon-block canon-fonts': {},
        },
        'h1:nth-of-type(1)': {
            'padding-bottom': calculateRelunit(6),
            'border-bottom': 'var(--imprint-h1-underline-width) var(--imprint-h1-underline-style) var(--imprint-h1-underline-color)',
        },

        'h2': {
            '@apply trafalga-block trafalga-fonts': {},
        },

        'h3': {
            '@apply doublepica-block doublepica-fonts': {},
        },

        'h4': {
            '@apply greatprimer-block greatprimer-fonts': {},
        },

        'h5': {
            '@apply longprimer-block longprimer-fonts': {},
        },

        'h6': {
            '@apply brevier-block brevier-fonts': {},
        },
        }
    }
}