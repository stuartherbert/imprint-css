const { colors } = require("../theme/colors");

module.exports = {
    borderBlock: {
        vars: {
        },
        styles: {
            ".border--block": {
                "--imprint-border-block-bg": colors["imprint-graphite"],
                "border-width": "1px",
                "border-style": "solid",
                "border-color": "var(--imprint-border-block-bg)",
                ".content": {
                    "@apply p-2su": {},
                },
            },
            ".border--block.--primary": {
                "--imprint-border-block-bg": "var(--imprint-primary-heading-bg)",
            },
            ".border--block.--secondary": {
                "--imprint-border-block-bg": "var(--imprint-secondary-heading-bg)",
            },
            ".border--block.--info": {
                "--imprint-border-block-bg": "var(--imprint-info-heading-bg)",
            },
            ".border--block.--success": {
                "--imprint-border-block-bg": "var(--imprint-success-heading-bg)",
            },
            ".border--block.--warning": {
                "--imprint-border-block-bg": "var(--imprint-warning-heading-bg)",
            },
            ".border--block.--danger": {
                "--imprint-border-block-bg": "var(--imprint-danger-heading-bg)",
            },
        },
    }
}