// asynchronos function

function findSum(n) {
  let ans = 0;
  for (let i = 0; i < n; i++) {
    ans += i;
  }
  return ans;
}

function sumTill100() {
  console.log(findSum(100));
}

// calling the asynchronous function
setTimeout(sumTill100, 1000);
console.log("hello world");
