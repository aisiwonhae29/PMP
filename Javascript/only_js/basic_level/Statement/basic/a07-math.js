// a07-Math()
// this Docs indicates the Math() usage

// Math.random

// case 1: Math.PI & E

console.log("Math.PI: " + Math.PI);
console.log("Math.E: " + Math.E)



// case 2: Basic Mathematical Methods

// Math.abs(x) indicates absolute value
console.log("Math.abs(x): " + Math.abs(1) + '\n' +
            "Math.abs(-x): " + Math.abs(-23));

// Math.ceil(x) & floor 
console.log("Math.ceil(x): " + Math.ceil(12.2));
console.log("Math.floor(x): " + Math.floor(12.2));

// Math.round(x)
console.log("Math.round(x): " + Math.round(12.2) + '\n' +
            "Math.round(x): " + Math.round(12.6));



// case 3: Math.random(x)

console.log("Math.random(): " + Math.random());



// case 4: Math.sqrt(x)

console.log("Math.sqrt(): " + Math.sqrt(25));



// case 5: Math.min & .max

console.log("Math.min(x): " + Math.min(1,23,4,5,11,-1));
console.log("Math.max(x): " + Math.max(-55, 123, 44, 56))



// case 6: Mathematics usage

// Math.sign(x) indicates x is positive or negative
console.log(Math.sign(-21))

// Exponential and Logarithmic Functions:
console.log(Math.exp(12))

// Returns e raised to the power of x, where e is Euler's number.
console.log(Math.log(12))

// Returns the natural logarithm (base e) of a number x.
console.log(Math.pow(1, 3))

// Returns the result of raising x to the power of y.
// Trigonometric Functions:
console.log(Math.sin(1), Math.cos(3), Math.tan(2))

// Return the sine, cosine, and tangent of an angle in radians, respectively.
console.log(Math.asin(2), Math.acos(1), Math.atan(12))

// Return the arcsine, arccosine, and arctangent of a number x (result in radians).