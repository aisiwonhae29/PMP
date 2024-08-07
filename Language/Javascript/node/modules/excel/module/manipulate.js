let ExcelJS = require("exceljs");
let tool	= require('./tool');
const row 	= 65;

module.exports = {
	makeExcel: async function(array, workbookObj){
		let sheet = workbookObj.worksheets[0];

		if(!Array.isArray(array)){
			return -1;
		}

		// Make the data fit in number of content data.
		for(let i=0 ; i<array.length; i++){
			// Assign the column meta data (cell: "V"10 left side value.) // A: 65 - Z: 90
			let column 	= i + 9;
			
			sheet.getCell(tool.concatenation(tool.numberToChar(row+0), column)).value = 'hi';
			sheet.getCell(tool.concatenation(tool.numberToChar(row+1), column)).value = 'my';
			sheet.getCell(tool.concatenation(tool.numberToChar(row+2), column)).value = 'name';
			sheet.getCell(tool.concatenation(tool.numberToChar(row+3), column)).value = 'is';
			sheet.getCell(tool.concatenation(tool.numberToChar(row+4), column)).value = 'siwon';
			
		}
		
		return workbookObj;
	},
	init: async function(workbookObj){
		let sheet = workbookObj.worksheets[0];
		
		for(let i=0; i<10; i++){
			for(let j=0; j<10; j++){
				sheet.getCell(tool.concatenation(tool.numberToChar(row+j), column)).value = 'hi';
			}
		}
	},
};
