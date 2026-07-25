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

      <div id="about" className="scroll-mt-32 md:scroll-mt-40 lg:scroll-mt-36 w-full bg-white px-6 lg:px-16 py-16 md:py-24">
        <AboutSection />
      </div>

      <div id="gallery-preview" className="w-full bg-white px-6 lg:px-16 py-16 md:py-24">
        <GallerySection />
      </div>
    </main>
  );
}