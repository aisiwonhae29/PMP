function numberToChar(number){
    
    if(typeCheck(number, 'number')){ return -1; }
    let char = String.fromCharCode(number);

    return char;
}

function charToNumber(char){
    if(typeCheck(char, 'string')){ return -arguments; }
    let number = char.charCodeAt()
    
    return number;
}

function typeCheck(object, type){
    let bool = typeof object == type;
    
    return !bool;
}

function concatenation(word, number){
    if(typeCheck(word, 'string') || typeCheck(number, 'number')){ return -1};
    let result = word + number

    return result;
}

module.exports = {
	numberToChar: numberToChar,
	charToNumber: charToNumber,
	concatenation: concatenation,
};