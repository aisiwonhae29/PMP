const os = require("os");

/**
 * * os module
 * 
 * - This module is stand for serving system info.
 * 
 * # info list
 * 
 * - host name
 * - os type
 * - release
 * - cpu architecture
 * - network interface
 */

console.log("Operating System Details:");
console.log("-------------------------");
console.log(`Hostname: ${os.hostname()}`);
console.log(`OS Type: ${os.type()}`);
console.log(`Platform: ${os.platform()}`);
console.log(`Release: ${os.release()}`);
console.log(`CPU Architecture: ${os.arch()}`);
console.log(`System Uptime: ${os.uptime()} seconds`);
console.log(`Total Memory: ${os.totalmem()} bytes`);
console.log(`Free Memory: ${os.freemem()} bytes`);
console.log("CPU Details:", os.cpus());
console.log("Network Interfaces:", os.networkInterfaces());
console.log(`Home Directory: ${os.homedir()}`);
console.log(`Temp Directory: ${os.tmpdir()}`);
console.log("User Info:", os.userInfo());