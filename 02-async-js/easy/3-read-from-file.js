const fs = require("fs");

// Read the contents of a file asynchronously
fs.readFile("example.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }

  console.log("File contents:", data);

  // Perform an expensive operation
  expensiveOperation();
});

// Define an expensive operation
function expensiveOperation() {
  // Simulate an expensive operation by executing a loop
  let result = 0;
  for (let i = 0; i < 1000000000; i++) {
    result += i;
  }

  console.log("Expensive operation result:", result);
}
