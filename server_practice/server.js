console.log("Creating a server");



let http = require("node:http");
let server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Server Created and running on live\nAnd is updating");

    // res.writeHead(200, {"content-type":"text/html"});
    // res.end("<h1>Server Created</h1>");

    // res.writeHead(200,{"content-type":"application/json"});
    // res.end(JSON.stringify({message: "Server Created", ok:true}));
});

server.listen(3030, () => {
    console.log("Server running at http://localhost:3030");
});