const { colors } = require("../theme/colors");

module.exports = {
    bodyVars: {
        '--imprint-color': colors['imprint-nero'],
        '--imprint-background-color': colors['white'],
    },
    bodyStyles: {
        'body.imprint': {
            'color': 'var(--imprint-color)',
            'background-color': 'var(--imprint-background-color)',
        },
    },
}