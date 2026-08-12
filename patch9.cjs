const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

html = html.replace(
  "      + '  R$100 a R$150<br>'      + '  por dia, só fazendo<br>'",
  "      + '  R$100 a R$150 por dia,<br>'      + '  só fazendo '"
);

html = html.replace(
  "      + '  Descubra se você tem o perfil ideal<br>pra começar a ganhar essa <strong>renda extra</strong><br>com o que você já faz em casa.'",
  "      + '  Descubra se você tem o perfil ideal<br>pra começar a Receber os Pagamentos.'"
);

fs.writeFileSync('index.html', html);
