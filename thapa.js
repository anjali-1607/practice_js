// for(i=1;i<=10;i++){
//     console.log(`${2}*${i}=${2*i}`)
// }
// // console.log("hello")
// // console.log(`${2}*${i}=${2*i}`)

// function cal(a,b){
//     return(a-b)

// }
// console.log(cal(7,5));
// console.log(cal(7,3));

// var myfriends =['prachi','elin','mitali']
// console.log(myfriends[1])

// var num=0
// while(num=10){
// console.log(num);
// num++
// };

// const sum=()=>`the sum of the two number is ${(a=5)+(b=6)}`;
// console.log(sum());

// var myfriends=['prachi','elin','mitali','anjali'];
// myfriends.forEach(function(element,index){
//     console.log(element + '    index: '+index );
// });

// var myfriends=['prachi','elin','mitali','anjali'];
// myfriends.forEach((element,index,array)=>{
//     console.log(element + '    index: '+index + '   array: '+array);

// })
// var myfriends=['anjali','prchi','elin'];
// myfriends.forEach(function(element,index,array){
//     console.log(element + "     index:   " + index+"         array:     " +array)
// });

// var myfriends=['prachi','elin','mitali','anjali',"prachi"];
// console.log(myfriends.includes("prachi"));

// const prices=[300,400,500,600,700];
// const newPriceTag = prices.filter((elem) => {
//     return elem <1000;
// })
// console.log(newPriceTag)

// const months=["march","jan","feb","dec","april","nov"];
// console.log(months.sort());

// Array1 =[4,300000,6,7,1,2,5,3]
// console.log(Array1.sort());

// const arr =
// [
//     {
//       start_time:4567,
//       end_time : 4800,

//     },
//     {
//       start_time:4267,
//       end_time : 4300,

//     },
//     {
//       start_time:3967,
//       end_time : 4000,

//     },
//     {
//       start_time:4267,
//       end_time : 4300,

//     },
//     {
//       start_time:4567,
//       end_time : 4800,

//     }

// //   ]
// var firstNumber = 20;
// // var number = secondnumber;
// // console.log(number);
// var secondNumber = 40;
// secondNumber = 80;
// // console.log(secondnumber);

// // // Q6
// var myBoolean = true;
// var myString = "Hello World";
// var myArray = [myBoolean, myString];
// console.log(myArray);

// // // // Q7
// let myObject={
//    firstNumber= [2,3,4],
//    secondNumber= [2,3,4],
//    sum(firstNumber+ secondNumber);

// console.log(sum)

//   ]
// }

// let myObject = {
//   firstProperty: myArray,
//   sumProperty: firstNumber + secondNumber,
// };
// console.log(myObject);
// console.log(myObject.sumProperty);
// console.log(myObject.firstProperty[1]);

// function sum(...arg) {
//   let total = 0;
//   console.log("anjali", typeof arg);

//   for (const i of arg) {
//     total = total + i;
//   }
//   console.log(total);
// }
// sum(2, 4, 5, 6, 7, 2, 34, 4, 54, 546);

// const arr = ["32", " 61", "12", " 5", " 6"];
// console.log(arr.sort());

// const months = ["january", " october", "sept", "nov", "dec"];
// console.log(months[4]);

// const animals = ["cows", "goats", "sheep"];
// const count = animals.push("cats", "dogs", "snakes");
// console.log(animals);
// console.log(count);

//challenge 1
// const months = ["jan", "march", "April", "June", "july"];
// const indexOfmonth = months.indexOf("June");
// if (indexOfmonth != -1) {
//   months.splice(indexOfmonth, 1 );
// } else {
//   console.log("no such data found");
// }
// console.log(months);

// const months = ["jan", "feb", "March", "april", "may"];
// const indexOfmonth = months.indexOf("March");
// months.splice(indexOfmonth, 1, "march");
// console.log(months);

// const color = ["blue", "red", "pink", "yellow", "purple"];
// // color.push("white");
// console.log([...color, "white"]);

// const reverseSeq = (n) => {
//   let arr = [];
//   for (let i = n; i > 0; i--) {
//     arr.push(i);
//     console.log(i);
//   }

//   return arr;
// };
// console.log(reverseSeq(5));

// function findNeedle(haystack) {
//   let index = haystack.indexOf("needle");
//   if (index != -1) {
//     return "found the needle at position" + index;
//   } else {
//     return "";
//   }
// }
// console.log(findNeedle(["a", "b", "c", "needle"]));

// var input = prompt("What is your name?");
// console.log("Hello, " + input + "!");

// // Gets user input
// window = prompt();
// var name = prompt("What is your name?");
// var num = prompt("What is your favorite number? ");

// // Uses user input to print out information
// println("Hello " + name + "!");
// println(num + "?! That's my favorite number too!");

// // Prints out the variable type
// println("Name is a " + typeof name);
// println("Num is a " + typeof num);

// var name = window.prompt("What is your name");
// var num = window.prompt("what is your favroute number");
// console.log("hello" + name);
// console.log("Your favroute number is " + num);

// var prompt = require("prompt");

// // Function call
// prompt.start();

