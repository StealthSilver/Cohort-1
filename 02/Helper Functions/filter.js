// filter function

const arr = [1, 2, 3, 4, 5, 6, 7, 8];

const ans = arr.filter(function logic(n) {
  n % 2 == 0 ? true : false;
});

console.log(ans);
