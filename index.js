const http = require("http");

const PORT = 3000;

http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Docker + GitHub Actions is working 🚀\n");
}).listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
