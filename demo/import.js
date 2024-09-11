const take = require("./export"); // import as object
const {pi, add} = require("./export"); // import certain things as object using destruing
var _ = require('lodash');

console.log(pi);
console.log(take.greet());
console.log(take.pi);

let arr = [1, 1, 2, 2, 1, 3, 4, 2];
let arrUni = _.uniq(arr);
console.log(arrUni);