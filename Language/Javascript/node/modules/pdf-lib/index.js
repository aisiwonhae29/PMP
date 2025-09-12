let { PDFDocument, rgb} = require('pdf-lib');
let fs = require('fs');

async function mdfPdf(path){
    const pdf = fs.readFileSync(path);
    const pdfDoc = await PDFDocument.load(pdf);

    const pages = pdfDoc.getPages();
    const firstPage = pages[0];

    const { width, height } = firstPage.getSize();

}

mdfPdf('./org/specification_org_1.pdf')