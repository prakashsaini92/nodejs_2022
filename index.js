const http = require("http");

http.createServer((req,res) => {
  res.write("<h1>hello this is prakash saini</h2>");
  res.end()
}).listen(4500)