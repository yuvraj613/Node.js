console.log("testing !");

const { v4: uuid } = require("uuid"); //v4 tell the version of uuid..

console.log(uuid());
/**
 * npm i nodemon -g {we are going to install nodemon package globally , so that we
 * can access it directly from the cli}
 *
 * nodemon directly finds index.js so you dont specifically need to write nodemon index
 * but any others names must be mentioned.
 *
 * command - npm init;
 *
 * This command creates a package.json file which is very important file.
 * from this file , others get to know that which dependencies you are using,
 * what commands are necessary in order to run the application.
 *
 * node modules file has all the needed modules that you may need  or other frameworks may need
 *
 * you dont do anything to the package-lock.json file as node modules manages that file, so
 * basically  you only manupilate the package.json file...
 *
 * why npm file is so large ?....because it contains dependencies of dependencies
 *
 * to install anything in devDependencies use -D as suffix eg.. nodemon i -D
 *
 * to make cmds short...go to package.json and in script section-
 * write "start":"node index"...with this start will acts as node index cmd...write npm start
 */
