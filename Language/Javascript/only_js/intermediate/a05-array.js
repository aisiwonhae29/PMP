/**
 * * a05: array
 * 
 * ! subject
 * 
 * * 1. every
 * * 2. slice
 */

// # every: This test each element in the array with provided condition. return with boolean value.

let arr = ["a", "b", "c", "d", "e"];

let numbers = [1, 2, 3, 4, 5];

function arr_01(){

	
	var allEven = numbers.every(function (number) {
		return number % 2 === 0;
	});
	
	console.log(allEven); // Output: false (not all elements are even)
}

// # slice: This extracts a portion of the array or string and returns it as a new array or string, without modifying the original.

function arr_a2(){
	console.log(arr.slice(2));
	console.log(arr.slice(1,3));
}

arr_a2();