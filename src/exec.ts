import type { AsyncResult } from '@zokugun/xtry/async';
import type { Options, Result } from 'nano-spawn';

import { xtry } from '@zokugun/xtry/async';
import spawn from 'nano-spawn';

export async function exec(file: string, args?: readonly string[], options?: Options): AsyncResult<Result, Error> {
	return await xtry(() => spawn(file, args, options));
}
