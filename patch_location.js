const fs = require('fs');

let code = fs.readFileSync('components/main-domain/Location.jsx', 'utf8');

const oldLandmarks = `const locationLandmarks = [
  { name: 'Varthur & Sarjapur Road', dist: '5-10 mins' },
  { name: 'Greenwood High / Inventure', dist: '10 mins' },
  { name: 'Carmelaram Railway Station', dist: '15 mins' },
  { name: 'Wipro SEZ (Sarjapur)', dist: '15-20 mins' },
  { name: 'Outer Ring Road (Bellandur)', dist: '20 mins' },
  { name: 'ITPL / Whitefield', dist: '20-25 mins' },
  { name: 'Nexus Whitefield Mall', dist: '25 mins' },
  { name: 'Manipal Hospital (Whitefield)', dist: '25-30 mins' },
]`;

const newLandmarks = `const locationLandmarks = [
  { name: 'Greenwood High School, Sarjapur', dist: '5 mins' },
  { name: 'Indus International School', dist: '7 mins' },
  { name: 'Inventure Academy', dist: '8 mins' },
  { name: 'Oakridge International School', dist: 'Nearby' },
  { name: 'The International School Of Bangalore (TISB)', dist: '34 mins' },
  { name: 'Delhi Public School', dist: '14 mins' },
  { name: 'ISME', dist: '11 mins' },
]`;

code = code.replace(oldLandmarks, newLandmarks);
fs.writeFileSync('components/main-domain/Location.jsx', code);
console.log('Successfully updated Location landmarks.');
