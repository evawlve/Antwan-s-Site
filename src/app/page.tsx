import Link from 'next/link';
import Image from 'next/image';
import { getImages } from '@/utils/getImages';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import WorkGallery from '@/components/WorkGallery';
import About from '@/components/About';
import Footer from '@/components/Footer';
import SectionWrapper from '@/components/SectionWrapper';
import { getPosts } from '@/sanity/queries';
import { urlFor } from '@/sanity/image';

export const dynamic = 'force-dynamic';

export default async function Home() {
  const landscapes = getImages('landscapes');
  const portraits = getImages('portraits');
  const posts = await getPosts();

  // Select images
  const heroImage = landscapes.find(img => img.includes('Lonely Boat')) || (landscapes.length > 0 ? landscapes[0] : '');
  const aboutImage = '/bio.jpg';

  // Combine remaining images for the gallery
  const galleryImages = [...landscapes, ...portraits].filter(
    (img) => img !== heroImage && img !== aboutImage
  );

  const featuredPosts = posts.slice(0, 3);

  return (
    <main className="min-h-screen bg-white text-black selection:bg-black selection:text-white">
      <Header />
      
      <Hero imagePath={heroImage} />

      <SectionWrapper id="work" className="bg-gray-50">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="text-sm md:text-base font-medium tracking-[0.3em] lowercase text-gray-500 mb-4">archive</h2>
          </div>
          <WorkGallery images={galleryImages} />
        </div>
      </SectionWrapper>

      {/* Featured Blog / Journal Section */}
      <SectionWrapper id="blog-preview" className="bg-white border-t border-gray-100">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="text-sm md:text-base font-medium tracking-[0.3em] lowercase text-gray-500 mb-2">journal & stories</h2>
            <p className="text-2xl md:text-3xl font-light tracking-tight text-black">latest blog posts</p>
          </div>

          {featuredPosts.length === 0 ? (
            <div className="text-center py-12 text-gray-400 font-light tracking-wider lowercase text-sm">
              no blog posts published yet.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredPosts.map((post) => {
                const imageUrl = post.heroImage ? urlFor(post.heroImage).width(800).url() : null;
                const formattedDate = post.publishedAt
                  ? new Date(post.publishedAt).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric',
                    })
                  : null;

                return (
                  <article key={post._id} className="group cursor-pointer flex flex-col">
                    <Link href={`/blog/${post.slug.current}`} className="flex flex-col flex-1">
                      <div className="relative w-full aspect-[4/3] bg-gray-100 overflow-hidden mb-4">
                        {imageUrl ? (
                          <Image
                            src={imageUrl}
                            alt={post.heroImage?.alt || post.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                            sizes="(max-width: 768px) 100vw, 33vw"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-gray-300 lowercase tracking-widest text-xs">
                            no image
                          </div>
                        )}
                      </div>

                      {formattedDate && (
                        <p className="text-[10px] tracking-[0.2em] lowercase text-gray-400 mb-1">
                          {formattedDate}
                        </p>
                      )}

                      <h3 className="text-lg font-light tracking-tight text-black group-hover:opacity-75 transition-opacity">
                        {post.title}
                      </h3>
                    </Link>
                  </article>
                );
              })}
            </div>
          )}

          <div className="mt-12 text-center">
            <Link
              href="/blog"
              className="inline-block px-8 py-3 text-xs lowercase tracking-[0.2em] border border-black hover:bg-black hover:text-white transition-colors duration-300"
            >
              view all posts →
            </Link>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper id="about">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          <About portraitImage={aboutImage} />
        </div>
      </SectionWrapper>

      <Footer />
    </main>
  );
}
