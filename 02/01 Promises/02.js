// callbacks
function square(n) {
  return n * n;
}

function cube(n) {
  return n * n * n;
}

function quad(n) {
  return n * n * n * n;
}

// passing a function as an argument (functional argument)
function sumOfSomething(a, b, fn) {
  let first = fn(a);
  let second = fn(b);
  return first + second;
}

let ans = sumOfSomething(2, 3, cube);
console.log(ans);
