let excel       = require('exceljs');
let read        = require('./module/read');
let write       = require('./module/write');
let manipulate  = require('./module/manipulate');
let excelToPdf = require('./module/excelToPdf');

let fs = require('fs');
let fp = require('fs').promises;

function excelInit(){
	const workbook = new excel.Workbook();
	return workbook;
}

async function a(){
    let workbook = new excel.Workbook();
        let workbook1 = await workbook.xlsx.readFile("C:/Users/line/Desktop/qq.xlsx");
        console.log("asdas")
    }
async function readFile(){
    let workbook = new excel.Workbook();
	let workbook1 = await workbook.xlsx.readFile("C:/Users/line/Desktop/업무/gene_bank/srcCode/생명공학연구소/GRIS/public/excelForm/quotation_org.xlsx");
	return workbook1;
}

async function readExcel(){
	let workbook = await readFile();
	await excelToPdf.excelToPdf(workbook, "./result/test.pdf");
}

async function mainpulateExcel(workbook, array){
    let workbook1 = excelInit();
    let workbookObj = await read.read(workbook1, "C:/Users/line/Desktop/업무/gene_bank/srcCode/생명공학연구소/GRIS/public/excelForm/quotation_org.xlsx");
    // workbookObj.worksheets[0].getCell('V14').value="Lord of the ring";
    let sheets = workbookObj.worksheets[0];
    sheets.tables={}; // Exceljs module makes conflict when handle the table object, and this makes the inner excel folder's xml file makes error.
    workbookObj = await manipulate.makeExcel(array, workbookObj);
    
    write.writeFile(workbookObj);
}

readExcel();

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
let workbook = excelInit();
// mainpulateExcel(workbook, json);

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
