import React from 'react'

const Highlights = ({ setIsOpen }) => {
  return (
    <section id="highlights" className="about_us py-20 relative bg-fixed bg-cover bg-center" style={{ backgroundImage: "url('/images/highlights/highlight.webp')" }}>
      {/* Dark overlay for better contrast if needed, but since user said no bg color, I'll keep it mostly transparent or a very light overlay if text is bright. Wait, the SS has dark text on light cards, and gold text on dark background. I will add a subtle dark overlay so the gold text is visible, just in case, but let me check if there was an overlay originally. The user said "show koi bg colo na use kre". So I won't use a bg color. */}
      
      <div className="container-fluid max-w-[1300px] mx-auto relative z-10 py-[70px]">
        <h2 className="text-[22px] sm:text-[28px] md:text-[36px] font-semibold leading-tight uppercase tracking-wider text-[#6E942A] text-center" data-aos="fade-up" data-aos-duration="1000" style={{ fontFamily: "var(--font-jost), Montserrat, sans-serif", marginBottom: '10px' }}>
          PROJECT HIGHLIGHTS & USPS
        </h2>
        {/* Decorative Line */}
        <div className="flex items-center justify-center mt-3 mb-8" data-aos="fade-up" data-aos-duration="1000">
          <div className="w-16 h-[1px] bg-[#6E942A]"></div>
          <div className="w-2 h-2 rounded-full bg-[#6E942A] mx-3"></div>
          <div className="w-16 h-[1px] bg-[#6E942A]"></div>
        </div>
        
        {/* 6 Highlights Cards Matching User Layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                
          {/* Highlight 1: Premium Villas */}
          <div className="highlight-card gradient-blue p-6 sm:p-7 rounded-2xl bg-[#eef5fc] border-none shadow-md transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl flex flex-col items-center text-center" style={{ animation: '0.6s ease-out 0s 1 normal both running fadeInScale' }}>
              <div className="icon-float mb-4 relative" style={{ animation: 'float 3s ease-in-out infinite' }}>
                  <svg className="w-9 h-9 text-[#2563eb]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                  </svg>
              </div>
              <h3 className="text-[18px] sm:text-[19px] font-bold mb-2 text-gray-900" style={{ fontFamily: "var(--font-jost), Montserrat, sans-serif" }}>Premium 4 & 5 BHK Villas</h3>
              <p className="text-gray-600 text-[13.5px] sm:text-[14.5px] leading-[1.65]">
                  Discover elegantly crafted homes by NVT offering luxury, comfort, and premium finishes tailored for modern urban families.
              </p>
          </div>

          {/* Highlight 2: Spacious Units */}
          <div className="highlight-card gradient-green p-6 sm:p-7 rounded-2xl bg-[#eefcee] border-none shadow-md transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl flex flex-col items-center text-center" style={{ animation: '0.6s ease-out 0.1s 1 normal both running fadeInScale' }}>
              <div className="icon-float mb-4 relative" style={{ animation: 'float 3s ease-in-out infinite', animationDelay: '0.2s' }}>
                  <svg className="w-9 h-9 text-[#6E942A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                  </svg>
              </div>
              <h3 className="text-[18px] sm:text-[19px] font-bold mb-2 text-gray-900" style={{ fontFamily: "var(--font-jost), Montserrat, sans-serif" }}>Spacious Units from 3,283 sq.ft.</h3>
              <p className="text-gray-600 text-[13.5px] sm:text-[14.5px] leading-[1.65]">
                  Experience grand living spaces starting from 3,283 sq.ft. onwards, thoughtfully designed to maximize natural light and ensure cross-ventilation.
              </p>
          </div>

          {/* Highlight 3: Trusted Developer */}
          <div className="highlight-card gradient-purple p-6 sm:p-7 rounded-2xl bg-[#f5eefc] border-none shadow-md transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl flex flex-col items-center text-center" style={{ animation: '0.6s ease-out 0.2s 1 normal both running fadeInScale' }}>
              <div className="icon-float mb-4 relative" style={{ animation: 'float 3s ease-in-out infinite', animationDelay: '0.4s' }}>
                  <svg className="w-9 h-9 text-[#9333ea]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.956 11.956 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
              </div>
              <h3 className="text-[18px] sm:text-[19px] font-bold mb-2 text-gray-900" style={{ fontFamily: "var(--font-jost), Montserrat, sans-serif" }}>Trusted Developer: NVT</h3>
              <p className="text-gray-600 text-[13.5px] sm:text-[14.5px] leading-[1.65]">
                  Built on a legacy of excellence and trust. NVT brings decades of unmatched expertise in delivering landmark residential communities.
              </p>
          </div>

          {/* Highlight 4: Pre Launch */}
          <div className="highlight-card gradient-amber p-6 sm:p-7 rounded-2xl bg-[#fdf8ee] border-none shadow-md transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl flex flex-col items-center text-center" style={{ animation: '0.6s ease-out 0s 1 normal both running fadeInScale' }}>
              <div className="icon-float mb-4 relative" style={{ animation: 'float 3s ease-in-out infinite', animationDelay: '0.6s' }}>
                  <svg className="w-9 h-9 text-[#d97706]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
                  </svg>
              </div>
              <h3 className="text-[18px] sm:text-[19px] font-bold mb-2 text-gray-900" style={{ fontFamily: "var(--font-jost), Montserrat, sans-serif" }}>Pre Launch on Gunjur</h3>
              <p className="text-gray-600 text-[13.5px] sm:text-[14.5px] leading-[1.65]">
                  Be part of an exclusive Pre Launch opportunity in one of South Bangalore's most rapidly developing and highly sought-after residential corridors.
              </p>
          </div>

          {/* Highlight 5: Expected Possession */}
          <div className="highlight-card gradient-red p-6 sm:p-7 rounded-2xl bg-[#fceedf] border-none shadow-md transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl flex flex-col items-center text-center" style={{ animation: '0.6s ease-out 0.1s 1 normal both running fadeInScale' }}>
              <div className="icon-float mb-4 relative" style={{ animation: 'float 3s ease-in-out infinite', animationDelay: '0.8s' }}>
                  <svg className="w-9 h-9 text-[#dc2626]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
              </div>
              <h3 className="text-[18px] sm:text-[19px] font-bold mb-2 text-gray-900" style={{ fontFamily: "var(--font-jost), Montserrat, sans-serif" }}>Possession by December 2030</h3>
              <p className="text-gray-600 text-[13.5px] sm:text-[14.5px] leading-[1.65]">
                  Stay assured with a clear timeline. The project is advancing smoothly towards timely delivery with expected handover scheduled for December 2030.
              </p>
          </div>

          {/* Highlight 6: Location Connectivity */}
          <div className="highlight-card gradient-indigo p-6 sm:p-7 rounded-2xl bg-[#eef0fc] border-none shadow-md transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl flex flex-col items-center text-center" style={{ animation: '0.6s ease-out 0.2s 1 normal both running fadeInScale' }}>
              <div className="icon-float mb-4 relative" style={{ animation: 'float 3s ease-in-out infinite', animationDelay: '1s' }}>
                  <svg className="w-9 h-9 text-[#4f46e5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
              </div>
              <h3 className="text-[18px] sm:text-[19px] font-bold mb-2 text-gray-900" style={{ fontFamily: "var(--font-jost), Montserrat, sans-serif" }}>Unmatched Connectivity</h3>
              <p className="text-gray-600 text-[13.5px] sm:text-[14.5px] leading-[1.65]">
                  Enjoy seamless access to renowned educational institutions, world-class healthcare facilities, and major tech hubs—all just minutes away.
              </p>
          </div>

        </div>
      </div>
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
      `}</style>
    </section>
  )
}

export default Highlights
