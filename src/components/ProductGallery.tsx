"use client";

import Image from "next/image";
import { useState, useRef, MouseEvent } from "react";

interface ProductGalleryProps {
  image: string;
}

export default function ProductGallery({ image }: ProductGalleryProps) {
  const [isHovering, setIsHovering] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [lensPosition, setLensPosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    // Clamp values between 0 and 100
    const clampedX = Math.max(0, Math.min(100, x));
    const clampedY = Math.max(0, Math.min(100, y));

    setMousePosition({ x: clampedX, y: clampedY });
    
    // Calculate lens position (centered on cursor)
    const lensSize = 150; // lens size in pixels
    const lensX = e.clientX - rect.left - lensSize / 2;
    const lensY = e.clientY - rect.top - lensSize / 2;
    
    setLensPosition({
      x: Math.max(0, Math.min(rect.width - lensSize, lensX)),
      y: Math.max(0, Math.min(rect.height - lensSize, lensY)),
    });
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <div className="relative">
      <div
        ref={containerRef}
        className="aspect-square rounded-lg overflow-hidden relative cursor-zoom-in"
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Image
          src={image}
          alt="Product Image"
          fill
          className="object-contain p-4"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
        />
        
        {/* Lens Overlay - shows where zoom is focused */}
        {isHovering && (
          <div
            className="absolute border-2 border-white shadow-lg pointer-events-none z-10"
            style={{
              width: '150px',
              height: '150px',
              left: `${lensPosition.x}px`,
              top: `${lensPosition.y}px`,
              borderRadius: '50%',
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              backdropFilter: 'blur(2px)',
            }}
          />
        )}
        </div>

      {/* Magnifier Overlay - shows zoomed image */}
      {isHovering && (
        <div
          className="absolute top-0 left-full ml-4 w-96 h-96 rounded-lg overflow-hidden border-2 border-gray-300 shadow-2xl z-50 pointer-events-none hidden lg:block bg-white"
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: '300%',
            backgroundPosition: `${mousePosition.x}% ${mousePosition.y}%`,
            backgroundRepeat: 'no-repeat',
          }}
        />
      )}
    </div>
  );
}
