import { colors } from "../theme/colors";

module.exports = {
    textVars: {
        '--imprint-del-bg': colors['imprint-palered'],
        '--imprint-ins-bg': colors['imprint-palegreen'],

        '--imprint-kbd-bg': colors['imprint-palegray'],
        '--imprint-kbd-size': '0.8em',

        '--imprint-mark-size': '0.95em',

        '--imprint-inline-text-padding': '0.1rem 0.2rem',
    },
    textStyles: {
        'p': {
            '@apply bodycopy-block bodycopy-fonts bodycopy-spacing': {},
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
            'background-color': 'var(--imprint-ins-bg)',
        },
        'del': {
            'background-color': 'var(--imprint-del-bg)',
            'text-decoration': 'line-through',
        },

        'kbd': {
            'font-family': 'var(--imprint-monospace)',
            'font-size': 'var(--imprint-kbd-size)',
            'font-weight': 'bolder',
            'padding': '1px 4px',
            'border': '1px solid',
            'border-radius': '3px',
            'background-color': 'transparent',
            'box-shadow': '0 1px 1px rgba(0, 0, 0, 0.20), inset 1px 0px 2px rgba(0, 0, 0, 0.20), inset -1px 0px 2px rgba(0, 0, 0, 0.20)',

        },

        'mark': {
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