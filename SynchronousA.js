const fun2 = () => {
  //   setTimeout(() => {
  console.log("function2 is starting");
  //   }, 3000);
};

const fun1 = () => {
  console.log("Function1 is starting");
  fun2();
  setTimeout(() => {
    console.log("Function1 is ending");
  }, 3000);
};
fun1();
