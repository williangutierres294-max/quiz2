const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// Move everything up
html = html.replace(
  "body.is-landing .card { padding: 32px 16px 24px; background: transparent; box-shadow: none; }",
  "body.is-landing { padding-top: 12px; }\nbody.is-landing .card { padding: 12px 16px 24px; background: transparent; box-shadow: none; }"
);

// Reduce spacing between elements to fit better on mobile
html = html.replace(".landing-badge {", ".landing-badge {\n    margin-bottom: 16px;"); // it had margin-bottom: 24px originally, wait, I can just replace it.
html = html.replace("margin-bottom: 24px;", "margin-bottom: 16px;"); // will replace first occurrence, which might be landing-badge. Let's do it cleaner.

html = html.replace("margin-bottom: 24px; }", "margin-bottom: 16px; }");
html = html.replace("margin-bottom: 24px; }", "margin-bottom: 16px; }");
html = html.replace("margin-bottom: 24px; line-height: 1.4; }", "margin-bottom: 16px; line-height: 1.4; }");
html = html.replace("margin-bottom: 24px; }", "margin-bottom: 16px; }");
html = html.replace("margin-bottom: 24px; transition: transform 0.2s; }", "margin-bottom: 16px; transition: transform 0.2s; }");

// Reduce h-benefit size further
html = html.replace(
  ".h-b-text strong { font-size: 13px; color: #112318; display: block; }",
  ".h-b-text strong { font-size: 10px; color: #112318; display: block; white-space: nowrap; }"
);

html = html.replace(
  ".h-benefit { display: flex; align-items: center; gap: 4px; background: #F9FAFB; padding: 6px 8px; border-radius: 99px; flex: 1; justify-content: center; }",
  ".h-benefit { display: flex; align-items: center; gap: 4px; background: #F9FAFB; padding: 4px 6px; border-radius: 99px; flex: 1; justify-content: center; }"
);

fs.writeFileSync('index.html', html);
