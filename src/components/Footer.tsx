'use client';

export default function Footer() {
  return (
    <footer id="contact" className="py-24 mt-12">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="text-xs tracking-[0.2em] uppercase text-gray-400">
          © {new Date().getFullYear()} Made by Antonio
        </div>
        <div className="flex gap-8 text-xs uppercase tracking-[0.2em] text-gray-500">
          <a href="https://www.instagram.com/ntonio.marquez/" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors duration-300">Instagram</a>
          <a href="https://www.threads.com/@ntonio.marquez" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors duration-300">Threads</a>
          <a href="mailto:madebyntonio@gmail.com" className="hover:text-black transition-colors duration-300">Email</a>
        </div>
      </div>
    </footer>
  );
}
