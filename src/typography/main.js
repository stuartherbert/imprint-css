const definitionStore = require("../helpers/definitionStore");

definitionStore.defaultStyling.styles = {
    ...definitionStore.defaultStyling.styles,
    ...{
        'main': {
            '@apply a:max-w-[50rem] b:max-w-[30rem] c:max-w-[50rem] d:max-w-[50rem]': {},
        },
    },
}