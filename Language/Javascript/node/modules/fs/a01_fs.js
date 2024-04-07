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
const fs_sync = require("fs");

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

	function a01_01(){
		fs_sync.readFile("test1.txt", "utf-8", (err, data) => {
			console.log(data);
		});
	}
	
	// Read directory

	function a01_02(){
		let dirInfo = fs_sync.readdirSync('../fs');

		console.log(dirInfo);
	}

	// a01_01();
	// a01_02();

}

// # case 2: fs write file

function test2() {
	function t02_01(){
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
	};
	function t02_02(){
		if(!fs_sync.existsSync('./test.txt')){
			try{
				fs_sync.writeFileSync("./test.txt", '213');
			}catch(err) {
				console.error(err);
			}
			// append data on file
		}
		fs_sync.appendFileSync('./test.txt', 'hello worlds, i\'m very nice guy..! \n');
	};
	t02_02();
}
test2();

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
    // createFile()
    // deleteFile('test33.txt')
}

// Delete directory in synchronous

function test3_1(){
	fs_sync.mkdirSync('./testDir');
	let stat = fs_sync.statSync('./testDir');
	console.log(stat);
	fs_sync.rmdirSync('./testDir');
}


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
    moveFile('test.txt', 'file_read/test.txt')
}

function test5(){
	function renameFile(source, destination){
		fs_sync.renameSync(source, destination);
	}
	renameFile("test.txt", "file_read/test.txt");
}

function test6(){
	fs.unlink('test.txt');
}

// # case 5: check out the file about exists or not

function t07_fileChk(){
	let valid = fs_sync.existsSync('./test21.txt');
	console.log(valid);
};

//# case 6: check out the file's status

function t08_chkFileStatus(){
	function t08_01(){	// lstatSync(path);
		let status = fs_sync.lstatSync('./test21.txt');
		console.log(status);
	};
	function t08_02(){
		fs_sync.stat('./test21.txt', (err, stats) =>{
			console.log(stats);
		});
	}
	t08_02();
};t08_chkFileStatus();