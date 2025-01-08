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

/**
 * SemanticSetting is a collection of CSS fragments to apply when one of our
 * semantic CSS classes (e.g. --primary) is active.
 */
export type SemanticSetting = {
    /**
     * the name of this group of semantic settings
     */
    name: string;

    /**
     * the CSS background color to use for blocks of content
     */
    contentBackgroundColor: string;

    /**
     * the CSS text color to use for blocks of content
     */
    contentColor: string;

    /**
     * the CSS background color to use when --shaded is active
     */
    shadedBackgroundColor: string;

    /**
     * the CSS text color to use when --shaded is active
     */
    shadedContentColor: string;

    /**
     * the CSS background color to use inside headings
     */
    headingBackgroundColor: string;

    /**
     * the CSS text color to use inside headings
     */
    headingColor: string;

    /**
     * the CSS color to use for things like borders around headings
     */
    headingAccentColor: string;

    /**
     * the CSS color to use for box shadow effects
     */
    boxShadowColor?: string;

    linkColor?: string,
    linkBackgroundColor?: string,
    linkBorderColor?: string,

    linkVisitedColor?: string,
    linkVisitedBackgroundColor?: string,
    linkVisitedBorderColor?: string,

    linkHoverColor?: string,
    linkHoverBackgroundColor?: string,
    linkHoverBorderColor?: string,

    linkActiveColor?: string,
    linkActiveBackgroundColor?: string,
    linkActiveBorderColor?: string,

    codeBackgroundColor?: string,
    codeColor?: string,
    codeBorderColor?: string,

    preColor?: string,
    preBackgroundColor?: string,

    sampColor?: string,
    sampBackgroundColor?: string,

    codeExampleLineNoColor?: string,

    borderOuterColor?: string,
    borderInnerColor?: string,
    stripeBackgroundColor?: string,
    stripeColor?: string,
};