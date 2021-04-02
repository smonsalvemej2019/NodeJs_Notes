//this is our index file that is referenced in the package.json file
//the name 'index' is just a default name given by npm

//we can run this or any js file by typing the command

//  node nameOfFile.js (.js is not necessary)

console.log('Hello from nodeJs!!!');

//most of the time we will be creating new modules(files) and importing functions 
//classes, etc

//take a look at the person.js file

//lets make an import

const person = require('./person')//require will bring any file or preinstalled module
//because we are dealing with a file we have to add './' (current dir) 

console.log('\nThe following is data from an import: ');
console.log('\nHello ' + person.name + ' your age is ' + person.age + '\nSay Hello from another file!');

const student = require('./student');

var student1 = new student('santiago',23,3.45);

student1.greeting();

//lets call our logger
const Logger = require('./logger');

const logger = new Logger();

logger.on('message', (data)=>{console.log('Called listener',data)});
logger.log('Hello World');
logger.log('It is Working!!');
