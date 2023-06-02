var a = {
  firstname: "anjali",
  lastname: "rajpoot",
  age: 19,
  profession: "student",
};
for (var i in a) {
  console.log(a[i]);
}

//1----------------------------------
var b = {};
console.log(b);

//2-------------------------------
//for example---

var c = {
  fruit: "orange",
  color: "orange",
};

c.vegetable = "cabbage";
console.log(c);

//3------
//for example---

var d = {
  phone: "iPhone",
  tv: "samsung",
  fridge: "samsung",
};
console.log(d.phone);

//4----------
//for exapmle---

var e = {
  bata: "shoes",
  zara: "dress",
  nykaa: "tv",
  samsung: "phone",
};

delete e.nykaa;
e.samsung = "tv";
console.log(e);

// login page
console.log("1. Register Yourself");
console.log("2. Login ");

var data = {
  username: "admin",
  password: "1234",
};

var a = prompt("Enter your Username : ");

var b = prompt("Enter your password : ");

function login(a, b) {
  if (a === data.username && b === data.password) console.log("Welcome!");
  else {
    console.log("invalid credential");
  }
}
login(a, b);

//Write a JavaScript program to list the properties of a JavaScript object

var obj = {
  name: "Anjali",
  age: 19,
  profession: "student",
  college: "Medicaps",
  Favcolor: "black",
  Favfruit: "mango",
};
for (var prop in obj) {
  console.log(obj[prop]);
}

// Write a JavaScript program to get the length of a JavaScript object.
var obj = {
  name: "Anjali",
  age: 19,
  profession: "student",
  college: "Medicaps",
  Favcolor: "black",
  Favfruit: "mango",
};

console.log(arr.length);
var keys = Object.keys(obj);
console.log(keys);

var values = Object.values(obj);
console.log(values);

//Write a JavaScript program to display the reading status
//(i.e. display book name, author name and reading status) of the following books.
var library = [
  {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true,
  },
  {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    readingStatus: true,
  },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false,
  },
];

let b = library.map((ele) => {
  return typeof ele;
});

console.log(b);
console.log(library);

//write a JavaScript program to sort an array of JavaScript objects.
var library = [
  {
    title: "The Road Ahead",
    author: "Bill Gates",
    libraryID: 1254,
  },
  {
    title: "Walter Isaacson",
    author: "Steve Jobs",
    libraryID: 4264,
  },
  {
    title: "Mockingjay: The Final Book of The Hunger Games",
    author: "Suzanne Collins",
    libraryID: 3245,
  },
];

var newLibrary = library.sort((a, b) => {
  return a.libraryID - b.libraryID;
});

console.log(newLibrary);

// Write a JavaScript function to check whether an object contains a given property
