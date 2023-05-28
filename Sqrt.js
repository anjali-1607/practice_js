var arr = [2, 3, 4, 5, 6];
var newArr = arr.map((ele) => {
  return Math.pow(ele, 2);
});
console.log(newArr);

var a = [4, 9, 16, 25, 36, 49];
var b = a.map((ele) => {
  return Math.sqrt(ele);
});
console.log(b);
