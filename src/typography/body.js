import { colorDetails } from "../theme/colors";

module.exports = {
    bodyVars: {
        '--imprint-fg': colorDetails['imprint-nero'].hex,
        '--imprint-bg': colorDetails['white'].hex,
    },
    bodyStyles: {
        'body.imprint': {
            'color': 'var(--imprint-fg)',
            'background-color': 'var(--imprint-bg)',
        },
    },
}