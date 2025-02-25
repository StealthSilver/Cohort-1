// without callbacks

function square(n) {
  return n * n;
}

function cube() {
  return n * n * n;
}

function sumOfSquares(a, b) {
  const val1 = square(a);
  const val2 = square(b);
  return val1 + val2;
}

function sumOfCubes(a, b) {
  const val1 = cube(a);
  const val2 = cube(b);
  return val1 + val2;
}

console.log(sumOfSquares(3, 4));
console.log(sumOfCubes(3, 4));
