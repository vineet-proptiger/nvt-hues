const fs = require('fs');

let content = fs.readFileSync('components/Highlights.jsx', 'utf8');

// Fix Size Highlight
content = content.replace(/Spacious Units from 1,925 sq\.ft\./g, 'Spacious Units from 3,283 sq.ft.');
content = content.replace(/starting from 1,925 sq\.ft\./g, 'starting from 3,283 sq.ft.');

// Fix Possession Highlight
content = content.replace(/Possession by December 2028/g, 'Possession by December 2030');
content = content.replace(/expected handover scheduled for December 2028/g, 'expected handover scheduled for December 2030');

// One more check in case we need to update MasterPlan or Pricing (wait, we commented them out, but let's leave them commented out since the user specifically requested that).

fs.writeFileSync('components/Highlights.jsx', content, 'utf8');

