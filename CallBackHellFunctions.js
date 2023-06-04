const getRollNo = () => {
  setTimeout(() => {
    console.log("Api getting roll no");
    let roll_no = [1, 2, 3, 4];
    console.log(roll_no);

    setTimeout(
      (roll_no) => {
        const BioData = {
          name: "Anjali",
          age: 20,
        };
        console.log(
          `My roll no is  ${roll_no} My name is ${BioData.name} and I am ${BioData.age} years`
        );

        setTimeout((name) => {
          BioData.gender = "male";
          console.log(
            `My roll no is  ${roll_no} My name is ${BioData.name} and I am ${BioData.age} years old . I am alph ${BioData.gender}`
          );
        }, 2000);
      },
      2000,
      roll_no[2]
    );
  }, 2000);
};
getRollNo();
