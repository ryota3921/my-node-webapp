<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <title>Azure Static Web Apps Demo</title>
  <style>
    :root {
      --main-color: #0078d4;   /* ★色をここで変える（今は青）★ */
    }
    body {
      font-family: sans-serif;
      text-align: center;
      margin-top: 80px;
      background-color: #f5f5f5;
    }
    h1 { color: var(--main-color); }
    .version {
      display: inline-block;
      margin-top: 20px;
      padding: 16px 40px;
      border-radius: 10px;
      background: var(--main-color);
      color: #ffffff;
      font-size: 32px;
      font-weight: bold;
    }
    .date { color: #888; margin-top: 24px; }
  </style>
</head>
<body>
  <h1>Azure Static Web Apps Demo</h1>
  <p>GitHub Actions からデプロイしています。（佐久間）</p>
  <div class="version">Version 1.0</div>   <!-- ★バージョン番号をここで変える★ -->
  <p class="date">最終更新日: 2026/7/10</p>
</body>
</html>
