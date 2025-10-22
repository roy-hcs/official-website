'use client';

import Link from 'next/link';
import { RrhCommunication } from '@/components/icons/RrhCommunication';
import { RrhChevronDown } from '@/components/icons/RrhChevronDown';
import { RrhSocialMedia } from '@/components/icons/RrhSocialMedia';
import { RrhMenu } from '@/components/icons/RrhMenu';

import Image from 'next/image';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
export default function RrhHeader() {
  return (
    <>
      {/* pc */}
      <div className="w-full lg:block hidden sticky top-0 left-0 z-[99] bg-[linear-gradient(90deg,#4DEEFF_0%,#0DD1FC_11%,#0154FC_27%,#050818_66%)]">
        <div className="w-full flex justify-center">
          <div className="flex-1 flex h-11 items-center justify-between max-w-320">
            <div className="text-[#fff] text-base font-normal">
              Multi-asset Fintech service platform
            </div>
            <div className="flex gap-16 h-11">
              <div className="flex items-center gap-1">
                <RrhCommunication />
                <a
                  href="mailto:Navy@haame.com"
                  className="text-[#fff] text-sm font-normal"
                >
                  Navy@haame.com
                </a>
              </div>
              <div className="flex items-center gap-1">
                <RrhSocialMedia />
                <a
                  href="tel:+85264445635"
                  className="text-[#fff] text-sm font-normal"
                >
                  +852 64445635
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* mobile */}
      <div className="lg:hidden block w-full py-[12px] px-[24px] sticky top-0 left-0 z-[99] bg-[linear-gradient(90deg,#4DEEFF_0%,#0DD1FC_11%,#0154FC_27%,#050818_66%)]">
        <div className="text-[#fff] text-sm font-normal">
          Multi-asset Fintech service platform
        </div>
        <div className="flex items-center gap-1">
          <RrhCommunication />
          <a
            href="mailto:Navy@haame.com"
            className="text-[#fff] text-xs font-normal"
          >
            Navy@haame.com
          </a>
        </div>
        <div className="flex items-center gap-1">
          <RrhSocialMedia />
          <a
            href="tel:+85264445635"
            className="text-[#fff] text-xs font-normal"
          >
            +852 64445635
          </a>
        </div>
      </div>
      {/* pc */}
      <div className="w-full lg:block hidden sticky top-[44px] left-0 z-[99]">
        <div className="w-full flex justify-center h-17 py-4 bg-white/60 backdrop-blur-[31.3px]">
          <div className="flex-1 flex items-center justify-between max-w-320">
            <div className="flex items-center gap-6">
              <Link href="/">
                <Image
                  className="w-9 h-9"
                  src="/assets/Avatar.png"
                  alt="Haame Logo"
                  width={36}
                  height={36}
                />
              </Link>

              <div className="flex-1">
                <div className="flex">
                  <div className="px-4 py-2">
                    <DropdownMenu>
                      <DropdownMenuTrigger className="font-medium text-sm text-[#0a0a0a] focus:outline-none flex items-center group">
                        Products
                        <RrhChevronDown className="ml-2 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="w-[520px] p-[32px] border-0 rounded-[24px] bg-[#ffffff] [box-shadow:0px_11px_24px_0px_#A1ADC91A,0px_44px_44px_0px_#A1ADC917,0px_99px_59px_0px_#A1ADC90D,0px_176px_70px_0px_#A1ADC903,0px_275px_77px_0px_#A1ADC900]">
                        <DropdownMenuItem className="group hover:bg-[#0154FC0D] items-start rounded-[16px] pt-[16px] pr-[16px] pb-[38px] pl-[16px]">
                          <div className="grow-0 shrink-0 basis-[48px] h-[48px]"></div>
                          <div>
                            <Link
                              href="/products/forexCRM"
                              className="font-weight-[500] font-size[18px] text-align-left text-[#020f2c] group-hover:text-[#0154FC]"
                            >
                              Forex CRM
                            </Link>
                          </div>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="group hover:bg-[#0154FC0D] items-start rounded-[16px] pt-[16px] pr-[16px] pb-[38px] pl-[16px]">
                          <div className="grow-0 shrink-0 basis-[48px] h-[48px]"></div>
                          <div>
                            <Link
                              href="/products/copyTrading"
                              className="font-weight-[500] font-size[18px] text-align-left text-[#020f2c] group-hover:text-[#0154FC]"
                            >
                              Copytrading
                            </Link>
                          </div>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="group hover:bg-[#0154FC0D] items-start rounded-[16px] pt-[16px] pr-[16px] pb-[38px] pl-[16px]">
                          <div className="grow-0 shrink-0 basis-[48px] h-[48px]"></div>
                          <div>
                            <Link
                              href="/products/pamm"
                              className="font-weight-[500] font-size[18px] text-align-left text-[#020f2c] group-hover:text-[#0154FC]"
                            >
                              PAMM
                            </Link>
                          </div>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                  <div className="px-4 py-2">
                    <div className="font-medium text-sm text-[#0a0a0a]">
                      Insights
                    </div>
                  </div>
                  <div className="px-4 py-2">
                    <div className="font-medium text-sm text-[#0a0a0a]">
                      Events
                    </div>
                  </div>
                  <div className="px-4 py-2">
                    <div className="font-medium text-sm text-[#0a0a0a]">
                      About
                    </div>
                  </div>
                  <div className="px-4 py-2">
                    <div className="font-medium text-sm text-[#0a0a0a]">
                      Contact
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="py-2 px-4 rounded-md border border-[#E5E5E5] text-sm font-medium leading-5">
              Get A Demo
            </div>
          </div>
        </div>
      </div>
      {/* mobile */}
      <div className="lg:hidden block w-full sticky top-[76px] left-0 z-[99] py-[12px] px-[24px] bg-[#ffffff] text-right">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <RrhMenu />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>
              <Link href="/products/forexCRM">Forex CRM</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/products/copyTrading">Copytrading</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/products/pamm">PAMM</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </>
  );
}
