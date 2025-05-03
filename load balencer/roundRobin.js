const httpProxy = require("http-proxy");

const proxy = httpProxy.createProxyServer({});

let current = 0;
let i = 0;
const roundRobin = (servers, req, res) => {
  const target = servers[current];
  console.log("current server", i, ":", target);
  i++;
  proxy.on("error", (err, req, res) => {
    console.error("Error in proxy:", err);
    res.writeHead(500, { "Content-Type": "text/plain" });
    res.end("Proxy Error");
  });
  current = (current + 1) % servers.length;
  proxy.web(req, res, {
    target: `http://${target.host}:${target.port}`,
  });
};

module.exports = roundRobin;
