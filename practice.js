// function sum(){
//     var a =60;
//     var b =30;
//     if(a===50){
//         console.log(true)
//     }
//     else{
//         if(a+b===50){
//             console.log(true);
//         }
//         else{
//             console.log(false);
//         }
//     }

// }
// sum();

//q2......

// int=a,b;
// var a=98;
// var b=-9;
// if(a<=0&& b<=0){
//     console.log("the numbers are negative")
// }
// else if( a>=0 && b>=0) {
//     console.log("the numbers are positive")
// }
// else if(a<=0 || b>=0){
//     console.log("the first number is negative and second number is poitive")
// }
// else if(a>=0 || b<=0){
//     console.log("the first number is positive and the second number is negative")
// }
// else{
//     console.log("give the valid numbers")
// }

// //q3

// var a=15;
// if(a%3==0 && a%7==0){
//     console.log("the number is multiple of 3 and 7")
// }
// else if( a%3 != 0 && a%7==0) {
//     console.log("the numbers is not multipe of 3 ,it is the multiple of 7")

// }
// else if( a%3 == 0 && a%7!=0) {
//     console.log("the numbers is multipe of 3 ,it is not the multiple of 7")
// }

// //q4...

// var arr=["a", "b", "c","d","e"];
// if(arr=a,e,i,o,u){
//     console.log("vowels are there")
// }
// else{
//     console.log("vowels are not there")
// }

// const check_vowels =(a,b)=>{
//     const c=a+b
//     return(c);

// }
// console.log(check_vowels(7,8)+check_vowels(4,5));
// // check_vowels(2,9);
// check_vowels(3,7);
// check_vowels(7,5);

// //q5//

// arr=["anu","manu","anjali"]
// console.log(arr.length-1)

// document.querySelector(css)

// const sum=(a,b)=>{
//      const c=a+b;
//      return(c);
// }
// console.log(sum(3,4));

// let num=4;
// for(i=1, i<=10,i++ ){
//      console.log(num + '*'+ i + '=' +num*i );
// }

const ages = [5, 16, 33, 46, 90, 11, 4];
ages.filter(checkAdults);
function checkAdults() {
  console.log(checkAdults >= 18);
}

console.log("-----------Sandwich Menu------------");
console.log("1. Vegetable Sandwich");
console.log("2. Potato Sandwich");
console.log("3. Toasted Chicken Sandwich");
console.log("4. Open Beetroot Sandwich");
console.log("5. Egg Mayo Sandwich");
console.log("6. Paneer Toasty with Salsa");
console.log("7.Roasted Broccoli and Blue Cheese Panini");
console.log("8. Hot Tuna Sandwich");
console.log("9. Sweet Relish Sandwich");
console.log("10. Grilled Cheese Sandwich");

let choice = prompt("Enter Your Choice : ");

if (choice == 1) {
  name = "Vegetable Sandwich";
  price = "$20";
  rating = "4.5/5";
  address = " Khan restaurant , Delhi , India";
  ingredients = " wheat bread, broccoli, zucchini, eggplant and cheesy plum";
  delievery = "free deleivery";
  veg = "vegetrian";
  console.log(
    `Your selected sandwich is ${name} its price is ${price} and its rating is ${rating}. Address - ${address}`
  );
} else {
  console.log(" This sandwich is out of menu");
}
