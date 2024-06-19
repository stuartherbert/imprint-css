const { colors } = require("../theme/colors");
const { rgb } = require("../helpers/colors");

module.exports = {
    semantic: {
        vars: {
            "--imprint-primary": colors['ganbaro-blue'][500],
            "--imprint-secondary": colors['ganbaro-green'][500],

            "--imprint-primary-content-background-color": "var(--imprint-background-color)",
            "--imprint-primary-content-color": colors['imprint-nero'],
            "--imprint-primary-shaded-background-color": rgb(colors['ganbaro-blue'][50], 0.2),
            "--imprint-primary-heading-background-color": "var(--imprint-primary)",
            "--imprint-primary-heading-color": colors["white"],
            "--imprint-secondary-content-background-color": "var(--imprint-background-color)",
            "--imprint-secondary-content-color": colors['imprint-nero'],
            "--imprint-secondary-shaded-background-color": rgb(colors['ganbaro-green'][50], 0.3),
            "--imprint-secondary-heading-background-color": "var(--imprint-secondary)",
            "--imprint-secondary-heading-color": colors['imprint-nero'],

            "--imprint-info-content-background-color": "var(--imprint-background-color)",
            "--imprint-info-content-color": "var(--imprint-color)",
            "--imprint-info-shaded-background-color": colors['imprint-paleblue'],
            "--imprint-info-heading-background-color": colors['imprint-darkblue'],
            "--imprint-info-heading-color": colors['white'],
            "--imprint-success-content-background-color": "var(--imprint-background-color)",
            "--imprint-success-content-color": "var(--imprint-color)",
            "--imprint-success-shaded-background-color": colors['imprint-palegreen'],
            "--imprint-success-heading-background-color": colors['imprint-darkgreen'],
            "--imprint-success-heading-color": colors['white'],
            "--imprint-warning-content-background-color": "var(--imprint-background-color)",
            "--imprint-warning-content-color": "var(--imprint-color)",
            "--imprint-warning-shaded-background-color": colors['imprint-paleyellow'],
            "--imprint-warning-heading-background-color": colors['imprint-darkyellow'],
            "--imprint-warning-heading-color": colors['imprint-nero'],
            "--imprint-danger-content-background-color": "var(--imprint-background-color)",
            "--imprint-danger-content-color": "var(--imprint-color)",
            "--imprint-danger-shaded-background-color": colors['imprint-lightred'],
            "--imprint-danger-heading-background-color": colors['imprint-darkred'],
            "--imprint-danger-heading-color": colors['white'],

            "--imprint-disabled": colors['imprint-lightgray'],

            "--imprint-disabled-content-background-color": "var(--imprint-background-color)",
            "--imprint-disabled-content-color": colors['imprint-gray'],
            "--imprint-disabled-heading-background-color": colors['imprint-gray'],
            "--imprint-disabled-heading-color": colors['imprint-palegray'],
            "--imprint-disabled-shaded-background-color": rgb(colors['imprint-palegray'], '0.40'),

            "--imprint-faded-content-background-color": "var(--imprint-background-color)",
            "--imprint-faded-content-color": colors['imprint-gray'],
            "--imprint-faded-heading-background-color": colors['imprint-palegray'],
            "--imprint-faded-heading-color": colors['imprint-gray'],
            "--imprint-faded-shaded-background-color": rgb(colors['imprint-palegray'], '0.20'),

            "--imprint-standout-shadow-color": colors['imprint-darkgray'],

            "--imprint-shaded-background-color": rgb(colors['imprint-palegray'], '0.66'),
        },
    }
}