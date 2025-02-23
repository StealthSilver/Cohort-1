// calculate the time it takes between a setTiemout call and the inner function actually running

var startTime = Date.now(); // Record the start time

setTimeout(function () {
  var endTime = Date.now(); // Record the time when the callback runs
  console.log("Time taken:", endTime - startTime, "ms");
}, 2000);

// the function(callback) executes afeter 2 seconds
