import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { BrandStatement } from '@/components/sections/BrandStatement';
import { Experience } from '@/components/sections/Experience';
import { Equipment } from '@/components/sections/Equipment';
import { Gallery } from '@/components/sections/Gallery';
import { Location } from '@/components/sections/Location';
import { FinalCta } from '@/components/sections/FinalCta';

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <BrandStatement />
        <Experience />
        <Equipment />
        <Gallery />
        <Location />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
