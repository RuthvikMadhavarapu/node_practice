console.log("Creating 2nd server");

let http = require("node:http");

let server = http.createServer((req, res) => {
    res.writeHead(200, { "content-type": "text/html" });
    let heading = "<h1>2nd Server Created</h1>";
    res.end(heading);
});

server.listen(3000, () => {
    console.log("Servre running on port 3000");
})