"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function OurClayPage() {
  const { t } = useTranslation();
  
  const sections = t('pages.ourClay.sections', { returnObjects: true }) as Array<{
    title: string;
    text: string;
  }>;

  return (
    <div className="bg-white">
      {/* Page intro */}
      <div className="py-20 text-center max-w-3xl mx-auto px-4">
        <h1 className="text-5xl font-bold mb-4 text-gray-900">
          {t('pages.ourClay.title')}
        </h1>
        <p className="text-lg text-gray-600">
          {t('pages.ourClay.subtitle')}
        </p>
      </div>

       {/* Dynamic sections */}
       {sections.map((s, index) => (
         <section
           key={index}
           className="relative h-screen flex items-center justify-start overflow-hidden"
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

           {/* Sticky Text Box - Left positioned */}
           <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8 }}
             viewport={{ once: true }}
             className="sticky top-[25%] z-10 max-w-lg bg-white/20 backdrop-blur-md text-white p-10 rounded-lg shadow-lg text-left ml-16"
           >
             <h2 className="text-4xl font-bold mb-4">{s.title}</h2>
             <p className="text-lg leading-relaxed">{s.text}</p>
           </motion.div>
         </section>
       ))}
    </div>
  );
}
