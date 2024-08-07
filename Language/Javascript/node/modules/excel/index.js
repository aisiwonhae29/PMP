let excel       = require('exceljs');
let read        = require('./module/read');
let write       = require('./module/write');
let manipulate  = require('./module/manipulate');

let fs = require('fs');
let fp = require('fs').promises;

const workbook = new excel.Workbook();

async function mainpulateExcel(array){
    let workbookObj = await read.readFile('./target/' + "target2.xlsx", workbook);
    // workbookObj.worksheets[0].getCell('V14').value="Lord of the ring";
    let sheets = workbookObj.worksheets[0];
    sheets.tables={}; // Exceljs module makes conflict when handle the table object, and this makes the inner excel folder's xml file makes error.
    workbookObj = await manipulate.makeExcel(array, workbookObj);

    write.writeFile(workbookObj);
}
mainpulateExcel(['1'])

async function manipulation(workbookObj){
    rows = workbookObj._worksheets[14]._rows;
    
    rows.forEach(element => {
        fp.appendFile('./result/test.txt', JSON.stringify(element) + "\n", (err) => {
            console.log(err);
        })
        // objectFinder(element);
    });
}
function objectFinder(obj){
	for(let key in obj){
		if( typeof obj[key] == 'object' && !Array.isArray(obj[key])){
			objectFinder(obj[key])
		}
		console.log(obj[key]);
	}
}
