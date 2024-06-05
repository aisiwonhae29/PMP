const exceljs   = require('exceljs');
const read      = require('./read');
const write     = require('./write');
const manipulate= require('./manipulate');

const workbook  = new exceljs.Workbook();


async function test(){
    let workbookObj     = await read.readFile('../target/' + "target.xlsx", workbook)
    let testSheet       = workbook.worksheets[0];
    let modifiedCell    = testSheet.getCell('V14');
    console.log(modifiedCell.value);
    modifiedCell.value = "My name is Kim si won.";
    console.log(modifiedCell.value);
    console.log('"""""""""""""""""""""""')
}

async function makeData() {
    let workbookObj = await workbook.xlsx.readFile('../target/target.xlsx');
	workbook.worksheets[0] = workbookObj.worksheets[0];
	workbook.creator = "kim si won";
	workbook.lastModifiedBy = "Siwon";
	workbook.created = new Date();
	workbook.modified = new Date();
	workbook.lastPrinted = new Date();
	workbook.views = [
		{
			x: 0,
			y: 0,
			width: 10000,
			height: 20000,
			firstSheet: 0,
			activeTab: 1,
			visibility: "visible",
			showGridLines: true,
		},
	];
    write.writeFile(workbook)	
}
// makeData();
async function init(){
	console.log(__dirname);
	let workbook = new exceljs.Workbook();
	write.writeFile(workbook);
};
// init();
// manipulate.copyExcel('../target/target.xlsx', './test.xslx');