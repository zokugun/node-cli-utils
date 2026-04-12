import process from 'node:process';
import { stdout } from '@zokugun/log-update-plus';
import c from 'ansi-colors';
import cliSpinners from 'cli-spinners';

export type IndicatorLoading = ReturnType<typeof setInterval>;
export type Spinner = {
	fail: () => void;
	succeed: () => void;
};

const { dots } = cliSpinners;

let $loading: IndicatorLoading | undefined;
let $progessFn: (() => void) | undefined;
let $start: number = 0;

export function beginTimer(): void { // {{{
	$start = Date.now();
} // }}}

export function check(message: string): void { // {{{
	stdout.persist(`${c.green(c.symbols.check)} ${message}`);
} // }}}

export function createSpinner(label: string): Spinner { // {{{
	showProgress(label);

	return {
		fail: () => {
			stdout.persist(`${c.red(c.symbols.cross)} ${label}`);
		},
		succeed: () => {
			stdout.persist(`${c.green(c.symbols.check)} ${label}`);
		},
	};
} // }}}

export function createStep(label: string): () => void { // {{{
	showProgress(c.bold(label) + c.dim('...'));

	return () => {
		check(c.bold(`${label}:`) + c.dim(' done'));
	};
} // }}}

export function debug(message: string): void { // {{{
	stdout.persist(`${c.gray(c.symbols.pointerSmall)} ${message}`);
} // }}}

export function error(message: string): void { // {{{
	stdout.persist(`${c.red(c.symbols.cross)} ${c.bold('Error!')}`);
	stdout.persist(message);
} // }}}

export function fatal(message: string, code: number = 1): never { // {{{
	stopProgress();

	stdout.persist(`${c.red(c.symbols.cross)} ${c.bold('Fatal!')}`);
	stdout.persist(message);

	// eslint-disable-next-line unicorn/no-process-exit
	process.exit(code);
} // }}}

export function finishTimer(duration?: number): void { // {{{
	if(typeof duration !== 'number') {
		if($start === 0) {
			stopProgress(`🏁 ${c.bold('Done')}`);

			return;
		}

		duration = Math.ceil((Date.now() - $start) / 1000);
	}

	stopProgress(`🏁 ${c.bold('Done')} (in ${duration}s).`);
} // }}}

export function info(message: string): void { // {{{
	stdout.persist(`${c.cyan(c.symbols.bullet)} ${message}`);
} // }}}

export function newLine(): void { // {{{
	stdout.persist('');
} // }}}

export function pauseProgress(): void { // {{{
	clearInterval($loading);

	stdout.render('');
} // }}}

export function resumeProgress(): void { // {{{
	if($progessFn) {
		$loading = setInterval($progessFn, cliSpinners.dots.interval);
	}
} // }}}

export function showProgress(label: string): void { // {{{
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

export function stopProgress(message: string = ''): void { // {{{
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
	beginTimer,
	check,
	createSpinner,
	createStep,
	debug,
	error,
	fatal,
	finishTimer,
	info,
	newLine,
	pauseProgress,
	resumeProgress,
	showProgress,
	stopProgress,
	success,
	warn,
};
