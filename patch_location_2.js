const fs = require('fs');

let code = fs.readFileSync('components/main-domain/Location.jsx', 'utf8');

const oldLandmarks = `const locationLandmarks = [
  { name: 'Greenwood High School, Sarjapur', dist: '5 mins' },
  { name: 'Indus International School', dist: '7 mins' },
  { name: 'Inventure Academy', dist: '8 mins' },
  { name: 'Oakridge International School', dist: 'Nearby' },
  { name: 'The International School Of Bangalore (TISB)', dist: '34 mins' },
  { name: 'Delhi Public School', dist: '14 mins' },
  { name: 'ISME', dist: '11 mins' },
]`;

const newLandmarks = `const locationLandmarks = [
  { name: 'Carmelaram Railway Station', dist: '5 mins' },
  { name: 'Greenwood High School, Sarjapur', dist: '5 mins' },
  { name: 'Indus International School', dist: '7 mins' },
  { name: 'Inventure Academy', dist: '8 mins' },
  { name: 'Wipro SEZ', dist: '10 mins' },
  { name: 'Electronic City', dist: '13 mins' },
  { name: 'Decathlon Sarjapur', dist: '13 mins' },
  { name: 'Oakridge International School', dist: 'Nearby' },
  { name: 'Forum Value Mall, Whitefield', dist: '25 mins' },
]`;

code = code.replace(oldLandmarks, newLandmarks);
fs.writeFileSync('components/main-domain/Location.jsx', code);
console.log('Successfully updated Location landmarks again.');
