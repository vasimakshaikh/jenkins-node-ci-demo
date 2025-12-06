const { add } = require("./app");

function assertEqual(actual, expected, message) {
  if (actual !== expected) {
    console.error(`❌ ${message} | expected=${expected}, actual=${actual}`);
    process.exit(1);
  }
  console.log(`✅ ${message}`);
}

assertEqual(add(2, 3), 5, "2 + 3 should equal 5");
console.log("All tests passed!");
