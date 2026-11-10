Changelog
=========

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog][keepachangelog], and this project adheres to [Semantic Versioning][semver].

[Unreleased]
------------

### Changed

- replace `enquirer` patch with `enquirer.d.ts` file containing need-to-be-exported types
- export more relevant types for `commander` and `enquirer`
- improve `createStep` in `logger` to accept `createMessage` argument

### Added

- add the helper `exec` function for process execution
- add `exit`, `flagCI` function to `logger`

[v0.3.3] | 2026-06-24
--------------------

### Fixed

- stop spinner when done

[v0.3.2] | 2026-05-03
---------------------

### Changed

- don't display spinners on CI

[v0.3.1] | 2026-04-13
---------------------

### Added

- add `print` function to `logger`

[v0.3.0]| 2026-04-12
--------------------

### Changed

- rename functions in the `logger`

### Added

- add functions `createSpinner` and `debug` to the `logger`

[v0.2.1] | 2026-04-10
---------------------

### Changed

- use locked dependencies
- use GitHub Environment to publish

### Added

- add typings to `commander` with `@commander-js/extra-typings`

[v0.2.0] | 2026-03-04
---------------------

### Added

- add `fatal` function to the `logger`

[v0.1.0] | 2026-03-04
---------------------

### Added

- initial release

[keepachangelog]: https://keepachangelog.com/en/2.0.0/
[semver]: https://semver.org/spec/v2.0.0.html
[unreleased]: https://github.com/zokugun/node-cli-utils/compare/v0.3.3...HEAD
[v0.3.3]: https://github.com/zokugun/node-cli-utils/releases/tag/v0.3.3
[v0.3.2]: https://github.com/zokugun/node-cli-utils/releases/tag/v0.3.2
[v0.3.1]: https://github.com/zokugun/node-cli-utils/releases/tag/v0.3.1
[v0.3.0]: https://github.com/zokugun/node-cli-utils/releases/tag/v0.3.0
[v0.2.1]: https://github.com/zokugun/node-cli-utils/releases/tag/v0.2.1
[v0.2.0]: https://github.com/zokugun/node-cli-utils/releases/tag/v0.2.0
[v0.1.0]: https://github.com/zokugun/node-cli-utils/releases/tag/v0.1.0
