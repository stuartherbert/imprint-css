const { colors } = require("../theme/colors");

const definitionStore = require('../helpers/definitionStore.js');

definitionStore.staticUtilities.vars = {
    ...definitionStore.staticUtilities.vars,
    ...{
        '--imprint-color': colors['imprint-nero'],
        '--imprint-background-color': colors['white'],
    }
};

definitionStore.staticUtilities.styles = {
    ...definitionStore.staticUtilities.styles,
    ...{
        'body.imprint': {
            'color': 'var(--imprint-color)',
            'background-color': 'var(--imprint-background-color)',
        },
    },
};
