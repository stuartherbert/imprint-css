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

import type { RawDeviceDefinitions } from "../types/RawDeviceDefinitions/RawDeviceDefinitions.type";

/**
 * our device definitions are:
 *
 * minScreenWidth/maxScreenWidth
 * tabletRemPx/desktopRemPx
 * articleMaxWidth
 * target devices description
 */
export const RAW_DEVICE_DEFINITIONS: RawDeviceDefinitions = {
    a: '-/640px ; 18px/16px ; 100% ; smart phones (in portrait)',
    b: '641px/- ; 20px/16px ; 100% ; smart phones (in landscape) & small tablets (in portrait)',
    c: '769px/- ; 18px/16px ; 100% ; regular tablets (in portrait)',
    d: '1025px/- ; 18px/16px ; 60rem ; large tablets (in portrait)',
    e: '1281px/- ; 16px/16px ; 60rem ; large tablets (in landscape)',
    f: '1920px/- ; -/16px ; 60rem ; full-size windows',
}