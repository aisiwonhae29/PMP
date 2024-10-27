let excel       = require('exceljs');
let read        = require('./module/read');
let write       = require('./module/write');
let manipulate  = require('./module/manipulate');

let fs = require('fs');
let fp = require('fs').promises;

function excelInit(){
	const workbook = new excel.Workbook();
	return workbook;
}

async function readFile(workbook){
	workbook = await read.readFile('')
	return workbook;
}

async function mainpulateExcel(array){
    let workbookObj = await read.readFile('./target/' + "quotation_org.xlsx", workbook);
    // workbookObj.worksheets[0].getCell('V14').value="Lord of the ring";
    let sheets = workbookObj.worksheets[0];
    sheets.tables={}; // Exceljs module makes conflict when handle the table object, and this makes the inner excel folder's xml file makes error.
    workbookObj = await manipulate.makeExcel(array, workbookObj);

    write.writeFile(workbookObj);
}

let json = {
	name: "siwon",
	loc: "daejeon",
	date: "2024-08-08",
	history: [
		{
			a: 1,
			b: 2,
			c: 3,
			d: 4,
		},
		{
			a: 1,
			b: 2,
			c: 3,
			d: 4,
		},
		{
			a: 1,
			b: 2,
			c: 3,
			d: 4,
		},
	],
};
mainpulateExcel(json);

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
