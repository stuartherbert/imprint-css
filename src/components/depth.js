const { colors } = require("../theme/colors");

module.exports = {
    components: {
        vars: {
        },
        styles: {
            ".--standout": {
                "@apply shadow-md shadow-imprint-gray/90": {},
            },
            ".--standout.--faded": {
                "@apply shadow-imprint-palegray": {},
            },
            ".--standout.--disabled": {
                "@apply shadow-imprint-gray/60": {},
            },
            ".--shaded": {
                "--background-color": "var(--imprint-shaded-background-color) !important",
                "background-color": "var(--imprint-shaded-background-color) !important",
            },
            ".--shaded.--faded": {
                "--background-color": "var(--imprint-faded-shaded-background-color) !important",
                "background-color": "var(--imprint-faded-shaded-background-color) !important",
            },
            ".--shaded.--disabled": {
                "--background-color": "var(--imprint-disabled-shaded-background-color) !important",
                "background-color": "var(--imprint-shaded-disabled-background-color) !important",
            },
            ".--shaded.--info": {
                "--background-color": "var(--imprint-info-shaded-background-color) !important",
                "background-color": "var(--imprint-info-shaded-background-color) !important",
            },
            ".--shaded.--success": {
                "--background-color": "var(--imprint-success-shaded-background-color) !important",
                "background-color": "var(--imprint-success-shaded-background-color) !important",
            },
            ".--shaded.--warning": {
                "--background-color": "var(--imprint-warning-shaded-background-color) !important",
                "background-color": "var(--imprint-warning-shaded-background-color) !important",
            },
            ".--shaded.--danger": {
                "--background-color": "var(--imprint-danger-background-color) !important",
                "background-color": "var(--imprint-danger-shaded-background-color) !important",
            },
            ".--shaded.--primary": {
                "--background-color": "var(--imprint-primary-shaded-background-color) !important",
                "background-color": "var(--imprint-primary-shaded-background-color) !important",
            },
            ".--shaded.--secondary": {
                "--background-color": "var(--imprint-secondary-shaded-background-color) !important",
                "background-color": "var(--imprint-secondary-shaded-background-color) !important",
            },
        },
    }
}