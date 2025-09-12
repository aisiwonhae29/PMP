/**
 * * readLine
 * 
 * # logic
 * 
 * !1. create an interface
 * !2. Handle each line of input & command
 * !3. Set the event listener
 */

const readLine = require('readline');

// Create a readline interface

const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: '>'
});

// Handle each line of input & command

const commands = {
	help: {
		description: "Displays the list of available commands.",
		action: () => {
			console.log("\nAvailable Commands:");
			for (const cmd in commands) {
				console.log(`  ${cmd}: ${commands[cmd].description}`);
			}
			console.log();
		},
	},
	greet: {
		description: "Greets the user. Usage: greet <name>",
		action: (args) => {
			if (args.length === 0) {
				console.log("Error: No name provided. Usage: greet <name>");
			} else {
				console.log(`Hello, ${args.join(" ")}!`);
			}
		},
	},
	exit: {
		description: "Exits the CLI application.",
		action: () => {
			console.log("Exiting... Goodbye!");
			rl.close();
		},
	},
};

/**
 * Set the event listener
 * 
 * #1. line
 * #2. sigint
 * #3. close
 */

// line

rl.on('line', (input) => {
    const [command, ...args] = input.trim().split(/\s+/);

    if(commands[command]){
        try{
            commands[command].action(args);
        } catch(err) {
            console.error(err);
        }
    }else if(command){
        console.log(`Invalid command: ${command}, Type 'help' to see the list of available commands.`);
    }
    rl.prompt();
})

// sigint

rl.on('SIGINT', () => {
    console.log('SIGINT: Closing the interface');
    rl.close();
})

// close

rl.on('close', (err) => {
    console.error('Unexpected Error', err);
    rl.close();
});