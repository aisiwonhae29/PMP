let ExcelJS = require("exceljs");
let tool	= require('./tool');
const row 	= 65;

/**
 * 
 * @param {*} arr 
 * 
 */
// function excelInput(arr){
// 	let location 	= arr[];
// 	let date 		= arr[];
// 	let name 		= arr[];
// 	let dnaArr		= [];
	
// 	for(let i = 0; i < arr[3].length; i++){
// 		dnaArr.push(arr[3][i]);
// 	}
// }


module.exports = {
	makeExcel: async function(json, workbookObj){
		let sheet = workbookObj.worksheets[0];

		tmp_array = ["a", "b", "c"]

		// Make the data fit in number of content data.
			// Assign the column meta data (cell: "V"10 left side value.) // A: 65 - Z: 90

			/**
			 * modified needed
			 *
			 * c4: location(귀증)
			 * c5: date(날짜)
			 * c8: name (이름)
			 * a11: 금액(과세): 일금
			 * a13: cDNA clone e13: 80,000 f13: 2 g13: 160,000 h13: 16,000
			 * a..
			 * a13+n
			 * a13+n+1: ---이하 여백---
			 * g28: 160,000
			 * g29: 16,000
			 * g30: 176,000
			 *
			 * */

			sheet.getCell("C4").value = json.loc;
			sheet.getCell("C5").value = json.date;
			sheet.getCell("C8").value = json.name;

			let num = json.history.length;
			json.history.forEach((el) => {});
		
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
