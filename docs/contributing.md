---
next_file: code-of-conduct.html
---
# Contributing

Imprint CSS is open-source software from {{ ishi.externallink('ganbarodigital') }}, released under [the 3-clause BSD license](license.html). We welcome all contributions to the framework that further [the goals](goals.html) that we have for Imprint.

Before contributing, please read our [code of conduct](code-of-conduct.html). Please also make sure that you have the necessary legal authority to contribute - for example, that you own the work that you are submitting, or that your employer has authorised you to contribute work that they own.

All contributions must be licensed under [the 3-clause BSD license](license.html).

## How To Contribute Via Github

Imprint uses the [Gitflow](http://datasift.github.io/gitflow/) model for managing branches in our Git repository:

* `main` contains tagged, released code only
* `develop` contains completed features & bugfixes that are waiting for release
* `feature/*` branches contain work-in-progress

Don't worry if you're not used to Gitflow. Follow these steps for your features or fixes:

1. on Github, fork the `stuartherbert/imprint-css` project.
1. clone your fork to your local computer
1. create a new branch on your local computer: `git checkout -b feature/<my-feature> develop`
1. work on your feature

When you're ready to submit your pull request, please make sure it's a pull request against our `develop` branch.

We'll check your pull request for the following:

1. does the pull request apply cleanly against our `develop` branch?
1. does it fit [our goals for the project](goals.html)?
2. do any new utilities, components or theme settings fit into the [internal structure](internals/)?
3. does the pull request include updated docs showing how the new feature works?

If the answer is 'no' to any of those, we'll respond and let you know what we need you to do before we can accept your pull request.

## Accepted Contributions

If we accept your pull request, we'll add your details to our [authors](authors.html) page, so that your contribution is acknowledged. We'll also add details of your change to our [changelog](changelog.html) page.
