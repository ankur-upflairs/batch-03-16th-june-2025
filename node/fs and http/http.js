//request => 
//ip / port =>  3000 

//create server =>  reqListener function => response

const http = require('node:http')

let server = http.createServer((req,res)=>{
    // console.log(req.url,req.method)
    if(req.url == '/'){
        res.end('hello ')
    }
})

server.listen(3000 ,'127.0.0.1',()=>{
    console.log('server is running on port 3000 ')
})




