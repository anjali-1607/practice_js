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
