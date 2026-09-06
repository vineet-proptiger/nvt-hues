const fs = require('fs');

let content = fs.readFileSync('lib/images.js', 'utf8');

const replacement = `// ── Gallery ───────────────────────────────────────────────────
export const galleryImages = [
  { 
    src: '/images/gallery/g1.webp', 
    alt: 'NVT Whispering Hues - Premium Villa Exterior', 
    title: 'Premium Villa Exterior', 
    label: 'Premium Villa Exterior', 
    desc: 'Stunning view of the premium villa exterior featuring a beautiful foreground fountain.' 
  },
  { 
    src: '/images/gallery/g2.webp', 
    alt: 'NVT Whispering Hues - Grand Entrance', 
    title: 'Grand Entrance', 
    label: 'Grand Entrance', 
    desc: 'A majestic project entrance setting the tone for an exclusive and wonderful lifestyle.' 
  },
  { 
    src: '/images/gallery/g3.webp', 
    alt: 'NVT Whispering Hues - Luxurious Villa Blocks', 
    title: 'Luxurious Villa Blocks', 
    label: 'Luxurious Villa Blocks', 
    desc: 'Beautifully designed grand villa blocks with landscaped surroundings and an elegant water feature.' 
  },
  { 
    src: '/images/gallery/g4.webp', 
    alt: 'NVT Whispering Hues - Modern Living Area', 
    title: 'Modern Living Area', 
    label: 'Modern Living Area', 
    desc: 'Elegant interior design featuring a seamless living and dining space with premium finishes.' 
  },
  { 
    src: '/images/gallery/g5.webp', 
    alt: 'NVT Whispering Hues - Dining and Living Space', 
    title: 'Dining and Living Space', 
    label: 'Dining and Living Space', 
    desc: 'Luxurious open-plan dining and living area opening up to a balcony with scenic views.' 
  },
  { 
    src: '/images/gallery/g6.webp', 
    alt: 'NVT Whispering Hues - Luxurious Master Bedroom', 
    title: 'Luxurious Master Bedroom', 
    label: 'Luxurious Master Bedroom', 
    desc: 'Elegantly designed master bedroom interior featuring plush decor, modern aesthetics, and ample natural light.' 
  }
]`;

// We will replace the entire galleryImages block
content = content.replace(/\/\/ ── Gallery ───────────────────────────────────────────────────[\s\S]*?\/\/ ── Amenities ─────────────────────────────────────────────────/, replacement + '\n\n// ── Amenities ─────────────────────────────────────────────────');

fs.writeFileSync('lib/images.js', content, 'utf8');
