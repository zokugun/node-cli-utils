[@zokugun/cli-utils](https://github.com/zokugun/node-cli-utils)
==========================================================

[![MIT licensed](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE)
[![NPM Version](https://img.shields.io/npm/v/@zokugun/cli-utils.svg?colorB=green)](https://www.npmjs.com/package/@zokugun/cli-utils)
[![Donation](https://img.shields.io/badge/donate-ko--fi-green)](https://ko-fi.com/daiyam)
[![Donation](https://img.shields.io/badge/donate-liberapay-green)](https://liberapay.com/daiyam/donate)
[![Donation](https://img.shields.io/badge/donate-paypal-green)](https://paypal.me/daiyam99)

A small collection of focused utilities to build user-friendly Node.js command-line applications.

It bundles lightweight helpers so you can compose rich CLI interactions without pulling in many separate packages:
- colored output (https://github.com/doowb/ansi-colors)
- spinner frames (https://github.com/sindresorhus/cli-spinners)
- prompt utilities (https://github.com/enquirer/enquirer)
- a tiny commander wrapper (https://github.com/tj/commander.js)
- a simple logger (use https://github.com/zokugun/node-log-update-plus)

Compatible with **Node.js 18.x**.

Installation
------------

```bash
npm install @zokugun/cli-utils
```

Quick Start
-----------

```typescript
import { logger } from '@zokugun/cli-utils';

logger.begin(); // start timer

logger.progress('Starting task'); // use spinner to indicate progress

logger.success('Task finished');

logger.finish(); // print "🏁 Done (in 1s)."
```

Quick Reference
---------------

- **ansi-colors**: small helpers for colored and styled terminal output.
- **cli-spinners**: common spinner frame sets and metadata for progress indicators.
- **commander**: thin convenience exports for building CLI commands.
- **enquirer**: prompt helpers for interactive prompts (+ patch and `confirm`, `Invisible`).
- **logger**: simple logging helpers for consistent CLI output.

Module entry points
-------------------

Choose the entry point that matches your environment and naming preferences:

| Import path                       | Description                      |
| --------------------------------- | -------------------------------- |
| `@zokugun/cli-utils`              | All utilities                    |
| `@zokugun/cli-utils/ansi-colors`  | colors from `ansi-colors`        |
| `@zokugun/cli-utils/cli-spinners` | spinners from `cli-spinners`     |
| `@zokugun/cli-utils/commander`    | tiny command from `commander`    |
| `@zokugun/cli-utils/enquirer`     | prompt utilities from `enquirer` |
| `@zokugun/cli-utils/logger`       | the logger                       |

Donations
---------

Support this project by becoming a financial contributor.

<table>
    <tr>
        <td><img src="https://raw.githubusercontent.com/daiyam/assets/master/icons/256/funding_kofi.png" alt="Ko-fi" width="80px" height="80px"></td>
        <td><a href="https://ko-fi.com/daiyam" target="_blank">ko-fi.com/daiyam</a></td>
    </tr>
    <tr>
        <td><img src="https://raw.githubusercontent.com/daiyam/assets/master/icons/256/funding_liberapay.png" alt="Liberapay" width="80px" height="80px"></td>
        <td><a href="https://liberapay.com/daiyam/donate" target="_blank">liberapay.com/daiyam/donate</a></td>
    </tr>
    <tr>
        <td><img src="https://raw.githubusercontent.com/daiyam/assets/master/icons/256/funding_paypal.png" alt="PayPal" width="80px" height="80px"></td>
        <td><a href="https://paypal.me/daiyam99" target="_blank">paypal.me/daiyam99</a></td>
    </tr>
</table>

License
-------

Copyright &copy; 2026-present Baptiste Augrain

Licensed under the [MIT license](https://opensource.org/licenses/MIT).
