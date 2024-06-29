module.exports = {
    internalUtilities: {
        styles: {
            ".__imprint-ul": {
                'list-style-type': 'disc',
                'padding-left': 'var(--imprint-list-indent)',

                li: {
                    'display': 'list-item',
                    'list-style-position': 'outside',
                    '* + *': {
                        'margin-top': 'var(--imprint-prose-spacing)',
                    },
                },
                "li:has(p)": {
                    'margin-bottom': 'var(--imprint-prose-spacing)',
                }
            },

            ".__imprint_ol": {
                'list-style-type': 'decimal',
                'padding-left': 'var(--imprint-list-indent)',

                li: {
                    'display': 'list-item',
                    'list-style-position': 'outside',
                    'p + p': {
                        'margin-top': 'var(--imprint-prose-spacing)',
                    },

                    ol: {
                        'list-style-type': 'lower-alpha',

                        ol: {
                            'list-style-type': 'lower-roman',
                        }
                    }
                },
                "li:has(p)": {
                    'margin-bottom': 'var(--imprint-prose-spacing)',
                },
            },
        },
    },
    staticUtilities: {
        vars: {
            '--imprint-list-indent': '2.5em',
        },
        styles: {
            "ul:not(nav ul), .imprint-ul": {
                "@apply __imprint-ul": {},
            },

            "ol:not(nav ol), .imprint-ol": {
                "@apply __imprint_ol": {},
            },

            dl: {
                dt: {
                    'font-weight': '700',
                    'font-style': 'italic',
                },

                dd: {
                    'padding-left': 'var(--imprint-list-indent)',
                },
            },
        },
    },
}