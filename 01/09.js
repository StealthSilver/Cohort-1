// array of objects

const allUsers = [
  {
    firstName: "tony",
    gender: "male",
  },
  {
    firstName: "hulk",
    gender: "male",
  },
  {
    firstName: "mantis",
    gender: "female",
  },
];

for (i of allUsers) {
  if (i["gender"] == "male") {
    console.log(allUsers[i]["firstName"]);
  }
}
