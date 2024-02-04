import { colorDetails } from "../theme/colors";

module.exports = {
    tableVars: {
        "--imprint-border-outer": colorDetails['imprint-dimgray'].hex,
        "--imprint-border-inner": colorDetails['imprint-gray'].hex,
    },
    tableStyles: {
        "table": {
            "border-collapse": "collapse",
            "border-left": "1px solid var(--imprint-border-outer)",
            "border-right": "1px solid var(--imprint-border-outer)",
            "border-top": "1px solid var(--imprint-border-outer)",
            "margin": 0,
            "width": "100%",
        },
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
    }
}