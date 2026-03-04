import colors from 'ansi-colors';
import cliSpinners from 'cli-spinners';
import * as commander from 'commander';
import enquirer, { type PromptOptions } from 'enquirer';
import { confirm } from './enquirer/confirm.js';
import { Invisible } from './enquirer/invisible.js';
import logger from './logger.js';

/* eslint-disable unicorn/prefer-export-from */
export {
	type PromptOptions,
	colors as c,
	colors,
	commander,
	confirm,
	cliSpinners,
	enquirer,
	Invisible,
	logger,
};
/* eslint-enable unicorn/prefer-export-from */
