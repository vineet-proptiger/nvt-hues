'use client'
import React, { useState, useEffect } from 'react'
import { masterplanImages } from '../../lib/images'

const plans = [
  { 
    label: '4 BHK Villa', 
    img: masterplanImages.bhk2,
    details: {
        superBuiltUp: '1,925 Sq. Ft.'
    }
  },
  { 
    label: '5 BHK Villa', 
    img: masterplanImages.bhk45,
    details: {
        superBuiltUp: '2,520 Sq. Ft.'
    }
  },
]

const MasterPlan = ({ setIsOpen }) => {
  const [activeTab, setActiveTab] = useState('master')
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)

  // Keyboard navigation (Escape key to close Lightbox)
  useEffect(() => {
    if (!isLightboxOpen) return
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsLightboxOpen(false)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isLightboxOpen])

  return (
    <section id="masterplan" className="relative py-20 bg-[#F8F9FA] overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-12 text-center" data-aos="fade-up" data-aos-duration="1000">
          <h2
            className="text-[18px] sm:text-[24px] md:text-[28px] font-semibold leading-tight uppercase tracking-wider text-gray-900 mb-4"
            style={{ fontFamily: "var(--font-jost), Montserrat, sans-serif" }}
          >
            Site & Floor Plans
          </h2>
          {/* Decorative Line */}
          <div className="flex items-center justify-center mt-2 mb-8">
            <div className="w-16 h-[1px] bg-[#CD9E4B]"></div>
            <div className="w-2 h-2 rounded-full bg-[#CD9E4B] mx-3"></div>
            <div className="w-16 h-[1px] bg-[#CD9E4B]"></div>
          </div>

          {/* Tabs */}
          <div className="flex justify-center items-center">
            <button 
              onClick={() => setActiveTab('master')}
              className={`px-8 py-3 text-[17px] font-medium transition-all cursor-pointer border border-[#CD9E4B] ${activeTab === 'master' ? 'bg-[#0B3A3D] text-white' : 'bg-transparent text-[#0B3A3D]'}`}
            >
              Master Plan
            </button>
            <button 
              onClick={() => setActiveTab('floor')}
              className={`px-8 py-3 text-[17px] font-medium transition-all cursor-pointer border border-l-0 border-[#CD9E4B] ${activeTab === 'floor' ? 'bg-[#0B3A3D] text-white' : 'bg-transparent text-[#0B3A3D]'}`}
            >
              Floor Plan
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <div className="max-w-[1100px] mx-auto">
          {activeTab === 'master' && (
            <div className="w-full max-w-[850px] mx-auto bg-white rounded-md overflow-hidden shadow-[0_5px_15px_rgba(0,0,0,0.1)] p-4 sm:p-5" data-aos="zoom-in" data-aos-duration="1000">
              <div 
                onClick={() => setIsOpen && setIsOpen(true)} 
                className="cursor-pointer block relative overflow-hidden group bg-[#fdfbf7] rounded border border-gray-100"
              >
                <img 
                  src={masterplanImages.masterPlan} 
                  alt="Master Plan" 
                  className="w-full h-auto mx-auto transition-all duration-500 filter blur-[6px] group-hover:blur-[3px] group-hover:scale-[1.02]" 
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-all duration-300 flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 bg-[#0B3A3D] text-white px-5 py-2.5 rounded-full text-[13px] sm:text-[14px] font-semibold tracking-wider uppercase flex items-center gap-2 shadow-lg">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="11" cy="11" r="8"></circle>
                      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                      <line x1="11" y1="8" x2="11" y2="14"></line>
                      <line x1="8" y1="11" x2="14" y2="11"></line>
                    </svg>
                    Click to View Full Plan
                  </span>
                </div>
              </div>

              {/* Action buttons below the image */}
              <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={() => setIsOpen && setIsOpen(true)}
                  className="px-5 py-2.5 text-[13px] sm:text-[14px] font-semibold uppercase tracking-wider text-[#0B3A3D] border border-[#CD9E4B] rounded hover:bg-[#0B3A3D] hover:text-white transition-colors duration-300 flex items-center gap-2"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <polyline points="9 21 3 21 3 15"></polyline>
                    <line x1="21" y1="3" x2="14" y2="10"></line>
                    <line x1="3" y1="21" x2="10" y2="14"></line>
                  </svg>
                  View Fullscreen
                </button>
                <button
                  type="button"
                  onClick={() => setIsOpen && setIsOpen(true)}
                  className="bg-[#0B3A3D] hover:bg-[#CD9E4B] text-white px-5 py-2.5 text-[13px] sm:text-[14px] font-semibold uppercase tracking-wider rounded border border-[#CD9E4B] shadow transition-colors duration-300 flex items-center gap-2"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" y1="15" x2="12" y2="3"></line>
                  </svg>
                  Download Master Plan
                </button>
              </div>
            </div>
          )}

          {activeTab === 'floor' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[820px] mx-auto">
              {plans.map((plan, idx) => (
                <div key={idx} className="bg-white rounded-md overflow-hidden shadow-[0_5px_15px_rgba(0,0,0,0.1)] transition-transform hover:-translate-y-1" data-aos="fade-up" data-aos-duration="1000" data-aos-delay={idx * 100}>
                  <a onClick={() => setIsOpen && setIsOpen(true)} className="cursor-pointer block relative h-[260px] overflow-hidden group bg-[#fdfbf7] flex items-center justify-center p-4">
                    <img 
                      src={plan.img} 
                      alt={plan.label} 
                      className="w-full h-full object-contain filter blur-[6px] group-hover:blur-[3px] transition-all duration-300" 
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-white/20">
                      <span className="bg-[#0B3A3D] group-hover:bg-[#CD9E4B] text-white px-5 py-3 text-[13px] leading-snug font-semibold uppercase tracking-wider text-center transition-colors duration-300">
                        Download<br/>Floor Plans
                      </span>
                    </div>
                  </a>
                  <div className="p-6 text-center border-t border-gray-100 bg-white">
                    <h4 className="text-[22px] text-[#0B3A3D] font-semibold mb-4">{plan.label}</h4>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* ── Master Plan Lightbox Modal ── */}
      {isLightboxOpen && (
        <div 
          className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
          onClick={() => setIsLightboxOpen(false)}
        >
          {/* Close Button */}
          <button 
            type="button"
            className="absolute top-5 right-5 text-white/80 hover:text-white transition-colors z-[10000] p-2.5 bg-black/50 hover:bg-black/80 rounded-full"
            onClick={() => setIsLightboxOpen(false)}
            aria-label="Close Lightbox"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>

          {/* Download button inside Lightbox */}
          <div className="absolute top-5 left-5 z-[10000]">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                setIsLightboxOpen(false)
                if (setIsOpen) setIsOpen(true)
              }}
              className="bg-[#0B3A3D] hover:bg-[#CD9E4B] text-white px-4 py-2 text-xs md:text-sm font-semibold tracking-wider uppercase rounded shadow transition-colors flex items-center gap-2"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              Download Master Plan
            </button>
          </div>

          {/* Center Lightbox Content */}
          <div className="relative w-full max-w-[95vw] max-h-[88vh] flex flex-col items-center justify-center">
            <img 
              src={masterplanImages.masterPlan} 
              alt="Master Plan Full View" 
              className="max-w-full max-h-[84vh] object-contain shadow-2xl rounded"
              onClick={(e) => e.stopPropagation()} 
            />
            <div 
              className="mt-3 text-center text-white/80 text-xs md:text-sm tracking-wide font-medium"
              style={{ fontFamily: "var(--font-jost), Montserrat, sans-serif" }}
            >
              NVT Whispering Hues — Master Plan Layout
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default MasterPlan
