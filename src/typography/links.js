const { colors } = require("../theme/colors");

module.exports = {
    internalUtilities: {
        styles: {
            '.__imprint-link': {
                // '@apply font-semibold': {},
                'color': 'var(--imprint-link-color)',
                'background-color': 'var(--imprint-link-background-color)',
                'text-decoration': 'none',
                'font-weight': 'inherit',
                'border-bottom': '1px solid var(--imprint-link-border)',
            },

            '.__imprint-link-visited': {
                // '@apply font-semibold': {},
                'color': 'var(--imprint-link-visited-color)',
                'background-color': 'var(--imprint-link-visited-background-color)',
                'text-decoration': 'none',
                'font-weight': 'inherit',
                'border-bottom': '1px solid var(--imprint-link-border)',
            },

            '.__imprint-link-hover': {
                // '@apply font-semibold': {},
                'color': 'var(--imprint-link-hover-color)',
                'background-color': 'var(--imprint-link-hover-background-color)',
                'border-bottom': '1px solid var(--imprint-link-hover-border)',
                'font-weight': 'inherit',
            },

            '.__imprint-link-active': {
                // '@apply font-semibold': {},
                'color': 'var(--imprint-link-active-color)',
                'background-color': 'var(--imprint-link-active-background-color)',
                'border-bottom': '1px solid var(--imprint-link-active-border)',
                'font-weight': 'inherit',
            },
        },
    },
    staticUtilities: {
        vars: {
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
        styles: {
            "a:not(nav a), .imprint-link": {
                "@apply __imprint-link": {},
            },
            "a:visited:not(nav a), .imprint-link:visited": {
                "@apply __imprint-link-visited": {},
            },
            " a:hover:not(nav a), .imprint-link:hover": {
                "@apply __imprint-link-hover": {},
            },
            "a:active:not(nav a), a:focus:not(nav), .imprint-link:active, .imprint-link:focus": {
                "@apply __imprint-link-active": {},
            },
        },
    },
}