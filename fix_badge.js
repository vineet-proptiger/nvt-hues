const fs = require('fs');

function fixBadge(filePath) {
  let code = fs.readFileSync(filePath, 'utf8');

  const oldBadge = `{unit.soldOut && (
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-red-600/90 backdrop-blur-sm text-white text-[28px] md:text-[34px] font-black px-6 py-2 border-4 border-red-700/50 shadow-2xl z-30 tracking-widest uppercase transform -rotate-12 pointer-events-none w-max">
                  SOLD OUT
                </div>
              )}`;

  const newBadge = `{unit.soldOut && (
                <div className="absolute top-[175px] left-1/2 -translate-x-1/2 bg-[#dc2626] text-white text-[14px] md:text-[16px] font-black px-5 py-1.5 shadow-lg z-30 tracking-widest uppercase rounded-full pointer-events-none w-max border-2 border-white ring-2 ring-red-100">
                  SOLD OUT
                </div>
              )}`;

  code = code.replace(oldBadge, newBadge);
  fs.writeFileSync(filePath, code);
}

fixBadge('components/Pricing.jsx');
fixBadge('components/main-domain/Pricing.jsx');
