const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const oldTitle = `      + '<h1 class="landing-title">'
      + '  R$100 a R$150<br>'
      + '  por dia, só fazendo<br>'
      + '  <span class="highlight">tarefas de casa.'`;

const newTitle = `      + '<h1 class="landing-title">'
      + '  R$100 a R$150 por dia,<br>'
      + '  só fazendo '
      + '  <span class="highlight">tarefas de casa.'`;

html = html.replace(oldTitle, newTitle);
fs.writeFileSync('index.html', html);
