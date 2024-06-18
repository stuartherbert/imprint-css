module.exports = {
    flowVars: {
        '--imprint-prose-spacing': '1em',
    },
    flowStyles: {
        ".imprint-prose > * + *": {
            'margin-top': 'var(--imprint-prose-spacing)',
        },
        ".content > * + *": {
            "margin-top": "var(--imprint-prose-spacing)",
        },
    }
}