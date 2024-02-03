import { calculateRelunit } from "../helpers/relunits";

module.exports = {
    headingStyles: {
        'h1': {
            '@apply canon-block canon-fonts': {},
        },
        'h1:nth-of-type(1)': {
            'padding-bottom': calculateRelunit(6),
            'border-bottom': '1px solid var(--imprint-fg)',
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