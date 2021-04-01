//this file will demo the path core module

const path = require('path');//because we are dealing with a core module, we don't need './'

//base name 
//logging the __file name will give us a full path to the file
//using the .basename method will return only the current file name
console.log('\nhello from',path.basename(__filename)+'!');

//we can also get the directory names
console.log('our working directory is',path.dirname(__filename));
//__dirname will also give us the path

//file extension(.js,.cpp,.thml, etc)
console.log('we are working with a',path.extname(__filename),'file');

//we can also create a full object using the pase method
console.log(path.parse(__filename));
//because it is an object we can access any part of the object

//concatenate
//say we want to create ../test/hello.html (../ current dir) 
console.log(path.join(__dirname, 'test', 'hello.html'))
//join helps when dealing with different delimiters 
//( '/' on mac/linux, '\' on win)
