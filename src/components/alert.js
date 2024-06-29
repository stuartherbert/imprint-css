const { colors } = require("../theme/colors");

module.exports = {
    components: {
        vars: {
            "--imprint-alert-border-color": "var(--imprint-border-outer-color)",
            "--imprint-alert-heading-color": colors["white"],
        },
        styles: {
            ".imprint-alert": {
                "h1, h2, h3, h4, h5, h6": {
                    "background-color": "var(--imprint-alert-border-color)",
                    "color": "var(--imprint-alert-heading-color)",
                    "@apply px-4su py-2su": {},
                },
            },
            ".imprint-alert.--primary": {
                "--imprint-alert-border-color": "var(--imprint-primary-heading-background-color)",
                "--imprint-alert-heading-color": "var(--imprint-primary-heading-color)",
            },
            ".imprint-alert.--secondary": {
                "--imprint-alert-border-color": "var(--imprint-secondary-heading-background-color)",
                "--imprint-alert-heading-color": "var(--imprint-secondary-heading-color)",
            },
            ".imprint-alert.--info": {
                "--imprint-alert-border-color": "var(--imprint-info-heading-background-color)",
                "--imprint-alert-heading-color": "var(--imprint-info-heading-color)",
            },
            ".imprint-alert.--success": {
                "--imprint-alert-border-color": "var(--imprint-success-heading-background-color)",
                "--imprint-alert-heading-color": "var(--imprint-success-heading-color)",
            },
            ".imprint-alert.--warning": {
                "--imprint-alert-border-color": "var(--imprint-warning-heading-background-color)",
                "--imprint-alert-heading-color": "var(--imprint-warning-heading-color)",
            },
            ".imprint-alert.--danger": {
                "--imprint-alert-border-color": "var(--imprint-danger-heading-background-color)",
                "--imprint-alert-heading-color": "var(--imprint-danger-heading-color)",
            },

            ".imprint-alert.--disabled": {
                "--imprint-alert-border-color": "var(--imprint-disabled-heading-background-color)",
                "--imprint-alert-heading-color": "var(--imprint-disabled-heading-color)",
            },
            ".imprint-alert.--faded": {
                "--imprint-alert-border-color": "var(--imprint-faded-heading-background-color)",
                "--imprint-alert-heading-color": "var(--imprint-faded-heading-color)",
            },
        },
    },
}