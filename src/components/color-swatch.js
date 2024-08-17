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

module.exports = {
    components: {
        vars: {

        },
        styles: {
            '.colorswatch': {
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
                'li.dark-background-color': {
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
                },
            },
        },
    },
}