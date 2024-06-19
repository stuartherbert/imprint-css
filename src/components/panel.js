const { colors } = require("../theme/colors");

module.exports = {
    panel: {
        vars: {
            "--imprint-panel-border-color": "var(--imprint-border-outer-color)",
            "--imprint-panel-border-width": "var(--imprint-border-outer-width)",
            "--imprint-panel-color": "inherit",
        },
        styles: {
            ".imprint-panel": {
                "border-width": "var(--imprint-panel-border-width)",
                "border-style": "solid",
                "border-color": "var(--imprint-panel-border-color)",
                "@apply rounded c:rounded-lg d:rounded-xl overflow-hidden": {},
                "color": "var(--imprint-panel-color)",
            },
            ".imprint-panel.--subtle": {
                "--imprint-panel-border-width": "var(--imprint-border-inner-width)",
            },
            ".imprint-panel.--primary": {
                "--imprint-panel-border-color": "var(--imprint-primary-heading-bg)",
            },
            ".imprint-panel.--secondary": {
                "--imprint-panel-border-color": "var(--imprint-secondary-heading-bg)",
            },
            ".imprint-panel.--info": {
                "--imprint-panel-border-color": "var(--imprint-info-heading-bg)",
            },
            ".imprint-panel.--success": {
                "--imprint-panel-border-color": "var(--imprint-success-heading-bg)",
            },
            ".imprint-panel.--warning": {
                "--imprint-panel-border-color": "var(--imprint-warning-heading-bg)",
            },
            ".imprint-panel.--danger": {
                "--imprint-panel-border-color": "var(--imprint-danger-heading-bg)",
            },

            ".imprint-panel.--disabled": {
                "--imprint-panel-border-color": "var(--imprint-disabled-heading-bg)",
                "--imprint-panel-color": "var(--imprint-disabled-content-fg)",
            },
            ".imprint-panel.--faded": {
                "--imprint-panel-border-color": "var(--imprint-faded-heading-bg)",
                "--imprint-panel-color": "var(--imprint-faded-content-fg)",
            },
        },
    }
}