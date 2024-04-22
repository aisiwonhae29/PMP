/**
 * * a05: array
 * 
 * ! subject
 * 
 * # 1. every
 */

// # every: This test each element in the array with provided condition. return with boolean value.

function arr_01(){

	var numbers = [ 2, 3, 4, 5];
	
	var allEven = numbers.every(function (number) {
		return number % 2 === 0;
	});
	
	console.log(allEven); // Output: false (not all elements are even)
}