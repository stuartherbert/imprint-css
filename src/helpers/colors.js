var CssColor = require("@safelytyped/css-color");

module.exports = {
    rgb: function(hex, alpha = undefined) {
        const color = new CssColor.makeCssColor(hex);
        if (color === undefined) {
            throw new Error("unable to understand CSS hex color: " + hex);
        }

        const channels = color.rgb().channelsData();

        if (alpha === undefined) {
            return "rgb("
                + channels.red + ", "
                + channels.green + ", "
                + channels.blue
                + ")";
        }

        return "rgb("
            + channels.red + ", "
            + channels.green + ", "
            + channels.blue + ", "
            + alpha
            + ")";
    },
};