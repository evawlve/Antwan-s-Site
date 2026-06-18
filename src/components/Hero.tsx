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
      
      <div className="relative z-10 text-center text-white flex flex-col items-center px-4 drop-shadow-2xl">
        <motion.h1 
          className="text-4xl md:text-6xl lg:text-7xl font-light tracking-[0.3em] mb-6 uppercase" 
          style={{ textShadow: '0 2px 20px rgba(0,0,0,0.5)' }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5, ease: 'easeOut' }}
        >
          Antonio Marquez
        </motion.h1>

        <motion.div
          className="h-[1px] bg-white/70 mb-6"
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: "80%", opacity: 1 }}
          transition={{ duration: 1, delay: 1.2, ease: "easeInOut" }}
        />

        <motion.p 
          className="text-base md:text-xl tracking-[0.3em] font-medium uppercase text-white" 
          style={{ textShadow: '0 4px 20px rgba(255,255,255,0.4), 0 2px 10px rgba(0,0,0,0.8)' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.8, ease: 'easeOut' }}
        >
          Photography & Visual Storytelling
        </motion.p>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/70"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
      >
        <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-[1px] h-8 bg-white/50"
        />
      </motion.div>
    </section>
  );
}
