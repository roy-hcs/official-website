'use client';
// import TopHeader from '@/components/sections/TopHeader';
import SystemDes from '@/components/sections/SystemDes';
// import ProductionNav from '@/components/sections/ProductionNav';
import OurProduction from '@/components/sections/OurProduction';
import Advantage from '@/components/sections/Advantage';
import EcosystemPartners from '@/components/sections/EcosystemPartners';
import CooperativePartner from '@/components/sections/CooperativePartner';
import LatestNews from '@/components/sections/LatestNews';
import { HeroSection } from '@/components/sections/HeroSection';
// import MyFooter from '@/components/sections/MyFooter';

// TODO: change the dialog solution, make the homepage become a RSC instead of a client component

export default function RrhHomePage() {
  return (
    <div className="w-full h-full overflow-y-auto">
      {/* <TopHeader /> */}
      {/* <ProductionNav /> */}
      <HeroSection />
      <CooperativePartner />
      <OurProduction />
      <Advantage />
      <SystemDes />
      <LatestNews />
      <EcosystemPartners />
      {/* <MyFooter /> */}
    </div>
  );
}
