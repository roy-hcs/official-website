'use client';

import Image from 'next/image';
import GetDemoInput from './GetDemoInput';

interface ProductionNavProps {
  onOpen?: () => void;
}

export default function ProductionNav({ onOpen }: ProductionNavProps) {
  const handleOpen = () => {
    onOpen?.();
  };

  return (
    <div className="relative w-full pt-21 bg-white text-center lg:h-[1200px] h-auto box-border"
         style={{
           backgroundImage: `url('/assets/grid-bg.png'), url('/assets/首图背景.png')`,
           backgroundRepeat: 'no-repeat',
           backgroundPosition: 'center',
           backgroundSize: 'cover'
         }}>
      
      {/* Header */}
      <div className="absolute top-0 left-0 w-full lg:h-21 h-11 bg-white bg-opacity-60">
        <div className="absolute top-0 left-0 right-0 lg:h-21 h-11 w-full max-w-[1228px] mx-auto flex items-center lg:px-0 px-3 box-border">
          
          {/* Logo */}
          <div className="flex-shrink-0 w-40 h-10 mr-10">
            <Image
              src="/assets/haame-logo.png"
              alt="Haame Logo"
              width={160}
              height={40}
              className="w-full h-full"
            />
          </div>
          
          {/* Center Navigation */}
          <div className="flex-1 lg:flex hidden">
            <div className="mr-12 flex items-center">
              <span className="font-semibold text-base text-[#020f2c]">Products</span>
              <svg width="16" height="16" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-1">
                <path
                  d="M12.7671 6.5L8.76709 10.5L4.76709 6.5"
                  stroke="#333333"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="mr-12">
              <span className="font-semibold text-base text-[#020f2c]">Insights</span>
            </div>
            <div className="mr-12">
              <span className="font-semibold text-base text-[#020f2c]">Events</span>
            </div>
            <div className="mr-12">
              <span className="font-semibold text-base text-[#020f2c]">Ecosystem</span>
            </div>
            <div className="mr-12">
              <span className="font-semibold text-base text-[#020f2c]">About</span>
            </div>
            <div className="mr-12">
              <span className="font-semibold text-base text-[#020f2c]">Contact</span>
            </div>
          </div>
          
          {/* Mobile Menu */}
          <div className="flex-1 lg:hidden block text-right">
            <svg
              className="cursor-pointer inline-block"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
            >
              <path
                d="M170.666667 213.333333h682.666666v85.333334H170.666667V213.333333z m0 512h682.666666v85.333334H170.666667v-85.333334z m0-256h682.666666v85.333334H170.666667v-85.333334z"
                fill="#000"
              />
            </svg>
          </div>
          
          {/* Get Demo Button */}
          <div
            className="flex-shrink-0 w-[138px] h-10 border border-[#8f9dbd] box-border text-base font-semibold text-[#020f2c] leading-10 text-center rounded-xl cursor-pointer hidden lg:block"
            onClick={handleOpen}
          >
            Get a Demo
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="w-full max-w-[1228px] lg:h-[1104px] overflow-hidden h-auto box-border mx-auto relative lg:pt-[120px] pt-6">
        <div className="h-[76px] lg:text-[64px] text-[28px] font-semibold text-[#041433]">
          Leading CRM for
        </div>
        <div className="h-[86px] lg:text-[70px] text-[28px] font-semibold inline-block bg-gradient-to-r from-[#0154fc] to-[#4deeff] bg-clip-text text-transparent">
          Brokerages & Exchanges
        </div>
        <div className="w-full max-w-[784px] font-medium lg:text-[20px] text-[12px] text-[#656b8a] lg:mt-[26px] mt-3 lg:mb-6 mb-3 mx-auto text-center lg:px-0 px-3 box-border lg:leading-[1.5]">
          Create your own profit-sharing system —— # Forex CRM # PAMM # CopyTrading
        </div>
        <div className="w-full lg:max-w-[600px] max-w-full mx-auto lg:px-0 px-3 box-border">
          <GetDemoInput onOpen={handleOpen} />
        </div>
        
        {/* Product Image */}
        <div className="w-full lg:w-[1200px] h-0 mt-[88px] mx-auto pt-[52%] bg-no-repeat bg-contain bg-center"
             style={{
               backgroundImage: `url('/assets/首图产品展示.png')`
             }}>
        </div>
      </div>
      
      {/* Background Overlay */}
      <div className="absolute bottom-0 left-0 right-0 pt-[5%] bg-no-repeat bg-cover bg-center"
           style={{
             backgroundImage: `url('/assets/白色遮罩.png')`
           }}>
      </div>
    </div>
  );
}
