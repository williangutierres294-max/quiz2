const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

html = html.replace(
  '.q-title-col { flex: 1; }',
  '.q-title-col { flex: 1; text-align: center; }'
);
html = html.replace(
  '.q-title-col h2 { font-size: 24px; font-weight: 800; color: #111827; margin-bottom: 8px; line-height: 1.2; }',
  '.q-title-col h2 { font-size: 24px; font-weight: 800; color: #111827; margin-bottom: 8px; line-height: 1.2; text-align: center; }'
);
html = html.replace(
  '.q-title-col .qsub { font-size: 15px; color: #4B5563; line-height: 1.4; margin: 0; }',
  '.q-title-col .qsub { font-size: 15px; color: #4B5563; line-height: 1.4; margin: 0; text-align: center; }'
);

// Also options, user might want everything centered
// But wait, the options have ".option" with "text-align: left;"
html = html.replace(
  '.option { display:flex; align-items:center; gap:16px; width:100%; text-align:left; padding:16px;',
  '.option { display:flex; align-items:center; justify-content:center; gap:16px; width:100%; text-align:center; padding:16px; flex-direction:column;'
);
// Make opt-texts center aligned too if they are column
html = html.replace(
  '.opt-texts { display:flex; flex-direction:column; gap:2px; flex:1; }',
  '.opt-texts { display:flex; flex-direction:column; gap:2px; flex:1; align-items: center; text-align: center; }'
);

// wait, the radio and icon inside options would look weird if flex-direction is column?
// Let's just make text-align: center on everything and see.
fs.writeFileSync('index.html', html);
