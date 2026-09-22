const fs = require('fs');
let code = fs.readFileSync('components/main-domain/MasterPlan.jsx', 'utf8');

const oldOverlay = `<div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-all duration-300 flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 bg-[#0B3A3D] text-white px-5 py-2.5 rounded-full text-[13px] sm:text-[14px] font-semibold tracking-wider uppercase flex items-center gap-2 shadow-lg">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="11" cy="11" r="8"></circle>
                      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                      <line x1="11" y1="8" x2="11" y2="14"></line>
                      <line x1="8" y1="11" x2="14" y2="11"></line>
                    </svg>
                    View Master Plan
                  </span>
                </div>`;

const newOverlay = `<div className="absolute inset-0 flex items-center justify-center bg-white/20">
                  <span className="bg-[#0B3A3D] group-hover:bg-[#CD9E4B] text-white px-5 py-3 text-[14px] leading-snug font-semibold uppercase tracking-wider text-center transition-colors duration-300 shadow-lg">
                    Download<br/>Master Plan
                  </span>
                </div>`;

code = code.replace(oldOverlay, newOverlay);
fs.writeFileSync('components/main-domain/MasterPlan.jsx', code);
