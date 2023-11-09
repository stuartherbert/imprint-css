import { colorDetails } from "../theme/colors";

module.exports = {
    textVars: {
        '--imprint-del-bg': colorDetails['imprint-palered'].hex,
        '--imprint-ins-bg': colorDetails['imprint-palegreen'].hex,

        '--imprint-kbd-bg': 'transparent',
        '--imprint-kbd-size': '0.85em',

        '--imprint-mark-bg': 'yellow',
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
            'background-color': 'rgb(var(--imprint-ins-bg))',
        },
        'del': {
            'background-color': 'rgb(var(--imprint-del-bg))',
            'text-decoration': 'line-through',
        },

        'kbd': {
            'font-size': 'var(--imprint-kbd-size)',
            'font-weight': 'light',
            'padding': '1px 4px',
            'border': '1px solid',
            'border-radius': 'var(--imprint-inline-mono-border-radius)',
            'background-color': 'var(--imprint-kbd-bg)',
            'box-shadow': '0 1px 1px rgba(0, 0, 0, 0.20), inset 1px 0px 2px rgba(0, 0, 0, 0.20), inset -1px 0px 2px rgba(0, 0, 0, 0.20)',

        },

        'mark': {
            'background-color': 'var(--imprint-mark-bg)',
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