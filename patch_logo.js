const fs = require('fs');
let content = fs.readFileSync('components/Navbar.jsx', 'utf8');

// Update standard mobile logo size (up to 991px)
content = content.replace(/height: 44px !important;/g, 'height: 48px !important;');
content = content.replace(/min-height: 44px !important;/g, 'min-height: 48px !important;');
content = content.replace(/max-width: 220px !important;/g, 'max-width: 240px !important;');

// Update small mobile logo size (up to 640px)
content = content.replace(/height: 36px !important;/g, 'height: 42px !important;');
content = content.replace(/min-height: 36px !important;/g, 'min-height: 42px !important;');
content = content.replace(/max-width: 180px !important;/g, 'max-width: 210px !important;');

// Update very small mobile logo size (up to 380px)
content = content.replace(/height: 32px !important;/g, 'height: 38px !important;');
content = content.replace(/min-height: 32px !important;/g, 'min-height: 38px !important;');
content = content.replace(/max-width: 155px !important;/g, 'max-width: 190px !important;');

fs.writeFileSync('components/Navbar.jsx', content, 'utf8');
console.log('Successfully increased logo sizes in Navbar.');
