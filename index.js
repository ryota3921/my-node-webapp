const http = require("http");
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  res.end(
    "<h1>Azure App Service Demo</h1>" +
    "<p>GitHub Actions から自動デプロイしています。更新テスト 2026/7/10 ryota</p>"
  );
});

server.listen(port, () => {
  console.log("Server running on port " + port);
});
