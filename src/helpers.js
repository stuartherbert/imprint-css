function applyStyle(target, styleName, ...stylesToApply) {
    // make sure we have an object to hit up
    if (target[styleName] === undefined) {
        target[styleName] = {}
    }

    const style = '@apply ' + stylesToApply.join(' ')

    target[styleName][style] = {}
}

function rememberStyle(target, styleName, screenName, type, style)
{
    if (target[styleName][screenName][type] === undefined) {
        target[styleName][screenName][type] = []
    }

    target[styleName][screenName][type].push(style)
}

function buildOutExternalStyles(target, internalStyles) {
    Object.getOwnPropertyNames(internalStyles).forEach(
        function(styleName) {
            Object.getOwnPropertyNames(internalStyles[styleName]).forEach(
                function(screenName) {
                    Object.getOwnPropertyNames(internalStyles[styleName][screenName]).forEach(
                        function(variantName) {
                            applyStyle(target, '.' + styleName + '-' + variantName, internalStyles[styleName][screenName][variantName])
                        }
                    )
                }
            )
        }
    );

}

module.exports = {
    applyStyle,
    buildOutExternalStyles,
    rememberStyle,
}