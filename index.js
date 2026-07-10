const http = require("http");
const port = process.env.PORT || 3000;

// ▼▼▼ この2つの値を変えるだけで見た目が大きく変わります ▼▼▼
const VERSION = "1.0";
const COLOR = "#0078d4"; // 青
// ▲▲▲ 変更テストのときは ここを "2.0" / 別の色 に変える ▲▲▲

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  res.end(`<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <title>Azure App Service Demo</title>
</head>
<body style="font-family:sans-serif; text-align:center; margin-top:80px; background:#f5f5f5;">
  <h1 style="color:${COLOR};">Azure App Service Demo</h1>
  <p>GitHub Actions から自動デプロイしています。（中村）</p>
  <div style="display:inline-block; margin-top:20px; padding:16px 40px; border-radius:10px; background:${COLOR}; color:#ffffff; font-size:32px; font-weight:bold;">
    Version ${VERSION}
  </div>
  <p style="color:#888; margin-top:24px;">最終更新日: 2026/7/10</p>
</body>
</html>`);
});

server.listen(port, () => {
  console.log("Server running on port " + port);
});
