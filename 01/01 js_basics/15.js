// counter from 30 - 0

let counter = 30;
setInterval(function () {
  console.log(counter);
  counter--;
  if (counter < 0) {
    clearInterval();
  }
}, 1000);
