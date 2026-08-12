const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

html = html.replace(
  ".hero-benefits-col { display: flex; justify-content: center; gap: 12px; text-align: left; flex-wrap: wrap; }",
  ".hero-benefits-col { display: flex; justify-content: center; align-items: center; gap: 4px; text-align: center; flex-wrap: nowrap; width: 100%; }"
);

html = html.replace(
  ".h-benefit { display: flex; align-items: center; gap: 8px; background: #F9FAFB; padding: 8px 12px; border-radius: 99px; }",
  ".h-benefit { display: flex; align-items: center; gap: 4px; background: #F9FAFB; padding: 6px 8px; border-radius: 99px; flex: 1; justify-content: center; }"
);

const oldBenefits = `      + '  <div class="hero-benefits-col">'
      + '    <div class="h-benefit">'
      + '      <div class="h-b-icon" style="width:24px;height:24px;"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg></div>'
      + '      <div class="h-b-text" style="font-size:12px;"><strong>100% em casa</strong></div>'
      + '    </div>'
      + '    <div class="h-benefit">'
      + '      <div class="h-b-icon" style="width:24px;height:24px;"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg></div>'
      + '      <div class="h-b-text" style="font-size:12px;"><strong>No seu tempo</strong></div>'
      + '    </div>'
      + '    <div class="h-benefit">'
      + '      <div class="h-b-icon" style="width:24px;height:24px;"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg></div>'
      + '      <div class="h-b-text" style="font-size:12px;"><strong>Renda extra real</strong></div>'
      + '    </div>'
      + '  </div>'`;

const newBenefits = `      + '  <div class="hero-benefits-col">'
      + '    <div class="h-benefit">'
      + '      <div class="h-b-icon" style="width:20px;height:20px;"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg></div>'
      + '      <div class="h-b-text" style="font-size:10px; white-space:nowrap;"><strong>100% em casa</strong></div>'
      + '    </div>'
      + '    <div class="h-benefit">'
      + '      <div class="h-b-icon" style="width:20px;height:20px;"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg></div>'
      + '      <div class="h-b-text" style="font-size:10px; white-space:nowrap;"><strong>No seu tempo</strong></div>'
      + '    </div>'
      + '    <div class="h-benefit">'
      + '      <div class="h-b-icon" style="width:20px;height:20px;"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg></div>'
      + '      <div class="h-b-text" style="font-size:10px; white-space:nowrap;"><strong>Renda extra real</strong></div>'
      + '    </div>'
      + '  </div>'`;

html = html.replace(oldBenefits, newBenefits);

fs.writeFileSync('index.html', html);
