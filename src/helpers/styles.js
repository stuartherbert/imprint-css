function buildStyleNameForScreen(screenName, ...styleNameParts) {
    return buildStyleName(...styleNameParts)
        + '-' + screenName;
}

function buildStyleName(...styleNameParts) {
    return styleNameParts.join('-');
}

module.exports = {
    buildStyleName,
    buildStyleNameForScreen,
}