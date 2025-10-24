import { SectionHeader } from '@/components/common/SectionHeader';

export function LatestNewsSection() {
  return (
    <div className="w-full lg:h-[832px] h-auto">
      <div className="pt-[96px]">
        <SectionHeader
          title="Latest News"
          subtitle="Market intelligence, product updates, and engaging with fintech communites around the globe, just fellow us"
        />
      </div>
      <div className="w-full flex justify-center pt-[48px]">
        <div className="lg:w-full w-[90%] max-w-320">
          <div className="grid lg:grid-cols-3 grid-cols-1 gap-[12px]">
            <div className="cursor-pointer border border-[#e5e5e5] bg-[#ffffff] rounded-[14px] shadow-[0_1px_3px_0_rgba(0,0,0,0.10),0_1px_2px_-1px_rgba(0,0,0,0.10)] overflow-hidden">
              <div className="relative w-full">
                <div className="pt-[80%]" />
                <div className="absolute inset-0 bg-[url('/assets/home/5.png')] bg-no-repeat bg-center bg-cover"></div>
              </div>
              <div className="p-[24px]">
                <h2 className="text-[#020F2C] text-lg font-[600] leading-[28px]">
                  Haame Recognized Most Innovative CRM Provider by FXVC
                </h2>
                <h3 className="text-[#656B8A] text-sm font-[400] leading-[20px] mt-[8px]">
                  On October 19, the much-anticipated FXVC brand launch
                  conference opened grandly in Xiamen...
                </h3>
              </div>
            </div>
            <div className="cursor-pointer border border-[#e5e5e5] bg-[#ffffff] rounded-[14px] shadow-[0_1px_3px_0_rgba(0,0,0,0.10),0_1px_2px_-1px_rgba(0,0,0,0.10)] overflow-hidden">
              <div className="relative w-full">
                <div className="pt-[80%]" />
                <div className="absolute inset-0 bg-[url('/assets/home/4.png')] bg-no-repeat bg-center bg-cover"></div>
              </div>
              <div className="p-[24px]">
                <h2 className="text-[#020F2C] text-lg font-[600] leading-[28px]">
                  Haame Recognized Most Innovative CRM Provider by FXVC
                </h2>
                <h3 className="text-[#656B8A] text-sm font-[400] leading-[20px] mt-[8px]">
                  On October 19, the much-anticipated FXVC brand launch
                  conference opened grandly in Xiamen...
                </h3>
              </div>
            </div>
            <div className="cursor-pointer border border-[#e5e5e5] bg-[#ffffff] rounded-[14px] shadow-[0_1px_3px_0_rgba(0,0,0,0.10),0_1px_2px_-1px_rgba(0,0,0,0.10)] overflow-hidden">
              <div className="relative w-full">
                <div className="pt-[80%]" />
                <div className="absolute inset-0 bg-[url('/assets/home/6.jpg')] bg-no-repeat bg-center bg-cover"></div>
              </div>
              <div className="p-[24px]">
                <h2 className="text-[#020F2C] text-lg font-[600] leading-[28px]">
                  Haame Recognized Most Innovative CRM Provider by FXVC
                </h2>
                <h3 className="text-[#656B8A] text-sm font-[400] leading-[20px] mt-[8px]">
                  On October 19, the much-anticipated FXVC brand launch
                  conference opened grandly in Xiamen...
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
