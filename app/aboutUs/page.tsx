import { AboutUsIconOne } from '@/components/icons/AboutUsIconOne';
import { AboutUsIconThree } from '@/components/icons/AboutUsIconThree';
import { AboutUsIconTwo } from '@/components/icons/AboutUsIconTwo';
import { USPItem, USPSection } from '@/components/sections/USPSection';

export default function AboutUsPage() {
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
    <div>
      <h1>About Us</h1>
      <p>Welcome to our company!</p>
      <div className="w-full md:w-[1200px] mx-auto">
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
    </div>
  );
}
