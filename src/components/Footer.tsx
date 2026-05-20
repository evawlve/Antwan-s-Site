'use client';

export default function Footer() {
  return (
    <footer id="contact" className="py-24 mt-12">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="text-xs tracking-[0.2em] uppercase text-gray-400">
          © {new Date().getFullYear()} Made by Antonio
        </div>
        <div className="flex gap-8 text-xs uppercase tracking-[0.2em] text-gray-500">
          <a href="#" className="hover:text-black transition-colors duration-300">Instagram</a>
          <a href="#" className="hover:text-black transition-colors duration-300">TikTok</a>
          <a href="#" className="hover:text-black transition-colors duration-300">YouTube</a>
          <a href="mailto:hello@example.com" className="hover:text-black transition-colors duration-300">Email</a>
        </div>
      </div>
    </footer>
  );
}
