const { colors } = require("../theme/colors");

module.exports = {
    block: {
        vars: {
            "--imprint-block-border-color": "var(--imprint-border-outer-color)",
            "--imprint-block-border-width": "var(--imprint-border-outer-width)",
        },
        styles: {
            ".imprint-block": {
                "border-width": "var(--imprint-block-border-width)",
                "border-style": "solid",
                "border-color": "var(--imprint-block-border-color)",
                "> *": {
                    "@apply p-4su": {},
                },
            },
            ".imprint-block.--subtle": {
                "--imprint-block-border-width": "var(--imprint-border-inner-width)",
            },
            ".imprint-block.--primary": {
                "--imprint-block-border-color": "var(--imprint-primary-heading-bg)",
            },
            ".imprint-block.--secondary": {
                "--imprint-block-border-color": "var(--imprint-secondary-heading-bg)",
            },
            ".imprint-block.--info": {
                "--imprint-block-border-color": "var(--imprint-info-heading-bg)",
            },
            ".imprint-block.--success": {
                "--imprint-block-border-color": "var(--imprint-success-heading-bg)",
            },
            ".imprint-block.--warning": {
                "--imprint-block-border-color": "var(--imprint-warning-heading-bg)",
            },
            ".imprint-block.--danger": {
                "--imprint-block-border-color": "var(--imprint-danger-heading-bg)",
            },
        },
    }
}