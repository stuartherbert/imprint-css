const { colors } = require("../theme/colors");

module.exports = {
    borderAlert: {
        vars: {
        },
        styles: {
            ".border--alert": {
                "--imprint-border-alert-bg": colors["imprint-graphite"],
                "--imprint-border-alert-fg": colors["white"],

                "h1, h2, h3, h4, h5, h6": {
                    "background-color": "var(--imprint-border-alert-bg)",
                    "color": "var(--imprint-border-alert-fg)",
                    "@apply p-2su": {},
                },
                "> *": {
                    "@apply p-2su": {},
                },
                ".content": {
                    "@apply p-2su": {},
                },
            },
            ".border--alert.--primary": {
                "--imprint-border-alert-bg": "var(--imprint-primary-heading-bg)",
                "--imprint-border-alert-fg": "var(--imprint-primary-heading-fg)",
            },
            ".border--alert.--secondary": {
                "--imprint-border-alert-bg": "var(--imprint-secondary-heading-bg)",
                "--imprint-border-alert-fg": "var(--imprint-secondary-heading-fg)",
            },
            ".border--alert.--info": {
                "--imprint-border-alert-bg": "var(--imprint-info-heading-bg)",
                "--imprint-border-alert-fg": "var(--imprint-info-heading-fg)",
            },
            ".border--alert.--success": {
                "--imprint-border-alert-bg": "var(--imprint-success-heading-bg)",
                "--imprint-border-alert-fg": "var(--imprint-success-heading-fg)",
            },
            ".border--alert.--warning": {
                "--imprint-border-alert-bg": "var(--imprint-warning-heading-bg)",
                "--imprint-border-alert-fg": "var(--imprint-warning-heading-fg)",
            },
            ".border--alert.--danger": {
                "--imprint-border-alert-bg": "var(--imprint-danger-heading-bg)",
                "--imprint-border-alert-fg": "var(--imprint-danger-heading-fg)",
            },

        },
    }
}