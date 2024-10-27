let ExcelJS = require("exceljs");
let tool	= require('./tool');
const row 	= 65;

module.exports = {
	makeExcel: async function(json, workbookObj){
		let sheet = workbookObj.worksheets[0];

		tmp_array = ["a", "b", "c"]

		// Make the data fit in number of content data.
		for(let i=0 ; i<array.length; i++){
			// Assign the column meta data (cell: "V"10 left side value.) // A: 65 - Z: 90
			let column 	= i + 9;
			
			sheet.getCell("C4").value = json.loc;
			sheet.getCell("C5").value = json.date;
			sheet.getCell("C8").value = json.name;

			let num = json.history.length;
			json.history.forEach((el)=>{
				
			})
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
