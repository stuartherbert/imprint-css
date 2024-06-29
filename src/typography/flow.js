module.exports = {
    staticUtilities: {
        vars: {
            '--imprint-prose-spacing': '1em',
        },
        styles: {
            ".imprint-prose > * + *, .imprint-inner > * + *": {
                'margin-top': 'var(--imprint-prose-spacing)',
            },
        },
    },
}