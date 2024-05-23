var a = [1,2,3,4,5,6,7];
var b = [1,2,3];

// a.forEach(element => {
//     console.log(b.filter(el=>el==element));
// });

var c = a.filter(el => el%2==0);
console.log(c);