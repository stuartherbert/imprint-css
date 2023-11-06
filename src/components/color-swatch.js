module.exports = {
    colorSwatch: {
        '.imprint .colorswatch': {
            'margin-bottom': '1rem',
            'width': '100%',
            'ul': {
                'list-style': 'none',
                'padding-left': '0px',
                'white-space': 'nowrap',
                'font-weight': 'bold',
            },
            'li': {
                'display': 'flex',
                'flex-basis': 'auto',
                'flex-grow': '1',
                'flex-shrink': '0',
                'flex-flow': 'row wrap',
                'justify-content': 'space-between',
                'align-items': 'baseline',
                'padding': '1rem',
                'margin-right': '0.5rem',
            },
            'li.dark-bg': {
                'color': {
                    '@apply text-material-gray-100': {},
                }
            },
            'span.name': {
                'padding-bottom': '2rem',
                'a:link, a:visited': {
                    'color': 'inherit',
                    'text-decoration': 'none',
                    'border-bottom': '1px solid transparent',
                }
            },
            'span.shade': {
                'flex-grow': '1',
                'padding-right': '2rem',
                'overflow-wrap': 'break-word',
                'word-wrap': 'break-word',
                'word-break': 'break-word',
                'a:link, a:visited': {
                    'color': 'inherit',
                    'text-decoration': 'none',
                    'border-bottom': '1px solid transparent',
                }
            },
            'span.hex': {
                'a:link, a:visited': {
                    'color': 'inherit',
                    'text-decoration': 'none',
                    'border-bottom': '1px solid transparent',
                }
            }
        }
    }
}