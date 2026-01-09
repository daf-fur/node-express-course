const http = require("http");

const server = http.createServer((req, res) => {
  // console.log(req.method); (default is GET)
  const url = req.url;

  // home page
  if (url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h1>home page </h1>");
    res.end(); // always needed to end communication
  }
  // about page
  else if (url === "/about") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h1>about page </h1>");
    res.end();
  }
  // error (404)
  else {
    res.writeHead(404, { "content-type": "text/html" });
    res.write("<h1>page not found</h1>");
    res.end();
  }
});

server.listen(5000);

// 4:20:04
