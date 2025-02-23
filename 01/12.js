//callback

function calculate(a, b, fnToCall) {
  fnToCall(a, b);
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

calculate(5, 6, mul);
