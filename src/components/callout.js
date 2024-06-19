module.exports = {
    callout: {
        vars: {
            "--imprint-callout-border-width": "4px",
            "--imprint-callout-color": "inherit",
        },
        styles: {
            ".imprint-callout": {
                "--imprint-callout-border-color": "var(--imprint-border-outer-color)",
                "border-left": "var(--imprint-callout-border-width) solid var(--imprint-callout-border-color)",
                "color": "var(--imprint-callout-color)",
            },
            ".imprint-callout.--subtle": {
                "--imprint-callout-border-width": "2px",
            },
            ".imprint-callout.--primary": {
                "--imprint-callout-border-color": "var(--imprint-primary-heading-bg)",
            },
            ".imprint-callout.--secondary": {
                "--imprint-callout-border-color": "var(--imprint-secondary-heading-bg)",
            },
            ".imprint-callout.--info": {
                "--imprint-callout-border-color": "var(--imprint-info-heading-bg)",
            },
            ".imprint-callout.--success": {
                "--imprint-callout-border-color": "var(--imprint-success-heading-bg)",
            },
            ".imprint-callout.--warning": {
                "--imprint-callout-border-color": "var(--imprint-warning-heading-bg)",
            },
            ".imprint-callout.--danger": {
                "--imprint-callout-border-color": "var(--imprint-danger-heading-bg)",
            },

            ".imprint-callout.--disabled": {
                "--imprint-callout-border-color": "var(--imprint-disabled-heading-bg)",
                "--imprint-callout-color": "var(--imprint-disabled-content-fg)",
            },
            ".imprint-callout.--faded": {
                "--imprint-callout-border-color": "var(--imprint-faded-heading-bg)",
                "--imprint-callout-color": "var(--imprint-faded-content-fg)",
            },

        },
    }
}