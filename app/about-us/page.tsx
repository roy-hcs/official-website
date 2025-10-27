import { AboutUsIconOne } from '@/components/icons/AboutUsIconOne';
import { AboutUsIconThree } from '@/components/icons/AboutUsIconThree';
import { AboutUsIconTwo } from '@/components/icons/AboutUsIconTwo';
import { USPItem, USPSection } from '@/components/sections/USPSection';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const CharacterItem = ({ title, info }: { title: string; info: string }) => {
  return (
    <div className="w-[390px] p-6 md:p-12 rounded-[24px] flex flex-col justify-between items-start h-[248px] bg-[linear-gradient(113deg,#FDFEFF_3.88%,#F3F7FF_95.66%)] shadow-[0_5px_20px_0_#E6E9EF]">
      <div className="text-[#020f2c] text-left text-xl md:text-2xl font-semibold mb-6">
        {title}
      </div>
      <div className="text-[64px] leading-[72px] bg-[linear-gradient(43deg,#0154FC_-17.86%,#4DEEFF_100%)] bg-clip-text text-transparent">
        {info}
      </div>
    </div>
  );
};

const HeroBanner = () => {
  const characteristics = [
    {
      title: 'Serve financial institutions',
      info: '60+',
    },
    {
      title: 'Serve investors',
      info: '20W+',
    },
    {
      title: 'Covering countries and regions',
      info: '10+',
    },
  ];
  return (
    <div className="w-full md:aspect-[1.94] mb-42.5 mx-auto bg-white text-center relative">
      <div className="absolute inset-0 before:absolute  before:inset-0 before:bg-[url('/assets/AboutUsHeroSectionBg.png')] hidden md:block before:bg-no-repeat before:bg-[center_38px] before:bg-contain"></div>
      <div className="md:w-[1280px] mx-auto relative h-full flex flex-col md:flex-row items-center justify-start">
        <div className="flex flex-col text-left p-3 md:pb-30 w-auto md:w-[670px] text-[#020f2c]">
          <h2 className="text-4xl md:text-[72px] font-bold mb-2 md:mb-4">
            About Haame Tech
          </h2>
          <div className="md:text-xl text-base font-bold mb-3 md:mb-6">
            Empowering Global Investing Through Fintech
          </div>

          <div className="text-base md:text-xl font-medium mb-3 md:mb-6">
            Founded in September 2019 in Hong Kong, Haame Tech is a leading
            multi-asset fintech service platform dedicated to driving innovation
            in digital finance.
          </div>
          <div className="text-base md:text-xl font-medium">
            We specialize in developing cutting-edge solutions that connect
            global investors with multi-asset trading opportunities. By
            integrating advanced technologies with SaaS-based financial CRM
            systems, we help financial institutions deliver intelligent account
            management and powerful trading tools.
          </div>
        </div>
      </div>
      <div className="block md:absolute -bottom-40 inset-x-0">
        <div className="md:w-[1280px] mx-auto">
          <div className="flex flex-col md:flex-row gap-3 md:justify-between h-[248px] ">
            {characteristics.map(item => {
              return (
                <CharacterItem
                  key={item.title}
                  title={item.title}
                  info={item.info}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

const InvestBanner = () => {
  return (
    <div className="md:aspect-[1.94] md:mt-[115px] md:bg-[url('/assets/AboutUsSection2Bg.png')] bg-no-repeat  bg-contain bg-center">
      <div className="hidden md:block w-full aspect-[1/0.36]"></div>
      <div className="md:w-[1200px] mx-auto">
        <div className="flex flex-col items-center justify-center text-[#020f2c] p-3 md:p-0 text-sm md:text-xl md:font-medium capitalize">
          <Button className="mb-3 block h-auto md:hidden text-white text-xl bg-[#020f2c] rounded-lg ">
            Investment
          </Button>
          <div>At the heart of everything we do is our name — HAAME:</div>
          <div>
            Helpful As Always, Make Investment Easier. This is our promise, and
            our mission.
          </div>
        </div>
      </div>
    </div>
  );
};

const DevelopmentHistory = () => {
  return (
    <div className="w-full md:w-[1200px] mx-auto pt-10 md:pt-[190px] px-3 md:px-0 flex flex-col items-center text-[#020f2c]">
      <h3 className="text-2xl md:text-[48px] font-semibold capitalize mb-6">
        development history
      </h3>
      <div className="md:text-xl mb-8.5">
        We focus on the research and development of financial technology
        innovation applications and digital services
      </div>
      <div className="aspect-[1.86] md:h-[615px] relative w-full">
        <Image
          src="/assets/AboutUsSection3Bg.png"
          alt="development history"
          fill
          style={{
            objectFit: 'contain',
            objectPosition: 'center',
          }}
        />
      </div>
    </div>
  );
};
// const LocationBanner = () => {
//   const images = [
//     '/assets/AboutUsSection4Product1.png',
//     '/assets/AboutUsSection4Product2.png',
//     '/assets/AboutUsSection4Product3.png',
//     '/assets/AboutUsSection4Product4.png',
//   ];
//   return (
//     <div className="w-full md:w-[1200px] mx-auto flex flex-col items-center justify-center pt-10 px-3 md:px-0 md:pt-[150px] text-[#020f2c] md:text-xl">
//       <h3 className="text-2xl md:text-[48px] font-semibold capitalize mb-6">
//         development of globalization
//       </h3>
//       <div className="mb-5 md:mb-25">
//         Our headquarters and R&D centers in various regions
//       </div>
//       <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-6">
//         {images.map(src => {
//           return (
//             <div key={src} className="w-full aspect-[0.5] md:h-150 relative">
//               <Image src={src} alt="product" fill />
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

const CultureBanner = () => {
  const USPs: USPItem[] = [
    {
      title: 'VISION',
      description:
        'To become a globally leading multi-asset technology service platform',
      Icon: <AboutUsIconOne />,
    },
    {
      title: 'MISSION',
      description: 'Helpful As Always,Make investment Easier!',
      Icon: <AboutUsIconTwo />,
    },
    {
      title: 'VALUE',
      description: 'Honesty, altruism, and striving for excellence',
      Icon: <AboutUsIconThree />,
    },
  ];
  return (
    <div className="w-full md:w-[1200px] mx-auto pt-10 md:pt-[260px]">
      <div className="flex flex-col items-center px-3 md:px-0 justify-center">
        <h2 className="text-[#020f2c] text-2xl md:text-[48px]">
          Corporate Culture
        </h2>
        <div className="text-base text-center md:text-xl text-[#020f2c]">
          Our headquarters and R&D centers in various regions
        </div>
      </div>
      <div className="py-10 md:py-[180px]">
        <USPSection
          USPs={USPs}
          className="md:w-[1200px]"
          wrapperClassName="gap-30"
        />
      </div>
    </div>
  );
};
export default function AboutUsPage() {
  return (
    <div>
      <HeroBanner />
      <InvestBanner />
      <DevelopmentHistory />
      {/* <LocationBanner /> */}
      <CultureBanner />
    </div>
  );
}
