const { colors } = require("../theme/colors");
const { rgb } = require("../helpers/colors");

module.exports = {
    preVars: {
        '--imprint-block-mono-border-radius': '0.25rem',

        '--imprint-inline-mono-size': '0.85em',
        '--imprint-inline-mono-border-radius': '0.25rem',
        '--imprint-inline-mono-padding': '0.1rem 0.2rem',

        '--imprint-code-background-color': rgb(colors['imprint-palegray'], '0.66'),
        '--imprint-code-color': colors['ganbaro-red']['500'],
        '--imprint-code-border-color': colors['imprint-lightgray'],
        '--imprint-code-border': '1px solid var(--imprint-code-border-color)',
        '--imprint-code-padding': 'var(--imprint-inline-mono-padding)',
        '--imprint-code-border-radius': 'var(--imprint-inline-mono-border-radius)',

        '--imprint-pre-color': colors['imprint-nero'],
        '--imprint-pre-background-color': rgb(colors['imprint-palegray'], '0.66'),
        '--imprint-pre-padding': '0.5rem 1rem',
        '--imprint-pre-border-radius': 'var(--imprint-block-mono-border-radius)',

        '--imprint-samp-color': 'inherit',
        '--imprint-samp-background-color': rgb(colors['imprint-palegray'], '0.66'),
        '--imprint-samp-border-radius': 'var(--imprint-inline-mono-border-radius)',
        '--imprint-samp-padding': 'var(--imprint-inline-mono-padding)',
    },
    preStyles: {
        'code, pre, samp': {
            'font-family': 'var(--imprint-monospace)',
        },

        'code': {
            'font-size': 'var(--imprint-inline-mono-size)',
            'padding': 'var(--imprint-code-padding)',
            'background-color': 'var(--imprint-code-background-color)',
            'color': 'var(--imprint-code-color)',
            'border': 'var(--imprint-code-border)',
            'border-radius': 'var(--imprint-code-border-radius)',
            'overflow-wrap': 'break-word',
            'hyphens': 'none',
        },

        'samp': {
            'font-size': 'var(--imprint-inline-mono-size)',
            'padding': 'var(--imprint-samp-padding)',
            'background-color': 'var(--imprint-samp-background-color)',
            'color': 'var(--imprint-samp-color)',
            'border': 'var(--imprint-code-border)',
            'border-radius': 'var(--imprint-samp-border-radius)',
            'overflow-wrap': 'break-word',
            'hyphens': 'none',
        },

        "pre": {
            '@apply bodycopy-block bodycopy-fonts bodycopy-spacing': {},
            'font-size': 'var(--imprint-inline-mono-size)',
            'color': 'var(--imprint-pre-color)',
            'background-color': 'var(--imprint-pre-background-color)',
            'border': 'var(--imprint-code-border)',
            'padding': 'var(--imprint-pre-padding)',
            'border-radius': 'var(--imprint-pre-border-radius)',
        },

        "pre code": {
            'font-size': 'inherit',
            "padding": 0,
            "border": 0,
            "color": "var(--imprint-pre-color)",
            "background-color": "var(--imprint-pre-background-color)",
            "white-space": "pre-wrap",
            "border-radius": 0,
        },

        "a code": {
            "color": "inherit",
            "border-bottom": "inherit",
            "padding-bottom": "0px",
            "border-radius": "0",
        }

    }
}