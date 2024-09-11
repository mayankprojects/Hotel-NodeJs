var os = require("os");
var fs = require("fs");

let user = os.userInfo();
console.log(user);


fs.appendFile("greeting.txt", "Hi " + user.username + "!\n", () => {
  console.log("file is created");
});


