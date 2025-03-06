import * as pdfjsLib from "pdfjs-dist/legacy/build/pdf.mjs";
import fs from "fs/promises";

async function extractCoordinates(filePath) {
	try {
		// Read the PDF file as a Uint8Array
		const pdfBytes = await fs.readFile(filePath);
		const data = new Uint8Array(pdfBytes);

		// Load the PDF document
		const pdfDocument = await pdfjsLib.getDocument({ data }).promise;

		console.log(`PDF Loaded: ${filePath}`);
		console.log(`Number of pages: ${pdfDocument.numPages}`);

		// Loop through each page
		for (let pageNum = 1; pageNum <= pdfDocument.numPages; pageNum++) {
			const page = await pdfDocument.getPage(pageNum);
			const content = await page.getTextContent();

			console.log(`Page ${pageNum} content:`);

			// Extract text and coordinates
			content.items.forEach((item) => {
				console.log({
					text: item.str, // The text content
					x: item.transform[4], // X-coordinate
					y: item.transform[5], // Y-coordinate  
				});
			});
        }
	} catch (error) {
		console.error("Error extracting PDF coordinates:", error);
	}
}

// Run the function with an example file
extractCoordinates("../../zz_asset/pdf/kghb/specification_input.pdf");