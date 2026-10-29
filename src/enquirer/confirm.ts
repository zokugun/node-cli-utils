import { type BooleanPromptOptions } from './enquirer.js';

import c from 'ansi-colors';

export function confirm(data: { name: string; message: string }): BooleanPromptOptions {
	return {
		type: 'confirm',
		format(value) {
			return value ? c.cyan('Yes') : c.cyan('No');
		},
		...data,
	};
}
