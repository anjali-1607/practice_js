// function sum(a, b, c, ...other) {
//   console.log(other);
//   return a + b + c;
// }
// console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9));
//---------------------------------------------------------------
//spread Operator

function sum(a, b, c) {
  console.log(a + b + c);
}

var arr = [2, 3, 6];
console.log(...arr);
sum(...arr);

//--------------------------------------------------------
var a = [4, 5, 6];
var b = [7, 8, 9];
var c = [10, 11, 12];
a = [...a, ...b, ...c];
console.log(a);

//-------------------------------------------------------------
let arr1 = [1, 2, 3];
let arr3 = [5, 6, 7];
let arr2 = [...arr1, 100, 200, ...arr3];

console.log(arr2);
console.log(arr1);
