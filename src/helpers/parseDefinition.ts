//
// Copyright (c) 2024-present Ganbaro Digital Ltd
// All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions
// are met:
//
//   * Re-distributions of source code must retain the above copyright
//     notice, this list of conditions and the following disclaimer.
//
//   * Redistributions in binary form must reproduce the above copyright
//     notice, this list of conditions and the following disclaimer in
//     the documentation and/or other materials provided with the
//     distribution.
//
//   * Neither the names of the copyright holders nor the names of his
//     contributors may be used to endorse or promote products derived
//     from this software without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
// "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
// LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS
// FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
// COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
// INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING,
// BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
// LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
// CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT
// LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN
// ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
// POSSIBILITY OF SUCH DAMAGE.
//

import { HashMap } from "@safelytyped/core-types";

/**
 *
 * @param {string} definition
 * @param {string[][]} groupsMapping
 * @param {string} groupSeparator
 * @returns
 */
export function parseDefinition(definition: string, groupsMapping: string[][], groupSeparator: string) {
    // our return value
    const retval: HashMap<string[]|string|undefined> = {};

    // break the definition up into groups
    const groups = definition.split(groupSeparator);

    // use the groups mapping to convert the definition into an object
    groupsMapping.forEach(
        function (groupMapping, groupId) {
            // special case - is this group empty?
            if (groups[groupId] === '-') {
                return;
            }

            // robustness!
            if (groups[groupId] === undefined) {
                console.log(groups);
                console.log(groupId);
            }

            const parts = groups[groupId].split('/');
            groupMapping.forEach(
                function(key, partsIndex) {
                    // special case
                    if (key.startsWith('...')) {
                        // this key is a list
                        retval[key.substring(3)] = parts;
                        return;
                    }

                    // general case
                    retval[key] = undefined;
                    if (parts[partsIndex] !== undefined && parts[partsIndex].trim() !== '-') {
                        retval[key] = parts[partsIndex].trim();
                    }
                }
            )
        }
    )

    // all done
    // console.log(retval);
    return retval;
}

export function parseDefinitions<R extends object>(
    definitions: HashMap<string>,
    groupsMapping: string[][],
    groupSeparator: string = ";"
) {
    const retval: HashMap<HashMap<string|string[]|undefined>> = {}
    Object.getOwnPropertyNames(definitions).forEach(
        function(key) {
            retval[key] = parseDefinition(definitions[key], groupsMapping, groupSeparator);
        }
    )

    return retval as R;
}