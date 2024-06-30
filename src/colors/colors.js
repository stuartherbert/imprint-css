const definitionStore = require("../helpers/definitionStore");

const apple = require("./apple");
const css = require("./css");
const flat = require("./flat");
const ganbaro = require("./ganbaro");
const imprint = require("./imprint");
const materialDesign = require("./material-design");
const metro = require("./metro");
const misc = require("./misc");
const msdl = require("./msdl");
const social = require("./social");

definitionStore.theme.colors = {
    ...apple,
    ...css,
    ...flat,
    ...ganbaro,
    ...imprint,
    ...materialDesign,
    ...metro,
    ...misc,
    ...msdl,
    ...social,
}

// to use in auto-generated docs
module.exports = {
    apple,
    css,
    flat,
    ganbaro,
    imprint,
    materialDesign,
    metro,
    misc,
    msdl,
    social,
}