// pdfreader: pdf_reader module

/* Usage

   use with fs module, read file with fs and decoding with pdreader module
*/

// Replace 'sample.pdf' with the path to your PDF file

// const fs = require('fs');
// const PDFParser = require('pdf2json');

// const pdfParser = new PDFParser();

// // When PDF parsing is complete
// pdfParser.on('pdfParser_dataReady', pdfData => {
//   // Access the parsed data here
//   fs.writeFile('parsedPDF.json' , JSON.stringify(pdfData), err => {
//     if (err) {
//       console.error('Error writing parsed data to file:', err);
//     } else {
//       console.log('PDF data written to parsedPDF.json');
//     }
//   });
// });

// // Load the PDF file
// pdfParser.loadPDF('./a.pdf');

const fs = require('fs');
const PDFParser = require('pdf-parse');
let dt;

// Read the PDF file
const pdfFilePath = 'a.pdf'; // Replace with your PDF path
const dataBuffer = fs.readFileSync(pdfFilePath);

// Parse the PDF content
PDFParser(dataBuffer).then(data => {
  // Access the extracted text content
  console.log(data.text);
  dt = data;
}).catch(err => {
  console.error('Error parsing PDF:', err);
});

dt;