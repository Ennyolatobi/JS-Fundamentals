const arg = process.argv[2]; // get the first argument
const count = parseInt(arg); // convert it to an integer

if (isNaN(count) || count <= 0) {
  console.log("Missing number of occurrences");
} else {
  for (let i = 0; i < count; i++) {
    console.log("C is fun");
  }
}
