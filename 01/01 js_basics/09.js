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

for (const user of allUsers) {
  if (user.gender === "male") {
    console.log(user.firstName);
  }
}
