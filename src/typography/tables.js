const definitionStore = require("../helpers/definitionStore");
const { colors } = require("../theme/colors");

definitionStore.staticUtilities.vars = {
    ...definitionStore.staticUtilities.vars,
    ...{
        "--imprint-border-outer-color": colors['imprint-graphite'],
        "--imprint-border-outer-width": "2px",
        "--imprint-border-inner-color": colors['imprint-gray'],
        "--imprint-border-inner-width": "1px",

        "--imprint-table-stripe": colors['imprint-palegray'],
        "--imprint-table-border-outer-color": "var(--imprint-border-outer-color)",
        "--imprint-table-border-outer-width": "var(--imprint-border-outer-width)",
        "--imprint-table-border-inner-color": "var(--imprint-border-inner-color)",
        "--imprint-table-border-inner-width": "var(--imprint-border-inner-width)",
    }
}

definitionStore.staticUtilities.styles = {
    ...definitionStore.staticUtilities.styles,
    ...{
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
            "border": "var(--imprint-table-border-outer-width) solid var(--imprint-table-border-outer-color)",
            "thead": {
                "border-bottom": "var(--imprint-table-border-outer-width) solid var(--imprint-table-border-outer-color)",
                "th": {
                    "text-align": "left",
                    "vertical-align": "bottom",
                    "font-weight": "bold",
                    "@apply p-2su": {},
                    "border-left": "var(--imprint-table-border-inner-width) solid var(--imprint-border-inner-color)",
                    "border-bottom": "var(--imprint-table-border-inner-width) solid var(--imprint-border-outer-color)",
                }
            },
            "tbody": {
                "tr": {
                    "border-bottom": "var(--imprint-table-border-inner-width) solid var(--imprint-table-border-outer-color)",
                },
                "td": {
                    "border-left": "var(--imprint-table-border-inner-width) solid var(--imprint-border-inner-color)",
                    "@apply p-2su": {},
                },
            },
            "tbody + tfoot": {
                "border-top": "var(--imprint-table-border-outer-width) solid var(--imprint-table-border-outer-color)",
            },
            "tfoot": {
                "td": {
                    "border-left": "var(--imprint-table-border-inner-width) solid var(--imprint-border-inner-color)",
                    "@apply p-2su": {},
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
            'margin-top': 'var(--imprint-prose-spacing)',
            "width": "100%",
            "thead": {
                "border-top": "var(--imprint-table-border-outer-width) solid var(--imprint-table-border-outer-color)",
                "border-bottom": "var(--imprint-table-border-outer-width) solid var(--imprint-table-border-outer-color)",
            },
            "tbody": {
                "tr": {
                    "border-bottom": "var(--imprint-table-border-inner-width) solid var(--imprint-table-border-inner-color)",
                },
                "border-bottom": "var(--imprint-table-border-outer-width) solid var(--imprint-table-border-outer-color)",
            },
            "th": {
                "text-align": "start",
            },
            "th, td": {
                "@apply p-2su": {},
            },
            "tbody + tfoot": {
                "border-top": "var(--imprint-table-border-outer-width) solid var(--imprint-table-border-outer-color)",
            },
            "tfoot": {
                "border-bottom": "var(--imprint-table-border-outer-width) solid var(--imprint-table-border-outer-color)",
                "td": {
                    "font-weight": "bold",
                },
            },
        },
    },
}