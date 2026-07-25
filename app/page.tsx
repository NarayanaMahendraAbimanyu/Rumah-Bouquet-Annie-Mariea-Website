import Navbar from './components/navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import GallerySection from './components/GallerySection';

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden">
      <Navbar />

      <div id="home">
        <HeroSection />
      </div>

      <div id="about" className="scroll-mt-32 md:scroll-mt-40 lg:scroll-mt-36 w-full bg-white px-6 lg:px-16 py-12 md:py-16">
        <AboutSection />
      </div>

      <div id="gallery-preview" className="w-full bg-white px-6 lg:px-16 py-1 md:py-2">
        <GallerySection />
      </div>
    </main>
  );
}