'use client';

import CollapseItem from '@/components/common/CollapseItem';
import TabSwitcher from '@/components/common/TabSwitcher';
import { useState } from 'react';
import { RrhRightArrow } from '@/components/icons/RrhRightArrow';
export function ProductsWeOfferSection() {
  const [activeTab, setActiveTab] = useState('CRM');
  const tabs = ['CRM', 'PAMM', 'Copy Trading'];
  const [activeAccordion, setActiveAccordion] = useState<number>(0);

  return (
    <div className="w-full lg:pb-[248px] pb-[124px]">
      <h2 className="text-[#0A0A0A] lg:text-4xl text-3xl leading-[40px] lg:w-[576px] w-full mx-auto font-[700] text-center">
        Short engaging headline
      </h2>
      <h3 className="mt-[24px] text-[#737373] lg:text-lg text-base leading-[28px] lg:w-[576px] w-full font-[400] text-center mx-auto">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit interdum
        hendrerit ex vitae sodales.
      </h3>
      <div className="flex justify-center mt-[44px] lg:mb-[72px] mb-[31px]">
        <TabSwitcher
          tabs={tabs}
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />
      </div>
      <div className="w-full flex justify-center">
        <div className="w-full lg:w-320">
          <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-[80px] gap-[12px]">
            <div className="px-[24px] py-[12px] lg:py-0 lg:px-0">
              <h3 className="text-[#0A0A0A] lg:text-xl text-lg font-[600] leading-[28px]">
                All-in-one CRM solution: Automate mid-backend operations, boost
                customer management efficiency, and drive revenue growth.
              </h3>

              <div className="mt-[8px]">
                {[
                  {
                    title: 'Basic Business',
                    content: [
                      'Dashboard: Comprehensive operational data statistics display board.',
                      'Wallet: Supports wallet system.',
                      'KYC: Built in Basci version KYC function, and can also directly use Sumsubs KYC verification service.',
                      'Customer follow-up: A complete customer follow-up system allows you to follow up on customers KYC, account opening, and deposits.',
                      'Customer tags: Allow customization of personalized tags based on customer information and behavior, combined with email and marketing functions, to operate customers from multiple dimensions.',
                    ],
                  },
                  {
                    title: 'IB Management',
                    content: [
                      'Customer Promotion Link: Through the link, promote customers and limit account opening groups and leverage.',
                      'Proxy promotion: Promote subordinate agents through links. In addition to restricting the opening of subordinate agents, it is also possible to control the scope of business conducted by subordinate agents.',
                    ],
                  },
                  {
                    title: 'Reports',
                    content: [
                      'Capital Report: Overview of wallet funds, trading account funds, and fund operations.',
                      'Trading Report: Overview of trading order data.',
                      'Commission Report: Trading rebates, handling fee rebates, and deposit rebates.',
                      'IB Report: Overview of IB business development and tracking of new IB customer business progress.',
                    ],
                  },
                  {
                    title: 'Rebates',
                    content: [
                      'Supports trading rebates, handling fee rebates, and deposit rebates.',
                      'Customizable multi-level rebates with support for various rebate models. Allows for the definition of groups and varieties, and supports un',
                      'Different agent business lines can set rebate parameters separately to ensure rebates.',
                    ],
                  },
                ].map((item, idx) => (
                  <CollapseItem
                    key={item.title}
                    title={item.title}
                    content={item.content}
                    open={activeAccordion === idx}
                    onToggle={() =>
                      setActiveAccordion(prev => (prev === idx ? -1 : idx))
                    }
                  />
                ))}
              </div>

              <button className="lg:mt-[52px] mt-[26px] bg-[#171717] px-[16px] py-[9px] flex gap-[8px] items-center rounded-[8px] cursor-pointer">
                <span className="text-[#FAFAFA] lg:text-sm text-xs font-[500] leading-[28px]">
                  read more
                </span>
                <RrhRightArrow />
              </button>
            </div>
            <div className="lg:block hidden w-[718px] h-[538px] bg-[url('/assets/首图产品展示.png')] bg-no-repeat bg-center bg-cover"></div>
            <div className="relative w-full lg:hidden block">
              <div className="pt-[calc(538/718*100%)]" />
              <div className="absolute inset-0 bg-[url('/assets/首图产品展示.png')] bg-no-repeat bg-center bg-cover"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
