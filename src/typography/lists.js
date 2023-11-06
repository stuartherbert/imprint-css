module.exports = {
    listVars: {
        '--imprint-list-indent': '2.5em',
    },
    listStyles: {
        ul: {
            'list-style-type': 'disc',
            'padding-left': 'var(--imprint-list-indent)',

            li: {
                'display': 'list-item',
                'list-style-position': 'outside',
            }
        },
        "*:not(li, ul) + ul, *:not(li, ol) + ol": {
            '@apply bodycopy-spacing': {},
        },

        ol: {
            'list-style-type': 'decimal',
            'padding-left': 'var(--imprint-list-indent)',

            li: {
                'display': 'list-item',
                'list-style-position': 'outside',

                ol: {
                    'list-style-type': 'lower-alpha',

                    ol: {
                        'list-style-type': 'lower-roman',
                    }
                }
            }
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
    }
}