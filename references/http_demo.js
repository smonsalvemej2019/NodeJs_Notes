//demo for the http core module
const http = require('http');

//nodejs allows us to create our own server with js!
http.createServer((req,res)=>{//the create server method takes a request and response value
    res.write('Hello World!');//we will output hello world
    res.end();//we have to end the response, the browser will not connect otherwise
}).listen(5000, () => console.log('server running...'));//it will listen for port 5000