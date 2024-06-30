const definitionStore = require("../helpers/definitionStore");

definitionStore.defaultStyling.vars = {
    ...definitionStore.defaultStyling.vars,
    ...{
        '--imprint-list-indent': '2.5em',
    },
}

definitionStore.defaultStyling.styles = {
    ...definitionStore.defaultStyling.styles,
    ...{
        "ul:not(nav ul), .imprint-ul": {
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

        "ol:not(nav ol), .imprint-ol": {
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
}