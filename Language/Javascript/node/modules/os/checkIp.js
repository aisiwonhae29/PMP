const os = require("os");



module.exports={
	getCurrentIP: ()=> {
		const networkInterfaces = os.networkInterfaces();
		for (const interfaceName in networkInterfaces) {
			for (const iface of networkInterfaces[interfaceName]) {
				// Check for external IPv4 addresses (skip internal/loopback addresses)
				if (iface.family === "IPv4" && !iface.internal) {
					let nm = os.hostname;
					return iface.address + "/" + nm;
				}
			}
		}
		return "No active network interface found";
	}
}