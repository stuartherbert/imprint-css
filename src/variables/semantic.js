const { colors } = require("../theme/colors");

module.exports = {
    semantic: {
        vars: {
            "--imprint-primary": colors['ganbaro-blue'][500],
            "--imprint-secondary": colors['ganbaro-green'][500],

            "--imprint-primary-content-bg": "var(--imprint-bg)",
            "--imprint-primary-content-fg": colors['imprint-nero'],
            "--imprint-primary-heading-bg": "var(--imprint-primary)",
            "--imprint-primary-heading-fg": colors["white"],
            "--imprint-secondary-content-bg": "var(--imprint-bg)",
            "--imprint-secondary-content-fg": colors['imprint-nero'],
            "--imprint-secondary-heading-bg": "var(--imprint-secondary)",
            "--imprint-secondary-heading-fg": colors['imprint-nero'],

            "--imprint-info-content-bg": colors['imprint-paleblue'],
            "--imprint-info-content-fg": "var(--imprint-fg)",
            "--imprint-info-heading-bg": colors['imprint-darkblue'],
            "--imprint-info-heading-fg": colors['white'],
            "--imprint-success-content-bg": colors['imprint-palegreen'],
            "--imprint-success-content-fg": "var(--imprint-fg)",
            "--imprint-success-heading-bg": colors['imprint-darkgreen'],
            "--imprint-success-heading-fg": colors['white'],
            "--imprint-warning-content-bg": colors['imprint-paleyellow'],
            "--imprint-warning-content-fg": "var(--imprint-fg)",
            "--imprint-warning-heading-bg": colors['imprint-darkyellow'],
            "--imprint-warning-heading-fg": colors['imprint-nero'],
            "--imprint-danger-content-bg": colors['imprint-lightred'],
            "--imprint-danger-content-fg": "var(--imprint-fg)",
            "--imprint-danger-heading-bg": colors['imprint-darkred'],
            "--imprint-danger-heading-fg": colors['white'],

            "--imprint-disabled": colors['imprint-lightgray'],

            "--imprint-disabled-content-bg": "var(--imprint-bg)",
            "--imprint-disabled-content-fg": colors['imprint-gray'],
            "--imprint-disabled-heading-bg": colors['imprint-gray'],
            "--imprint-disabled-heading-fg": colors['imprint-palegray'],

            "--imprint-faded-content-bg": "var(--imprint-bg)",
            "--imprint-faded-content-fg": colors['imprint-gray'],
            "--imprint-faded-heading-bg": colors['imprint-palegray'],
            "--imprint-faded-heading-fg": colors['imprint-gray'],
        },
    }
}