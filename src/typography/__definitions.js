/**
 * our size definitions are:
 *
 * font-size/line-height
 * bottom-margin/top-margin-always/top-margin-nested
 * font-weight
 *
 * based on group D from: https://www.bbc.co.uk/gel/features/typography
 */
const definitions = {
    'canon': '40/44 4su/-/8su bold',
    'trafalga': '30/34 4su/-/8su bold',
    'paragon': '26/30 4su/-/8su bold',
    'doublepica': '22/26 4su/-/8su 500',
    'greatprimer': '18/22 4su/-/8su bold',
    'bodycopy': '16/22 4su/-/8su normal',
    'pica': '16/20 4su/-/8su normal',
    'longprimer': '14/18 4su/-/8su normal',
    'brevier': '13/16 4su/-/8su normal',
    'minion': '12/16 4su/-/8su normal',
    'atlas': '140/148 4su/-/8su bold',
    'elephant': '116/124 4su/-/8su bold',
    'imperial': '96/104 4su/-/8su bold',
    'royal': '76/84 4su/-/8su bold',
    'foolscap': '56/60 4su/-/8su bold',
};

const STYLE_NAMES = Object.getOwnPropertyNames(definitions);

function styleDefinition(styleName) {
    // our return value
    const retval = {
        styleName,

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
    const groups = definitions[styleName].split(' ')

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
        TYPOGRAPHY_DEFINITIONS.push(styleDefinition(styleName));
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