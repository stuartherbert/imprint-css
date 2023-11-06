import { colors } from "../theme/colors";

module.exports = {
    bodyVars: {
        '--imprint-fg': colors['imprint-nero'],
        '--imprint-bg': colors['white'],
    },
    bodyStyles: {
        'body.imprint': {
            'color': 'var(--imprint-fg)',
            'background-color': 'var(--imprint-bg)',
        },
    },
}