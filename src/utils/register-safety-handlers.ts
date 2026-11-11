import process from 'node:process';

export function registerSafetyHandlers(): void {
	process.on('unhandledRejection', (reason, promise) => {
		if(reason) {
			console.error('Unhandled Rejection at:', promise, 'reason:', reason);
		}
		else {
			console.error('☠️');
		}
	});
}
