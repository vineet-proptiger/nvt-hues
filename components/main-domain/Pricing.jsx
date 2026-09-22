"use client";

import React from "react";
import { Check, BedDouble, ArrowRight, Sparkles } from "lucide-react";

const F_SANS = "var(--font-sans), Open Sans, sans-serif";
const F_JOST = "var(--font-jost), Montserrat, sans-serif";

const units = [
  {
    type: "4 BHK",
    subtitle: "LUXURY VILLA",
    tagline: "Contemporary Family Living",
    size: "1,925 Sq. Ft.",
    price: "₹ 3.38 Cr*",
    priceSub: "Starting At",
    btnText: "GET DETAILS",
    features: [
      "Unlock Pricing & Floor Plans",
      "Attractive Payment Plan",
      "70 Acres Land Parcel",
    ],
    isPopular: false,
  },
  {
    type: "5 BHK",
    subtitle: "PALATIAL VILLA",
    tagline: "Grandeur & Elite Space",
    size: "2,520 Sq. Ft.",
    price: "Ask For Price",
    priceSub: "Price on Request",
    btnText: "GET DETAILS",
    features: [
      "Unlock Pricing & Floor Plans",
      "Attractive Payment Plan",
      "70 Acres Land Parcel",
    ],
    isPopular: true,
  }
];

const Pricing = ({ setIsOpen }) => {
  return (
    <section
      id="pricing"
      className="py-16 sm:py-24 px-4 md:px-8 relative overflow-hidden bg-[#F4EFE3]"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-b from-[#F4EFE3]/70 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div
          className="relative text-center mb-14 md:mb-18"
          data-aos="fade-up"
          data-aos-duration="1000"
        > 
          <h2
            className="text-[18px] sm:text-[24px] md:text-[28px] font-semibold leading-tight uppercase tracking-wider text-gray-900"
            style={{ fontFamily: F_JOST }}
          >
            Configurations & Pricing
          </h2>
          
          {/* Decorative Line */}
          <div className="flex items-center justify-center mt-4 mb-3">
            <div className="w-16 h-[1px] bg-[#CD9E4B]"></div>
            <div className="w-2 h-2 rounded-full bg-[#CD9E4B] mx-3"></div>
            <div className="w-16 h-[1px] bg-[#CD9E4B]"></div>
          </div>
        </div>

        {/* Minimalist Arch Pedestal Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 max-w-3xl mx-auto items-stretch justify-items-center">
          {units.map((unit, idx) => (
            <div
              key={idx}
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={idx * 150}
              className={`w-full max-w-[360px] bg-white rounded-t-[90px] rounded-b-3xl p-8 sm:p-9 flex flex-col items-center relative transition-all duration-400 hover:-translate-y-2 ${
                unit.isPopular
                  ? "border-2 border-[#CD9E4B] shadow-[0_20px_45px_rgba(205,158,75,0.18)] hover:shadow-[0_28px_55px_rgba(205,158,75,0.25)] ring-4 ring-[#CD9E4B]/10"
                  : "border border-[#DFB362] shadow-[0_12px_32px_rgba(11,58,61,0.06)] hover:shadow-[0_20px_42px_rgba(11,58,61,0.12)]"
              }`}
            >
              {/* Popular Crown Tag */}
              {unit.isPopular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#CD9E4B] via-[#A67D37] to-[#CD9E4B] text-white text-[10.5px] font-extrabold px-5 py-1.5 rounded-full whitespace-nowrap z-20 tracking-wider shadow-md flex items-center gap-1.5 uppercase ring-2 ring-white">
                  <Sparkles size={11} className="text-yellow-300" />
                  Most Preferred Choice
                </div>
              )}

              {/* Inner Concentric Arch Portal */}
              <div
                className={`w-36 h-40 rounded-t-full rounded-b-2xl border flex flex-col items-center justify-center p-4 mb-6 shadow-xs transition-colors ${
                  unit.isPopular
                    ? "bg-gradient-to-b from-[#F4EFE3] via-[#FFFFFF] to-white border-[#DFB362]"
                    : "bg-gradient-to-b from-[#FFFFFF] via-[#FFFFFF] to-white border-[#DFB362]"
                }`}
              >
                {/* Icon */}
                <div
                  className={`w-11 h-11 rounded-full flex items-center justify-center mb-2.5 bg-white shadow-xs border ${
                    unit.isPopular ? "border-[#EFE4CD] text-[#CD9E4B]" : "border-[#EFE4CD] text-[#0B3A3D]"
                  }`}
                >
                  <BedDouble size={20} strokeWidth={1.8} />
                </div>

                <div
                  className="text-[26px] font-extrabold leading-none text-gray-900 tracking-tight"
                  style={{ fontFamily: F_JOST }}
                >
                  {unit.type}
                </div>

                <span className="text-[11px] font-bold text-[#A67D37] uppercase tracking-widest mt-1">
                  {unit.subtitle}
                </span>
              </div>

              {/* Size Pill */}
              {/* <div className="mb-6 px-4 py-1 rounded-full bg-[#F4EFE3] border border-[#DFB362] text-[11.5px] font-bold text-[#0B3A3D] tracking-wide shadow-xs">
                📐 Super Built-up: <span className="text-gray-900 font-extrabold">{unit.size}</span>
              </div> */}

              {/* Price Pedestal */}
              <div className="text-center mb-7 w-full py-4 px-4 rounded-2xl bg-gradient-to-b from-[#FFFFFF] to-[#F4EFE3] border border-[#EFE4CD]">
                <span className="text-[10.5px] font-bold uppercase tracking-widest text-[#A67D37] block mb-1">
                  {unit.priceSub}
                </span>
                <div
                  className={`text-[29px] sm:text-[32px] font-extrabold leading-none ${
                    unit.isPopular ? "text-[#A67D37]" : "text-[#0B3A3D]"
                  }`}
                  style={{ fontFamily: F_JOST }}
                >
                  {unit.price}
                </div>
              </div>

              {/* Features List with Clean Dividers */}
              <div className="space-y-3 mb-8 w-full px-1">
                {unit.features.map((feature, fIdx) => (
                  <div
                    key={fIdx}
                    className="flex items-center gap-3 text-[13px] text-gray-700 font-medium"
                    style={{ fontFamily: F_SANS }}
                  >
                    <div className="w-5 h-5 rounded-full bg-[#F4EFE3] flex items-center justify-center flex-shrink-0 text-[#CD9E4B] border border-[#EFE4CD]">
                      <Check size={12} strokeWidth={3.5} />
                    </div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              {/* Minimalist Pill CTA Button */}
              <button
                onClick={() => setIsOpen(true)}
                className={`w-full py-3.5 px-6 rounded-full text-[12.5px] font-extrabold tracking-wider uppercase transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer flex items-center justify-center gap-2 ${
                  unit.isPopular
                    ? "bg-gradient-to-r from-[#CD9E4B] to-[#A67D37] border-2 border-[#CD9E4B] text-white hover:brightness-110 shadow-[#CD9E4B]/25"
                    : "bg-white border-2 border-[#CD9E4B] text-[#0B3A3D] hover:bg-[#0B3A3D] hover:text-white"
                }`}
                style={{ fontFamily: F_JOST }}
              >
                <span>{unit.btnText}</span>
                <ArrowRight size={15} />
              </button>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
