const screens = {
    'a': { 'max': "319px"},
    'b': { 'max': "599px" },
    'c': { 'raw': '(min-width:600px) and (pointer:corse)' },
    'd': { 'raw': '(min-width:600px) and (pointer:fine)' },
};

const containers = {
    '.__imprint-container-a': {
        'max-width': '100%',
    },
    '.__imprint-container-b': {
        'max-width': '320px',
    },
    '.__imprint-container-c': {
        'max-width': '600px',
    },
    '.__imprint-container-d': {
        'max-width': '600px',
    },
    '.imprint .container': {
        '@apply a:__imprint-container-a b:__imprint-container-b c:__imprint-container-c d:__imprint-container-d': {},
    }
}

module.exports = {
    screens,
    containers,
}