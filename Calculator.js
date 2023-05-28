console.log("---------------------------------------------------------------");

console.log("1. Addition");
console.log("2. Subtraction");
console.log("3. Multiplication");
console.log("4. Division");

console.log("---------------------------------------------------------------");

while (true) {
  let choice = parseInt(prompt("Enter your choice : "));

  var a = parseFloat(prompt("Enter your first number : "));
  var b = parseFloat(prompt("Enter your second number: "));

  function sum(a, b) {
    return a + b;
  }

  function sub(a, b) {
    return a - b;
  }

  function mult(a, b) {
    return a * b;
  }

  function div(a, b) {
    return a / b;
  }

  if (choice === 1) {
    var add = sum(a, b);
    console.log("Result: " + add);
  } else if (choice === 2) {
    var min = sub(a, b);
    console.log("Result:" + min);
  } else if (choice === 3) {
    var into = sub(a, b);
    console.log("Result:" + into);
  } else if (choice === 4) {
    var by = sub(a, b);
    console.log("Result:" + by);
  } else {
    console.log("Invalid choice");
    break;
  }
}
