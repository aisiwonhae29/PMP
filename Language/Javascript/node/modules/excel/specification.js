// * exceljs specification

let exceljs = require('exceljs');

// # Create Workbook Instance

const workbook = new exceljs.Workbook();

// # Add a Worksheet & Access Worksheet & Remove a Worksheet

const sheet     = workbook.addWorksheet('Sheet1');      
const sheet1    = workbook.addWorksheet('Sheet2');
const sheet2    = workbook.worksheets[0];
workbook.removeWorksheet('sheet2'); // or sheet.id
