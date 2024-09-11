function greet(name) {
  return `Hello, ${name}!`;
}
const pi = 3.14159;

const add = (a, b) => a + b;

// exported as object
module.exports = {
    greet, pi, add
}