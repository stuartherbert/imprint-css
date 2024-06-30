const definitionStore = require("../helpers/definitionStore");

definitionStore.staticComponents.styles = {
    ...definitionStore.staticComponents.styles,
    ...{
        ".imprint-inner": {
            "@apply p-4su": {},
        },
    },
}