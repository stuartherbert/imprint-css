import { colors } from "../theme/colors";

module.exports = {
    linksVars: {
        '--imprint-link-fg': colors['ganbaro-blue-500'],
        '--imprint-link-bg': 'inherit',
        '--imprint-link-border': colors['imprint-gray'],

        '--imprint-link-visited-fg': colors['ganbaro-blue-900'],
        '--imprint-link-visited-bg': 'inherit',
        '--imprint-link-visited-border': 'var(--imprint-link-border)',

        '--imprint-link-hover-fg': colors['ganbaro-red-500'],
        '--imprint-link-hover-bg': 'inherit',
        '--imprint-link-hover-border': 'var(--imprint-fg)',

        '--imprint-link-active-fg': colors['ganbaro-red-500'],
        '--imprint-link-active-bg': 'inherit',
        '--imprint-link-active-border': colors['ganbaro-red-500'],
    },
    linksStyles: {
        'a': {
            // '@apply font-semibold': {},
            'color': 'var(--imprint-link-fg)',
            'background-color': 'var(--imprint-link-bg)',
            'text-decoration': 'none',
            'font-weight': 'inherit',
            'border-bottom': '1px solid var(--imprint-link-border)',
        },

        'a:visited': {
            // '@apply font-semibold': {},
            'color': 'var(--imprint-link-visited-fg)',
            'background-color': 'var(--imprint-link-visited-bg)',
            'text-decoration': 'none',
            'font-weight': 'inherit',
            'border-bottom': '1px solid var(--imprint-link-border)',
        },

        'a:hover': {
            // '@apply font-semibold': {},
            'color': 'var(--imprint-link-hover-fg)',
            'background-color': 'var(--imprint-link-hover-bg)',
            'border-bottom': '1px solid var(--imprint-link-hover-border)',
            'font-weight': 'inherit',
        },

        'a:active, a:focus': {
            // '@apply font-semibold': {},
            'color': 'var(--imprint-link-active-fg)',
            'background-color': 'var(--imprint-link-active-bg)',
            'border-bottom': '1px solid var(--imprint-link-active-border)',
            'font-weight': 'inherit',
        },
    }
}