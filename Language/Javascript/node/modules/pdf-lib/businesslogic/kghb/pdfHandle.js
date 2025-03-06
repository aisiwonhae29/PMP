const fs = require('fs');
const pdf = require('../../tools/create');
const fontkit = require('fontkit');
const {pdfDocument, rgb } = require('pdf-lib');

(async () => {
    try{
        const pdfDoc = await pdf.loadPdf('./quotation copy.pdf');
        pdfDoc.registerFontkit(fontkit);

        const page = pdfDoc.getPage(0);

        const normal    = fs.readFileSync('../../org/MALGUN.TTF');
        const bold      = fs.readFileSync('../../org/MALGUNBD.TTF');
        const koreanNormal  = await pdfDoc.embedFont(normal);
        const koreanBold    = await pdfDoc.embedFont(bold);
        
        page.drawText('라인월드', {
            x: 120.0236575078125, 
            y: 695.280041,
            size: 9.5,
            font: koreanNormal,
            color: rgb(0, 0, 0),
        })

        const modifiedPdfBytes = await pdfDoc.save();
        fs.writeFileSync('./test.pdf', modifiedPdfBytes);
    } catch (err) {
        console.error(err);
    }
})();