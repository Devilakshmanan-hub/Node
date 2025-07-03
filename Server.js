const H = require('http');
const server = H.createServer((req,res)=>{
    res.writeHead(200, {'content-type':'text/plain'})
    res.end("Successfull");
})
server.listen(3000,'192.168.1.13');
console.log("server running at the port 3000");