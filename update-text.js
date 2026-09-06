const fs = require('fs');

let content = fs.readFileSync('components/Overview.jsx', 'utf8');

const targetTextRegex = /<span style={{ fontWeight: '700', color: '#FFFFFF' }}>VT – A Wonderful World Eterna<\/span> is set across an extraordinary expanse of land near a 300-acre lake\. This is where Earth, Water, Air, and Space find their rhythm again\. Each shaping a way of life that feels natural, balanced, and alive; reminding us that luxury isn't built, it's remembered\./;

const replacementText = `<span style={{ fontWeight: '700', color: '#FFFFFF' }}>VT A Wonderful World – Eterna</span> is an exclusive enclave of luxury 4/5 BHK villas, thoughtfully crafted for those who value space, privacy, and natural living. Set across 10.5 acres within a master-planned township, this low-density development is nestled beside a breathtaking 300-acre lake, offering a rare blend of serenity and connectivity. Each villa is designed to welcome abundant daylight, seamless indoor-outdoor flow, and refined comfort—making everyday living feel calm, balanced, and truly elevated. This is where Earth, Water, Air, and Space find their rhythm again, shaping a way of life that feels natural and alive; reminding us that luxury isn't built, it's remembered.`;

content = content.replace(targetTextRegex, replacementText);

fs.writeFileSync('components/Overview.jsx', content, 'utf8');

