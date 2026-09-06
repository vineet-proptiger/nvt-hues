'use client'
import { MapPin, Navigation } from 'lucide-react'

const F_JOST = 'var(--font-jost), Montserrat, sans-serif'
const F_SANS = 'var(--font-sans), Open Sans, sans-serif'

const locationLandmarks = [
  { name: 'Varthur & Sarjapur Road', dist: '5-10 mins' },
  { name: 'Greenwood High / Inventure', dist: '10 mins' },
  { name: 'Carmelaram Railway Station', dist: '15 mins' },
  { name: 'Wipro SEZ (Sarjapur)', dist: '15-20 mins' },
  { name: 'Outer Ring Road (Bellandur)', dist: '20 mins' },
  { name: 'ITPL / Whitefield', dist: '20-25 mins' },
  { name: 'Nexus Whitefield Mall', dist: '25 mins' },
  { name: 'Manipal Hospital (Whitefield)', dist: '25-30 mins' },
]

const Location = () => {
  return (
    <section id="location" style={{
      padding: '72px 0',
      backgroundImage: "url('/images/highlights/highlight.webp')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }}>
      <div className="container mx-auto px-4 md:px-8 max-w-[1200px]">

        {/* Section Header */}
        <div style={{ marginBottom: '50px', textAlign: 'center' }} data-aos="fade-down" data-aos-duration="1000">
           <h2
             className="text-[22px] sm:text-[28px] md:text-[36px] font-semibold leading-tight uppercase tracking-wider text-[#6E942A]"
             style={{ fontFamily: "var(--font-jost), Montserrat, sans-serif", marginBottom: '12px' }}
           >
             LOCATION ADVANTAGES
           </h2>
           {/* Decorative Line */}
           <div className="flex items-center justify-center mt-3 mb-2">
             <div className="w-16 h-[1px] bg-[#6E942A]"></div>
             <div className="w-2 h-2 rounded-full bg-[#6E942A] mx-3"></div>
             <div className="w-16 h-[1px] bg-[#6E942A]"></div>
           </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-stretch">

          {/* RIGHT — Architectural Transit Line Card (Concept 2 - Exact Original Size) */}
          <div className="w-full lg:w-[46%] lg:order-2" data-aos="fade-left" data-aos-duration="1000">
            <div style={{
              padding: '18px 24px',
              borderRadius: '16px',
              background: '#FFFFFF',
              border: '1px solid #95B325',
              boxShadow: '0 12px 32px rgba(0, 2, 66, 0.12)',
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
              justifyContent: 'space-between',
            }}>
              <div>
                {/* Header Title */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingBottom: '10px',
                  marginBottom: '14px',
                  borderBottom: '2px solid #6E942A',
                }}>
                  <h3 style={{
                    fontFamily: F_JOST,
                    fontSize: '18px',
                    fontWeight: '700',
                    color: '#1A2024',
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    margin: 0
                  }}>
                    <MapPin size={22} className="text-[#3D5915]" />
                    <span>SEAMLESS CONNECTIVITY</span>
                  </h3>
                  <span className="text-[11px] font-bold text-[#6E942A] bg-[#edf7e2] px-2.5 py-0.5 rounded-full border border-[#c2e29c]">
                    📍 Origin: NVT Whispering Hues
                  </span>
                </div>

                {/* Vertical Transit Spine */}
                <div className="relative pl-6 flex flex-col justify-between py-1">
                  {/* Continuous Vertical Line */}
                  <div 
                    className="absolute left-[11px] top-2 bottom-3 w-[2px] rounded-full pointer-events-none"
                    style={{
                      background: 'linear-gradient(to bottom, #6E942A 0%, #3D5915 50%, #95B325 100%)'
                    }}
                  />

                  {locationLandmarks.map((item, index) => (
                    <div
                      key={index}
                      className="relative flex items-center justify-between py-1.5 group cursor-default"
                    >
                      {/* Station Node Marker */}
                      <div className="absolute -left-6 w-[24px] flex items-center justify-center pointer-events-none">
                        <span className="w-[10px] h-[10px] rounded-full bg-white border-[2.5px] border-[#6E942A] group-hover:scale-125 group-hover:border-[#3D5915] transition-transform duration-200 shadow-xs" />
                      </div>

                      {/* Landmark Name */}
                      <span 
                        className="text-[14.5px] font-semibold text-gray-800 group-hover:text-[#3D5915] transition-colors pl-1"
                        style={{ fontFamily: F_SANS }}
                      >
                        {item.name}
                      </span>

                      {/* Distance Time Badge */}
                      <span 
                        className="text-[12px] font-extrabold text-[#2e4213] bg-[#edf7e2] border border-[#c4e49f] px-2.5 py-0.5 rounded-full whitespace-nowrap shadow-2xs ml-3"
                        style={{ fontFamily: F_JOST }}
                      >
                        {item.dist}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Micro Footer */}
              <div className="mt-3 pt-2.5 border-t border-[#edf4e3] flex items-center justify-between text-[11px] text-gray-500 font-medium">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#6E942A] animate-pulse"></span> Prime Gunjur Corridor
                </span>
                <span className="text-[#3D5915] font-bold">Bangalore East</span>
              </div>
            </div>
          </div>

          {/* LEFT — Location Aerial Map (Exact Original Size & Frame) */}
          <div className="w-full lg:flex-1 lg:order-1 flex flex-col justify-center" data-aos="fade-right" data-aos-duration="1000">
            <div style={{
              overflow: 'hidden',
              border: '1px solid #95B325',
              borderRadius: '16px',
              width: '100%',
              height: '100%',
              position: 'relative',
              background: '#3D5915',
              boxShadow: '0 12px 32px rgba(61, 89, 21, 0.18)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.78979690231!2d77.77679680000001!3d12.792152100000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae71000cda0c59%3A0x5f98c9894d660a51!2sNVT%20A%20Wonderful%20World!5e0!3m2!1sen!2sin!4v1788675216269!5m2!1sen!2sin" 
                className="location-responsive-map" 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="strict-origin-when-cross-origin"
              ></iframe>
              <style jsx>{`
                .location-responsive-map {
                  width: 100%;
                  height: 100%;
                  min-height: 400px;
                  border: 0;
                  display: block;
                }
                @media (max-width: 1023px) {
                  .location-responsive-map {
                    height: 400px !important;
                  }
                }
              `}</style>
              <div style={{
                position: 'absolute', bottom: '16px', left: '16px', zIndex: 10,
                background: 'var(--color-gold, #6E942A)', opacity: 0.95, backdropFilter: 'blur(6px)',
                borderRadius: '8px', padding: '6px 14px',
                display: 'flex', alignItems: 'center', gap: '6px',
                pointerEvents: 'none',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.25)'
              }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
                  stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
                </svg>
                <span style={{
                  color: '#fff', fontSize: '12px', fontFamily: F_JOST,
                  fontWeight: '700', letterSpacing: '0.04em'
                }}>
                  Gunjur, Bangalore
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Location
