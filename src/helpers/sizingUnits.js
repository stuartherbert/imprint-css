const { rem } = require("startijenn-rem");

// we will populate this as we go
const definitionStore = require('./definitionStore.js');

function suffix(input) {
    const re = /[0-9+-.]+/;

    return input.replace(re, "");
}

function stripSuffix(input) {
    const re = /[^0-9+-.]+/;

    return input.replace(re, "");
}

function replaceSuffix(input, newSuffix) {
    return stripSuffix(input) + newSuffix;
}

/**
 * converts the given px size into rem units
 *
 * @param {string} input
 * @returns
 */
function calculateRelunit(input) {
    // shorthand
    let pxValue = input;

    // add the 'px' suffix if one is not present
    if (!pxValue.endsWith('px')) {
        pxValue = pxValue + 'px';
    }

    // do the conversion, and return the result
    return rem(pxValue, { baseline: 16 } );
}

/**
 * converts the given px size into rem units
 *
 * also updates our central list of `ru` definitions, so that we can
 * export that to Tailwind at the very end
 *
 * @param {string} newUnit
 * @returns
 */
function relunit(newUnit) {
    // robustness
    if (newUnit === undefined) {
        return undefined;
    }

    // what are we looking at?
    let unitType = suffix(newUnit);
    if (unitType.length === 0) {
        unitType = "px";
    }

    switch (unitType) {
        case "px":
            const name = replaceSuffix(newUnit, "ru");
            const value = calculateRelunit(newUnit)

            definitionStore.sizing.relunits[name] = value;
            definitionStore.theme.extend.spacing[name] = value;

            // all done
            return value;

        case "su":
            return definitionStore.theme.extend.spacing[newUnit];

        default:
            throw new Error("unsupported spacing unit " + unitType);
    }
}

module.exports = {
    relunit,
    stripSuffix,
}