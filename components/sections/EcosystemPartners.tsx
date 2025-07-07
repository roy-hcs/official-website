import Image from 'next/image';

export default function EcosystemPartners() {
  return (
    <div className="bg-white text-center mb-[168px]">
      <div className="font-semibold text-[24px] text-[#020f2c] h-[58px] leading-none lg:text-[48px]">
        Our Ecosystem & Partners
      </div>
      <div className="w-full text-xs font-normal leading-normal h-[52px] text-[#020f2c] mx-auto mb-[84px] px-3 box-border lg:w-[768px] lg:text-lg lg:leading-[26px] lg:px-0">
        Pioneering together with leading institutions—see what our partners say and explore our ecosystem.
      </div>
      <div className="relative bg-white w-full h-0 pt-[60%] mx-auto lg:w-[954px] lg:h-[570px] lg:pt-0">
        <div className="absolute top-0 left-0 w-full h-full lg:relative lg:w-[954px] lg:h-[570px]">
          <Image 
            src="/assets/ecosystem-partners.svg" 
            alt="Ecosystem & Partners" 
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
    </div>
  );
}
