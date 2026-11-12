import type { ExecFailure, ExecResult, ExecSuccess, KillSignal, Options as ExecOptions, Subprocess } from '@zokugun/exec-lite';
import type { Choice, PromptOptions } from './enquirer/enquirer.js';

import { ExecProcess, exec } from '@zokugun/exec-lite';
import colors from 'ansi-colors';
import cliSpinners from 'cli-spinners';
import * as commander from 'commander';
import enquirer from 'enquirer';
import { confirm } from './enquirer/confirm.js';
import { Invisible } from './enquirer/invisible.js';
import logger from './logger.js';
import { unwrapFatal } from './unwrap-fatal.js';
import { isCI } from './utils/is-ci.js';
import { registerSafetyHandlers } from './utils/register-safety-handlers.js';

/* eslint-disable unicorn/prefer-export-from */
export {
	type Choice,
	type ExecFailure,
	type ExecOptions,
	type ExecResult,
	type ExecSuccess,
	type KillSignal,
	type PromptOptions,
	type Subprocess,
	colors as c,
	colors,
	commander,
	confirm,
	cliSpinners,
	enquirer,
	ExecProcess,
	exec,
	Invisible,
	isCI,
	logger,
	registerSafetyHandlers,
	unwrapFatal,
};
/* eslint-enable unicorn/prefer-export-from */
