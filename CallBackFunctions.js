// const funA = () => {
//   setTimeout(() => {
//     console.log("FunA is starting");
//     funB();
//   }, 3000);
// };
// const funB = () => {
//   console.log("FunB is starting");
// };
// funA();

const perOne = (friend, callfrnd) => {
  console.log(
    `I am busy right now I am talking to ${friend} I will call you back`
  );
  callfrnd();
};
const perTwo = () => {
  console.log(`Hey whtsapp I will call you back dekha`);
};
perOne("anjali", perTwo);
