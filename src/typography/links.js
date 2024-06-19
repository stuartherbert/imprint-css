const { colors } = require("../theme/colors");

module.exports = {
    linksVars: {
        '--imprint-link-color': colors['ganbaro-blue']['500'],
        '--imprint-link-background-color': 'inherit',
        '--imprint-link-border': colors['imprint-gray'],

        '--imprint-link-visited-color': colors['ganbaro-blue']['900'],
        '--imprint-link-visited-background-color': 'inherit',
        '--imprint-link-visited-border': 'var(--imprint-link-border)',

        '--imprint-link-hover-color': colors['ganbaro-red']['500'],
        '--imprint-link-hover-background-color': 'inherit',
        '--imprint-link-hover-border': 'var(--imprint-color)',

        '--imprint-link-active-color': colors['ganbaro-red']['500'],
        '--imprint-link-active-background-color': 'inherit',
        '--imprint-link-active-border': colors['ganbaro-red']['500'],
    },
    linksStyles: {
        'a': {
            // '@apply font-semibold': {},
            'color': 'var(--imprint-link-color)',
            'background-color': 'var(--imprint-link-background-color)',
            'text-decoration': 'none',
            'font-weight': 'inherit',
            'border-bottom': '1px solid var(--imprint-link-border)',
        },

        'a:visited': {
            // '@apply font-semibold': {},
            'color': 'var(--imprint-link-visited-color)',
            'background-color': 'var(--imprint-link-visited-background-color)',
            'text-decoration': 'none',
            'font-weight': 'inherit',
            'border-bottom': '1px solid var(--imprint-link-border)',
        },

        'a:hover': {
            // '@apply font-semibold': {},
            'color': 'var(--imprint-link-hover-color)',
            'background-color': 'var(--imprint-link-hover-background-color)',
            'border-bottom': '1px solid var(--imprint-link-hover-border)',
            'font-weight': 'inherit',
        },

        'a:active, a:focus': {
            // '@apply font-semibold': {},
            'color': 'var(--imprint-link-active-color)',
            'background-color': 'var(--imprint-link-active-background-color)',
            'border-bottom': '1px solid var(--imprint-link-active-border)',
            'font-weight': 'inherit',
        },
    }
}