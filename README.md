[@zokugun/cli-utils](https://github.com/zokugun/node-cli-utils)
===============================================================

[![License: MIT](https://img.shields.io/badge/license-MIT-blue)](./LICENSE)
[![NPM Version](https://img.shields.io/npm/v/@zokugun/cli-utils?color=brightgreen)](https://www.npmjs.com/package/@zokugun/cli-utils)
[![NodeJS Version](https://img.shields.io/badge/node.js-%3E%3D%2018.20-green)](#requirements)
[![Modules](https://img.shields.io/badge/modules-ESM%20%7C%20CJS-green)](#requirements)
[![Ko-fi](https://img.shields.io/badge/Ko--fi-f87171?logo=kofi&logoColor=white)](https://ko-fi.com/daiyam)
[![Liberapay](https://img.shields.io/badge/Liberapay-facc15?logo=liberapay&logoColor=black)](https://liberapay.com/daiyam/donate)
[![PayPal](https://img.shields.io/badge/PayPal-5277C3?logo=paypal&logoColor=white)](https://paypal.me/daiyam99)

A small collection of focused utilities to build user-friendly Node.js command-line applications.

It bundles lightweight helpers so you can compose rich CLI interactions without pulling in many separate packages:
- colored output (https://github.com/doowb/ansi-colors)
- spinner frames (https://github.com/sindresorhus/cli-spinners)
- prompt utilities (https://github.com/enquirer/enquirer)
- a tiny commander wrapper (https://github.com/tj/commander.js)
- a simple logger (use https://github.com/zokugun/node-log-update-plus)
- a tiny `child_process` wrapper (use https://github.com/zokugun/node-picoexec)

Installation
------------

```bash
npm install @zokugun/cli-utils
```

Requirements
------------

- **Node.js**: `v18.20` or higher
- **Modules**: ECMAScript Modules (`ESM`) or CommonJS (`CJS`)

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
- **exec**: a tiny `child_process` wrapper.
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
| `@zokugun/cli-utils/exec`         | tiny exec from `picoexec`        |
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
