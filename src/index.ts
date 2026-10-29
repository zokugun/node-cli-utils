import type { Choice, PromptOptions } from './enquirer/enquirer.js';

import colors from 'ansi-colors';
import cliSpinners from 'cli-spinners';
import * as commander from 'commander';
import enquirer from 'enquirer';
import { confirm } from './enquirer/confirm.js';
import { Invisible } from './enquirer/invisible.js';
import logger from './logger.js';
import { isCI } from './utils/is-ci.js';

/* eslint-disable unicorn/prefer-export-from */
export {
	type Choice,
	type PromptOptions,
	colors as c,
	colors,
	commander,
	confirm,
	cliSpinners,
	enquirer,
	Invisible,
	isCI,
	logger,
};
/* eslint-enable unicorn/prefer-export-from */
