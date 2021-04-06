//most of the time we will be creating new modules(files) and importing functions 
//classes, etc

//take a look at the person.js file

//lets make an import

const person = require('./person')//require will bring any file or preinstalled module
//because we are dealing with a file we have to add './' (current dir) 

console.log('\nThe following is data from an import(person.js): ');
console.log('\nHello ' + person.name + ' your age is ' + person.age + '\nSay Hello from another file!');

//example of an imported class
const student = require('./student');
console.log('\nThe following is data from an import(student.js): ');
var student1 = new student('santiago',23,3.45);

student1.greeting();
