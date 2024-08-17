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
        "--imprint-border-outer-width": "2px",
        "--imprint-border-inner-width": "1px",

        "--imprint-prose-table-spacing": "1.5rem",
        "--imprint-table-stripe": colors['imprint-palegray'],
        "--imprint-table-border-outer-width": "var(--imprint-border-outer-width)",
        "--imprint-table-border-inner-width": "var(--imprint-border-inner-width)",
    }
}

definitionStore.defaultStyling.styles = {
    ...definitionStore.defaultStyling.styles,
    ...{
        // deliberately left blank - NOT A BUG
        "table-default": {
        },

        // DO NOT CREATE ANY CSS THAT APPLIES TO ALL TABLES
        // THAT WILL BREAK `table-default`!

        // `table--striped` modifier
        "table.table--striped-even tbody tr:nth-child(even) td, .table--striped-even table tbody tr:nth-child(even) td": {
            "background-color": "var(--imprint-semantic-stripe-background-color)",
            "color": "var(--imprint-semantic-stripe-color)",
        },
        "table.table--striped-odd tbody tr:nth-child(odd) td, .table--striped-odd table tbody tr:nth-child(odd) td": {
            "background-color": "var(--imprint-semantic-stripe-background-color)",
            "color": "var(--imprint-semantic-stripe-color)",
        },

        // `table-grid` style
        "table.table-grid, .table-grid table": {
            "border-collapse": "collapse",
            "margin": 0,
            'margin-top': 'var(--imprint-prose-spacing)',
            "width": "100%",
            "border": "var(--imprint-table-border-outer-width) solid var(--imprint-semantic-border-outer-color)",
            "thead": {
                "border-bottom": "var(--imprint-table-border-outer-width) solid var(--imprint-semantic-border-outer-color)",
                "th": {
                    "text-align": "left",
                    "vertical-align": "bottom",
                    "font-weight": "bold",
                    "@apply p-2": {},
                    "border-left": "var(--imprint-table-border-inner-width) solid var(--imprint-semantic-border-inner-color)",
                    "border-bottom": "var(--imprint-table-border-inner-width) solid var(--imprint-semantic-border-outer-color)",
                    "background-color": "var(--imprint-semantic-heading-background-color)",
                    "color": "var(--imprint-semantic-heading-color)",
                }
            },
            "tbody": {
                "th": {
                    "text-align": "left",
                    "vertical-align": "top",
                    "font-weight": "bold",
                    "@apply p-2": {},
                    "border-left": "var(--imprint-table-border-inner-width) solid var(--imprint-semantic-border-inner-color)",
                    "border-bottom": "var(--imprint-table-border-inner-width) solid var(--imprint-semantic-border-outer-color)",
                },
                "tr": {
                    "border-bottom": "var(--imprint-table-border-inner-width) solid var(--imprint-semantic-border-outer-color)",
                },
                "tr.last-row": {
                    "border-bottom": "var(--imprint-table-border-outer-width) solid var(--imprint-semantic-border-outer-color)",
                },
                "td": {
                    "border-left": "var(--imprint-table-border-inner-width) solid var(--imprint-semantic-border-inner-color)",
                    "vertical-align": "top",
                    "@apply p-2": {},
                    "background-color": "var(--imprint-semantic-content-background-color)",
                    "color": "var(--imprint-semantic-content-color)",
                },
            },
            "tbody + tfoot": {
                "border-top": "var(--imprint-table-border-outer-width) solid var(--imprint-semantic-border-outer-color)",
            },
            "tfoot": {
                "td": {
                    "border-left": "var(--imprint-table-border-inner-width) solid var(--imprint-semantic-border-inner-color)",
                    "@apply p-2": {},
                    "font-weight": "bold",
                },
            },
        },

        // `table-modern` style
        //
        // also acts as the default table style
        "table.table-modern, .table-modern table, table:not([class]), table[class=\"\"]": {
            "border-collapse": "collapse",
            "margin": 0,
            'margin-top': 'var(--imprint-prose-table-spacing)',
            "width": "100%",
            "border-top": "var(--imprint-table-border-outer-width) solid var(--imprint-semantic-border-outer-color)",
            "thead": {
                "border-bottom": "var(--imprint-table-border-outer-width) solid var(--imprint-semantic-border-outer-color)",
            },
            "tbody": {
                "th": {
                    "vertical-align": "top",
                },
                "tr": {
                    "border-bottom": "var(--imprint-table-border-inner-width) solid var(--imprint-semantic-border-inner-color)",
                },
                "tr.last-row": {
                    "border-bottom": "var(--imprint-table-border-outer-width) solid var(--imprint-semantic-border-outer-color)",
                },
                "border-bottom": "var(--imprint-table-border-outer-width) solid var(--imprint-semantic-border-outer-color)",
            },
            "th": {
                "text-align": "start",
            },
            "th, td": {
                "@apply p-2": {},
            },
            "td": {
                "vertical-align": "top",
            },
            "tbody + tfoot": {
                "border-top": "var(--imprint-table-border-outer-width) solid var(--imprint-semantic-border-outer-color)",
            },
            "tfoot": {
                "border-bottom": "var(--imprint-table-border-outer-width) solid var(--imprint-semantic-border-outer-color)",
                "td": {
                    "font-weight": "bold",
                },
            },
        },
    },
}