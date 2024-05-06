// * producer_consumer 

const sharedBuffer = [];
const buffMax = 10;
let fullIndex = 0;
let freeIndex = 0;

async function produce(nextProduced) {
	while (true) {
		while ((freeIndex + 1) % buffMax === fullIndex) {
			await new Promise((resolve) => setTimeout(resolve, 100));
		}

		sharedBuffer[freeIndex] = nextProduced;
		console.log(`Produced item: ${nextProduced}`);
		console.log(sharedBuffer);
		freeIndex = (freeIndex + 1) % buffMax;
	}
}

async function consume() {
	while (true) {
		while (freeIndex === fullIndex) {
			await new Promise((resolve) => setTimeout(resolve, 2000));
		}

		const consumedItem = sharedBuffer[fullIndex];
		console.log(`Consumed item: ${consumedItem}`);
		
		console.log(sharedBuffer)
		fullIndex = (fullIndex + 1) % buffMax;
	}
}

// Example usage:
// Start the producer and consumer
produce("Item 1").catch(console.error);
consume().catch(console.error);