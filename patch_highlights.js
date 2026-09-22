const fs = require('fs');

let code = fs.readFileSync('components/main-domain/Highlights.jsx', 'utf8');

// Replace imports
code = code.replace(
  /import \{.*?\} from 'lucide-react'/,
  "import { Trees, Layers, MapPin, Sun, Flower2 } from 'lucide-react'"
);

// Replace highlightsData
const newHighlights = `const highlightsData = [
  {
    title: '40+ Curated Amenities',
    desc: 'Over 40 thoughtfully curated amenities, including gardens designed to help life thrive amongst the hues.',
    bg: 'bg-[#fdf2f8]',
    color: 'text-[#e11d48]',
    delay: '0s',
    floatDelay: '0s',
    icon: <Flower2 className="w-9 h-9 text-[#e11d48]" strokeWidth={2} />
  },
  {
    title: 'Premium 4 & 5 BHK Villas',
    desc: 'Discover elegantly crafted homes by NVT offering luxury, comfort, and premium finishes tailored for modern urban families.',
    bg: 'bg-[#eef5fc]',
    color: 'text-[#2563eb]',
    delay: '0.1s',
    floatDelay: '0.2s',
    icon: (
      <svg className="w-9 h-9 text-[#2563eb]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 10.5L12 3L21 10.5" />
        <path d="M5.5 8.5V20C5.5 20.55 5.95 21 6.5 21H17.5C18.05 21 18.5 20.55 18.5 20V8.5" />
        <path d="M10 21V15C10 14.45 10.45 14 11 14H13C13.55 14 14 14.45 14 15V21" />
      </svg>
    )
  },
  {
    title: 'Private Backyards',
    desc: 'Homes that flow effortlessly into private backyards.',
    bg: 'bg-[#eefcee]',
    color: 'text-[#16a34a]',
    delay: '0.2s',
    floatDelay: '0.4s',
    icon: <Trees className="w-9 h-9 text-[#16a34a]" strokeWidth={2} />
  },
  {
    title: 'Harmonious Architecture',
    desc: 'Architecture that harmoniously blends with the landscape and topography.',
    bg: 'bg-[#fdf8ee]',
    color: 'text-[#d97706]',
    delay: '0.3s',
    floatDelay: '0.6s',
    icon: <Layers className="w-9 h-9 text-[#d97706]" strokeWidth={2} />
  },
  {
    title: 'Excellent Connectivity',
    desc: 'Near upcoming metro corridors and the Bengaluru–Hosur Metro Link.',
    bg: 'bg-[#f5eefc]',
    color: 'text-[#9333ea]',
    delay: '0.4s',
    floatDelay: '0.8s',
    icon: <MapPin className="w-9 h-9 text-[#9333ea]" strokeWidth={2} />
  },
  {
    title: 'Natural Daylight',
    desc: 'Skylights that let in soft, natural daylight consistently.',
    bg: 'bg-[#f0fdfa]',
    color: 'text-[#0d9488]',
    delay: '0.5s',
    floatDelay: '1s',
    icon: <Sun className="w-9 h-9 text-[#0d9488]" strokeWidth={2} />
  }
]`;

code = code.replace(/const highlightsData = \[\s*\{[\s\S]*?\]\n/, newHighlights + '\n');

fs.writeFileSync('components/main-domain/Highlights.jsx', code);
console.log('Successfully updated Highlights.');
