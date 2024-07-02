function buildStyleNameForScreen(screenName, ...styleNameParts) {
    return styleNameParts.join('-')
        + '-' + screenName;
}

module.exports = {
    buildStyleNameForScreen,
}