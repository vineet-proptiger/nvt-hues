const fs = require('fs');
let content = fs.readFileSync('components/Pricing.jsx', 'utf8');

// The file currently might be broken from the sed command. Let's read it to see.
