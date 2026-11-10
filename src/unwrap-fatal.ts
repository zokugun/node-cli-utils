import * as xtry from '@zokugun/xtry';

import logger from './logger.js';

type LimitedResult<T, E> = { error: E; fails: true } | { fails: false; value: T };

export function unwrapFatal<T, E>(result: LimitedResult<T, E>): T {
	if(result.fails) {
		return logger.fatal(xtry?.stringifyError(result.error) ?? String(result.error));
	}

	return result.value;
}
