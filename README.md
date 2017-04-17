# sloth-app

[![code style](https://img.shields.io/badge/code%20style-prettier-ff69b4.svg?style=flat-square)]()
[![Standard Version](https://img.shields.io/badge/release-standard%20version-brightgreen.svg)]()

Based on the original **sloth cli**, developed by [@ainformatico](https://github.com/ainformatico) and [@marciobarrios](https://github.com/marciobarrios).

**sloth-app** is an app to install everything you need in your new mac, with no effort =)

- [Download && install](#download--install)
- [Running Locally](#running-locally)
- [DevTools](#devtools)
- [Packaging](#packaging)
- [Contributing](#contributing)
- [Helpers/Tools](#helperstools)
- [Maintainers](#maintainers)

## Download && install
1. Go to the [releases page](https://github.com/sloth-tools/sloth-app/releases).
2. Select the latest version.
3. Download the `.dmg` file.
4. Install it in your mac.
5. Run Sloth and enjoy :smiley_cat:

## Running locally

Clone the repository
```bash
git clone --depth=1 git@github.com:sloth-tools/sloth-app.git
```

Install dependencies
```bash
cd sloth-app
npm install
```

Development
```bash
npm start
```

## DevTools

Toggle DevTools:

* OSX: <kbd>Cmd</kbd> <kbd>Alt</kbd> <kbd>I</kbd> or <kbd>F12</kbd>

## Packaging

Modify [electron-builder.yml](./electron-builder.yml) to edit package info.

For a full list of options see: https://github.com/electron-userland/electron-builder/wiki/Options.

Create a package
```
npm run pack
```

## Contributing

The project uses [`standard-version`][standard-version] to update the [CHANGELOG][] with each commit message and upgrade the package version. For that reason every contribution should have a title and body that follows the [conventional-changelog-standard][] conventions.

So this is a step by step guide to contributing to the project (mostly extracted from the [`standard-version`][standard-version] docs):

1. when you land commits on your `master` branch, select the _Rebase and Merge_ option.
2. add a title and body that follows the [conventional-changelog-standard conventions][conventional-changelog-standard].
3. when you're ready to release a new version:
  1. `git checkout master; git pull origin master`
  2. run `npm run bump`
  2. run `npm run pack`

## Helpers/Tools

- [Changelog](https://github.com/sloth-tools/sloth-app/blob/master/CHANGELOG.md)
- [Code of conduct](https://github.com/sloth-tools/sloth-app/blob/master/CHANGELOG.md)
- [Code style](https://npm.im/prettier)
- [commitizen](https://github.com/commitizen/cz-cli): A cli that will prompt the author to fill out any required commit fields at commit time. For this project we would use the [cz-conventional-changelog](https://github.com/conventional-changelog/conventional-changelog) adapter.
- [conventional-changelog-standard](https://github.com/bcoe/conventional-changelog-standard/blob/master/convention.md)
- [cz-conventional-changelog](https://github.com/commitizen/cz-conventional-changelog)
- [standard-version](https://github.com/conventional-changelog/standard-version)

## Maintainers

- [@uesteibar](https://github.com/uesteibar)
- [@marciobarrios](https://github.com/marciobarrios)
