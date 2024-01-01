let fs = require('fs');

try{
    const data = fs.readFileSync('a.pdf', 'utf8');
}catch(err){
    console.error('Error reading file:', err);
}
