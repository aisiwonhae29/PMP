/**
 * * child process
 * 
 * > https://www.freecodecamp.org/news/node-js-child-processes-everything-you-need-to-know-e69498fe970a/
 */

const { exec } = require('child_process');
const util = require('util');

const execAsync = util.promisify(exec);

async function test(cmd, options = {}){
    try{
        const execOptions = {
            timeout: 5000,
            maxBuffer: 1024 * 1024,
        };

        const { stdout, stderr } = await execAsync(cmd, execOptions);

        if (stderr) {
            console.warn(stderr);
        }

        console.log(stdout);
        return stdout;
    } catch (err) {
        console.error(err.message);
        throw err
    }
}

test("wsl pwd");