//demo of the file system core module

const fs = require('fs');
const path = require('path');
const { error } = require('console');

//we can create a directory trough nodeJs!
//we are passing the join will add /test to /.. making it a full path argument
//a blank options object {}
//and our callback function

/* Uncomment then run one method at the time (in order)
fs.mkdir(path.join(__dirname, '/test'), {}, error => {
    //we use the arrow function to create an anonymous function
    if (error) throw error;//we will throw an error if error is detected
    console.log('New folder created!');//if not, we will log this message
})

*/

//We can also create and write on files by using the file system module!
//the first parameter is the file path to the new file and its name
//the second parameter is the message being written into the file
//the third is the callback function that will throw an error

/*Uncomment then run one method at the time (in order)

fs.writeFile(path.join(__dirname, '/test', 'hello.txt'),
    'Hello from a file created with fs node!',
    error => {
        if (error) throw error;
        console.log('File written!');
        //If we run the write method twice with a different messages,  
        //the second function will overwrite the first
        //We can use fs.append to add to the message!!!
        //Because these methods are asynchronous, (not waiting for other instructions 
        //to finish)  we will put one inside the other
        fs.appendFile(path.join(__dirname, '/test', 'hello.txt'),
        ' this text is appended with append file!',
        error => {
        if (error) throw error;
        console.log('File written!');
        })

    })

*/

/*Uncomment then run one method at the time (in order)
//We can also read from a file!
//we pass the path to the file
//the encoding
//and we pass the data to the callback function so it can be printed
fs.readFile(path.join(__dirname,'/test','hello.txt'),'utf8',(error,data) => {
if(error) throw error;
console.log(data);
});
*/

/*Uncomment then run one method at the time (in order)
//We can rename files as well
fs.rename(
path.join(__dirname,'/test','hello.txt'),
path.join(__dirname,'/test','differentName.txt'),
error => {
    if(error) throw error;
    console.log('File renamed')
})
*/

//for more, check documentation