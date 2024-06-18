module.exports = {
    flowVars: {
        '--imprint-prose-spacing': '1em',
    },
    flowStyles: {
        ".imprint-prose > * + *, .imprint-inner > * + *": {
            'margin-top': 'var(--imprint-prose-spacing)',
        },
    }
}