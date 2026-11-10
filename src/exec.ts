import type { ExecFailure, ExecResult, ExecSuccess, KillSignal, Options as ExecOptions, Subprocess } from '@zokugun/picoexec';

import { ExecProcess, exec } from '@zokugun/picoexec';

/* eslint-disable unicorn/prefer-export-from */
export {
	type ExecFailure,
	type ExecOptions,
	type ExecResult,
	type ExecSuccess,
	type KillSignal,
	type Subprocess,
	ExecProcess,
	exec,
};
/* eslint-enable unicorn/prefer-export-from */
