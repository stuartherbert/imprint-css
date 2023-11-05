import rem from "startijenn-rem";

function addRelunit(relunits, newUnit) {
    relunits[newUnit] = newUnit;
}

function calculateRelunit(input) {
    return rem(input + 'px', { baseline: 16} );
}

function buildRelunits(...inputs) {
    const retval = {}

    inputs.forEach(
        function(input) {
            const unitNames = Object.getOwnPropertyNames(input);
            unitNames.forEach(function (unitName) {
                const relunit = calculateRelunit(unitName);
                retval[unitName] = relunit;
            });
        }
    );

    // all done
    return retval;
}

module.exports = {
    addRelunit,
    buildRelunits,
}