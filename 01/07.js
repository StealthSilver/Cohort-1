// arrays

let num = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(num[4]);
let evenArr = [];
let oddArr = [];

for (let i of num) {
  if (i % 2 == 0) {
    evenArr.push(i);
  } else {
    oddArr.push(i);
  }
}

console.log(evenArr);
console.log(oddArr);
