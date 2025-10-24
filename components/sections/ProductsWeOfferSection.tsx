'use client';

import { ReactNode } from 'react';
import { RrhRightArrow } from '@/components/icons/RrhRightArrow';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '../ui/button';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const TabContent = ({
  tab,
  title,
  desc,
  PcImg,
  MobileImg,
  link,
  mobileImgCls,
}: {
  tab: string;
  title: string;
  desc: string;
  PcImg: ReactNode;
  MobileImg: ReactNode;
  link: string;
  mobileImgCls?: string;
}) => {
  return (
    <TabsContent value={tab}>
      <div className="flex flex-col md:flex-row items-center gap-3  md:gap-10 relative md:h-[760px] ">
        {PcImg}
        <div className="basis-1/2 shrink-0 grow-0 p-3">
          <h2 className="lg:text-4xl text-3xl font-bold text-[#0a0a0a]">
            {title}
          </h2>
          <p className="lg:text-base text-sm text-[#737373] mt-[20px]">
            {desc}
          </p>
          <Button className="mt-10">
            <Link className="flex gap-2 items-center" href={link}>
              <span>Read More</span>
              <RrhRightArrow />
            </Link>
          </Button>
        </div>
        <div className="basis-1/2 shrink-0 grow-0 hidden md:block"></div>
        <div className={cn('relative w-full block md:hidden', mobileImgCls)}>
          {MobileImg}
        </div>
      </div>
    </TabsContent>
  );
};
export function ProductsWeOfferSection() {
  const tabs = ['CRM', 'PAMM', 'Copy Trading'];
  const tabsContent = [
    {
      tab: 'CRM',
      title: 'Flexibly adapt to multiple business scenarios',
      desc: 'Customize fields, processes and permissions to meet the needs of different teams and business lines.',
      PcImg: (
        <div className="absolute -z-1 inset-0 bg-[url('/assets/CRM/CRM_section2_product.png')] bg-no-repeat lg:bg-position-[340_center] hidden lg:block bg-[length:120%]"></div>
      ),
      MobileImg: (
        <div className="absolute -z-1 inset-0 bg-[url('/assets/CRM/CRM_section2_product.png')]  bg-no-repeat block lg:hidden bg-position-[-120_-20] bg-[length:200%]"></div>
      ),
      link: '/products/forex-CRM',
      mobileImgCls: 'h-100',
    },
    {
      tab: 'PAMM',
      title: 'Flexible Profit-Sharing & Commission Models',
      desc: 'Supports a multi-tier profit distribution structure, creating a transparent and sustainable income ecosystem. Fund managers, sales agents, and the platform share performance-based profits, commissions, and management fees — motivating all stakeholders for active participation and long-term collaboration.',
      PcImg: (
        <div className="absolute inset-x-0 -inset-y-[120px] -z-1 inset-0 bg-[url('/assets/PAMMSection3Product.png')] hidden md:block bg-position-[160%_0] bg-no-repeat bg-contain"></div>
      ),
      MobileImg: (
        <div className="absolute inset-0 -z-1 bg-[url('/assets/PAMMSection3Product.png')] block md:hidden bg-position-[-170_-200] bg-no-repeat bg-[length:170%]"></div>
      ),
      link: '/products/pamm',
      mobileImgCls: 'h-110',
    },
    {
      tab: 'Copy Trading',
      title: 'Flexible Copy Modes for Diverse Needs',
      desc: 'Supports multiple copy modes — fixed ratio, dynamic allocation, or custom risk settings. Traders can freely choose or create signal sources, catering to both beginners and professionals. Signal providers can publish strategies after platform approval to ensure operational control and transparency.',
      PcImg: (
        <div className="absolute -z-1 inset-0 bg-[url('/assets/CopyTrading/CopyTrading_section3_product.png')] bg-no-repeat lg:bg-position-[200_center] hidden lg:block bg-[length:100%]"></div>
      ),
      MobileImg: (
        <div className="absolute -z-1 inset-0 bg-[url('/assets/CopyTrading/CopyTrading_section3_product.png')]  bg-no-repeat block lg:hidden bg-position-[-260_-35] bg-[length:200%]"></div>
      ),
      link: '/products/copy-trading',
      mobileImgCls: 'h-100',
    },
  ];

  return (
    <div className="w-full lg:pb-20 pb-10">
      <h2 className="text-[#0A0A0A] lg:text-4xl text-3xl leading-[40px] lg:w-[576px] w-full mx-auto font-[700] text-center">
        Why choose us
      </h2>
      <h3 className="mt-6 text-[#737373] lg:text-lg text-base leading-[28px] lg:w-[576px] w-full font-[400] text-center mx-auto">
        10+ years of fintech & system development expertise. Military-grade
        security. Optimize operations, cut costs, and build multi-asset digital
        trading futures for financial institutions
      </h3>
      <div className="flex w-full md:w-[1280px] mx-auto flex-col gap-6">
        <Tabs defaultValue="CRM">
          <TabsList className="mt-4 md:mt-8 mb-5 md:mb-10 mx-auto">
            {tabs.map(item => (
              <TabsTrigger
                key={item}
                className="px-2 py-1 min-w-[131px] h-7.5"
                value={item}
              >
                {item}
              </TabsTrigger>
            ))}
          </TabsList>
          {tabsContent.map(item => {
            return (
              <TabContent
                key={item.tab}
                title={item.title}
                PcImg={item.PcImg}
                MobileImg={item.MobileImg}
                desc={item.desc}
                tab={item.tab}
                link={item.link}
                mobileImgCls={item.mobileImgCls}
              />
            );
          })}
        </Tabs>
      </div>
    </div>
  );
}
