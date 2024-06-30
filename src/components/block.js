const definitionStore = require("../helpers/definitionStore");

definitionStore.staticComponents.vars = {
    ...definitionStore.staticComponents.vars,
    ...{
        "--imprint-block-border-color": "var(--imprint-border-outer-color)",
        "--imprint-block-border-width": "var(--imprint-border-outer-width)",
        "--imprint-block-color": "inherit",
        "--imprint-block-background-color": "inherit",
    },
}

definitionStore.staticComponents.styles = {
    ...definitionStore.staticComponents.styles,
    ...{
        ".imprint-block": {
            "--background-color": "var(--imprint-block-background-color)",
            "--color": "var(--imprint-block-color)",
            "border-width": "var(--imprint-block-border-width)",
            "border-style": "solid",
            "border-color": "var(--imprint-block-border-color)",
            "color": "var(--color)",
            "background-color": "var(--background-color)",
            "> *": {
                "@apply p-4su": {},
            },
        },
        ".imprint-block.--subtle": {
            "--imprint-block-border-width": "var(--imprint-border-inner-width)",
        },
        ".imprint-block.--primary": {
            "--imprint-block-border-color": "var(--imprint-primary-heading-background-color)",
            "--imprint-block-background-color": "var(--imprint-primary-content-background-color)",
            "--imprint-block-color": "var(--imprint-primary-content-color)",
        },
        ".imprint-block.--secondary": {
            "--imprint-block-border-color": "var(--imprint-secondary-heading-background-color)",
            "--imprint-block-background-color": "var(--imprint-secondary-content-background-color)",
            "--imprint-block-color": "var(--imprint-secondary-content-color)",
        },
        ".imprint-block.--info": {
            "--imprint-block-border-color": "var(--imprint-info-heading-background-color)",
            "--imprint-block-background-color": "var(--imprint-info-content-background-color)",
            "--imprint-block-color": "var(--imprint-info-content-color)",
        },
        ".imprint-block.--success": {
            "--imprint-block-border-color": "var(--imprint-success-heading-background-color)",
            "--imprint-block-background-color": "var(--imprint-success-content-background-color)",
            "--imprint-block-color": "var(--imprint-success-content-color)",
        },
        ".imprint-block.--warning": {
            "--imprint-block-border-color": "var(--imprint-warning-heading-background-color)",
            "--imprint-block-background-color": "var(--imprint-warning-content-background-color)",
            "--imprint-block-color": "var(--imprint-warning-content-color)",
        },
        ".imprint-block.--danger": {
            "--imprint-block-border-color": "var(--imprint-danger-heading-background-color)",
            "--imprint-block-background-color": "var(--imprint-danger-content-background-color)",
            "--imprint-block-color": "var(--imprint-danger-content-color)",
        },

        ".imprint-block.--disabled": {
            "--imprint-block-border-color": "var(--imprint-disabled-heading-background-color)",
            "--imprint-block-background-color": "var(--imprint-disabled-content-background-color)",
            "--imprint-block-color": "var(--imprint-disabled-content-color)",
        },
        ".imprint-block.--faded": {
            "--imprint-block-border-color": "var(--imprint-faded-heading-background-color)",
            "--imprint-block-background-color": "var(--imprint-faded-content-background-color)",
            "--imprint-block-color": "var(--imprint-faded-content-color)",
        },
    },
}