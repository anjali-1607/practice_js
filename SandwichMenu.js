const db = [
  {
    id: 1,
    name: "Classic BLT",
    ingredient: ["Bacon", "Lettuce", "Tomato"],
    rating: 4.5,
    address: "123 Main St",
    price: 8.99,
    delivery: false,
  },
  {
    id: 2,
    name: "Turkey Club",
    ingredient: ["Turkey", "Bacon", "Lettuce", "Tomato"],
    rating: 4.2,
    address: "456 Elm St",
    price: 9.99,
    delivery: true,
  },
  {
    id: 3,
    name: "Veggie Delight",
    ingredient: ["Lettuce", "Tomato", "Cucumber", "Avocado"],
    rating: 4.0,
    address: "789 Oak St",
    price: 7.99,
    delivery: true,
  },
  {
    id: 4,
    name: "Italian Sub",
    ingredient: ["Salami", "Ham", "Pepperoni", "Provolone"],
    rating: 4.7,
    address: "321 Pine St",
    price: 10.99,
    delivery: true,
  },
  {
    id: 5,
    name: "Chicken Caesar Wrap",
    ingredient: [
      "Grilled Chicken",
      "Romaine Lettuce",
      "Parmesan",
      "Caesar Dressing",
    ],
    rating: 4.3,
    address: "567 Cedar St",
    price: 8.49,
    delivery: true,
  },
  {
    id: 6,
    name: "BBQ Pulled Pork",
    ingredient: ["Pulled Pork", "BBQ Sauce", "Coleslaw", "Pickles"],
    rating: 4.6,
    address: "987 Maple St",
    price: 9.49,
    delivery: true,
  },
  {
    id: 7,
    name: "Tuna Salad",
    ingredient: ["Tuna", "Mayonnaise", "Celery", "Onion"],
    rating: 4.1,
    address: "654 Birch St",
    price: 7.49,
    delivery: true,
  },
  {
    id: 8,
    name: "Caprese Panini",
    ingredient: ["Tomato", "Mozzarella", "Basil", "Balsamic Glaze"],
    rating: 4.4,
    address: "876 Oak St",
    price: 9.49,
    delivery: true,
  },
  {
    id: 9,
    name: "Steak and Cheese",
    ingredient: ["Steak", "Cheese", "Onion", "Peppers"],
    rating: 4.8,
    address: "234 Elm St",
    price: 11.99,
    delivery: true,
  },
  {
    id: 10,
    name: "Ham and Swiss",
    ingredient: ["Ham", "Swiss Cheese", "Lettuce", "Mustard"],
    rating: 4.0,
    address: "543 Maple St",
    price: 8.49,
    delivery: true,
  },
];

console.log("-----------Sandwich Menu------------");
console.log("1. Classic BLT");
console.log("2. Turkey Club");
console.log("3. Veggie Delight");
console.log("4. Italian Sub");
console.log("5.Chicken Caesar Wrap");
console.log("6. BBQ Pulled Pork");
console.log("7.Tuna Salad");
console.log("8. Caprese Panin");
console.log("9. Steak and Cheese");
console.log("10.Ham and Swiss \n ");

while (true) {
  let choice = prompt("Enter Your Choice : ");

  let output = db.forEach((ele) => {
    if (ele.id == choice) {
      console.log(
        `\nYour sandwich name is ${ele.name}, \nIts rating is ${
          ele.rating
        }, \nIts price is $ ${ele.price}, \nIts address is ${
          ele.address
        }, \nIts delivery ${
          ele.delivery == true ? "free" : "paid"
        }, \nIts ingredients is ${ele.ingredient}\n`
      );
    }
  });
}
