let ExcelJS = require("exceljs");

module.exports = {
	copyExcel: async function (existingFilePath, newFilePath) {
		const existingWorkbook = new ExcelJS.Workbook();

		try {
			// Load the existing workbook
			await existingWorkbook.xlsx.readFile(existingFilePath);
			console.log(`Loaded workbook from ${existingFilePath}`);
		} catch (error) {
			console.error(`Error reading existing workbook: ${error.message}`);
			return;
		}

		const newWorkbook = new ExcelJS.Workbook();

		try {
			// Copy each worksheet
			existingWorkbook.eachSheet((worksheet) => {
				const newWorksheet = newWorkbook.addWorksheet(worksheet.name);

				// Copy worksheet views
				newWorksheet.views = worksheet.views;

				// Initialize columns in the new worksheet
				newWorksheet.columns = worksheet.columns.map((col) => ({ ...col }));

				// Copy each row
				worksheet.eachRow({ includeEmpty: true }, (row, rowNumber) => {
					const newRow = newWorksheet.getRow(rowNumber);
					newRow.values = [...row.values];

					// Copy cell styles and other properties
					row.eachCell({ includeEmpty: true }, (cell, colNumber) => {
						const newCell = newRow.getCell(colNumber);
						newCell.style = { ...cell.style };
						if (cell.formula) {
							newCell.value = { formula: cell.formula, result: cell.result };
						} else {
							newCell.value = cell.value;
						}
						newCell.numFmt = cell.numFmt;
						newCell.alignment = cell.alignment;
						newCell.border = cell.border;
						newCell.fill = cell.fill;
						newCell.font = cell.font;
					});
				});

				// Copy merges if there are any
				Object.values(worksheet._merges).forEach((merge) => {
					newWorksheet.mergeCells(merge);
				});
			});

			// Save the new workbook
			await newWorkbook.xlsx.writeFile(newFilePath);
			console.log(`Workbook duplicated successfully to ${newFilePath}`);
		} catch (error) {
			console.error(`Error duplicating workbook: ${error.message}`);
		}
	},
};
