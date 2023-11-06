/**
 * our size definitions are:
 *
 * font-size/line-height
 * bottom-margin/top-margin-always/top-margin-nested
 * list of font-modifers to apply
 *
 */
const definitions = {
    'canon': {
        'a': '28/32/bold 4su/-/8su bold',
        'b': '32/36/bold 4su/-/8su bold',
        'c': '52/56/bold 4su/-/8su bold',
        'd': '44/48/bold 4su/-/8su bold',
    },
    'trafalga': {
        'a': '20/24/bold 4su/-/8su bold',
        'b': '24/28/bold 4su/-/8su bold',
        'c': '36/40/bold 4su/-/8su bold',
        'd': '32/36/bold 4su/-/8su bold',
    },
    'paragon': {
        'a': '20/24 4su/-/8su bold',
        'b': '22/26 4su/-/8su bold',
        'c': '28/32 4su/-/8su bold',
        'd': '28/32 4su/-/8su bold',
    },
    'doublepica': {
        'a': '20/24 4su/-/8su bold',
        'b': '20/24 4su/-/8su bold',
        'c': '26/30 4su/-/8su bold',
        'd': '24/28 4su/-/8su bold',
    },
    'greatprimer': {
        'a': '18/22 4su/-/8su bold',
        'b': '18/22 4su/-/8su bold',
        'c': '21/24 4su/-/8su bold',
        'd': '20/24 4su/-/8su bold',
    },
    'bodycopy': {
        'a': '15/20 4su/-/8su normal',
        'b': '16/22 4su/-/8su normal',
        'c': '18/24 4su/-/8su normal',
        'd': '16/22 4su/-/8su normal',
    },
    'pica': {
        'a': '15/20 4su/-/8su normal',
        'b': '16/20 4su/-/8su normal',
        'c': '18/22 4su/-/8su normal',
        'd': '16/20 4su/-/8su normal',
    },
    'longprimer': {
        'a': '15/18 4su/-/8su normal',
        'b': '15/18 4su/-/8su normal',
        'c': '15/20 4su/-/8su normal',
        'd': '14/18 4su/-/8su normal',
    },
    'brevier': {
        'a': '14/16 4su/-/8su normal',
        'b': '14/18 4su/-/8su normal',
        'c': '14/18 4su/-/8su normal',
        'd': '13/16 4su/-/8su normal',
    },
    'minion': {
        'a': '12/16 4su/-/8su normal',
        'b': '12/16 4su/-/8su normal',
        'c': '13/16 4su/-/8su normal',
        'd': '12/16 4su/-/8su normal',
    },
    'atlas': {
        'a': '78/84 4su/-/8su bold',
        'b': '96/104 4su/-/8su bold',
        'c': '192/208 4su/-/8su bold',
        'd': '140/148 4su/-/8su bold',
    },
    'elephant': {
        'a': '60/64 4su/-/8su bold',
        'b': '78/84 4su/-/8su bold',
        'c': '156/170 4su/-/8su bold',
        'd': '116/124 4su/-/8su bold',
    },
    'imperial': {
        'a': '50/54 4su/-/8su bold',
        'b': '64/72 4su/-/8su bold',
        'c': '124/136 4su/-/8su bold',
        'd': '96/104 4su/-/8su bold',
    },
    'royal': {
        'a': '40/44 4su/-/8su bold',
        'b': '52/60 4su/-/8su bold',
        'c': '94/104 4su/-/8su bold',
        'd': '76/84 4su/-/8su bold',
    },
    'foolscap': {
        'a': '32/36 4su/-/8su bold',
        'b': '40/44 4su/-/8su bold',
        'c': '72/80 4su/-/8su bold',
        'd': '56/60 4su/-/8su bold',
    },
};

function styleNames() {
    return Object.getOwnPropertyNames(definitions);
}

function screensForStyle(styleName) {
    return Object.getOwnPropertyNames(definitions[styleName] ?? {})
}

function styleDefinition(styleName, screenName) {
    // our return value
    const retval = {
        styleName,
        screenName,

        fontSize: undefined,
        lineHeight: undefined,

        marginBottom: undefined,
        marginTop: undefined,
        nestedMarginTop: undefined,

        fontModifiers: [],
    }

    const groupsMapping = [
        [ 'fontSize', 'lineHeight' ],
        [ 'marginBottom', 'marginTop', 'nestedMarginTop' ],
        [ '...fontModifiers' ],
    ]

    // break the definition up into groups
    const groups = definitions[styleName][screenName].split(' ')

    // use the groups mapping to convert the definition into an object
    groupsMapping.forEach(
        function (groupMapping, groupId) {
            // special case - is this group empty?
            if (groups[groupId] === '-') {
                return;
            }

            const parts = groups[groupId].split('/');
            groupMapping.forEach(
                function(key, partsIndex) {
                    // special case
                    if (key.startsWith('...')) {
                        // this key is a list
                        retval[key.substring(3)] = parts;
                        return;
                    }

                    // general case
                    if (parts[partsIndex] !== undefined && parts[partsIndex] !== '-') {
                        retval[key] = parts[partsIndex]
                    }
                }
            )
        }
    )

    // all done
    // console.log(retval);
    return retval
}

function rememberScreenForStyle(target, styleName, screenName) {
    if (target[styleName] === undefined) {
        target[styleName] = {}
    }
    target[styleName][screenName] = {}
}

function stylesAndScreens() {
    const retval = {}

    styleNames().forEach(
        function(styleName) {
            screensForStyle(styleName).forEach(
                function(screenName) {
                    rememberScreenForStyle(retval, styleName, screenName)
                }
            )
        }
    )

    // all done
    return retval
}

function styleDefinitions() {
    const retval = []

    styleNames().forEach(
        function(styleName) {
            screensForStyle(styleName).forEach(
                function(screenName) {
                    retval.push(styleDefinition(styleName, screenName))
                }
            )
        }
    )

    // all done
    return retval;
}

module.exports = {
    styleDefinitions,
    stylesAndScreens,
}