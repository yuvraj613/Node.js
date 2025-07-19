const fs = require("fs");

//you can also create directory using mkdir . here is an example
// if a file exits it will throw a runtime error !

// fs.mkdir("./new", (err) => {
//   if (err) throw err;
//   console.log("directory created");
// });

//you can also check if the file exits or not ? if exists leave, if not make one ! here is an example

// if (!fs.existsSync("./Created")) {
//   fs.mkdir("./Created", (err) => {
//     if (err) throw err;
//     console.log("directory created");
//   });
// }

// lets remove the directory "new " that we have created earlier
if (fs.existsSync("./new")) {
  fs.rmdir("./new", (err) => {
    if (err) throw err;
    console.log("directory removed");
  });
}
