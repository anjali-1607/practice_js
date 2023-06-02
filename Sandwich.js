let bread = prompt(" Which bread do you want to have:");
let stuff = prompt(" What stuff do you want to add:");
let sauce = prompt(" Which sauce do you want to have:");

function makeSandwich(bread, stuff, sauce) {
  console.log(
    `First bring ${bread} and then add some ${stuff} to ${bread} then apply some ${sauce} in to the ${bread}`
  );
}

makeSandwich(bread, stuff, sauce);