// // Reading two properties from user ie. name & class
// prompt.get(["Name", "class"], function (err, result) {
//   // Printing the result
//   console.log("Command-line input received:");
//   console.log("Name: " + result.name);
//   console.log("class: " + result.class);
// });

// const arr = [5, 16, 33, 46, 90, 11, 4];
// let newArr = arr.map((curele, index, arr) => {
//   return curele > 10;
// });

// // console.log(arr)
// console.log(newArr);

// const age = [30, 1, 34, 2, 35];
// const adult = age.map((ele) => {
//   return ele > 18;
// });
// console.log(adult);

// const a = [100, 200, 300, 50, 60, 20];
// let b = a.map((ele, index) => {
//   return `Index no = ${index} and the value is ${ele} belongs to ${a}`;
// });
// console.log(b);
// // console.log(index(ele));

// let arr = [25, 36, 49, 64, 81];
// let newArr = arr.map((ele) => {
//   return Math.sqrt(ele);
// });
// console.log(newArr);

// let arr = [2, 3, 4, 6, 8];
// let newArr = arr.map((ele) =>  ele * 2).filter((ele) => ele > 10);
// console.log(newArr);

// let arr = [2, 3, 4, 5];
// let newArr = arr
//   .map((ele) => ele * 2)
//   .filter((ele) => ele > 5)
//   .reduce((accumulator, ele) => (accumulator *= ele));
// console.log(newArr);

// let arr = [1, 2, 3];
// let newArr = arr.reduce((accumulator, ele) => {
//   return (accumulator += ele);
// }, 7);
// console.log(newArr);

// let arr = [
//   ["zone1", "zone2"],
//   ["zone3", "zone4"],
//   ["zone5", "zone6"],
//   ["zone7", ["zone8", "zone9"]],
// ];
// let flatArr = arr.reduce((accum, ele) => {
//   return accum.concat(ele);
// });
// console.log(flatArr);

// let num = 4;
// let fac = 1;
// for (num; num >= 1; num--) {
//   fac = fac * num;
//   console.log(fac);
// }

// let arr = [2, 4, 78, 19, 5, 44, 50];
// let newArr = arr.filter((ele) => {
//   return ele > 10;
// });
// console.log(newArr);

// let myName = "I am Anjali Rajpoot";
// console.log(myName.search("Anjali"));

// let str = "Apple Mango Kiwi";
// console.log(str.substring(6, -4));

// let BioData = "I am anjali ,rajpoot anjali";
// console.log(BioData.split(","));
// // console.log(BioData.toUpperCase());

// for (let i = 1; i <= 5; i++) {
//   for (j = i; j <= i; j++) {
//     console.log("*");
//   }
//   console.log("*");
// // }

// var library = [
//   {
//     title: "The Road Ahead",
//     author: "Bill Gates",
//     libraryID: 1254,
//   },
//   {
//     title: "Walter Isaacson",
//     author: "Steve Jobs",
//     libraryID: 4264,
//   },
//   {
//     title: "Mockingjay: The Final Book of The Hunger Games",
//     author: "Suzanne Collins",
//     libraryID: 3245,
//   },
// ];

// console.log(" 1. Register ");
// console.log(" 2. Login ");

// while (true) {
//   let choice = prompt("Enter your choice: ");
//   if (choice == 1) {
//     console.log(":: Welcome to Register Page ::");
//     let a = prompt(" Enter a Username: ");
//     let b = prompt(" Enter a Password: ");
//     var c = {
//       Username: "anjali",
//       Password: "123",
//     };
//     console.log("Register successfull");
//   } else if (choice == 2) {
//     console.log("Welome To Login Page");
//     let a = prompt(" Enter a Username: ");
//     let b = prompt(" Enter a Password: ");

//     function login(a, b) {
//       if (a === c.Username && b === c.Password) {
//         console.log("Welcome");
//       } else {
//         console.log("Invalid Credential");
//       }
//     }
//     login(a, b);
//   }
// }
// console.log("2. Login");

// while (true) {
//   let choice = prompt("Enter your choice: ");

//   if (choice == 1) {
//     console.log(":: Welcome to Register Page ::");
//     let username = prompt("Enter a Username: ");
//     let password = prompt("Enter a Password: ");
//     var users = {
//       [username]: password
//     };
//     console.log("Registration successful!");
//   } else if (choice == 2) {
//     console.log(":: Welcome to Login Page ::");
//     let username = prompt("Enter your Username: ");
//     let password = prompt("Enter your Password: ");

//     if (users && users[username] === password) {
//       console.log("Welcome, " + username + "!");
//     } else {
//       console.log("Invalid Credentials");
//     }
//   }
// }

// var a = function () {
//   console.log("Thankyouy so muchhhhhhhh muchaa muchh");
// };
// a();

// const myName = () => {
//   return "Hello";
// };
// const greeting = (sayhi, name) => {
//   console.log(sayhi() + " " + name);
// };
// greeting(myName, "Anjali_Rajpot");

const name = () => {
  return "hey";
};
const greet = (myid, name1) => {
  console.log(myid() + "" + name1);
};
greet(name, " Anjali_Rajpot");
