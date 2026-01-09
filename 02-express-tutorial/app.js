const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "content-type": "text/html" });
  res.write("<h1>home page </h1>");
  res.end(); // always needed to end communication
});

server.listen(5000);

// 4:20:04
