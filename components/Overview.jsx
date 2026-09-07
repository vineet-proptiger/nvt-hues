'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { overviewImage } from '../lib/images'

const Overview = ({ setIsOpen }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
  <section
    id="overview"
    className="about_us about-us-section"
  >
    <style jsx>{`
      .about-us-section {
        box-sizing: border-box;
        padding: 70px 0px;
        position: relative;
        background: #F8F9FA;
        overflow: hidden;
      }
      .inner-section {
        position: relative;
        z-index: 1;
        padding-right: 30px;
      }
      .image_caption_wrap img {
        width: 100%;
        height: auto;
        border-radius: 10px;
      }
      @media (max-width: 991px) {
        .inner-section {
          padding-right: 0;
          margin-bottom: 40px;
        }
      }
    `}</style>

    <div className="container mx-auto px-4 sm:px-8 max-w-[1300px] relative z-10">
      
      {/* Section Header - Spanning across top */}
      <div className="mb-6 sm:mb-8" data-aos="fade-up" data-aos-duration="1000">
        <h2 className="text-[22px] sm:text-[28px] md:text-[36px] font-semibold leading-tight uppercase tracking-wider text-gray-900" style={{ fontFamily: "var(--font-jost), Montserrat, sans-serif", marginBottom: '6px' }}>NVT Whispering Hues</h2>
        {/* Decorative Line */}
        <div className="flex items-center justify-start mt-1 mb-3">
          <div className="w-16 h-[1px] bg-[#6E942A]"></div>
          <div className="w-2 h-2 rounded-full bg-[#6E942A] mx-3"></div>
          <div className="w-16 h-[1px] bg-[#6E942A]"></div>
        </div>
        <h3 className="text-[16px] sm:text-[18px] md:text-[22px] font-medium tracking-wide text-gray-600" style={{ fontFamily: "var(--font-jost), Montserrat, sans-serif" }}>Premium Villas in Gunjur, Bangalore</h3>
      </div>

      <div className="flex flex-col lg:flex-row items-stretch gap-6 lg:gap-8">
        
        {/* Left Side: Green Box (Paragraph + 4 Info Boxes) */}
        <div className="w-full lg:w-7/12 flex flex-col" data-aos="fade-up" data-aos-duration="1000">
          <div 
            className="relative p-6 sm:p-8 rounded-2xl shadow-[0_12px_36px_rgba(48,64,23,0.18)] overflow-hidden flex-1 flex flex-col justify-between" 
            style={{ background: '#304017' }}
          >
            <div>
              <p style={{ fontSize: '15.5px', fontFamily: '"Poppins", sans-serif', color: '#E5EDDC', textAlign: 'justify', lineHeight: '1.85', margin: 0 }}>
                <span 
                  style={{ 
                    float: 'left', 
                    fontSize: '3.6rem', 
                    lineHeight: '0.8', 
                    fontWeight: '800', 
                    color: '#95B325', 
                    marginRight: '12px', 
                    marginTop: '4px',
                    fontFamily: "var(--font-jost), Montserrat, sans-serif" 
                  }}
                >
                  N
                </span>
                <span style={{ fontWeight: '700', color: '#FFFFFF' }}>VT A Wonderful World – Eterna</span> is an exclusive enclave of luxury 4/5 BHK villas, thoughtfully crafted for those who value space, privacy, and natural living. Set across 10.5 acres within a master-planned township, this low-density development is nestled beside a breathtaking 300-acre lake, offering a rare blend of serenity and connectivity.
                {!isExpanded ? '... ' : ' '}
                {isExpanded && (
                  <span>
                    Each villa is designed to welcome abundant daylight, seamless indoor-outdoor flow, and refined comfort—making everyday living feel calm, balanced, and truly elevated. This is where Earth, Water, Air, and Space find their rhythm again, shaping a way of life that feels natural and alive; reminding us that luxury isn't built, it's remembered.{' '}
                  </span>
                )}
                <button 
                  onClick={() => setIsExpanded(!isExpanded)}
                  type="button"
                  className="text-[#95B325] hover:text-[#b4e03c] font-bold inline-flex items-center gap-1 transition-colors cursor-pointer ml-1 select-none focus:outline-none"
                  style={{ fontSize: '15px' }}
                >
                  <span>{isExpanded ? 'Read Less' : 'Read More'}</span>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={`transform transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </button>
              </p>
            </div>

            {/* Info Boxes inside the background container */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 sm:mt-8 pt-6 border-t border-[#95B325]/20">
              
              {/* Box 1: Land Parcel */}
              <div className="flex items-center gap-4 p-4 sm:p-5 bg-white rounded-xl sm:rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex-shrink-0">
                  <svg className="w-8 h-8 sm:w-9 sm:h-9 text-[#3D5916]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 21c-4.97-4.97-8-8.58-8-12a8 8 0 1 1 16 0c0 3.42-3.03 7.03-8 12z" />
                    <circle cx="12" cy="9" r="3" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span style={{ fontFamily: "var(--font-jost), Montserrat, sans-serif" }} className="text-[20px] sm:text-[23px] font-bold text-[#3D5916] leading-tight uppercase">10.52 Acres</span>
                  <span style={{ fontFamily: "var(--font-sans), Open Sans, sans-serif" }} className="text-[13px] sm:text-[14px] text-gray-500 font-bold leading-normal mt-0.5 uppercase tracking-wide">PROJECT AREA</span>
                </div>
              </div>

              {/* Box 2: Total Villas */}
              <div className="flex items-center gap-4 p-4 sm:p-5 bg-white rounded-xl sm:rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex-shrink-0">
                  <svg className="w-8 h-8 sm:w-9 sm:h-9 text-[#3D5916]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 21V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16" />
                    <path d="M9 8h2" />
                    <path d="M13 8h2" />
                    <path d="M9 12h2" />
                    <path d="M13 12h2" />
                    <path d="M10 21v-4a2 2 0 0 1 4 0v4" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span style={{ fontFamily: "var(--font-jost), Montserrat, sans-serif" }} className="text-[20px] sm:text-[23px] font-bold text-[#3D5916] leading-tight uppercase">123 Villas</span>
                  <span style={{ fontFamily: "var(--font-sans), Open Sans, sans-serif" }} className="text-[13px] sm:text-[14px] text-gray-500 font-bold leading-normal mt-0.5 uppercase tracking-wide">NO: OF UNITS</span>
                </div>
              </div>

              </div>
          </div>
        </div>

        {/* Right Side: Image starting at the exact same height */}
        <div className="w-full lg:w-5/12 flex flex-col" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
          <div className="image_caption_wrap relative overflow-hidden rounded-2xl shadow-lg border border-[#6E942A]/20 bg-white flex-1 min-h-[380px] sm:min-h-[480px]">
            <Image
              src={overviewImage}
              alt="NVT Whispering Hues - Tower Elevation"
              fill
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="object-cover rounded-2xl transition-transform duration-700 hover:scale-105"
              priority={true}
            />
          </div>
        </div>

      </div>

    </div>
  </section>
  )
}

export default Overview
