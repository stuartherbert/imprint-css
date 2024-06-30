const definitionStore = require("../helpers/definitionStore");
const { colors } = require("../theme/colors");

definitionStore.staticUtilities.styles = {
    ...definitionStore.staticUtilities.styles,
    ...{
        ".imprint-link": {
            'color': 'var(--imprint-link-color)',
            'background-color': 'var(--imprint-link-background-color)',
            'text-decoration': 'none',
            'font-weight': 'inherit',
            'border-bottom': '1px solid var(--imprint-link-border)',
        },
        ".imprint-link:visited, .imprint-link-visited": {
            'color': 'var(--imprint-link-visited-color)',
            'background-color': 'var(--imprint-link-visited-background-color)',
            'text-decoration': 'none',
            'font-weight': 'inherit',
            'border-bottom': '1px solid var(--imprint-link-border)',
        },
        ".imprint-link:hover, .imprint-link-hover": {
            'color': 'var(--imprint-link-hover-color)',
            'background-color': 'var(--imprint-link-hover-background-color)',
            'border-bottom': '1px solid var(--imprint-link-hover-border)',
            'font-weight': 'inherit',
        },
        ".imprint-link:active, .imprint-link:focus, .imprint-link-active": {
            'color': 'var(--imprint-link-active-color)',
            'background-color': 'var(--imprint-link-active-background-color)',
            'border-bottom': '1px solid var(--imprint-link-active-border)',
            'font-weight': 'inherit',
        },
    }
}
definitionStore.defaultStyling.vars = {
    ...definitionStore.defaultStyling.vars,
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

definitionStore.defaultStyling.styles = {
    ...definitionStore.defaultStyling.styles,
    ...{
        "a:not(nav a)": {
            "@apply imprint-link": {},
        },
        "a:visited:not(nav a)": {
            "@apply imprint-link-visited": {},
        },
        " a:hover:not(nav a)": {
            "@apply imprint-link-hover": {},
        },
        "a:active:not(nav a), a:focus:not(nav)": {
            "@apply imprint-link-active": {},
        },
    },
}