const http = require("http");

http.createServer((req,res) => {
  res.write("<h1>hello this is text Updated </h2>");
  res.end()
}).listen(4500)