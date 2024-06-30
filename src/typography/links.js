const definitionStore = require("../helpers/definitionStore");
const { colors } = require("../theme/colors");

definitionStore.staticUtilities.vars = {
    ...definitionStore.staticUtilities.vars,
    ...{
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
}

definitionStore.staticUtilities.styles = {
    ...definitionStore.staticUtilities.styles,
    ...{
        "a:not(nav a), .imprint-link": {
            'color': 'var(--imprint-link-color)',
            'background-color': 'var(--imprint-link-background-color)',
            'text-decoration': 'none',
            'font-weight': 'inherit',
            'border-bottom': '1px solid var(--imprint-link-border)',
        },
        "a:visited:not(nav a), .imprint-link:visited": {
            'color': 'var(--imprint-link-visited-color)',
            'background-color': 'var(--imprint-link-visited-background-color)',
            'text-decoration': 'none',
            'font-weight': 'inherit',
            'border-bottom': '1px solid var(--imprint-link-border)',
        },
        " a:hover:not(nav a), .imprint-link:hover": {
            'color': 'var(--imprint-link-hover-color)',
            'background-color': 'var(--imprint-link-hover-background-color)',
            'border-bottom': '1px solid var(--imprint-link-hover-border)',
            'font-weight': 'inherit',
        },
        "a:active:not(nav a), a:focus:not(nav), .imprint-link:active, .imprint-link:focus": {
            'color': 'var(--imprint-link-active-color)',
            'background-color': 'var(--imprint-link-active-background-color)',
            'border-bottom': '1px solid var(--imprint-link-active-border)',
            'font-weight': 'inherit',
        },
    },
}