'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export default function WorkGallery({ images }: { images: string[] }) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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
            onClick={() => setSelectedImage(src)}
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
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-white/95 backdrop-blur-md p-4 md:p-12 cursor-zoom-out"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="relative w-full h-full max-w-[90vw] max-h-[90vh]"
              layoutId={`image-container-${selectedImage}`}
              transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            >
              {/* Optional minimal spinner underneath in case the hi-res takes time */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-5 h-5 border-[1px] border-gray-300 border-t-black rounded-full animate-spin" />
              </div>
              
              <Image
                src={selectedImage}
                alt="Enlarged gallery image"
                fill
                className="object-contain relative z-10"
                sizes="100vw"
                priority
              />
            </motion.div>
            
            <button 
              className="absolute top-6 right-6 md:top-10 md:right-10 text-black text-xs uppercase tracking-[0.2em] hover:opacity-50 transition-opacity z-50"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
            >
              Close
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
