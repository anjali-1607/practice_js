console.log(
  "In this programme you can find the force,Energy,Acceleration,velocity,momentum"
);
console.log("1..FORCE");
console.log("2. ENERGY");
console.log("3. ACCELERATION");
console.log("4. VELOCITY");
console.log("5. MOMENTUM");
console.log("6. IMPULSE");
console.log("7. WORK");
console.log("8. POWER");
console.log("9. PRESSURE");
console.log("10. VOLUME");
while (true) {
  let select = prompt("Select opreation");

  if (select == 1) {
    let a = prompt("Enter the value of mass (in kg): ");
    let b = prompt("Enter the value of acceleration (in km/hr): ");
    console.log("So,FORCE exerted by object is", a * b, "Newton");
  } else if (select == 2) {
    let c = prompt("Enter a MASS of a object: ");
    let d = prompt("Enter a Speed of a object:");
    console.log("So,ENERGY is used by body is", c * d ** 2, "joule");
  } else if (select == 3) {
    let e = prompt("Enter a velocity of an object: ");
    let f = prompt("Enter a Time taken by an object:");
    console.log("So,ACCELERATION of body is", e / f);
  } else if (select == 4) {
    let g = prompt("Enter Displacement of object: ");
    let h = prompt("Enter time taken by an object:");
    console.log("So,VELOCITY of an object is", g / h);
  } else if (select == 5) {
    let i = prompt("Enter Mass of an object: ");
    let j = prompt("Enter Velocity of an object:");
    console.log("So,MOMENTUM of an object is:", i * j);
  } else if (select == 6) {
    let k = prompt("Enter Force exerted by an object:");
    let l = prompt("Enter time take take by an object:");
    console.log("So,IMPULSE of object is", k / l);
  } else if (select == 7) {
    let m = prompt("Enter Force extered by an object:");
    let n = prompt("Enter distance covered by an object:");
    console.log("So,WORK DONE by object is", m * n);
  } else if (select == 8) {
    let o = prompt("Enter work done by an object");
    let p = prompt("Enter time taken by an object:");
    console.log("So,POWER is", o / p);
  } else if (select == 9) {
    let q = prompt("Enter force extered by an object");
    let r = prompt("Enter area of an object: ");
    console.log("So,PRESSURE of object is", q / r);
  } else if (select == 10) {
    let s = prompt("Enter a length of an object");
    let t = prompt("Enter a breadth of an object: ");
    let u = prompt("Enter a height of an object:");
    console.log("So,the VOLUME of an object is", s * t * u, "m³");
  } else {
    console.log("Sorry,It is invalid give a valid choice");
    break;
  }
}
