import { stdout } from '@zokugun/log-update-plus';
import c from 'ansi-colors';
import cliSpinners from 'cli-spinners';

export type IndicatorLoading = ReturnType<typeof setInterval>;
const { dots } = cliSpinners;

let $loading: IndicatorLoading | undefined;
let $progessFn: (() => void) | undefined;
let $start: number = 0;

export function begin(): void { // {{{
	$start = Date.now();
} // }}}

export function check(message: string): void { // {{{
	stdout.persist(`${c.green(c.symbols.check)} ${message}`);
} // }}}

export function error(message: string): void { // {{{
	stop(`${c.red(c.symbols.cross)} ${c.bold('Error!')}`);

	stdout.persist(message);
} // }}}

export function finish(duration?: number): void { // {{{
	if(typeof duration !== 'number') {
		if($start === 0) {
			stop(`🏁 ${c.bold('Done')}`);

			return;
		}

		duration = Math.ceil((Date.now() - $start) / 1000);
	}

	stop(`🏁 ${c.bold('Done')} (in ${duration}s).`);
} // }}}

export function info(message: string): void { // {{{
	stdout.persist(`${c.cyan(c.symbols.bullet)} ${message}`);
} // }}}

export function newLine(): void { // {{{
	stdout.persist('');
} // }}}

export function pause(): void { // {{{
	clearInterval($loading);

	stdout.render('');
} // }}}

export function progress(label: string): void { // {{{
	clearInterval($loading);

	let index = 0;

	$progessFn = () => {
		if(!$loading) {
			return;
		}

		stdout.render(`${c.cyan(dots.frames[index = ++index % dots.frames.length])} ${label}`);
	};

	$loading = setInterval($progessFn, cliSpinners.dots.interval);
} // }}}

export function resume(): void { // {{{
	if($progessFn) {
		$loading = setInterval($progessFn, cliSpinners.dots.interval);
	}
} // }}}

export function step(label: string): () => void { // {{{
	progress(c.bold(label) + c.dim('...'));

	return () => {
		check(c.bold(`${label}:`) + c.dim(' done'));
	};
} // }}}

export function stop(message: string = ''): void { // {{{
	clearInterval($loading);

	$loading = undefined;
	$progessFn = undefined;

	stdout.render(message);
} // }}}

export function success(message: string): void { // {{{
	stdout.persist(`${c.green(c.symbols.check)} ${message}`);
} // }}}

export function warn(message: string): void { // {{{
	stdout.persist(`${c.magenta(c.symbols.warning)} ${message}`);
} // }}}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
	begin,
	check,
	error,
	finish,
	info,
	newLine,
	pause,
	progress,
	resume,
	step,
	stop,
	success,
	warn,
};
