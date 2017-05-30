const port = process.env.port || 7090;
require("http").createServer((req, res)=>{
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("hello world");
}).listen(port, function(){
    console.log(`listening on ${this.address().host} and port ${this.address().port}`);
})