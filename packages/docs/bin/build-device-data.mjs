#! /usr/bin/env node

import { DEFINITION_STORE } from "@imprintcss/css-definitions";
import * as fs from 'node:fs';

// ================================================================
//
// HELPER FUNCTIONS
//
// ----------------------------------------------------------------

function writeToDocs(
    collection,
    name,
    content
)
{
    fs.writeFileSync(
        "src/content/" + collection + "/" + name + ".json",
        JSON.stringify(content, null, 4)
    );
}

function writeDevice(
    name,
    definition,
)
{
    writeToDocs('devices', name, definition);
}

function writeDevices(
)
{
    Object.getOwnPropertyNames(DEFINITION_STORE.devices).forEach(
        function(deviceName) {
            writeDevice(deviceName, DEFINITION_STORE.devices[deviceName]);
        }
    )
}

function writeVars(
    collection,
    vars
)
{
    Object.getOwnPropertyNames(vars).forEach(
        function(key) {
            writeToDocs(collection, key.substring(2), vars[key]);
        }
    )
}


// ================================================================
//
// MAIN CODE
//
// ----------------------------------------------------------------


writeDevices();
