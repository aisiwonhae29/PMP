
async function readFile( workbook, file) {
	const array = [];
	await workbook.xlsx.readFile(file);
	const worksheet = workbook.worksheets[0];
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
		},
	];

	worksheet.eachRow({ includeEmpty: false }, (row, rowNumber) => {
		array.push(row.values);
	});
	return workbook;
}

module.exports = {
	readFile: readFile,
	read: async function (workbook, path) {
		const array = [];
		await workbook.xlsx.readFile(path);
		const worksheet = workbook.worksheets[0];
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
			},
		];

		worksheet.eachRow({ includeEmpty: false }, (row, rowNumber) => {
			array.push(row.values);
		});
		return workbook;
	},
};

