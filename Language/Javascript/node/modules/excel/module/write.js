const date = require('../config')

function writeFile(workbook){
    workbook.xlsx.writeFile(`${__dirname}/../result/${date.getDate()}.xlsx`);
}


module.exports = {
    writeFile: writeFile
}