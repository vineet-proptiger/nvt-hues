const fs = require('fs');

let content = fs.readFileSync('components/Location.jsx', 'utf8');

const newLandmarks = `const locationLandmarks = [
  { name: 'Varthur & Sarjapur Road', dist: '5-10 mins' },
  { name: 'Greenwood High / Inventure', dist: '10 mins' },
  { name: 'Carmelaram Railway Station', dist: '15 mins' },
  { name: 'Wipro SEZ (Sarjapur)', dist: '15-20 mins' },
  { name: 'Outer Ring Road (Bellandur)', dist: '20 mins' },
  { name: 'ITPL / Whitefield', dist: '20-25 mins' },
  { name: 'Nexus Whitefield Mall', dist: '25 mins' },
  { name: 'Manipal Hospital (Whitefield)', dist: '25-30 mins' },
]`;

// Replace old array
content = content.replace(/const locationLandmarks = \[[\s\S]*?\]/, newLandmarks);

// Update origin text to specifically say "NVT Whispering Hues"
content = content.replace(/📍 Origin: Villas/, '📍 Origin: NVT Whispering Hues');

// Change "Bangalore South" to "Bangalore East"
content = content.replace(/Bangalore South/g, 'Bangalore East');

// If there's any reference to "Prime Gunjur Corridor" make sure it's accurate. 
// Already did that substitution globally, but just making sure it reads correctly.

fs.writeFileSync('components/Location.jsx', content, 'utf8');
