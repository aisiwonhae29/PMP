const exceljs = require("exceljs");
const puppeteer = require("puppeteer");
const lib = require("libreoffice-convert");
const fontkit = require("fontkit");
const fs = require("fs");
const { PDFDocument, rgb, StandardFonts } = require("pdf-lib");

async function excelToPdf(workbook, outputPdfPath) {
	let html = "<html><body>";
	workbook.eachSheet((worksheet) => {
		html += `<h2>${worksheet.name}</h2><table border="1">`;

		worksheet.eachRow((row) => {
			html += "<tr>";
			row.eachCell((cell) => {
				html += `<td>${cell.text || cell.value}</td>`;
				console.log(cell.text);
			});
			html += "</tr>";
		});

		html += "</table><br>";
	});
	html += "</body></html>";

	// Save HTML to a temporary file
	const tempHtmlPath = "temp.html";
	fs.writeFileSync(tempHtmlPath, html);

	// Convert the HTML to PDF using Puppeteer
	const browser = await puppeteer.launch();
	const page = await browser.newPage();
	await page.goto(`file://${process.cwd()}/${tempHtmlPath}`, {
		waitUntil: "load",
	});
	await page.pdf({ path: outputPdfPath, format: "A4" });
	await browser.close();
}

function libre() {
	const file = fs.readFileSync("../target/quotation_org.xlsx");

	lib.convert(file, ".pdf", undefined, (err, done) => {
		if (err) {
			console.log(`Error converting file: ${err}`);
		}
		// Here in done you have pdf file which you can save or transfer in another stream
		fs.writeFileSync("./test.pdf", done);
	});
}

async function pdf_lib() {
    let pdfFilePath = "./result/test.pdf";
    let workbook1 = new exceljs.Workbook();
    let workbook = await workbook1.xlsx.readFile("C:/Users/line/Desktop/업무/gene_bank/srcCode/생명공학연구소/GRIS/public/excelForm/quotation_org.xlsx");
	const pdfDoc = await PDFDocument.create();
    pdfDoc.registerFontkit(fontkit);
    const korFontBytes = fs.readFileSync("../BATANG.TTC");
	const helveticaFont = await pdfDoc.embedFont(korFontBytes);

	let page = pdfDoc.addPage();
	let { width, height } = page.getSize();
	let y = height - 50; // Start the content below the sheet name

	workbook.eachSheet((worksheet) => {
		const sheetName = worksheet.name;

		page.drawText(sheetName, {
			x: 50,
			y: y,
			font: helveticaFont,
			size: 20,
			color: rgb(0, 0, 0),
		});

		y -= 30; // Move down for the next row

		const columnWidths = [];
		worksheet.eachRow((row) => {
			row.eachCell((cell, colNumber) => {
				const textWidth = helveticaFont.widthOfTextAtSize(cell.text, 12);
				columnWidths[colNumber - 1] = Math.max(
					columnWidths[colNumber - 1] || 0,
					textWidth
				);
			});
		});

		worksheet.eachRow((row, rowIndex) => {
			let x = 50; // Start from the left margin

			if (y < 50) {
				// If the current page is full, add a new page
				page = pdfDoc.addPage();
				({ width, height } = page.getSize());
				y = height - 50;
			}

			row.eachCell((cell, colNumber) => {
				const textWidth = helveticaFont.widthOfTextAtSize(cell.text, 12);
				const cellWidth = columnWidths[colNumber - 1] + 80;
				const cellHeight = 20;

				// Draw cell background
				page.drawRectangle({
					x,
					y: y - cellHeight,
					width: cellWidth,
					height: cellHeight,
					color: rowIndex === 1 ? rgb(0.8, 0.8, 0.8) : rgb(1, 1, 1),
					borderColor: rgb(0, 0, 0),
					borderWidth: 1,
				});

				// Draw cell text
				page.drawText(cell.text, {
					x: x + (cellWidth - textWidth) / 2,
					y: y - cellHeight / 2 - 6,
					font: helveticaFont,
					size: 12,
					color: rgb(0, 0, 0),
				});

				x += cellWidth; // Move to the right for the next cell
			});

			y -= 20; // Move down for the next row
		});
	});

	const pdfBytes = await pdfDoc.save();
	await fs.promises.writeFile(pdfFilePath, pdfBytes);
}
pdf_lib();
module.exports = {
	excelToPdf: excelToPdf,
};
