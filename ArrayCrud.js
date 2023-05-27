console.log("1. Add Items");
console.log("2. Shows Items");
console.log("3. Remove Item by Index");
console.log("4. Update Item by Index");
console.log("5. Exit");
let items = [];

while (true) {
  let choice = prompt("Enter your choice : ");

  if (choice == 1) {
    let add = prompt("How many items do you want to add ? ");

    for (let i = 1; i <= add; i++) {
      let adding = prompt("What do you want to add? ");
      items.push(adding);
    }
    console.log(items);
  } else if (choice == 2) {
    console.log(items);
  } else if (choice == 3) {
    let remove = prompt("what do you want to remove");
    const indexOfitems = items.indexOf(remove);
    if (indexOfitems != -1) {
      items.splice(indexOfitems, 1);
    } else {
      // console.log(indexOfitems)
      console.log("your item is not found: ");
      continue;
    }
    console.log(items);
  } else if (choice == 4) {
    let update = prompt("what do you want to update");
    const indexOfitems = items.indexOf(update);
    // console.log(indexOfitems)
    if (indexOfitems != -1) {
      let newvalue = prompt("set new value");
      items.splice(indexOfitems, 1, newvalue);

      console.log(items);
    } else {
      console.log("Item is not presnt in your list");
    }
  } else {
    console.log("exit");
    break;
  }
}
