const http = require("http");
const roundRobin = require("./roundRobin");
const serverSonfig = require("./serverConfig.json").servers;

const lbAlgo = "roundRobin";

let servers = serverSonfig.map((server) => ({
  ...server,
}));
const server = http.createServer((req, res) => {
  if (lbAlgo === "roundRobin") {
    roundRobin(servers, req, res);
  } else {
    res.writeHead(500);
    res.end(`LB alog is not supported`);
  }
});

server.listen(3000, () => {
  console.log("server started successfully port 3000");
});
