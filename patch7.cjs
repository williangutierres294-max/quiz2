const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

html = html.replace(
  "body.is-landing .card {",
  "body.is-landing .topbar { display: none; }\nbody.is-landing .card {"
);

fs.writeFileSync('index.html', html);
