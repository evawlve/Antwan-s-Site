'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero({ imagePath }: { imagePath: string }) {
  return (
    <section id="hero" className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 w-full h-full bg-black">
        {imagePath && (
          <motion.div 
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 2, ease: 'easeOut' }}
            className="w-full h-full"
          >
            <Image
              src={imagePath}
              alt="Hero Landscape"
              fill
              className="object-cover object-center opacity-70"
              priority
            />
          </motion.div>
        )}
      </div>
      
      <motion.div 
        className="relative z-10 text-center text-white flex flex-col items-center px-4 drop-shadow-2xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      >
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-[0.3em] mb-6 uppercase" style={{ textShadow: '0 2px 20px rgba(0,0,0,0.5)' }}>
          Antonio Marquez
        </h1>
        <p className="text-xs md:text-sm tracking-[0.4em] font-light uppercase opacity-90" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>
          Photography & Visual Storytelling
        </p>
      </motion.div>
    </section>
  );
}
