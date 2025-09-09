const argsCount = process.argv.length - 2;

if (argsCount === 0) {
  console.log("No argument");
} else if (argsCount === 1) {
  console.log("Argument found");
} else {
  console.log("Arguments found");
}
// If no arguments are passed, it prints "No argument"
// If one argument is passed, it prints "Argument found"
// If two or more arguments are passed, it prints "Arguments found"