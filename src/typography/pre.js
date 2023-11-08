import { colorDetails } from "../theme/colors";
import { rgb } from "../helpers/colors";

module.exports = {
    preVars: {
        '--imprint-inline-mono-size': '0.85em',
        '--imprint-inline-mono-border-radius': '0.25rem',

        '--imprint-code-bg': rgb(colorDetails['imprint-palegray'].rgbChannels, '0.75'),
        '--imprint-code-fg': colorDetails['ganbaro-red-500'].hex,
        '--imprint-code-border-fg': colorDetails['imprint-lightgray'].hex,
        '--imprint-code-border': '1px solid var(--imprint-code-border-fg)',
        '--imprint-code-border-bottom': '2px solid var(--imprint-code-border-fg)',
        '--imprint-code-padding': '0.1rem 0.2rem 1px 0.2rem',
        '--imprint-code-border-radius': 'var(--imprint-inline-mono-border-radius)',

        '--imprint-pre-fg': colorDetails['imprint-nero'].hex,
        '--imprint-pre-bg': rgb(colorDetails['imprint-palegray'].rgbChannels, '0.75'),

        '--imprint-samp-bg': rgb(colorDetails['imprint-palegray'].rgbChannels, '0.75'),
        '--imprint-samp-border-radius': 'var(--imprint-inline-mono-border-radius)',
    },
    preStyles: {
        'code, kbd, pre, samp': {
            'font-family': 'var(--imprint-monospace)',
        },

        'code': {
            'font-size': 'var(--imprint-inline-mono-size)',
            'padding': 'var(--imprint-code-padding)',
            'background-color': 'var(--imprint-code-bg)',
            'color': 'var(--imprint-code-fg)',
            'border': 'var(--imprint-code-border)',
            'border-bottom': 'var(--imprint-code-border-bottom)',
            'border-radius': 'var(--imprint-code-border-radius)',
        },

        'samp': {
            'font-size': 'var(--imprint-inline-mono-size)',
            'padding': 'var(--imprint-inline-text-padding)',
            'background-color': 'var(--imprint-samp-bg)',
            'border': 'var(--imprint-code-border)',
            'border-radius': 'var(--imprint-samp-border-radius)',
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