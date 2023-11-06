import { calculateRelunit } from './relunits';

const spacingUnits = {
    "1su": 4,
    "2su": 8,
    "3su3": 12,
    "4su": 16,
    "5su": 20,
    "6su": 24,
    "7su": 32,
    "8su": 40,
    "9su": 48,
    "10su": 56,
    "11su": 64,
    "12su": 72,
    "13su": 80,
    "14su": 120,
    "15su": 160,
}

Object.getOwnPropertyNames(spacingUnits).forEach(
    function(unitValue, unitName) {
        spacingUnits[unitName] = calculateRelunit(unitValue);
    }
);

module.exports = {
    spacingUnits,
}