import { colorDetails } from "../theme/colors";
import { rgb } from "../helpers/colors";

module.exports = {
    preVars: {
        '--imprint-block-mono-border-radius': '0.25rem',

        '--imprint-inline-mono-size': '0.85em',
        '--imprint-inline-mono-border-radius': '0.25rem',
        '--imprint-inline-mono-padding': '0.1rem 0.2rem',

        '--imprint-code-bg': rgb(colorDetails['imprint-palegray'].rgbChannels, '0.66'),
        '--imprint-code-fg': colorDetails['ganbaro-red-500'].hex,
        '--imprint-code-border-fg': colorDetails['imprint-lightgray'].hex,
        '--imprint-code-border': '1px solid var(--imprint-code-border-fg)',
        '--imprint-code-padding': 'var(--imprint-inline-mono-padding)',
        '--imprint-code-border-radius': 'var(--imprint-inline-mono-border-radius)',

        '--imprint-pre-fg': colorDetails['imprint-nero'].hex,
        '--imprint-pre-bg': rgb(colorDetails['imprint-palegray'].rgbChannels, '0.66'),
        '--imprint-pre-padding': '0.5rem 1rem',
        '--imprint-pre-border-radius': 'var(--imprint-block-mono-border-radius)',

        '--imprint-samp-fg': 'inherit',
        '--imprint-samp-bg': rgb(colorDetails['imprint-palegray'].rgbChannels, '0.66'),
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
            'background-color': 'var(--imprint-code-bg)',
            'color': 'var(--imprint-code-fg)',
            'border': 'var(--imprint-code-border)',
            'border-radius': 'var(--imprint-code-border-radius)',
        },

        'samp': {
            'font-size': 'var(--imprint-inline-mono-size)',
            'padding': 'var(--imprint-samp-padding)',
            'background-color': 'var(--imprint-samp-bg)',
            'color': 'var(--imprint-samp-fg)',
            'border': 'var(--imprint-code-border)',
            'border-radius': 'var(--imprint-samp-border-radius)',
        },

        "pre": {
            '@apply bodycopy-block bodycopy-fonts bodycopy-spacing': {},
            'font-size': 'var(--imprint-inline-mono-size)',
            'color': 'var(--imprint-pre-fg)',
            'background-color': 'var(--imprint-pre-bg)',
            'border': 'var(--imprint-code-border)',
            'padding': 'var(--imprint-pre-padding)',
            'border-radius': 'var(--imprint-pre-border-radius)',
        },

        "pre code": {
            'font-size': 'inherit',
            "padding": 0,
            "border": 0,
            "color": "var(--imprint-pre-fg)",
            "background-color": "var(--imprint-pre-bg)",
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