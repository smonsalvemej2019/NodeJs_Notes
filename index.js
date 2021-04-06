//this is our index file that is referenced in the package.json file
//the name 'index' is just a default name given by npm

//we can run this or any js file by typing the command

//  node nameOfFile.js (.js is not necessary)

console.log('Hello from nodeJs!!!');

//lets create our own usable server!!
//lets apply what we have learned so far
const http = require('http');
const path = require('path');
const fs = require('fs');
const { RSA_NO_PADDING, RSA_PSS_SALTLEN_DIGEST } = require('constants');

const server = http.createServer((req,res)=>{
    console.log(req.url);
    /*if(req.url === '/')
    {//req will be able to see the url
        fs.readFile(path.join(__dirname, 'public', 'index.html'), (error,content) =>{
            
            if (error) throw error;
            res.setHeader('Content-Type', 'text/html');//we can set a header for the html file
            res.end(content);//when the request end it will load this html

        });
    }
    if(req.url === '/about'){//req will be able to see the url
        fs.readFile(path.join(__dirname, 'public', 'about.html'), (error,content) =>{
            
            if (error) throw error;
            res.setHeader('Content-Type', 'text/html');//we can set a header for the html file
            res.end(content);//when the request end it will load this html

        });
    }
    if(req.url === '/api/users')
    {
        const user = 
        [
            {name:'Santiago',age: 23},
            {name:'Matthew',age:21}
        ]
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(user));
    }*/

    //Lets build our filepath
    let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url);

    //extension of file
    let extname = path.extname(filePath);

    //default content type
    let contentType = 'text/html';

    //check content type
    switch(extname){
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.jpg':
            contentType = 'image/jpg';
            break;
    }
    
    //read file

    fs.readFile(filePath, (error,content)=>{

        if(error)
        {
            if(error.code = 'ENOENT')
            {
                //page not found
                fs.readFile(path.join(__dirname,'public','404.html'),(error,content)=>
                {
                    res.writeHead(404,{'Content-Type':'text/html'});
                    res.end(content, 'utf-8');
                });
            }else
            {
                //server error
                res.writeHead(500);
                res.end(`Server Error: ${error.code}`);
            }
        }else{
            //success
            res.writeHead(200,{'Content-Type':contentType});
            res.end(content, 'utf-8')
        }
    })

})
//process.env.port will be the port other environments are using
const PORT = process.env.PORT || 5000;

//like our example before, our server has to listen to a port
server.listen(PORT, () => console.log(`Server running on port ${PORT}...`));