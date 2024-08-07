const date = require('../config')

function writeFile(workbook){
    workbook.xlsx.writeFile(`a.xlsx`);
}


module.exports = {
    writeFile: writeFile
}