'use client';

import Image from 'next/image';
import GetDemoInput from './GetDemoInput';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  // DropdownMenuLabel,
  // DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
interface ProductionNavProps {
  onOpen?: () => void;
}

export default function ProductionNav({ onOpen }: ProductionNavProps) {
  const handleOpen = () => {
    onOpen?.();
  };

  return (
    <div
      className="relative w-full pt-21 bg-white text-center lg:h-[1200px] h-auto box-border"
      style={{
        backgroundImage: `url('/assets/grid-bg.png'), url('/assets/首图背景.png')`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
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
              <DropdownMenu>
                <DropdownMenuTrigger className="font-semibold text-base text-[#020f2c] focus:outline-none flex items-center group">
                  Products
                  {ArrowSvg()}
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-[520px] p-[32px] border-0 rounded-[24px] bg-[#ffffff] box-show: 0px 11px 24px 0px #A1ADC91A">
                  <DropdownMenuItem className="bg-[#0154FC0D] rounded-[16px] pt-[16px] pr-[16px] pb-[38px] pl-[16px]">
                    <div className="w-[48px] h-[48px]">{MenuOne()}</div>
                    <div>
                      <span className="font-weight-[500] font-size[18px] text-align-left text-[#020f2c]">
                        CRM
                      </span>
                      <p className="text-sm text-[#656b8a] mt-1">
                        Full-process AutomationMulti-asset Smart Operations Hub
                      </p>
                    </div>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="pt-[16px] pr-[16px] pb-[38px] pl-[16px]">
                    <div className="w-[48px] h-[48px]">{MenuOne()}</div>
                    <div>
                      <span className="font-weight-[500] font-size[18px] text-align-left text-[#020f2c]">
                        CRM
                      </span>
                      <p className="text-sm text-[#656b8a] mt-1">
                        Full-process AutomationMulti-asset Smart Operations Hub
                      </p>
                    </div>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="pt-[16px] pr-[16px] pb-[38px] pl-[16px]">
                    <div className="w-[48px] h-[48px]">{MenuOne()}</div>
                    <div>
                      <span className="font-weight-[500] font-size[18px] text-align-left text-[#020f2c]">
                        CRM
                      </span>
                      <p className="text-sm text-[#656b8a] mt-1">
                        Full-process AutomationMulti-asset Smart Operations Hub
                      </p>
                    </div>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div className="mr-12">
              <span className="font-semibold text-base text-[#020f2c]">
                Insights
              </span>
            </div>
            <div className="mr-12">
              <span className="font-semibold text-base text-[#020f2c]">
                Events
              </span>
            </div>
            <div className="mr-12">
              <span className="font-semibold text-base text-[#020f2c]">
                Ecosystem
              </span>
            </div>
            <div className="mr-12">
              <span className="font-semibold text-base text-[#020f2c]">
                About
              </span>
            </div>
            <div className="mr-12">
              <span className="font-semibold text-base text-[#020f2c]">
                Contact
              </span>
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
          Create your own profit-sharing system —— # Forex CRM # PAMM #
          CopyTrading
        </div>
        <div className="w-full lg:max-w-[600px] max-w-full mx-auto lg:px-0 px-3 box-border">
          <GetDemoInput />
        </div>

        {/* Product Image */}
        <div
          className="w-full lg:w-[1200px] h-0 mt-[88px] mx-auto pt-[52%] bg-no-repeat bg-contain bg-center"
          style={{
            backgroundImage: `url('/assets/首图产品展示.png')`,
          }}
        ></div>
      </div>

      {/* Background Overlay */}
      <div
        className="absolute bottom-0 left-0 right-0 pt-[5%] bg-no-repeat bg-cover bg-center"
        style={{
          backgroundImage: `url('/assets/白色遮罩.png')`,
        }}
      ></div>
    </div>
  );
}

function ArrowSvg() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="ml-1 transition-transform duration-200 group-data-[state=open]:rotate-180"
    >
      <path
        d="M12.7671 6.5L8.76709 10.5L4.76709 6.5"
        stroke="#333333"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MenuOne() {
  return (
    <svg
      className="w-[48px] h-[48px]"
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" fill="white" />
      <path
        d="M36.28 29.1867C35.4318 31.1927 34.1051 32.9603 32.4158 34.3351C30.7266 35.7099 28.7264 36.6499 26.5899 37.0731C24.4535 37.4962 22.2459 37.3895 20.1602 36.7624C18.0745 36.1353 16.1742 35.0068 14.6254 33.4756C13.0766 31.9443 11.9264 30.057 11.2755 27.9786C10.6246 25.9002 10.4928 23.694 10.8915 21.5529C11.2902 19.4117 12.2073 17.4009 13.5627 15.6961C14.9181 13.9913 16.6705 12.6444 18.6667 11.7733M36 24C36.736 24 37.34 23.4013 37.2667 22.6693C36.9593 19.6082 35.6028 16.7476 33.4271 14.5724C31.2514 12.3973 28.3905 11.0414 25.3293 10.7347C24.596 10.6613 23.9987 11.2653 23.9987 12.0013V22.668C23.9987 23.0216 24.1392 23.3608 24.3892 23.6108C24.6392 23.8609 24.9784 24.0013 25.332 24.0013L36 24Z"
        stroke="#020F2C"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
