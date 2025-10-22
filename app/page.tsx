'use client';
import { HeroSection } from '@/components/sections/HeroSection';
import CooperativePartnerSection from '@/components/sections/CooperativePartnerSection';
import { ProductsWeOfferSection } from '@/components/sections/ProductsWeOfferSection';
import { GallerySection } from '@/components/sections/GallerySection';
import { SystemArchitectureSection } from '@/components/sections/SystemArchitectureSection';
import { LatestNewsSection } from '@/components/sections/LatestNewsSection';

export default function RrhHomePage() {
  return (
    <div className="w-full h-full overflow-y-auto">
      <HeroSection />
      <CooperativePartnerSection />
      <ProductsWeOfferSection />
      <GallerySection />
      <SystemArchitectureSection />
      <LatestNewsSection />
    </div>
  );
}
