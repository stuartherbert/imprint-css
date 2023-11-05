import { addRelunit } from './relunits';

const sizes = {
    'canon': {
        'a': '28/32',
        'b': '32/36',
        'c': '52/56',
        'd': '44/48',
    },
    'trafalga': {
        'a': '20/24',
        'b': '24/28',
        'c': '36/40',
        'd': '32/36',
    },
    'paragon': {
        'a': '20/24',
        'b': '22/26',
        'c': '28/32',
        'd': '28/32',
    },
    'doublepica': {
        'a': '20/24',
        'b': '20/24',
        'c': '26/30',
        'd': '24/28',
    },
    'greatprimer': {
        'a': '18/22',
        'b': '18/22',
        'c': '21/24',
        'd': '20/24',
    },
    'bodycopy': {
        'a': '15/20',
        'b': '16/22',
        'c': '18/24',
        'd': '16/22',
    },
    'pica': {
        'a': '15/20',
        'b': '16/20',
        'c': '18/22',
        'd': '16/20',
    },
    'longprimer': {
        'a': '15/18',
        'b': '15/18',
        'c': '15/20',
        'd': '14/18',
    },
    'brevier': {
        'a': '14/16',
        'b': '14/18',
        'c': '14/18',
        'd': '13/16',
    },
    'minion': {
        'a': '12/16',
        'b': '12/16',
        'c': '13/16',
        'd': '12/16',
    },
    'atlas': {
        'a': '78/84',
        'b': '96/104',
        'c': '192/208',
        'd': '140/148',
    },
    'elephant': {
        'a': '60/64',
        'b': '78/84',
        'c': '156/170',
        'd': '116/124',
    },
    'imperial': {
        'a': '50/54',
        'b': '64/72',
        'c': '124/136',
        'd': '96/104',
    },
    'royal': {
        'a': '40/44',
        'b': '52/60',
        'c': '94/104',
        'd': '76/84',
    },
    'foolscap': {
        'a': '32/36',
        'b': '40/44',
        'c': '72/80',
        'd': '56/60',
    },
};

const typographyRelunits = {};
const typographyStyles = {};

Object.getOwnPropertyNames(sizes).forEach(function(styleName) {
    const size = sizes[styleName];

    const screenNames = [];

    // define the internal styles for this typography type
    Object.getOwnPropertyNames(size).forEach(function(screenName) {
        // add this screen to our list
        screenNames.push(screenName);

        // what is the spec for this screen?
        //
        // sizeSpec[0] is the font-size
        // sizespec[1] is the line-height
        const sizeSpec = size[screenName].split('/');
        const fontSize = sizeSpec[0];
        const lineHeight = sizeSpec[1];

        // make sure they're in the list of relunits to export
        addRelunit(typographyRelunits, fontSize);
        addRelunit(typographyRelunits, lineHeight);

        // what are our internal styles called?
        const inlineStyleName = '__imprint-' + styleName + '-' + screenName + '-inline';
        const blockStyleName = '__imprint-' + styleName + '-' + screenName + '-block';

        const inlineStyleKey = '@apply fontsize-' + fontSize;
        const blockStyleKey = '@apply ' + inlineStyleName + ' lineheight-' + lineHeight;

        // define them!
        typographyStyles['.' + inlineStyleName] = {}
        typographyStyles['.' + inlineStyleName][inlineStyleKey] = {}
        typographyStyles['.' + blockStyleName] = {}
        typographyStyles['.' + blockStyleName][blockStyleKey] = {}
    })

    // define the external style for this typography type
    let externalInlineStyleKey = '@apply';
    screenNames.forEach(function(screenName) {
        externalInlineStyleKey = externalInlineStyleKey + ' __imprint-' + styleName + '-' + screenName + '-inline';
    });

    typographyStyles['.' + styleName + '-inline'] = {}
    typographyStyles['.' + styleName + '-inline'][externalInlineStyleKey] = {}

    let externalBlockStyleKey = '@apply';
    screenNames.forEach(function(screenName) {
        externalBlockStyleKey = externalBlockStyleKey + ' __imprint-' + styleName + '-' + screenName + '-block';
    });

    typographyStyles['.' + styleName + '-block'] = {}
    typographyStyles['.' + styleName + '-block'][externalBlockStyleKey] = {}
});

module.exports = {
    typographyRelunits,
    typographyStyles
}