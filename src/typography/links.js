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

definitionStore.staticUtilities.styles = {
    ...definitionStore.staticUtilities.styles,
    ...{
        ".imprint-link": {
            'color': 'var(--imprint-semantic-link-color)',
            'background-color': 'var(--imprint-semantic-link-background-color)',
            'text-decoration': 'none',
            'font-weight': '500',
            'border-bottom': '1px solid var(--imprint-semantic-link-border-color)',
        },
        ".imprint-link:visited, .imprint-link-visited": {
            'color': 'var(--imprint-semantic-link-visited-color)',
            'background-color': 'var(--imprint-semantic-link-visited-background-color)',
            'text-decoration': 'none',
            'border-bottom': '1px solid var(--imprint-semantic-link-border-color)',
        },
        ".imprint-link:hover, .imprint-link-hover": {
            'color': 'var(--imprint-semantic-link-hover-color)',
            'background-color': 'var(--imprint-semantic-link-hover-background-color)',
            'border-bottom': '2px solid var(--imprint-semantic-link-hover-border-color)',
        },
        ".imprint-link:active, .imprint-link:focus, .imprint-link-active": {
            'color': 'var(--imprint-link-active-color)',
            'background-color': 'var(--imprint-link-semantic-active-background-color)',
            'border-bottom': '2px solid var(--imprint-semantic-link-active-border-color)',
        },
    }
}

definitionStore.defaultStyling.styles = {
    ...definitionStore.defaultStyling.styles,
    ...{
        "a:not(nav a)": {
            "@apply imprint-link": {},
        },
        "a:visited:not(nav a)": {
            "@apply imprint-link-visited": {},
        },
        " a:hover:not(nav a)": {
            "@apply imprint-link-hover": {},
        },
        "a:active:not(nav a), a:focus:not(nav)": {
            "@apply imprint-link-active": {},
        },
    },
}