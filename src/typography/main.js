const definitionStore = require("../helpers/definitionStore");

definitionStore.staticUtilities.styles = {
    ...definitionStore.staticUtilities.styles,
    ...{
        'main': {
            '@apply a:max-w-[50rem] b:max-w-[30rem] c:max-w-[50rem] d:max-w-[50rem]': {},
        },
    },
}