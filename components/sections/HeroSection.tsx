import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
export function HeroSection() {
  // height: 1104px;
  return (
    <div className="w-full relative flex justify-center">
      {/* mask */}
      <div className="absolute -z-1 inset-0 bg-[url('/assets/grid-bg.png'),_url('/assets/首图背景.png')] bg-no-repeat bg-center bg-cover"></div>
      <div className="h-276 max-w-320 w-320 flex justify-center">
        {/* 文字介绍区域 width 672px */}
        <div className="w-168 mt-24">
          <div className="text-[#737373] text-sm leading-5 text-center">
            Hero section
          </div>
          <div className="mt-6 mb-6 text-[#041433] text-5xl font-bold text-center">
            Leading CRM for Brokerages & Exchanges
          </div>
          <div className="mb-8 text-[#737373] font-normal text-lg leading-7">
            Create your own profit-sharing system — # Forex CRM # PAMM #
            CopyTrading
          </div>
          <div className="flex gap-2">
            <Input placeholder="Enter your Email" />
            <Button variant="outline">Button</Button>
          </div>
        </div>
        {/* 图片区域 width 1228px height 607px */}
        <div>1212121</div>
      </div>
    </div>
  );
}
