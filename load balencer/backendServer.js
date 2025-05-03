const http = require("http");
const serverConfig = require("./serverConfig.json").servers;

//fn to create servers
function createServers(host, port) {
  http
    .createServer((req, res) => {
      res.writeHead(200);
      res.end(`server response from port: ${port}`);
    })
    .listen(port, host, () => {
      console.log(`server started successfully at http://${host}:${port}`);
    });
}

//start multiple server
serverConfig.forEach((server) => {
  createServers(server.host, server.port);
});
