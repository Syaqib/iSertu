"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function EventsGalleryPage() {
  const { t } = useTranslation();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(true);

  // Array of event images
  const eventImages = Array.from({ length: 12 }, (_, i) => `/images/event${i + 1}.jpeg`);

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % eventImages.length);
    }, 5000); // 5 seconds

    return () => clearInterval(interval);
  }, [eventImages.length]);

  const goToPrevious = () => {
    setCurrentImageIndex((prev) => (prev - 1 + eventImages.length) % eventImages.length);
  };

  const goToNext = () => {
    setCurrentImageIndex((prev) => (prev + 1) % eventImages.length);
  };

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  const eventData = t('pages.eventsGallery.events.productLaunch', { returnObjects: true }) as {
    title: string;
    date: string;
    venue: string;
    content: {
      paragraph1: string;
      paragraph2: string;
      paragraph3: string;
      products: {
        vlsuperSertu: string;
        vlsuperSanitizer: string;
        vlskinBarSoap: string;
        vlskinBodywash: string;
      };
      website: string;
      paragraph4: string;
      signature: string;
      position: string;
      company: string;
    };
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[328px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/bg_events.png"
            alt="Events background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center text-white drop-shadow-md">
            <h1 className="text-4xl font-bold">
              {t('pages.eventsGallery.title')}
            </h1>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        {/* Event Section */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-8">
          {/* Clickable Header */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full text-left p-6 md:p-8 transition-colors duration-200"
            style={{ backgroundColor: '#f0e7d3' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#e8dcc4';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#f0e7d3';
            }}
          >
            <div className="flex items-center justify-between">
              <h2 className="text-2xl md:text-3xl font-light text-gray-900">
                {eventData.title}
              </h2>
              <svg
                className={`w-6 h-6 text-gray-600 transition-transform duration-300 ${
                  isExpanded ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </button>

          {/* Carousel Section - Always Visible */}
          <div className="px-6 md:px-8 pb-6 md:pb-8">
            <div className="relative max-w-5xl mx-auto">
              {/* Carousel Container */}
              <div className="relative w-full h-[500px] md:h-[600px] rounded-lg overflow-hidden">
                {/* Image */}
                <Image
                  src={eventImages[currentImageIndex]}
                  alt={`Event image ${currentImageIndex + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 80vw"
                  priority={currentImageIndex === 0}
                />

                {/* Navigation Arrows */}
                <button
                  onClick={goToPrevious}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-200 z-10"
                  aria-label="Previous image"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                <button
                  onClick={goToNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-200 z-10"
                  aria-label="Next image"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                {/* Image Indicators */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                  {eventImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToImage(index)}
                      className={`h-2 rounded-full transition-all duration-200 ${
                        index === currentImageIndex
                          ? 'w-8 bg-white'
                          : 'w-2 bg-white/50 hover:bg-white/75'
                      }`}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Expandable Content */}
          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              isExpanded ? 'max-h-[5000px] opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="px-6 md:px-8 pb-6 md:pb-8 border-t border-gray-200">
              <div className="max-w-4xl mx-auto pt-6 md:pt-8 space-y-6">
                {/* Date and Venue */}
                <div className="text-center mb-6">
                  <p className="text-lg text-gray-600">
                    {eventData.date} | {eventData.venue}
                  </p>
                </div>

                {/* Content Paragraphs */}
                <p className="text-lg text-gray-700 leading-relaxed text-justify">
                  {eventData.content.paragraph1}
                </p>

                <p className="text-lg text-gray-700 leading-relaxed text-justify">
                  {eventData.content.paragraph2}
                </p>

                {/* Products List */}
                <div className="my-6">
                  <p className="text-lg font-medium text-gray-900 mb-4">
                    {eventData.content.paragraph3}
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-lg text-gray-700 ml-4">
                    <li>{eventData.content.products.vlsuperSertu}</li>
                    <li>{eventData.content.products.vlsuperSanitizer}</li>
                    <li>{eventData.content.products.vlskinBarSoap}</li>
                    <li>{eventData.content.products.vlskinBodywash}</li>
                  </ul>
                </div>

                {/* Website */}
                <p className="text-lg text-gray-700 leading-relaxed">
                  {eventData.content.website}
                </p>

                {/* Closing Paragraph */}
                <p className="text-lg text-gray-700 leading-relaxed text-justify">
                  {eventData.content.paragraph4}
                </p>

                {/* Signature */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <p className="text-lg font-medium text-gray-900">{eventData.content.signature}</p>
                  <p className="text-base text-gray-600">{eventData.content.position}</p>
                  <p className="text-base text-gray-600">{eventData.content.company}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

