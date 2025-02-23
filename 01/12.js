//callback

function calculate(a, b, fnToCall) {
  return fnToCall(a, b);
}

function sum(a, b) {
  return a + b;
}

function minus(a, b) {
  return a - b;
}

function mul(a, b) {
  return a * b;
}

function div(a, b) {
  return a / b;
}

result = calculate(5, 6, mul);
console.log(result);
//In this code, the callback function is mul
//because it is passed as the third argument to the calculate function and then invoked within that function.
