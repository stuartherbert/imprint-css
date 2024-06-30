const definitionStore = require("../helpers/definitionStore");

const { colors } = require("../theme/colors");
const { rgb } = require("../helpers/colors");

definitionStore.staticUtilities.vars = {
    ...definitionStore.staticUtilities.vars,
    ...{
        '--imprint-block-mono-border-radius': '0.25rem',

        '--imprint-inline-mono-size': '0.85em',
        '--imprint-inline-mono-border-radius': '0.25rem',
        '--imprint-inline-mono-padding': '0.1rem 0.2rem',

        '--imprint-code-background-color': rgb(colors['imprint-palered'], '1'),
        '--imprint-code-color': colors['ganbaro-red']['500'],
        '--imprint-code-border-color': colors['imprint-lightgray'],
        '--imprint-code-border': '1px solid var(--imprint-code-border-color)',
        '--imprint-code-padding': 'var(--imprint-inline-mono-padding)',
        '--imprint-code-border-radius': 'var(--imprint-inline-mono-border-radius)',

        '--imprint-pre-color': colors['imprint-nero'],
        '--imprint-pre-background-color': "var(--imprint-shaded-background-color)",
        '--imprint-pre-padding': '0.5rem 1rem',
        '--imprint-pre-border-radius': 'var(--imprint-block-mono-border-radius)',

        '--imprint-samp-color': 'inherit',
        '--imprint-samp-background-color': rgb(colors['imprint-palered'], '0.66'),
        '--imprint-samp-border-radius': 'var(--imprint-inline-mono-border-radius)',
        '--imprint-samp-padding': 'var(--imprint-inline-mono-padding)',

        '--imprint-code-example-line-no-color': rgb(colors['imprint-gray'], '1'),
    }
}

definitionStore.staticUtilities.styles = {
    ...definitionStore.staticUtilities.styles,
    ...{
        'code, pre, samp': {
            'font-family': 'var(--imprint-monospace)',
        },

        ':not(pre) > code': {
            'font-size': 'var(--imprint-inline-mono-size)',
            'padding': 'var(--imprint-code-padding)',
            'background-color': 'var(--imprint-code-background-color)',
            'color': 'var(--imprint-code-color)',
            // 'border': 'var(--imprint-code-border)',
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

        "pre:not(:has(:not(code)))": {
            '@apply imprint-block-bodycopy': {},
            'font-size': 'var(--imprint-inline-mono-size)',
            'color': 'var(--imprint-pre-color)',
            'background-color': 'var(--imprint-pre-background-color)',
            'border': 'var(--imprint-code-border)',
            'padding': 'var(--imprint-pre-padding)',
            'border-radius': 'var(--imprint-pre-border-radius)',
        },

        "pre:has(code)": {
            'font-size': 'var(--imprint-inline-mono-size)',
        },

        ".--shiki-numbered pre > code": {
            ".line:last-child:empty" : {
                "display": "none",
            },

            "list-style-type": "decimal",
            "padding-left": "var(--imprint-list-indent)",
            "display": "flex",
            "flex-flow": "row wrap",
            "::marker": {
                "color": "var(--imprint-code-example-line-no-color)",
            },

            ".line": {
                "list-style-position": "outside",
                "display": "list-item",
                "flex-basis": "100%",
                "flex-grow": "1",
                "flex-shrink": "0",
            },
        },

        "a code": {
            "color": "inherit",
            "border-bottom": "inherit",
            "padding-bottom": "0px",
            "border-radius": "0",
        },

    },
}
