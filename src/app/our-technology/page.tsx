"use client";

import Hero from "@/components/Hero";
import ClayWaterEnzyme from "@/components/ClayWaterEnzyme";
import FeaturedProducts from "@/components/FeaturedProducts";

export default function OurTechnologyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Hero showButtons={false} height="328px" />
      <ClayWaterEnzyme />
      <FeaturedProducts />
    </div>
  );
}
