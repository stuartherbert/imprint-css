/**
 * our size definitions are:
 *
 * font-size/line-height
 * bottom-margin/top-margin-always/top-margin-nested
 * font-weight
 *
 * source: https://www.bbc.co.uk/gel/features/typography
 */
const definitions = {
    'canon': {
        'a-t': '32/36 4su/-/8su bold',
        'a-d': '44/48 4su/-/8su bold',
        'b-t': '48/52 4su/-/8su bold',
        'b-d': '44/48 4su/-/8su bold',
        'c-t': '40/44 4su/-/8su bold',
        'c-d': '44/48 4su/-/8su bold',
        'd': '44/48 4su/-/8su bold',
        'e': '44/48 4su/-/8su bold',
    },
    'trafalga': {
        'a-t': '24/28 4su/-/8su bold',
        'a-d': '32/36 4su/-/8su bold',
        'b-t': '36/40 4su/-/8su bold',
        'b-d': '32/36 4su/-/8su bold',
        'c-t': '36/40 4su/-/8su bold',
        'c-d': '32/36 4su/-/8su bold',
        'd': '32/36 4su/-/8su bold',
        'e': '32/36 4su/-/8su bold',
    },
    'paragon': {
        'a-t': '22/26 4su/-/8su bold',
        'a-d': '28/32 4su/-/8su bold',
        'b': '28/32 4su/-/8su bold',
        'c': '28/32 4su/-/8su bold',
        'd': '28/32 4su/-/8su bold',
        'e': '28/32 4su/-/8su bold',
    },
    'doublepica': {
        'a-t': '20/24 4su/-/8su semibold',
        'a-d': '24/28 4su/-/8su semibold',
        'b-t': '26/30 4su/-/8su semibold',
        'b-d': '24/28 4su/-/8su semibold',
        'c-t': '26/30 4su/-/8su semibold',
        'c-d': '24/28 4su/-/8su semibold',
        'd': '24/28 4su/-/8su semibold',
        'e': '24/28 4su/-/8su semibold',
    },
    'greatprimer': {
        'a-t': '18/22 4su/-/8su bold',
        'a-d': '20/24 4su/-/8su bold',
        'b-t': '21/24 4su/-/8su bold',
        'b-d': '20/24 4su/-/8su bold',
        'c-t': '21/24 4su/-/8su bold',
        'c-d': '20/24 4su/-/8su bold',
        'd': '20/24 4su/-/8su bold',
        'e': '20/24 4su/-/8su bold',
    },
    'bodycopy': {
        'a-t': '17/24 4su/-/8su normal',
        'a-d': '16/22 4su/-/8su normal',
        'b-t': '20/24 4su/-/8su normal',
        'b-d': '16/22 4su/-/8su normal',
        'c-t': '17/22 4su/-/8su normal',
        'c-d': '16/22 4su/-/8su normal',
        'd': '16/22 4su/-/8su normal',
        'e': '16/22 4su/-/8su normal',
    },
    'pica': {
        'a-t': '16/20 4su/-/8su normal',
        'a-d': '16/20 4su/-/8su normal',
        'b-t': '18/22 4su/-/8su normal',
        'b-d': '16/20 4su/-/8su normal',
        'c-t': '18/22 4su/-/8su normal',
        'c-d': '16/20 4su/-/8su normal',
        'd': '16/20 4su/-/8su normal',
        'e': '16/20 4su/-/8su normal',
    },
    'longprimer': {
        'a-t': '15/18 4su/-/8su normal',
        'a-d': '14/18 4su/-/8su normal',
        'b-t': '15/20 4su/-/8su normal',
        'b-d': '14/18 4su/-/8su normal',
        'c-t': '15/20 4su/-/8su normal',
        'c-d': '14/18 4su/-/8su normal',
        'd': '14/18 4su/-/8su normal',
        'e': '14/18 4su/-/8su normal',
    },
    'brevier': {
        'a-t': '14/18 4su/-/8su normal',
        'a-d': '13/16 4su/-/8su normal',
        'b-t': '14/18 4su/-/8su normal',
        'b-d': '13/16 4su/-/8su normal',
        'c-t': '14/18 4su/-/8su normal',
        'c-d': '13/16 4su/-/8su normal',
        'd': '13/16 4su/-/8su normal',
        'e': '13/16 4su/-/8su normal',
    },
    'minion': {
        'a-t': '12/16 4su/-/8su normal',
        'a-d': '12/16 4su/-/8su normal',
        'b-t': '13/16 4su/-/8su normal',
        'b-d': '12/16 4su/-/8su normal',
        'c-t': '13/16 4su/-/8su normal',
        'c-d': '12/16 4su/-/8su normal',
        'd': '12/16 4su/-/8su normal',
        'e': '12/16 4su/-/8su normal',
    },
    'atlas': {
        'a-t': '96/104 4su/-/8su bold',
        'b-d': '140/148 4su/-/8su bold',
        'b-t': '192/208 4su/-/8su bold',
        'b-d': '140/148 4su/-/8su bold',
        'c-t': '192/208 4su/-/8su bold',
        'c-d': '140/148 4su/-/8su bold',
        'd': '140/148 4su/-/8su bold',
        'e': '140/148 4su/-/8su bold',
    },
    'elephant': {
        'a-t': '78/84 4su/-/8su bold',
        'a-d': '116/124 4su/-/8su bold',
        'b-t': '156/170 4su/-/8su bold',
        'b-d': '116/124 4su/-/8su bold',
        'c-t': '156/170 4su/-/8su bold',
        'c-d': '116/124 4su/-/8su bold',
        'd': '116/124 4su/-/8su bold',
        'e': '116/124 4su/-/8su bold',
    },
    'imperial': {
        'a-t': '64/72 4su/-/8su bold',
        'a-d': '96/104 4su/-/8su bold',
        'b-t': '124/136 4su/-/8su bold',
        'b-d': '96/104 4su/-/8su bold',
        'c-t': '124/136 4su/-/8su bold',
        'c-d': '96/104 4su/-/8su bold',
        'd': '96/104 4su/-/8su bold',
        'e': '96/104 4su/-/8su bold',
    },
    'royal': {
        'a': '52/60 4su/-/8su bold',
        'a-d': '76/84 4su/-/8su bold',
        'b-t': '94/104 4su/-/8su bold',
        'b-d': '76/84 4su/-/8su bold',
        'c-t': '94/104 4su/-/8su bold',
        'c-d': '76/84 4su/-/8su bold',
        'd': '76/84 4su/-/8su bold',
        'e': '76/84 4su/-/8su bold',
    },
    'foolscap': {
        'a-t': '40/44 4su/-/8su bold',
        'a-d': '56/60 4su/-/8su bold',
        'b-t': '72/80 4su/-/8su bold',
        'b-d': '56/60 4su/-/8su bold',
        'c-t': '72/80 4su/-/8su bold',
        'c-d': '56/60 4su/-/8su bold',
        'd': '56/60 4su/-/8su bold',
        'e': '56/60 4su/-/8su bold',
    },
};

const STYLE_NAMES = Object.getOwnPropertyNames(definitions);

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

        fontWeight: undefined,
    }

    const groupsMapping = [
        [ 'fontSize', 'lineHeight' ],
        [ 'marginBottom', 'marginTop', 'nestedMarginTop' ],
        [ 'fontWeight' ],
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

// this will hold our parsed definitions
const TYPOGRAPHY_DEFINITIONS = [];

// populate TYPOGRAPHY_DEFINITIONS
Object.getOwnPropertyNames(definitions).forEach(
    function(styleName) {
        Object.getOwnPropertyNames(definitions[styleName]).forEach(
            function(screenName) {
                TYPOGRAPHY_DEFINITIONS.push(styleDefinition(styleName, screenName));
            }
        )
    }
);

function internalTypographyStyleSelectorName(styleName, screenName, typeName) {
    return '.__imprint-' + typeName + '-' + styleName +'-' + screenName;
}

console.log('RAN');
module.exports = {
    STYLE_NAMES,
    TYPOGRAPHY_DEFINITIONS,
    internalTypographyStyleSelectorName,
};