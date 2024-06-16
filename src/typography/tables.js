const { colors } = require("../theme/colors");

module.exports = {
    tableVars: {
        "--imprint-border-outer": colors['imprint-dimgray'],
        "--imprint-border-inner": colors['imprint-gray'],
    },
    tableStyles: {
        "table": {
            "border-collapse": "collapse",
            "margin": 0,
            'margin-top': 'var(--imprint-prose-spacing)',
            "width": "100%",
        },
        ".table-plain table, table.plain": {
            "border-left": "1px solid var(--imprint-border-outer)",
            "border-right": "1px solid var(--imprint-border-outer)",
            "border-top": "1px solid var(--imprint-border-outer)",
            "thead": {
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
                }
            },
        },
        ".table-modern table, table.modern, table:not([class]), table[class=\"\"]": {
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
        },
    }
}