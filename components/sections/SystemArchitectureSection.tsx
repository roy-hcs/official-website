import { SectionHeader } from '@/components/common/SectionHeader';

export function SystemArchitectureSection() {
  return (
    <div className="w-full lg:h-[1086px] h-[700px] relative">
      <div className="absolute -z-1 inset-0 bg-[url('/assets/页尾背景.png')] rotate-180 bg-[#ffffff] bg-no-repeat bg-[center_0px] bg-[length:100%]"></div>
      <div className="w-full lg:pt-[140px] pt-[70px]">
        <SectionHeader
          title="Integrated Systems Architecture"
          subtitle="Explore how our technology infrastructure supports your brokerage operations with seamless integrations across platforms."
        />
      </div>
      <div className="w-full flex justify-center mt-[24px]">
        <div className="lg:block hidden w-[1076px] h-[475px] bg-[url('/assets/Haame-平台链接图.png')] bg-no-repeat bg-cover"></div>
        <div className="relative w-[90%] lg:hidden block">
          <div className="pt-[calc(475/1076*100%)]" />
          <div className="absolute inset-0 bg-[url('/assets/Haame-平台链接图.png')] bg-no-repeat bg-cover"></div>
        </div>
      </div>
    </div>
  );
}
