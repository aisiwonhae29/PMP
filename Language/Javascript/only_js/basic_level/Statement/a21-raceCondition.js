/**
 * a21: race condition
 *
 * - refers to situation where the behavior of a program depends on the sequenc or timing of events.
 * - abnormal situation, usually occured when function is based on asynchronous env.
 * - in summary, race conditions refers many of concurrent access to resources makes unexpected results.
 *
 * */

let sharedValue = 0;

function incrementSharedValue() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			sharedValue++;
			resolve(sharedValue);
		}, Math.random() * 1000);
	});
}

async function runOperations() {
	const operation1 = incrementSharedValue();
	const operation2 = incrementSharedValue();

	const result1 = await operation1;
	const result2 = await operation2;

	console.log("Operation 1 result:", result1);
	console.log("Operation 2 result:", result2);
}

runOperations();
