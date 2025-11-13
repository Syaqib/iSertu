"use client";

import { useState } from "react";
import { useTranslation } from "react-i18next";
import Image from "next/image";

export default function BusinessAssociates() {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Partner logos
  const logos = [
    { id: 1, name: "SVS", logo: "/images/SVS.png", alt: "SVS Logo", fullName: "Seven Value Solution" },
    { id: 2, name: "MIS", logo: "/images/MIS.png", alt: "MIS Logo", fullName: "M.I.S International" },
    { id: 3, name: "Bumi", logo: "/images/bumi.png", alt: "Bumi Logo", fullName: "Bumi Transformasi Digital" },
    { id: 4, name: "HIS", logo: "/images/his.png", alt: "HIS Logo", fullName: "Halal International Selangor" },
    { id: 5, name: "KKTM", logo: "/images/kktm.png", alt: "KKTM Logo", fullName: "Kolej Kemahiran Tinggi MARA" },
    { id: 6, name: "Halvec", logo: "/images/halvec.png", alt: "Halvec Logo", fullName: "Halvec Laboratories" },
  ];

  const slidesToShow = 4;
  const totalSlides = Math.ceil(logos.length / slidesToShow);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };


  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {t('business.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('business.description')}
          </p>
        </div>
        
        <div className="relative">
          {/* Carousel Container */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {logos.slice(slideIndex * slidesToShow, (slideIndex + 1) * slidesToShow).map((logo) => (
                      <div
                        key={logo.id}
                        className="flex flex-col items-center justify-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                      >
                        <div className="w-32 h-20 flex items-center justify-center overflow-hidden mb-3">
                          <Image
                            src={logo.logo}
                            alt={logo.alt}
                            width={128}
                            height={80}
                            className={`max-w-full max-h-full object-contain ${
                              logo.name === 'MIS' || logo.name === 'SVS' 
                                ? 'scale-200' 
                                : ''
                            }`}
                          />
                          <div className="hidden text-4xl text-gray-400">
                            🏢
                          </div>
                        </div>
                        <p className="text-sm font-medium text-gray-700 text-center leading-tight">
                          {logo.fullName}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:ring-2"
            style={{ '--focus-ring-color': '#694900' } as React.CSSProperties & { '--focus-ring-color': string }}
            onFocus={(e) => { e.currentTarget.style.outlineColor = '#694900'; }}
            aria-label="Previous slide"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:ring-2"
            style={{ '--focus-ring-color': '#694900' } as React.CSSProperties & { '--focus-ring-color': string }}
            onFocus={(e) => { e.currentTarget.style.outlineColor = '#694900'; }}
            aria-label="Next slide"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                index === currentSlide ? '' : 'bg-gray-300'
              }`}
              style={index === currentSlide ? { backgroundColor: '#694900' } : {}}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
