const definitionStore = require('../helpers/definitionStore.js');

definitionStore.staticUtilities.vars = {
    ...definitionStore.staticUtilities.vars,
    ...{
        '--imprint-prose-spacing': '1rem',
    },
};

definitionStore.staticUtilities.styles = {
    ...definitionStore.staticUtilities.styles,
    ...{
        ".imprint-prose > * + *, .imprint-inner > * + *": {
            'margin-top': 'var(--imprint-prose-spacing)',
        },
    },
};