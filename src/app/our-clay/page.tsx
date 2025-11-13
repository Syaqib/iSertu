"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import FeaturedProducts from "@/components/FeaturedProducts";

export default function OurClayPage() {
  const { t } = useTranslation();
  
  const sections = t('pages.ourClay.sections', { returnObjects: true }) as Array<{
    title: string;
    text: string;
  }>;

  return (
    <div className="bg-white">
      {/* Page intro */}
      <section className="h-[328px] flex items-center justify-center" style={{ backgroundColor: '#f0e7d3' }}>
        <div className="text-center max-w-3xl mx-auto px-4">
          <h1 className="text-4xl font-bold" style={{ color: '#694900' }}>
            {t('pages.ourClay.title')}
          </h1>
          <p className="text-lg text-justify mt-4" style={{ color: '#694900' }}>
            {t('pages.ourClay.subtitle')}
          </p>
        </div>
      </section>

       {/* Dynamic sections */}
       {sections.map((s, index) => (
         <section
           key={index}
           className="relative h-screen flex items-center justify-center md:justify-start overflow-hidden"
         >
           {/* Background Image */}
           <div className="absolute inset-0">
             <Image
               src={`/images/bg${index + 1}.png`}
               alt={s.title}
               fill
               sizes="100vw"
               className="object-cover object-center"
               priority
             />
             {/* Overlay gradient */}
             <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
           </div>

           {/* Sticky Text Box - Responsive positioning */}
           <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8 }}
             viewport={{ once: true }}
             className="sticky top-[25%] z-10 max-w-lg bg-white/20 backdrop-blur-md text-white p-6 md:p-10 rounded-lg shadow-lg text-center md:text-left mx-4 md:ml-16 md:mx-0"
           >
             <h2 className="text-3xl md:text-4xl font-bold mb-4">{s.title}</h2>
             <p className="text-base md:text-lg leading-relaxed text-justify">{s.text}</p>
           </motion.div>
         </section>
       ))}
      
      {/* Featured Products Section */}
      <FeaturedProducts />
    </div>
  );
}
