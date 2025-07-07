"use client"
import TopHeader from '@/components/sections/TopHeader';
import SystemDes from '@/components/sections/SystemDes';
import ProductionNav from '@/components/sections/ProductionNav';
import OurProduction from '@/components/sections/OurProduction';
import Advantage from '@/components/sections/Advantage';
import EcosystemPartners from '@/components/sections/EcosystemPartners';
import CooperativePartner from '@/components/sections/CooperativePartner';
import LatestNews from '@/components/sections/LatestNews';
import MyFooter from '@/components/sections/MyFooter';
import ContactDialog from '@/components/common/ContactDialog';
import { useState } from 'react';

// TODO: change the dialog solution, make the homepage become a RSC instead of a client component

export default function Home() {
  const [visible, setVisible] = useState(false);
  return (
    <div className="w-full h-full overflow-y-auto">
      <TopHeader />
      <ProductionNav onOpen={() => setVisible(true)} />
      <CooperativePartner />
      <OurProduction />
      <Advantage />
      <SystemDes onOpen={() => setVisible(true)} />
      <LatestNews />
      <EcosystemPartners />
      <MyFooter onOpen={() => setVisible(true)} />
      <ContactDialog visible={visible} onClose={() => setVisible(false)} />
    </div>
  );
}
