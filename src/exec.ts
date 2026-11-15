import type { Command, ExecFailure, ExecResult, ExecSuccess, KillSignal, Options as ExecOptions, Subprocess } from '@zokugun/exec-lite';

import { createCommand, ExecProcess, exec } from '@zokugun/exec-lite';

/* eslint-disable unicorn/prefer-export-from */
export {
	type Command,
	type ExecFailure,
	type ExecOptions,
	type ExecResult,
	type ExecSuccess,
	type KillSignal,
	type Subprocess,
	createCommand,
	ExecProcess,
	exec,
};
/* eslint-enable unicorn/prefer-export-from */
