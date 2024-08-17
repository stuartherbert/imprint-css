//
// Copyright (c) 2024-present Ganbaro Digital Ltd
// All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions
// are met:
//
//   * Re-distributions of source code must retain the above copyright
//     notice, this list of conditions and the following disclaimer.
//
//   * Redistributions in binary form must reproduce the above copyright
//     notice, this list of conditions and the following disclaimer in
//     the documentation and/or other materials provided with the
//     distribution.
//
//   * Neither the names of the copyright holders nor the names of his
//     contributors may be used to endorse or promote products derived
//     from this software without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
// "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
// LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS
// FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
// COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
// INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING,
// BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
// LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
// CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT
// LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN
// ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
// POSSIBILITY OF SUCH DAMAGE.
//

const definitionStore = require("../helpers/definitionStore");
const { colors } = require("../colors/colors");

definitionStore.defaultStyling.vars = {
    ...definitionStore.defaultStyling.vars,
    ...{
        '--imprint-del-background-color': colors['imprint-palered'],
        '--imprint-ins-background-color': colors['imprint-palegreen'],

        '--imprint-kbd-background-color': 'transparent',
        '--imprint-kbd-size': '0.85em',

        '--imprint-mark-background-color': 'yellow',
        '--imprint-mark-size': '0.95em',

        '--imprint-inline-text-padding': '0.1rem 0.2rem',
    },
}

definitionStore.defaultStyling.styles = {
    ...definitionStore.defaultStyling.styles,
    ...{
        'p': {
            '@apply imprint-block-bodycopy': {},
        },
        'p.p--leader': {
            '@apply imprint-block-greatprimer text-imprint-graphite': {},
        },
        'p.p--abstract': {
            'text-indent': '2em',
            'font-style': 'italic',
        },
        'p.p--keywords': {
            'font-style': 'italic',
        },

        'ins': {
            'background-color': 'rgb(var(--imprint-ins-background-color))',
        },
        'del': {
            'background-color': 'rgb(var(--imprint-del-background-color))',
            'text-decoration': 'line-through',
        },

        'kbd': {
            'font-family': 'inherit',
            'font-size': 'var(--imprint-kbd-size)',
            'font-weight': 'light',
            'padding': '1px 4px',
            'border': '1px solid',
            'border-radius': 'var(--imprint-inline-mono-border-radius)',
            'background-color': 'var(--imprint-kbd-background-color)',
            'box-shadow': '0 1px 1px rgba(0, 0, 0, 0.20), inset 1px 0px 2px rgba(0, 0, 0, 0.20), inset -1px 0px 2px rgba(0, 0, 0, 0.20)',

        },

        'mark': {
            'background-color': 'var(--imprint-mark-background-color)',
            'font-size': 'var(--imprint-mark-size)',
            'padding': 'var(--imprint-inline-text-padding)',
        },

        'abbr, abbr[title]': {
            'text-decoration': 'none',
            'border-bottom': '1px dashed currentColor',
        },

        'time': {
            '@apply font-semibold': {},
        },

        'var': {
            '@apply font-semibold': {},
            'font-style': 'italic',
        },

        'blockquote': {
            '@apply imprint-callout text-imprint-darkgray': {},
            "> *": {
                '@apply pl-4': {},
            },
            '> * + *': {
                'margin-top': 'var(--imprint-prose-spacing)',
            },
        },
    },
}