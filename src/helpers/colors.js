module.exports = {
    rgb: function(channels, alpha = undefined) {
        if (alpha === undefined) {
            return "rgb(" + channels + ")";
        }

        return "rgb(" + channels + " / " + alpha + ")";
    }
}