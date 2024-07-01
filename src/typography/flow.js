const definitionStore = require('../helpers/definitionStore.js');

definitionStore.staticUtilities.vars = {
    ...definitionStore.staticUtilities.vars,
    ...{
        '--imprint-prose-spacing': '1em',
    },
};

definitionStore.staticUtilities.styles = {
    ...definitionStore.staticUtilities.styles,
    ...{
        ".imprint-prose > * + *, .imprint-inner > * + *, .imprint-prose section > *": {
            'margin-top': 'var(--imprint-prose-spacing)',
        },
    },
};