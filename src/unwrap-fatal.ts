import * as xtry from '@zokugun/xtry';

import logger from './logger.js';

type LimitedResult<T, E> = { error: E; fails: true } | { fails: false; value: T };

function unwrapFatal<E>(result: { error: E; fails: true }): never;
function unwrapFatal<T>(result: { fails: false; value: T }): T;
function unwrapFatal<T, E>(result: LimitedResult<T, E>): T;
function unwrapFatal<T, E>(result: LimitedResult<T, E>): T {
	if(result.fails) {
		return logger.fatal(xtry?.stringifyError(result.error) ?? String(result.error));
	}

	return result.value;
}

export { unwrapFatal };
