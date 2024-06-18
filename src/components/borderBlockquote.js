const { colors } = require("../theme/colors");

module.exports = {
    borderBlockquote: {
        vars: {
            "--imprint-border-blockquote-width": "4px",
        },
        styles: {
            ".border--blockquote": {
                "--imprint-border-blockquote-bg": colors["imprint-graphite"],
                "border-left": "var(--imprint-border-blockquote-width) solid var(--imprint-border-blockquote-bg)",
                ".content": {
                    "@apply p-2su": {},
                },
            },
            ".border--blockquote.--primary": {
                "--imprint-border-blockquote-bg": "var(--imprint-primary-heading-bg)",
            },
            ".border--blockquote.--secondary": {
                "--imprint-border-blockquote-bg": "var(--imprint-secondary-heading-bg)",
            },
            ".border--blockquote.--info": {
                "--imprint-border-blockquote-bg": "var(--imprint-info-heading-bg)",
            },
            ".border--blockquote.--success": {
                "--imprint-border-blockquote-bg": "var(--imprint-success-heading-bg)",
            },
            ".border--blockquote.--warning": {
                "--imprint-border-blockquote-bg": "var(--imprint-warning-heading-bg)",
            },
            ".border--blockquote.--danger": {
                "--imprint-border-blockquote-bg": "var(--imprint-danger-heading-bg)",
            },
        },
    }
}