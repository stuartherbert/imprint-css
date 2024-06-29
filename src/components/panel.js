module.exports = {
    components: {
        vars: {
            "--imprint-panel-border-color": "var(--imprint-border-outer-color)",
            "--imprint-panel-border-width": "var(--imprint-border-outer-width)",
            "--imprint-panel-background-color": "inherit",
            "--imprint-panel-color": "inherit",
        },
        styles: {
            ".imprint-panel": {
                "--background-color": "var(--imprint-panel-background-color)",
                "--color": "var(--imprint-panel-color)",
                "background-color": "var(--background-color)",
                "color": "var(--color)",

                "border-width": "var(--imprint-panel-border-width)",
                "border-style": "solid",
                "border-color": "var(--imprint-panel-border-color)",
                "@apply rounded-lg d:rounded-xl overflow-hidden": {},
            },
            ".imprint-panel.--subtle": {
                "--imprint-panel-border-width": "var(--imprint-border-inner-width)",
            },
            ".imprint-panel.--primary": {
                "--imprint-panel-border-color": "var(--imprint-primary-heading-background-color)",
            },
            ".imprint-panel.--secondary": {
                "--imprint-panel-border-color": "var(--imprint-secondary-heading-background-color)",
            },
            ".imprint-panel.--info": {
                "--imprint-panel-border-color": "var(--imprint-info-heading-background-color)",
            },
            ".imprint-panel.--success": {
                "--imprint-panel-border-color": "var(--imprint-success-heading-background-color)",
            },
            ".imprint-panel.--warning": {
                "--imprint-panel-border-color": "var(--imprint-warning-heading-background-color)",
            },
            ".imprint-panel.--danger": {
                "--imprint-panel-border-color": "var(--imprint-danger-heading-background-color)",
            },

            ".imprint-panel.--disabled": {
                "--imprint-panel-border-color": "var(--imprint-disabled-heading-background-color)",
                "--imprint-panel-color": "var(--imprint-disabled-content-color)",
            },
            ".imprint-panel.--faded": {
                "--imprint-panel-border-color": "var(--imprint-faded-heading-background-color)",
                "--imprint-panel-color": "var(--imprint-faded-content-color)",
            },
        },
    }
}