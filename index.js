console.log("Docker image built and pushed via GitHub Actions 🚀");

require("http").createServer((req, res) => {
  res.end("DockerHub deployment successful\n");
}).listen(3000);
