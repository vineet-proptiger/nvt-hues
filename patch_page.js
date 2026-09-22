const fs = require('fs');
let code = fs.readFileSync('app/page.js', 'utf8');

const toRemove = `  openGraph: {
    url: 'https://nvtwhisperinghuesvilla.co.in/',
  },
}`;
code = code.replace(toRemove, '');
fs.writeFileSync('app/page.js', code.trim() + '\n');
