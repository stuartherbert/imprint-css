# Colors

## What's In This Section?

<p class="p--leader">Color is one of the key tools we all use to personalise things. Whether it's company branding or just personal preference, choosing our own colors helps us feel like we've made something ours.</p>

But it isn't just the ability to customise component colors that matters. Using colors from familiar palettes can help our work fit in to the ecosystem where it is going to be used. It helps our work look like it belongs.

Ishi gives you quick and easy ways to bring color into your own components and content (this section) and to customise the colors when you build your own CSS themes (see our [Themes section](../themes/)).

These include:

* several pre-defined color palettes to select from, including colors familiar to [Apple OSX / MacOS users](apple-palette.html), [Android / Google users](material-design-palette.html), [Microsoft users](microsoft-palette.html), and more
* access to a wide collection of [miscellaneous colors](misc-palette.html)

You can click on any color at any time to see full details on how to use the color, and our automated analysis of the color's properties.

## General Notes

### Accessibility and Contrast

The [Web Content Accessibility Guidelines (WCAG) 2.0](https://www.w3.org/TR/WCAG20/) from 2008 recommend that we use foreground / background color combinations with these contrast ratios:

Compliance Level | When | Contrast Ratio
-----------------|------|------
AA Compliant | normal text | >= 4.5:1
AA Compliant | 18pt+ text | >= 3.1:1
AAA Compliant | normal text | >= 7:1
AAA Compliant | 18pt+ text | >= 4.5:1

Anything less than this, and you're making your website hard-to-read for readers with visual impairments.

Where possible, we've picked color combinations that are <em>at least</em> AA compliant for normal text. We say "where possible" because color contrast isn't that straight-forward:

* Some colors were defined before accessibility guidelines were drawn up, and just don't offer enough contrast when used as a background.
* The WCAG's contrast-ratio formula (which dates from a 1995 paper looking at CRT displays with a gamma point of 2.2) doesn't always produce pleasing results. We cross-check this with the luma channel from the [YIQ color space](https://en.wikipedia.org/wiki/YIQ), and use both results to decide on which foreground color to recommend.

Affected colors come with a warning that they might not be the best choice as a background color.

### Grey or Gray?

<p class="p--leader">Ishi uses the spelling 'gray' everywhere (except for when we've lapsed back into British English by mistake!)</p>

In English, there are two different spellings for the color grey:

* _grey_ is the British English spelling, and is the predominant spelling outside of America
* _gray_ is the American English spelling

(Isn't English fun?)

In computing, _gray_ is the accepted spelling. ([Wikipedia says that this stems from the X11 color names list](https://en.wikipedia.org/wiki/X11_color_names)). Therefore, Ishi uses _gray_ and not _grey_.