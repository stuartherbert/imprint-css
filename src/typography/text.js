const { colors } = require("../theme/colors");

module.exports = {
    textVars: {
        '--imprint-del-background-color': colors['imprint-palered'],
        '--imprint-ins-background-color': colors['imprint-palegreen'],

        '--imprint-kbd-background-color': 'transparent',
        '--imprint-kbd-size': '0.85em',

        '--imprint-mark-background-color': 'yellow',
        '--imprint-mark-size': '0.95em',

        '--imprint-inline-text-padding': '0.1rem 0.2rem',
    },
    textStyles: {
        'p': {
            '@apply bodycopy-block bodycopy-fonts': {},
        },
        'p.p--leader': {
            '@apply font-semibold': {},
        },
        'p.p--abstract': {
            'text-indent': '2em',
            'font-style': 'italic',
            'text-align': 'justify',
        },
        'p.p--keywords': {
            'font-style': 'italic',
        },

        'ins': {
            'background-color': 'rgb(var(--imprint-ins-background-color))',
        },
        'del': {
            'background-color': 'rgb(var(--imprint-del-background-color))',
            'text-decoration': 'line-through',
        },

        'kbd': {
            'font-family': 'inherit',
            'font-size': 'var(--imprint-kbd-size)',
            'font-weight': 'light',
            'padding': '1px 4px',
            'border': '1px solid',
            'border-radius': 'var(--imprint-inline-mono-border-radius)',
            'background-color': 'var(--imprint-kbd-background-color)',
            'box-shadow': '0 1px 1px rgba(0, 0, 0, 0.20), inset 1px 0px 2px rgba(0, 0, 0, 0.20), inset -1px 0px 2px rgba(0, 0, 0, 0.20)',

        },

        'mark': {
            'background-color': 'var(--imprint-mark-background-color)',
            'font-size': 'var(--imprint-mark-size)',
            'padding': 'var(--imprint-inline-text-padding)',
        },

        'abbr, abbr[title]': {
            'text-decoration': 'none',
            'border-bottom': '1px dashed currentColor',
        },

        'time': {
            '@apply font-semibold': {},
        },

        'var': {
            '@apply font-semibold': {},
            'font-style': 'italic',
        }
    }
}