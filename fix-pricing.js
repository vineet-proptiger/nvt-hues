const fs = require('fs');
let content = fs.readFileSync('components/Pricing.jsx', 'utf8');

const brokenBlock = `{/* Size Pill */}
              {/* <div className="mb-6 px-4 py-1 rounded-full bg-[#f4f9ee] border border-[#d6e8c0] text-[11.5px] font-bold text-[#2d4212] tracking-wide shadow-xs">
                📐 Super Built-up: <span className="text-gray-900 font-extrabold">{unit.size}</span> */}
              </div>`;

const fixedBlock = `{/* Size Pill */}
              {/* <div className="mb-6 px-4 py-1 rounded-full bg-[#f4f9ee] border border-[#d6e8c0] text-[11.5px] font-bold text-[#2d4212] tracking-wide shadow-xs">
                📐 Super Built-up: <span className="text-gray-900 font-extrabold">{unit.size}</span>
              </div> */}`;

content = content.replace(brokenBlock, fixedBlock);
fs.writeFileSync('components/Pricing.jsx', content, 'utf8');
