const fs = require("fs");
const path = require("path");
const fspromises = require("fs/promises");

//to delete a file use "unlink" below is an example of that.
const fileops = async () => {
  try {
    const data = await fspromises.readFile(
      path.join(__dirname, "files", "starter.txt"),
      "utf-8"
    );
    await fspromises.unlink(path.join(__dirname, "files", "starter.txt"));
    await fspromises.writeFile(
      path.join(__dirname, "files", "PromisedFile"),
      data
    );
    await fspromises.appendFile(
      path.join(__dirname, "files", "PromisedFile"),
      "\n\nHey there ! Append successfull !"
    );
    await fspromises.rename(
      path.join(__dirname, "files", "PromisedFile"),
      path.join(__dirname, "files", "Promisedkept")
    );
  } catch (err) {
    console.log(err);
  }
};

fileops();

// fs provies a function called readFile so that we can read a file
// fs.readFile(
//   path.join(__dirname, "files", "starter.txt"),
//   "utf8",
//   (err, data) => {
//     if (err) throw err;
//     console.log(data.toString());
//   }
// );
/**
 * "./files/starter.txt" instead of hardcoding the actual path name we can use path
 * then use join()
 */
//lets check the asynchronus nature of node.js
// console.log(
//   "This will console logged before  the file data is printed due to async nature"
// );

/**
 * similary we can use writeFile function if we want to write a file for example...
 * notice that input.txt will be created automatically ...
 * to update file , use appendFile function , this will update your data...
 */
// fs.writeFile(
//   path.join(__dirname, "files", "input.txt"),
//   "Hey there this is the fswrite example",
//   (err) => {
//     if (err) throw err;
//     console.log("write successful");
//   }
// );
// we can also use fs.appendfile to append anything in the end of the file , if the file doesnt exists it will create it
//it is good to add the apend file inside the write function.
// fs.appendFile(
//   path.join(__dirname, "files", "input.txt"),
//   "Hey there, this is the append example",
//   (err) => {
//     if (err) throw err;
//     console.log("append successful");
//   }
// );
//we can also rename a file using fs.rename, give the detail of target file and change it
// fs.rename(
//   path.join(__dirname, "files", "input.txt"),
//   path.join(__dirname, "files", "input1.txt"),
//   (err) => {
//     if (err) throw err;
//     console.log("Rename successfull");
//   }
// );

//exit on uncaught error
process.on("uncaughtException", (err) => {
  console.log(`There was an uncaughtException : ${err}`);
  process.exit(1);
});
