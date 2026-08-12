const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

html = html.replace(
  ".h-b-icon { width: 32px; height: 32px; background: #E7F3EB; color: #198737; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }",
  ".h-b-icon { width: 16px; height: 16px; background: transparent; color: #198737; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }"
);
html = html.replace(
  ".h-b-icon svg { width: 18px; height: 18px; }",
  ".h-b-icon svg { width: 12px; height: 12px; }"
);

fs.writeFileSync('index.html', html);
