'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export default function WorkGallery({ images }: { images: string[] }) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      
      if (e.key === 'ArrowLeft') {
        setSelectedIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : images.length - 1));
        setIsZoomed(false);
      } else if (e.key === 'ArrowRight') {
        setSelectedIndex((prev) => (prev !== null && prev < images.length - 1 ? prev + 1 : 0));
        setIsZoomed(false);
      } else if (e.key === 'Escape') {
        setSelectedIndex(null);
        setIsZoomed(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, images.length]);

  const closeLightbox = () => {
    setSelectedIndex(null);
    setIsZoomed(false);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev !== null && prev < images.length - 1 ? prev + 1 : 0));
    setIsZoomed(false);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : images.length - 1));
    setIsZoomed(false);
  };

  const toggleZoom = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsZoomed(!isZoomed);
  };

  return (
    <>
      <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
        {images.map((src, idx) => (
          <motion.div
            key={src}
            className="relative overflow-hidden group cursor-pointer break-inside-avoid"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, delay: (idx % 3) * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            onClick={() => {
              setSelectedIndex(idx);
              setIsZoomed(false);
            }}
          >
            <motion.div className="relative w-full" layoutId={`image-container-${src}`}>
              <Image
                src={src}
                alt={`Gallery image ${idx + 1}`}
                width={800}
                height={1200}
                className="w-full h-auto object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
            </motion.div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-white/95 backdrop-blur-md p-4 md:p-12 cursor-default overflow-hidden"
            onClick={closeLightbox}
          >
            {/* Prev Arrow */}
            <button
              className="absolute left-4 md:left-10 text-black/50 hover:text-black transition-colors z-50 p-4"
              onClick={handlePrev}
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
            </button>

            {/* Next Arrow */}
            <button
              className="absolute right-4 md:right-10 text-black/50 hover:text-black transition-colors z-50 p-4"
              onClick={handleNext}
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </button>

            {/* Close Button */}
            <button 
              className="absolute top-6 right-6 md:top-10 md:right-10 text-black text-xs uppercase tracking-[0.2em] hover:opacity-50 transition-opacity z-50"
              onClick={closeLightbox}
            >
              Close
            </button>

            <motion.div
              className={`relative flex items-center justify-center ${isZoomed ? 'cursor-grab active:cursor-grabbing' : 'cursor-zoom-in'}`}
              layoutId={`image-container-${images[selectedIndex]}`}
              transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              style={{ width: '90vw', height: '90vh' }}
            >
              <motion.div
                drag={isZoomed}
                dragConstraints={{ top: -300, left: -300, right: 300, bottom: 300 }}
                dragElastic={0.2}
                animate={isZoomed ? { scale: 1.5 } : { scale: 1, x: 0, y: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="w-full h-full flex items-center justify-center relative"
                onClick={toggleZoom}
              >
                <div className="absolute inset-0 flex items-center justify-center -z-10">
                  <div className="w-5 h-5 border-[1px] border-gray-300 border-t-black rounded-full animate-spin" />
                </div>
                
                <Image
                  src={images[selectedIndex]}
                  alt="Enlarged gallery image"
                  fill
                  className="object-contain relative z-10 pointer-events-none"
                  sizes="100vw"
                  priority
                />
              </motion.div>
            </motion.div>
            
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
