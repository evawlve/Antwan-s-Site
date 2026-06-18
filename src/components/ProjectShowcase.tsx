'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const projects = [
  {
    id: 'lake-tahoe',
    title: "Lake Tahoe Series",
    category: "Landscape",
    image: "/landscapes/GREEN AND PURPLE.jpg",
  },
  {
    id: 'mountain-light',
    title: "Mountain Light",
    category: "Landscape",
    image: "/landscapes/_DSC0002.jpg",
  },
  {
    id: 'golden-hour',
    title: "Golden Hour",
    category: "Landscape",
    image: "/landscapes/_DSC0524.jpg",
  },
  {
    id: 'portraits',
    title: "Portraits",
    category: "Portraits",
    image: "/portraits/ZZ000238.jpg",
  },
  {
    id: 'street-stories',
    title: "Street Stories",
    category: "Portraits",
    image: "/portraits/_SNY0738.jpg",
  },
];

export default function ProjectShowcase() {
  return (
    <div className="w-full flex flex-col space-y-4 md:space-y-8">
      {/* Featured Full-Width Project */}
      {projects.slice(0, 1).map((project, idx) => (
        <ProjectTile key={project.id} project={project} className="w-full aspect-[16/9] md:aspect-[21/9]" index={idx} />
      ))}
      
      {/* 2-Column Grid for the rest */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
        {projects.slice(1).map((project, idx) => (
          <ProjectTile key={project.id} project={project} className="w-full aspect-[4/5] md:aspect-[3/4]" index={idx + 1} />
        ))}
      </div>
    </div>
  );
}

function ProjectTile({ project, className, index }: { project: any, className: string, index: number }) {
  return (
    <motion.div
      className={`relative overflow-hidden group cursor-pointer ${className}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.8, delay: (index % 3) * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <Image
        src={project.image}
        alt={project.title}
        fill
        className="object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.03]"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
      
      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-500 ease-in-out z-10 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100">
        <h3 className="text-white text-3xl md:text-5xl font-light tracking-wider mb-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out text-center px-4">
          {project.title}
        </h3>
        <p className="text-white/80 text-sm tracking-[0.3em] uppercase transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75 ease-out text-center px-4">
          {project.category}
        </p>
      </div>
    </motion.div>
  );
}
