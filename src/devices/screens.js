module.exports = {
    theme: {
        screens: {
            'a': { 'max': "319px" },
            'b': { 'min': "320px" },
            'c': { 'min': '600px' },
            'c-t': { 'raw': '(min-width:600px) and (pointer:corse)' },
            'c-d': { 'raw': '(min-width:600px) and (pointer:fine)' },
            'd': { 'min': '1920px' },
         },
    },
    staticUtilities: {
        vars: {

        },
        styles: {
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
                'max-width': '800px',
            },
            '.imprint-container': {
                '@apply a:__imprint-container-a b:__imprint-container-b c:__imprint-container-c d:__imprint-container-d': {},
            }
        },
    },
}