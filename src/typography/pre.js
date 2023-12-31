import { colors } from "../theme/colors";

module.exports = {
    preVars: {
        '--imprint-inline-mono-size': '0.85em',

        '--imprint-code-bg': colors['imprint-palegray'],
        '--imprint-code-fg': colors['ganbaro-red-500'],

        '--imprint-pre-fg': colors['imprint-nero'],
        '--imprint-pre-bg': colors['imprint-palegray'],

        '--imprint-samp-bg': colors['imprint-palegray'],
    },
    preStyles: {
        'code, kbd, pre, samp': {
            'font-family': 'var(--imprint-monospace)',
        },

        'code': {
            'font-size': 'var(--imprint-inline-mono-size)',
            'padding': 'var(--imprint-inline-text-padding)',
            'background-color': 'var(--imprint-code-bg)',
            'color': 'var(--imprint-code-fg)',
        },

        'samp': {
            'font-size': 'var(--imprint-inline-mono-size)',
            'padding': 'var(--imprint-inline-text-padding)',
            'background-color': 'var(--imprint-samp-bg)',
        },

        "pre code": {
            "padding": 0,
            "color": "var(--imprint-pre-fg)",
            "background-color": "var(--imprint-pre-bg)",
            "white-space": "pre-wrap",
        },

        "a code": {
            "color": "inherit",
            "border-bottom": "inherit",
            "padding-bottom": "0px",
            "border-radius": "0",
        }

    }
}