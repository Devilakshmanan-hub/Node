// Pipe() used to Readable and writable streams

var N = require ('fs');
var ReadStream = N.createReadStream(__dirname+'/MyFolder/document.txt','utf8');
var writeStream  = N.createWriteStream(__dirname+'/pipe.txt');
// ReadStream.on('data',function(chunk){
//     console.log("New chunk Received");
//     writeStream.write(chunk);
// });
ReadStream.pipe(writeStream);

// Pipe() in server creation
var D = require('fs');
const http = require('http');
const server = http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'text/html'});
var readstream = D.createReadStream(__dirname + '/Example.html','utf8');
readstream.pipe(res);
})
server.listen(3000,'192.168.1.55');
console.log("Server running at port 3000");

// Pipe() Json file in server creation
var R = require('fs');
const H = require('http');
const S = H.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'application/json'});
var jsonfile = {
         Name : "Sri Devi", Age : 30, Course : "BE-CSE", Place : "Chennai"}
    res.end(JSON.stringify(jsonfile))
})
S.listen(3001, '127.0.0.1');
console.log("Server running at port 3001");

//Serve Html and Json in the same server

const fs = require('fs');
const Hp = require('http');
const serve = Hp.createServer((req,res)=>{
    if(req.url==='/' || req.url==='/html'){
        res.writeHead(200,{'content-type':'text/html'});
        const reads = fs.createReadStream(__dirname+'/Example.html','utf8');
        reads.pipe(res);
    }
    else if(req.url=== '/json'){
        res.writeHead(200,{'content-type':'application/json'});
        const Json ={ Name:"Mohana", age:38, course:"BCOM", Place :"Chennai"};
        res.end(JSON.stringify(Json));
      }
      else{
        res.writeHead(404,{'content-type':'text/Italic'});
        res.end('File Not Found');
      }
});
serve.listen(3002,'127.0.1.1');
console.log("Server running at port 3002");