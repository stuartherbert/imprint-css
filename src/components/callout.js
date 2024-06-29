module.exports = {
    components: {
        vars: {
            "--imprint-callout-border-color": "var(--imprint-border-outer-color)",
            "--imprint-callout-border-width": "4px",
            "--imprint-callout-background-color": "inherit",
            "--imprint-callout-color": "inherit",
        },
        styles: {
            ".imprint-callout": {
                "--background-color": "var(--imprint-callout-background-color)",
                "--color": "var(--imprint-callout-color)",
                "border-left": "var(--imprint-callout-border-width) solid var(--imprint-callout-border-color)",
                "background-color": "var(--background-color)",
                "color": "var(--color)",
            },
            ".imprint-callout.--subtle": {
                "--imprint-callout-border-width": "2px",
            },
            ".imprint-callout.--primary": {
                "--imprint-callout-border-color": "var(--imprint-primary-heading-background-color)",
            },
            ".imprint-callout.--secondary": {
                "--imprint-callout-border-color": "var(--imprint-secondary-heading-background-color)",
            },
            ".imprint-callout.--info": {
                "--imprint-callout-border-color": "var(--imprint-info-heading-background-color)",
            },
            ".imprint-callout.--success": {
                "--imprint-callout-border-color": "var(--imprint-success-heading-background-color)",
            },
            ".imprint-callout.--warning": {
                "--imprint-callout-border-color": "var(--imprint-warning-heading-background-color)",
            },
            ".imprint-callout.--danger": {
                "--imprint-callout-border-color": "var(--imprint-danger-heading-background-color)",
            },

            ".imprint-callout.--disabled": {
                "--imprint-callout-border-color": "var(--imprint-disabled-heading-background-color)",
                "--imprint-callout-color": "var(--imprint-disabled-content-color)",
            },
            ".imprint-callout.--faded": {
                "--imprint-callout-border-color": "var(--imprint-faded-heading-background-color)",
                "--imprint-callout-color": "var(--imprint-faded-content-color)",
            },

        },
    }
}