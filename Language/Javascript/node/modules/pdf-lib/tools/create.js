const {PDFDocument, rgb } = require('pdf-lib');
const fs = require('fs').promises;

async function createPdf(){
    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage([600, 400]);
    const pdfBytes = await pdfDoc.save();
    await fs.writeFile('new_file.pdf', pdfBytes);
}

async function loadPdf(path){
    const existPdfBytes = await fs.readFile(path);
    const pdfDoc = await PDFDocument.load(existPdfBytes);
    return pdfDoc;
}

async function loadPage(pdfDoc, num=0){
    const page = pdfDoc.getPage(num);
    return page;
}

module.exports = {
    createPdf: createPdf,
    loadPdf: loadPdf,
    loadPage: loadPage,
}