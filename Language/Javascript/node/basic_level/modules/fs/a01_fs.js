/**
 * * a01: file system
 *
 *  1. fs.readFile(filePath)
 *  2. fs.writeFile()
 *  3. fs.unlink(filePath)
 *  4. fs.rename(source, destination)
 * 
 */

const fs = require("fs").promises;
const fs1 = require("fs");

// # case 1: fs sync/async style compare

function test1() {
	async function readFile(filePath) {
		try {
			const data = await fs.readFile(filePath);
			console.log(data.toString());
		} catch (error) {
			console.error(`${error.message}`);
		}
	}

	// readFile('a.txt')
	fs1.readFile("test1.txt", "utf-8", (err, data) => {
		console.log(data);
	});
}

// # case 2: fs write file

function test2() {
	(async function openFile() {
		try {
			const csvHeaders = "hello,worlds,hi\n";
			await fs.writeFile("test21.txt", csvHeaders, { flag: "a" });
		} catch (error) {
			console.error(error);
		}
	})();
	async function add_line(el1, el2) {
		try {
			await fs.writeFile("test21.txt", `${el1} and ${el2} \n`, { flag: "a" });
		} catch (error) {
			console.error(error);
		}
	}
	add_line("lion", "tiger");
	add_line("monkey", "dog");
	add_line("eagle", "hawk");
}
// test2()

// # case 3: deleteFile

function test3() {
	async function createFile() {
		try {
            await fs.writeFile('test33.txt','hello worlds')
		} catch (error) {
			console.error(error);
		}
	}
	async function deleteFile(filePath) {
		try {
            await fs.unlink(filePath);
            console.log(`Delete ${filePath} complete!`)
		} catch (error) {
			console.error(error);
		}
	}
    createFile()
    deleteFile('test33.txt')
}
// test3()

// # case 4: move & rename file

function test4(){
    async function moveFile(source, destination){
        try{
            await fs.rename(source, destination);
            console.log(`move file from ${source} to ${destination}`)
        }catch(error){
            console.log(error);
        }
    }
    moveFile('text1.txt', 'file_read/2test2.txt')
}
// test4()
