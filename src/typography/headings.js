module.exports = {
    headingStyles: {
        'h1, h2, h3, h4, h5, h6': {
            '@apply bodycopy-spacing': {},
        },

        'h1': {
            '@apply canon-block canon-fonts': {},
        },
        '*:not(h1) + h1': {
            '@apply canon-nestedSpacingTop': {},
        },

        'h2': {
            '@apply trafalga-block trafalga-fonts': {},
        },
        '*:not(h1) + h2': {
            '@apply trafalga-nestedSpacingTop': {},
        },

        'h3': {
            '@apply doublepica-block doublepica-fonts': {},
        },
        '*:not(h2) + h3': {
            '@apply doublepica-nestedSpacingTop': {},
        },

        'h4': {
            '@apply greatprimer-block greatprimer-fonts': {},
        },
        '*:not(h3) + h4': {
            '@apply greatprimer-nestedSpacingTop': {},
        },

        'h5': {
            '@apply longprimer-block longprimer-fonts': {},
        },
        '*:not(h4) + h5': {
            '@apply longprimer-nestedSpacingTop': {},
        },

        'h6': {
            '@apply brevier-block brevier-fonts': {},
        },
        '*:not(h5) + h6': {
            '@apply brevier-nestedSpacingTop': {},
        }
    }
}