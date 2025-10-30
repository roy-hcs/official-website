import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
export function HeroSection() {
  return (
    <div className="w-full relative">
      <div className="absolute -z-1 inset-0 bg-[url('/assets/grid-bg.png'),_url('https://rrh-cn.oss-cn-shenzhen.aliyuncs.com/images/bg3.png')] bg-no-repeat bg-center bg-cover"></div>
      <div className="flex justify-center">
        <div className="lg:h-[1104px] h-auto">
          <div className="lg:w-[672px] lg:mt-[140px] mt-[70px] w-full">
            <div className="text-[#041433] lg:text-5xl text-4xl font-bold text-center">
              <div>Leading CRM for</div>
              <div>Brokerages & Exchanges</div>
            </div>
            <div className="mb-8 mt-6 text-[#737373] font-normal lg:text-lg text-base leading-7 text-center">
              Create your own profit-sharing system — # Forex CRM # PAMM #
              CopyTrading
            </div>
            <div className="flex justify-center gap-2">
              <Input
                className="w-66.5 h-9 bg-[#ffffff] border border-[#E5E5E5] rounded-[8px] shadow-sm"
                placeholder="Enter your Email"
              />
              <Button
                className="rounded-[8px] bg-[#171717] shadow-sm py-[8px] px-[16px] text-[#FAFAFA] lg:text-[14px] text-[12px] font-[500] leading-[20px]"
                variant="outline"
              >
                Get A Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:block hidden absolute bottom-0 left-1/2 -translate-x-1/2 w-[1228px] h-[607px] bg-[url('/assets/首图产品展示.png')] bg-no-repeat bg-center bg-cover"></div>
      <div className="relative w-full lg:hidden block">
        <div className="pt-[calc(607/1228*100%)]" />
        <div className="absolute inset-0 bg-[url('/assets/首图产品展示.png')] bg-no-repeat bg-center bg-cover"></div>
      </div>
    </div>
  );
}
