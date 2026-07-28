'use client';

export default function Footer() {
  return (
    <footer id="contact" className="py-24 mt-12">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="text-xs tracking-[0.2em] lowercase text-gray-400">
          © {new Date().getFullYear()} made by antonio
        </div>
        <div className="flex gap-8 text-xs lowercase tracking-[0.2em] text-gray-500">
          <a href="https://www.instagram.com/ntonio.marquez/" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors duration-300">instagram</a>
          <a href="https://www.threads.com/@ntonio.marquez" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors duration-300">threads</a>
          <a href="mailto:madebyntonio@gmail.com" className="hover:text-black transition-colors duration-300">email</a>
        </div>
      </div>
    </footer>
  );
}
