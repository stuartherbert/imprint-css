const { colors } = require("../theme/colors");

module.exports = {
    alert: {
        vars: {
        },
        styles: {
            ".imprint-alert": {
                "--imprint-alert-border-color": "var(--imprint-border-outer-color)",
                "--imprint-alert-heading-fg": colors["white"],

                "h1, h2, h3, h4, h5, h6": {
                    "background-color": "var(--imprint-alert-border-color)",
                    "color": "var(--imprint-alert-heading-fg)",
                    "@apply px-4su py-2su": {},
                },
            },
            ".imprint-alert.--primary": {
                "--imprint-alert-border-color": "var(--imprint-primary-heading-bg)",
                "--imprint-alert-heading-fg": "var(--imprint-primary-heading-fg)",
            },
            ".imprint-alert.--secondary": {
                "--imprint-alert-border-color": "var(--imprint-secondary-heading-bg)",
                "--imprint-alert-heading-fg": "var(--imprint-secondary-heading-fg)",
            },
            ".imprint-alert.--info": {
                "--imprint-alert-border-color": "var(--imprint-info-heading-bg)",
                "--imprint-alert-heading-fg": "var(--imprint-info-heading-fg)",
            },
            ".imprint-alert.--success": {
                "--imprint-alert-border-color": "var(--imprint-success-heading-bg)",
                "--imprint-alert-heading-fg": "var(--imprint-success-heading-fg)",
            },
            ".imprint-alert.--warning": {
                "--imprint-alert-border-color": "var(--imprint-warning-heading-bg)",
                "--imprint-alert-heading-fg": "var(--imprint-warning-heading-fg)",
            },
            ".imprint-alert.--danger": {
                "--imprint-alert-border-color": "var(--imprint-danger-heading-bg)",
                "--imprint-alert-heading-fg": "var(--imprint-danger-heading-fg)",
            },

        },
    }
}