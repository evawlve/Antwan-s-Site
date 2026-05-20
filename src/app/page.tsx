import { getImages } from '@/utils/getImages';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import WorkGallery from '@/components/WorkGallery';
import About from '@/components/About';
import Footer from '@/components/Footer';
import SectionWrapper from '@/components/SectionWrapper';

export default function Home() {
  const landscapes = getImages('landscapes');
  const portraits = getImages('portraits');

  // Select images
  const heroImage = landscapes.length > 0 ? landscapes[0] : '';
  const aboutImage = portraits.length > 0 ? portraits[0] : (landscapes.length > 1 ? landscapes[1] : heroImage);

  // Combine remaining images for the gallery, or just mix them
  const galleryImages = [...landscapes, ...portraits].filter(
    (img) => img !== heroImage && img !== aboutImage
  );

  return (
    <main className="min-h-screen bg-white text-black selection:bg-black selection:text-white">
      <Header />
      
      <Hero imagePath={heroImage} />

      <SectionWrapper id="work">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          <WorkGallery images={galleryImages} />
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
