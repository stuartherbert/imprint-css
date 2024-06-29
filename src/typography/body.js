const { colors } = require("../theme/colors");

module.exports = {
    internalUtilities: {
        vars: {
            '--imprint-color': colors['imprint-nero'],
            '--imprint-background-color': colors['white'],
        },
        styles: {
            'body.imprint': {
                'color': 'var(--imprint-color)',
                'background-color': 'var(--imprint-background-color)',
            },
        },
    },
}