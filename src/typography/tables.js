const { colors } = require("../theme/colors");

module.exports = {
    tableVars: {
        "--imprint-border-outer": colors['imprint-dimgray'],
        "--imprint-border-inner": colors['imprint-gray'],
        "--imprint-table-stripe": colors['imprint-lightgray'],
    },
    tableStyles: {
        // deliberately left blank - NOT A BUG
        "table-default": {
        },

        // DO NOT CREATE ANY CSS THAT APPLIES TO ALL TABLES
        // THAT WILL BREAK `table-default`!

        // `table--striped` modifier
        "table.table--striped tbody tr:nth-child(even) td, .table--striped table tbody tr:nth-child(even) td": {
            "background-color": "var(--imprint-table-stripe)",
        },

        // `table-grid` style
        "table.table-grid, .table-grid table": {
            "border-collapse": "collapse",
            "margin": 0,
            'margin-top': 'var(--imprint-prose-spacing)',
            "width": "100%",
            "border-left": "2px solid var(--imprint-border-outer)",
            "border-right": "2px solid var(--imprint-border-outer)",
            "border-top": "2px solid var(--imprint-border-outer)",
            "border-bottom": "2px solid var(--imprint-border-outer)",
            "thead": {
                "border-bottom": "2px solid var(--imprint-border-outer)",
                "th": {
                    "vertical-align": "bottom",
                    "font-weight": "bold",
                    "@apply p-2su": {},
                    "border-left": "1px solid var(--imprint-border-inner)",
                    "border-bottom": "1px solid var(--imprint-border-outer)",
                }
            },
            "tbody": {
                "tr": {
                    "border-bottom": "1px solid var(--imprint-border-outer)",
                },
                "td": {
                    "border-left": "1px solid var(--imprint-border-inner)",
                    "@apply p-2su": {},
                },
            },
            "tbody + tfoot": {
                "border-top": "2px solid var(--imprint-border-outer)",
            },
            "tfoot": {
                "td": {
                    "border-left": "1px solid var(--imprint-border-inner)",
                    "@apply p-2su": {},
                },
            },
        },

        // `table-modern` style
        //
        // also acts as the default table style
        "table.table-modern, .table-modern table, table:not([class]), table[class=\"\"]": {
            "border-collapse": "collapse",
            "margin": 0,
            'margin-top': 'var(--imprint-prose-spacing)',
            "width": "100%",
            "thead": {
                "border-top": "2px solid var(--imprint-border-outer)",
                "border-bottom": "2px solid var(--imprint-border-outer)",
            },
            "tbody": {
                "tr": {
                    "border-bottom": "1px solid var(--imprint-border-inner)",
                },
                "border-bottom": "2px solid var(--imprint-border-outer)",
            },
            "th, td": {
                "@apply p-2su": {},
            },
            "tbody + tfoot": {
                "border-top": "2px solid var(--imprint-border-outer)",
            },
            "tfoot": {
                "border-bottom": "2px solid var(--imprint-border-outer)",
                "td": {
                    "font-weight": "bold",
                },
            },
       },
    }
}