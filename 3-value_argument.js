const arg = process.argv[2];  // first user argument

if (arg === undefined) {
  console.log("No argument");
} else {
  console.log(arg);
}
// If no argument is passed, it prints "No argument"
// If an argument is passed, it prints arg