const fs = require('fs');
let content = fs.readFileSync('components/MasterPlan.jsx', 'utf8');

const targetLine = `<p className="text-[15px] text-gray-600"><span className="font-semibold text-gray-800">Size </span><br/><span className="text-[17px] font-bold text-[#3D5915] inline-block mt-1">{plan.details.superBuiltUp}</span></p>`;
const commentedLine = `{/* <p className="text-[15px] text-gray-600"><span className="font-semibold text-gray-800">Size </span><br/><span className="text-[17px] font-bold text-[#3D5915] inline-block mt-1">{plan.details.superBuiltUp}</span></p> */}`;

content = content.replace(targetLine, commentedLine);
fs.writeFileSync('components/MasterPlan.jsx', content, 'utf8');
