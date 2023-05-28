let arr = [1, 3, 4, 6, -5, -8, -5, 9, -3];
console.log(arr.length);
let positiveCount = 0;
let negativeCount = 0;

let newArr = arr.map((ele) => {
  if (ele >= 0) {
    positiveCount++;
  } else {
    negativeCount++;
  }
});
console.log(
  ` There are ${arr.length} elements in an array and out of that there are ${positiveCount} are positive and ${negativeCount}  are negative`
);
