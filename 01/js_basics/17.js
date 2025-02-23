// terminal clock [HH: MM: SS]

// Helper function to add a leading zero if needed
function formatTime(num) {
  return num.toString().padStart(2, "0");
}

setInterval(() => {
  const now = new Date();
  const hours = formatTime(now.getHours());
  const minutes = formatTime(now.getMinutes());
  const seconds = formatTime(now.getSeconds());

  // Clear the terminal for a refreshing clock display
  console.clear();
  console.log(`${hours}:${minutes}:${seconds}`);
}, 1000);
