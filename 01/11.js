// callbacks

function sum(a, b, fnToCall) {
  let result = a + b;
  fnToCall(result);
}

function pretty(s) {
  console.log("the sum is :", s);
}

function prettyPassive(s) {
  console.log("the sum in passive format is ", s);
}

sum(2, 3, prettyPassive);
