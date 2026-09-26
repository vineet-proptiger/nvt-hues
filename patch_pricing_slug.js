const fs = require('fs');
let code = fs.readFileSync('components/Pricing.jsx', 'utf8');

// Update 5 BHK price
code = code.replace('price: "Ask For Price"', 'price: "₹ 6.5 Cr*"');
code = code.replace('priceSub: "Price on Request"', 'priceSub: "Starting At"');

// Add soldOut property to 4 BHK
code = code.replace('type: "4 BHK",', 'type: "4 BHK",\n    soldOut: true,');

// Modify JSX to show SOLD OUT badge
const badgeJsx = `{unit.soldOut && (
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-red-600/90 backdrop-blur-sm text-white text-[28px] md:text-[34px] font-black px-6 py-2 border-4 border-red-700/50 shadow-2xl z-30 tracking-widest uppercase transform -rotate-12 pointer-events-none w-max">
                  SOLD OUT
                </div>
              )}`;

// Insert badge into the unit card container (after {unit.isPopular && (...)} )
code = code.replace(/(\{unit\.isPopular && \([\s\S]*?\)\}\s*)/, '$1' + badgeJsx + '\n              ');

fs.writeFileSync('components/Pricing.jsx', code);
