const { relunit } = require('../helpers/sizingUnits.js');

const definitionStore = require('../helpers/definitionStore.js');

// we declare these in pixes, to make it easier to auto-generate documentation
const spacingUnitsToPx = {
    "1su": "4px",
    "2su": "8px",
    "3su": "12px",
    "4su": "16px",
    "5su": "20px",
    "6su": "24px",
    "7su": "32px",
    "8su": "40px",
    "9su": "48px",
    "10su": "56px",
    "11su": "64px",
    "12su": "72px",
    "13su": "80px",
    "14su": "120px",
    "15su": "160px",
}
definitionStore.sizing.spacing = {
    ...definitionStore.sizing.spacing,
    ...spacingUnitsToPx,
}

// this is what we will inject into Tailwind CSS
const spacingUnitsToRem = {};

// populate spacingUnitsToRem
Object.getOwnPropertyNames(spacingUnitsToPx).forEach(
    function(unitName) {
        spacingUnitsToRem[unitName] = relunit(spacingUnitsToPx[unitName]);
    }
);

// populate our central definition
definitionStore.theme.extend.spacing = {
    ...definitionStore.theme.extend.spacing,
    ...spacingUnitsToRem,
}

// all done