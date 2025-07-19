const fs = require("fs");
const path = require("path");

const rs = fs.createReadStream("./files/lorem.txt", { encoding: "utf-8" });
const ws = fs.createWriteStream("./files/new-lorem.txt", { encoding: "utf-8" });

/**
 * so basically , when you fs operations , fs tries to load whole file data once(say goodbye to computer)
 * whereas , stream just like stream of water , try to read and write in chunks of data
 * like 10 GB at once becomes few kb per at a time.
 */

//this function below read the data from loream and write it onto the new-loream if new-lorem exits , it overwrite on it and if it doesnt then it create a new one

// rs.on("data", (DataChunk) => {
//   ws.write(DataChunk);
// });

rs.pipe(ws);
