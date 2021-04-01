//Demo on the url core node
const url = require('url');

const myUrl = new URL('http://mywebsite.com:8000/hello.html?id=100&status=active');
//urls are object types

//Serialized URL (the complete URL)
console.log('\nSerialized URL:',myUrl.href);

//host
console.log('\nHost and port:',myUrl.host);//if we use .hostname, it will not display the port

//pathname
console.log('\nPath name:',myUrl.pathname);

//serialized query and parameters
console.log('\nSerialized Query:',myUrl.search);
console.log(myUrl.searchParams);

//add parameters 
console.log('\nNew value added to params')
myUrl.searchParams.append('key','value');//adds new key pairs to the params
console.log(myUrl.searchParams);

//Loop trough params
myUrl.searchParams.forEach((name,val) => console.log(name,val))

//for more details please see documentation
