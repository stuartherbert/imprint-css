const { colors } = require("../theme/colors");

module.exports = {
    borderPanel: {
        vars: {
        },
        styles: {
            ".border--panel": {
                "--imprint-border-panel-bg": colors["imprint-graphite"],
                "border-width": "1px",
                "border-style": "solid",
                "border-color": "var(--imprint-border-panel-bg)",
                "@apply ring-1 ring-black ring-opacity-5 rounded": {},
                ".content": {
                    "@apply p-2su": {},
                },
            },
            ".border--panel.--primary": {
                "--imprint-border-panel-bg": "var(--imprint-primary-heading-bg)",
            },
            ".border--panel.--secondary": {
                "--imprint-border-panel-bg": "var(--imprint-secondary-heading-bg)",
            },
            ".border--panel.--info": {
                "--imprint-border-panel-bg": "var(--imprint-info-heading-bg)",
            },
            ".border--panel.--success": {
                "--imprint-border-panel-bg": "var(--imprint-success-heading-bg)",
            },
            ".border--panel.--warning": {
                "--imprint-border-panel-bg": "var(--imprint-warning-heading-bg)",
            },
            ".border--panel.--danger": {
                "--imprint-border-panel-bg": "var(--imprint-danger-heading-bg)",
            },
        },
    }
}