const fs = require('fs');
let content = fs.readFileSync('components/Overview.jsx', 'utf8');

const targetTextRegex = /<span style={{ fontWeight: '700', color: '#FFFFFF' }}>.*?landscaped surroundings\./s;
const replacementText = `<span style={{ fontWeight: '700', color: '#FFFFFF' }}>VT – A Wonderful World Eterna</span> is set across an extraordinary expanse of land near a 300-acre lake. This is where Earth, Water, Air, and Space find their rhythm again. Each shaping a way of life that feels natural, balanced, and alive; reminding us that luxury isn't built, it's remembered.`;

content = content.replace(targetTextRegex, replacementText);

const box1Regex = /<span style={{ fontFamily: "var\(--font-jost\), Montserrat, sans-serif" }} className="text-\[20px\] sm:text-\[23px\] font-bold text-\[#3D5916\] leading-tight">70 Acres<\/span>\s*<span style={{ fontFamily: "var\(--font-sans\), Open Sans, sans-serif" }} className="text-\[13px\] sm:text-\[14px\] text-gray-500 font-medium leading-normal mt-0\.5">Land Parcel<\/span>/;
const box1Replacement = `<span style={{ fontFamily: "var(--font-jost), Montserrat, sans-serif" }} className="text-[20px] sm:text-[23px] font-bold text-[#3D5916] leading-tight uppercase">10.52 Acres</span>\n                  <span style={{ fontFamily: "var(--font-sans), Open Sans, sans-serif" }} className="text-[13px] sm:text-[14px] text-gray-500 font-bold leading-normal mt-0.5 uppercase tracking-wide">PROJECT AREA</span>`;

content = content.replace(box1Regex, box1Replacement);

const box2Regex = /<span style={{ fontFamily: "var\(--font-jost\), Montserrat, sans-serif" }} className="text-\[20px\] sm:text-\[23px\] font-bold text-\[#3D5916\] leading-tight">296<\/span>\s*<span style={{ fontFamily: "var\(--font-sans\), Open Sans, sans-serif" }} className="text-\[13px\] sm:text-\[14px\] text-gray-500 font-medium leading-normal mt-0\.5">Total Villas<\/span>/;
const box2Replacement = `<span style={{ fontFamily: "var(--font-jost), Montserrat, sans-serif" }} className="text-[20px] sm:text-[23px] font-bold text-[#3D5916] leading-tight uppercase">123 Villas</span>\n                  <span style={{ fontFamily: "var(--font-sans), Open Sans, sans-serif" }} className="text-[13px] sm:text-[14px] text-gray-500 font-bold leading-normal mt-0.5 uppercase tracking-wide">NO: OF UNITS</span>`;

content = content.replace(box2Regex, box2Replacement);

const box3Index = content.indexOf('{/* Box 3: Open Space */}');
const afterBox4Index = content.indexOf('</div>\n          </div>\n        </div>\n\n        {/* Right Side');

if (box3Index !== -1 && afterBox4Index !== -1) {
  content = content.substring(0, box3Index) + content.substring(afterBox4Index);
}

fs.writeFileSync('components/Overview.jsx', content, 'utf8');
